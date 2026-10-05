param([string]$Root = "C:\Users\owner\Desktop\levelup-clone", [int]$Port = 8080)

$types = @{
  '.html' = 'text/html; charset=utf-8'; '.css' = 'text/css; charset=utf-8'; '.js' = 'text/javascript; charset=utf-8'
  '.json' = 'application/json'; '.mp4' = 'video/mp4'; '.webm' = 'video/webm'; '.png' = 'image/png'
  '.jpg' = 'image/jpeg'; '.jpeg' = 'image/jpeg'; '.webp' = 'image/webp'; '.svg' = 'image/svg+xml'
  '.gif' = 'image/gif'; '.ico' = 'image/x-icon'; '.pdf' = 'application/pdf'; '.md' = 'text/plain; charset=utf-8'; '.txt' = 'text/plain; charset=utf-8'; '.xml' = 'application/xml'
  '.docx' = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "Serving $Root at http://localhost:$Port/"

$rootFull = [IO.Path]::GetFullPath($Root)
while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $req = $ctx.Request; $res = $ctx.Response
  try {
    $rel = [Uri]::UnescapeDataString($req.Url.AbsolutePath.TrimStart('/'))
    if ($rel -eq '') { $rel = 'index.html' }
    $path = [IO.Path]::GetFullPath((Join-Path $rootFull $rel))
    if (-not $path.StartsWith($rootFull) -or -not (Test-Path $path -PathType Leaf)) {
      $res.StatusCode = 404; $b = [Text.Encoding]::UTF8.GetBytes('Not found'); $res.OutputStream.Write($b, 0, $b.Length)
    } else {
      $ext = [IO.Path]::GetExtension($path).ToLower()
      $res.ContentType = if ($types[$ext]) { $types[$ext] } else { 'application/octet-stream' }
      $res.Headers['Cache-Control'] = 'no-store'
      $res.Headers['Accept-Ranges'] = 'bytes'
      $fs = [IO.File]::OpenRead($path)
      try {
        $len = $fs.Length; $start = 0; $end = $len - 1
        $range = $req.Headers['Range']
        if ($range -match '^bytes=(\d*)-(\d*)$') {
          if ($matches[1]) { $start = [long]$matches[1] }
          if ($matches[2]) { $end = [Math]::Min([long]$matches[2], $len - 1) }
          $res.StatusCode = 206
          $res.Headers['Content-Range'] = "bytes $start-$end/$len"
        }
        $res.ContentLength64 = $end - $start + 1
        $fs.Position = $start
        $buf = New-Object byte[] 65536; $left = $end - $start + 1
        while ($left -gt 0) {
          $n = $fs.Read($buf, 0, [Math]::Min($buf.Length, $left))
          if ($n -le 0) { break }
          $res.OutputStream.Write($buf, 0, $n); $left -= $n
        }
      } finally { $fs.Close() }
    }
  } catch { } finally { try { $res.Close() } catch { } }
}
