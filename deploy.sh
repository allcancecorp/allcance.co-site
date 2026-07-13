#!/bin/bash
set -e

cd /opt/allcance-site
git pull origin main
docker compose build --no-cache
docker compose up -d --force-recreate
docker image prune -f
echo "Deploy concluido: $(date)"
