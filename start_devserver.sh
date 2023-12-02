#!/bin/bash

set -euxo pipefail

# equivalent to pnpm dev
docker-compose up app -d
docker-compose logs -f
