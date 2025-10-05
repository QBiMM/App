#!/bin/bash

version=${1:-latest}

currentFolder="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
slnFolder="$currentFolder/../../"

echo "********* BUILDING DbMigrator *********"
dbMigratorFolder="$slnFolder/src/TravelApp.DbMigrator"
cd "$dbMigratorFolder"
dotnet publish -c Release
docker build -f Dockerfile.local -t qbimm/travelapp-db-migrator:$version .

echo "********* BUILDING Angular Application *********"
angularAppFolder="$slnFolder/../angular"
cd "$angularAppFolder"
yarn
npm run build:prod
docker build -f Dockerfile.local -t qbimm/travelapp-angular:$version .

echo "********* BUILDING Api.Host Application *********"
hostFolder="$slnFolder/src/TravelApp.HttpApi.Host"
cd "$hostFolder"
dotnet publish -c Release
docker build -f Dockerfile.local -t qbimm/travelapp-api:$version .

### ALL COMPLETED
echo "COMPLETED"
cd "$currentFolder"
