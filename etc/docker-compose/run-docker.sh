#!/bin/bash

# Define variables for paths
currentFolder=$(pwd)
slnFolder=$(dirname "$currentFolder")
certsFolder="$currentFolder/certs"

# Check if the certs folder exists, and create it if it doesn't
if [ ! -d "$certsFolder" ]; then
    mkdir -p "$certsFolder"
fi

# Check if the localhost.pfx certificate exists, and generate it if it doesn't
if [ ! -f "$certsFolder/localhost.pfx" ]; then
    echo "Generating HTTPS development certificate..."
    cd "$certsFolder" || exit
    dotnet dev-certs https -v -ep localhost.pfx -p "91f91912-5ab0-49df-8166-23377efaf3cc" -t
fi

# Navigate back to the original folder and start Docker Compose
cd "$currentFolder" || exit
docker compose up -d
