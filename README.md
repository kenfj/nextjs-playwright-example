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
