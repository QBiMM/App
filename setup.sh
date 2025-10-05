#!/bin/bash

# ===============================
# Instalación de Dependencias
# ===============================

# Cargar información de /etc/os-release
if [ -f /etc/os-release ]; then
    . /etc/os-release
else
    echo "No se encontró /etc/os-release. No se puede determinar la distribución."
    exit 1
fi

# Usar la variable ID para el nombre de la distribución (en minúsculas para consistencia)
DISTRO=${ID}

# Usar case para manejar diferentes distribuciones
case $DISTRO in
    ubuntu)
        echo "Distribución detectada: Ubuntu, versión $VERSION_ID"
        # Docker
        sudo apt-get update
        sudo apt-get install -y ca-certificates curl
        sudo install -m 0755 -d /etc/apt/keyrings
        sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
        sudo chmod a+r /etc/apt/keyrings/docker.asc
        echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
        sudo apt-get update
        sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
        # Paquetes necesarios
        sudo apt-get install -y nodejs npm openssl
        ;;
    debian)
        echo "Distribución detectada: Debian, versión $VERSION_ID"
        # Docker
        sudo apt-get update
        sudo apt-get install -y ca-certificates curl
        sudo install -m 0755 -d /etc/apt/keyrings
        sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
        sudo chmod a+r /etc/apt/keyrings/docker.asc
        echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
        sudo apt-get update
        sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
        #Paquetes necesarios
        sudo apt-get install -y nodejs npm openssl
        ;;
    centos)
        echo "Distribución detectada: CentOS, versión $VERSION_ID"
        # Docker
        sudo yum install -y yum-utils
        sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
        sudo yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
        sudo systemctl start docker
        sudo systemctl enable docker
        #Paquetes necesarios
        sudo yum install -y nodejs npm openssl git
        ;;
    fedora)
        echo "Distribución detectada: Fedora, versión $VERSION_ID"
        # Docker
        sudo dnf update
        sudo dnf -y install dnf-plugins-core
        sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
        sudo dnf install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
        sudo systemctl start docker
        sudo systemctl enable docker
        #Paquetes necesarios
        sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
        sudo wget -O /etc/yum.repos.d/microsoft-prod.repo https://packages.microsoft.com/config/fedora/40/prod.repo
        sudo dnf install -y dotnet-sdk-9.0 nodejs npm openssl git
        ;;
    arch)
        echo "Distribución detectada: Arch, versión $VERSION_ID"
        #Docker
        sudo pacman -Syu
        sudo pacman -S --needed docker
        sudo systemctl start docker
        sudo systemctl enable docker
        #Paquetes necesarios
        sudo pacman -S --needed dotnet-sdk nodejs npm openssl git
        ;;
    *)
        echo "Distribución no reconocida: $DISTRO"
        echo "Por favor, revise como instalar manualmente los siguientes paquetes en su distro:"
        echo "Docker. Dotnet-SDK. NodeJS. NPM. OpenSSL. Git."
        exit 1
        ;;
esac

# ==============================================
# Instalación de ABP y configuración de EXPORT
# ==============================================

dotnet tool install -g Volo.Abp.Studio.Cli

# Agregar la línea al archivo de configuración, si no existe
case $SHELL in
    */bash)
        # Bash: Intentar con ~/.profile o ~/.bash_profile
        if [ -f "$HOME/.bash_profile" ]; then
            CONFIG_FILE="$HOME/.bash_profile"
        else
            CONFIG_FILE="$HOME/.profile"
        fi
        ;;
    */zsh)
        # Zsh: Usar ~/.zshrc o ~/.zprofile
        CONFIG_FILE="$HOME/.zshrc"
        ;;
    */fish)
        # Fish: Usar ~/.config/fish/config.fish
        CONFIG_FILE="$HOME/.config/fish/config.fish"
        echo 'set -gx PATH $PATH $HOME/.dotnet/tools' >> "$CONFIG_FILE"
        source "$CONFIG_FILE" 2>/dev/null || true
        exit 0  # Salir porque Fish usa una sintaxis diferente
        ;;
    *)
        # Por defecto, usar ~/.profile
        CONFIG_FILE="$HOME/.profile"
        ;;
esac

# Agregar la línea al archivo de configuración, si no existe
if ! grep -q 'export PATH="$PATH:$HOME/.dotnet/tools"' "$CONFIG_FILE"; then
    echo 'export PATH="$PATH:$HOME/.dotnet/tools"' >> "$CONFIG_FILE"
fi

# Aplicar el cambio en la sesión actual
source "$CONFIG_FILE"

# ===============================
# Instalación de librerías de ABP
# ===============================

abp install-libs

# ===============================
# Configuración de directorios
# ===============================
currentFolder="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
certsFolder="$currentFolder/certs"

# Crear directorio de certificados si no existe
if [ ! -d "$certsFolder" ]; then
    mkdir -p "$certsFolder"
fi

# Generar certificado si no existe
if [ ! -f "$certsFolder/localhost.pfx" ]; then
    cd "$certsFolder" || exit
    dotnet dev-certs https -v -ep localhost.pfx -p 91f91912-5ab0-49df-8166-23377efaf3cc -t
fi

# ===============================
# Configuración de SQL Server
# ===============================
CONTAINER_NAME="travelapp_sqlserver"
MSSQL_SA_PASSWORD="QqvGRhyQoN6CFcYY!"
DB_NAME="TravelApp"

# Verificar si el contenedor ya existe
if [ "$(docker ps -a -q -f name=$CONTAINER_NAME)" ]; then
    echo "Contenedor '$CONTAINER_NAME' ya existe. Iniciando..."
    docker start "$CONTAINER_NAME"
else
    echo "Creando contenedor '$CONTAINER_NAME'..."
    docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=$MSSQL_SA_PASSWORD" \
        -p 1433:1433 --name "$CONTAINER_NAME" -d mcr.microsoft.com/mssql/server:2022-latest
fi

# ===============================
# Esperar a que SQL Server esté listo
# ===============================
echo "Esperando a que SQL Server esté listo..."
until docker exec "$CONTAINER_NAME" /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P "$MSSQL_SA_PASSWORD" -Q "SELECT 1" &> /dev/null
do
    sleep 2
done
echo "SQL Server listo."

# ===============================
# Crear base de datos si no existe
# ===============================
docker exec "$CONTAINER_NAME" /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P "$MSSQL_SA_PASSWORD" -Q "
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = N'$DB_NAME')
BEGIN
    CREATE DATABASE $DB_NAME;
    PRINT 'Base de datos $DB_NAME creada.';
END
ELSE
BEGIN
    PRINT 'Base de datos $DB_NAME ya existe.';
END
"

echo "¡Todo listo! Puede ejecutar el backend/frontend"
