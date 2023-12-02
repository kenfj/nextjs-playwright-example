#!/bin/bash

set -euxo pipefail

# equivalent commands
# docker build -t todoapp-nextjs:latest -f ./Dockerfile.prod .
# docker run -p 3000:3000 --rm todoapp-nextjs:latest

docker-compose -f docker-compose_prod.yml build

# run need service ports mapping
# https://blog.ikedaosushi.com/entry/2018/07/23/191952
docker-compose -f docker-compose_prod.yml run --rm --service-ports app
