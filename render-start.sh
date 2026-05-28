#!/usr/bin/env bash
set -eu
cd "$(dirname "$0")"
echo "Starting NAUTK on PORT=${PORT:-3001}..."
exec node server/index.js
