#!/bin/bash

# Configuración
SOLUTION_DIR="$PWD/TravelApp"  # Ajusta al directorio de tu solución
BACKEND_PROJECT="$SOLUTION_DIR/src/TravelApp.HttpApi.Host"
FRONTEND_DIR="$SOLUTION_DIR/angular"
DB_CONNECTION_STRING="Server=localhost,1433;Database=TravelApp;User Id=sa;Password=QqvGRhyQoN6CFcYY!;TrustServerCertificate=True"

# Aplicar migraciones
echo "Aplicando migraciones de Entity Framework..."
cd "$SOLUTION_DIR/src/TravelApp.EntityFrameworkCore" || { echo "No se encontró el directorio de EF Core"; exit 1; }
dotnet ef migrations add Initial --context TravelAppDbContext --output-dir Migrations
dotnet ef database update --connection "$DB_CONNECTION_STRING"

# Iniciar backend en segundo plano
echo "Iniciando el backend..."
cd "$BACKEND_PROJECT" || { echo "No se encontró el directorio del backend"; exit 1; }
dotnet run --no-build --urls "https://localhost:44321" &
BACKEND_PID=$!

# Iniciar frontend
if [ -d "$FRONTEND_DIR" ]; then
    echo "Instalando Angular CLI si no está instalado..."
    if ! command -v ng >/dev/null 2>&1; then
        sudo npm install -g @angular/cli
    fi
    echo "Instalando dependencias del frontend..."
    cd "$FRONTEND_DIR" || { echo "No se encontró el directorio del frontend"; exit 1; }
    npm install
    echo "Iniciando el frontend (Angular)..."
    ng serve --open &
    FRONTEND_PID=$!
else
    echo "No se encontró el directorio del frontend. Solo se ejecutará el backend."
fi

# Esperar a que los procesos terminen
wait $BACKEND_PID
[ -n "$FRONTEND_PID" ] && wait $FRONTEND_PID

echo "Aplicación detenida."