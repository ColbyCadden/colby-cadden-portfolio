# One-click deploy: GitHub + Vercel
# Run from project root: powershell -ExecutionPolicy Bypass -File scripts/deploy.ps1

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $root

Write-Host "`n[1/4] Production build..." -ForegroundColor Cyan
npm.cmd run build
if ($LASTEXITCODE -ne 0) { throw "Build failed" }

Write-Host "`n[2/4] GitHub..." -ForegroundColor Cyan
gh auth status 2>$null
if ($LASTEXITCODE -ne 0) {
  Write-Host "Log into GitHub in your browser when prompted."
  gh auth login --hostname github.com --git-protocol https --web
}

$repo = "ColbyCadden/colby-cadden-portfolio"
$remoteUrl = "https://github.com/$repo.git"

if (-not (git remote get-url origin 2>$null)) {
  git remote add origin $remoteUrl
}

$repoExists = $false
try {
  gh repo view $repo 2>$null | Out-Null
  $repoExists = $LASTEXITCODE -eq 0
} catch {}

if (-not $repoExists) {
  Write-Host "Creating GitHub repo $repo ..."
  gh repo create colby-cadden-portfolio --public --source=. --remote=origin --push
} else {
  Write-Host "Pushing to $repo ..."
  git push -u origin main
}

Write-Host "`n[3/4] Vercel login (browser)..." -ForegroundColor Cyan
npx.cmd vercel@latest login

Write-Host "`n[4/4] Deploying to production..." -ForegroundColor Cyan
npx.cmd vercel@latest deploy --prod --yes

Write-Host "`nDone! Add your custom domain in the Vercel dashboard:" -ForegroundColor Green
Write-Host "  https://vercel.com/dashboard -> Project -> Settings -> Domains`n"
