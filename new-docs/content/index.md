oso docs home

{{ range .Pages }}
<h3><a href="{{ .Permalink }}">{{ .Title }}</a></h1>
{{ end }}