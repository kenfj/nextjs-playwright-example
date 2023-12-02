# Next.js Playwright Example

Next.js 14 Playwright Docker hello world sample

## Version Check

```bash
node --version
# v20.9.0

npm --version
# 10.2.4

corepack prepare pnpm@latest --activate

pnpm --version
# 8.11.0

sw_vers
# ProductName:		macOS
# ProductVersion:		13.6.1

code --version
# 1.84.2

docker --version
# Docker version 24.0.6, build ed223bc

docker-compose --version
# Docker Compose version v2.23.0-desktop.1
```

## Quick Start

* start dev server locally

```bash
pnpm install --frozen-lockfile

pnpm dev
# http://localhost:3000
```

* start standalone server locally

```bash
pnpm build
pnpm start
# http://localhost:3000
```

## Setup Next.js Project

```bash
# https://nextjs.org/docs/pages/api-reference/create-next-app
pnpm create next-app . --skip-git
```

## Setup Playwright

```bash
# https://playwright.dev/docs/intro#installing-playwright
pnpm create playwright
# Where to put your end-to-end tests? · tests
# Add a GitHub Actions workflow? (y/N) · true
# Install Playwright browsers (Y/n) · false

# install chromium only (skip firefox webkit)
pnpm exec playwright uninstall --all
pnpm exec playwright install chromium --with-deps

# run test
pnpm exec playwright test --project=chromium

# run specific file
pnpm exec playwright test example --project=chromium

# configure simple output for CI
CI=true pnpm exec playwright test --project=chromium

# start web server to show ./playwright-report/index.html
pnpm exec playwright show-report

# debug test
pnpm exec playwright test --ui
pnpm exec playwright test --debug
DEBUG=pw:webserver pnpm exec playwright test
DEBUG=pw:browser pnpm exec playwright test

# generate code
pnpm exec playwright codegen
```

## Docker Dev Server

* `start_devserver.sh`
  - http://localhost:3000/

```bash
# install packages
docker-compose run app pnpm install --frozen-lockfile

# run dev server
docker-compose up app -d
# http://localhost:3000/

# check
docker-compose ps
docker-compose logs app -f
```

* `start_e2e-test.sh` `start_e2e-report.sh`

```bash
# run test in existing app
docker-compose exec app pnpm exec playwright test --project=chromium
# run test in new app
docker-compose run --rm app pnpm exec playwright test --project=chromium
```

```bash
# run bash in existing container
docker-compose exec app bash
# run bash in new container
docker-compose run --rm app bash

# clean up
docker-compose down
```
