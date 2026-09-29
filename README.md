# AI LOTO Monitoring Documentation

This repository stores the public GitHub Pages documentation site for AI LOTO Monitoring.

Public entry points:

```text
/                         Documentation landing page
/usage-manual/             Latest AI LOTO Monitoring end-user manual
/manuals/ai-logo-monitoring/versions.html  Version selector
```

## Repository Layout

```text
.
|-- .github/workflows/deploy-pages.yml  GitHub Pages CI/CD workflow
|-- assets/site/                        Shared CSS and JavaScript for index pages
|-- manuals/ai-logo-monitoring/         Manual source files
|   |-- manifest.json                   Manual metadata and published versions
|   `-- versions/v1.0.0/                Prepared end-user manual pages and assets
|-- tools/Build-Site.ps1                Builds the publishable static site into _site/
`-- _site/                              Generated site output, ignored by Git
```

## Build Locally

```powershell
.\tools\Build-Site.ps1
```

Open `_site/index.html` in a browser to check the generated site.

## Publish

The GitHub Actions workflow deploys the generated static site to GitHub Pages when a `v*` tag is pushed or when the workflow is started manually.

Recommended release flow:

```bash
git add .
git commit -m "Add AI LOTO Monitoring documentation"
git push origin main
./tools/release-docs.sh
```

The release script reads the default tag from `manuals/ai-logo-monitoring/manifest.json` field `latest`.