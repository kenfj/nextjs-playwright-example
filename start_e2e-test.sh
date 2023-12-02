#!/bin/bash

set -euxo pipefail

docker-compose run --rm app \
    pnpm exec playwright test --project=chromium
