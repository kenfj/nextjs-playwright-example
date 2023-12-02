#!/bin/bash

set -euxo pipefail

# run need service ports mapping
# https://blog.ikedaosushi.com/entry/2018/07/23/191952
docker-compose run --rm --service-ports app \
    pnpm exec playwright show-report --host 0.0.0.0
