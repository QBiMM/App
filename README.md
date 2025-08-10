# App
Repositorio de la aplicación integradora

---

# Configuración del proyecto ABP

## Paquetes necesarios. A continuación se explica como instalar según el sistema operativo.

- **.NET SDK**  
- **Node.js y npm**  
- **(Opcional) Docker**  
  - [Docker Desktop](https://www.docker.com/products/docker-desktop)
- **OpenSSL**  
---

## Requisitos y configuración por sistema operativo

### Windows

1. **Instalar Chocolatey**  
   Abre PowerShell como administrador y ejecuta:

   ```powershell
   Set-ExecutionPolicy Bypass -Scope Process -Force; `
   [System.Net.ServicePointManager]::SecurityProtocol = `
   [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; `
   iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
   ```

2. **Instalar dependencias con Chocolatey**  
   ```powershell
   choco install nodejs
   choco install openssl.light
   choco install git
   ```

---

### Linux

Instala los paquetes necesarios:

```bash
sudo pacman -S git dotnet-sdk nodejs npm openssl        # Arch Linux
sudo apt-get install git dotnet-sdk nodejs npm openssl  # Ubuntu / Debian
sudo dnf install git dotnet-sdk nodejs npm openssl      # Fedora
sudo yum install git dotnet-sdk nodejs npm openssl      # CentOS / RHEL
sudo zypper install git dotnet-sdk nodejs npm openssl   # openSUSE
```

Si usas Arch Linux, probablemente necesites crear un contenedor con Docker para poder correr SQL Server. Por favor, siga las instrucciones:
https://docs.docker.com/desktop/setup/install/linux/archlinux/#install-docker-desktop.
Puede ser posible usar ```mssql-tools``` para SQL Server, pero no está testeado.

---


## Instalación local

Clona el repositorio y navega al directorio del proyecto:

```bash
git clone https://github.com/QBiMM/App
cd App
```

---

## Configuración de User Secrets

Configura una passphrase única para la encriptación, adaptada a tu sistema operativo.

### Para Windows (usando Git Bash)

Ejecuta lo siguiente en la terminal:

```bash
cd aspnet-core/src/App.HttpApi.Host

# Generar passphrase aleatoria
$PASSPHRASE = & openssl rand -base64 32

# Inicializar y establecer user-secrets para App.HttpApi.Host
dotnet user-secrets init
dotnet user-secrets set "StringEncryption:DefaultPassPhrase" $PASSPHRASE
```

### Para Linux (usando Git Bash)

Ejecuta lo siguiente en la terminal:

```bash
cd aspnet-core/src/App.HttpApi.Host

# Generar passphrase aleatoria
PASSPHRASE=$(openssl rand -base64 32)

# Inicializar y establecer user-secrets para App.HttpApi.Host
dotnet user-secrets init
dotnet user-secrets set "StringEncryption:DefaultPassPhrase" "$PASSPHRASE"
```

Si usas Arch Linux, también vas a tener que generar una conexión al contenedor con:
```bash
cd aspnet-core/src/App.HttpApi.Host
dotnet user-secrets set "ConnectionStrings:Default" "Server=localhost,1433;Database=App;User Id=sa;Password=PassWoRDSecreta123!;TrustServerCertificate=true"

cd ../App.DbMigrator
dotnet user-secrets init
dotnet user-secrets set "ConnectionStrings:Default" "Server=localhost,1433;Database=App;User Id=sa;Password=PassWoRDSecreta123!;TrustServerCertificate=true"
```
Nota: Asegúrese de exista una base de datos en SQL Server llamada "App" (si se llama distinto, puede cambiarlo en el comando). Revise que la contraseña tenga al menos 8 carácteres, con mayúsculas, minúsculas, números y símbolos. 

---

## Aplica las migraciones
Aseguráte de estar en la raíz del repositorio antes de ejecutar estos comandos.

```bash
cd aspnet-core/src/App.DbMigrator
dotnet run
```

## Ejecuta el backend
Esto va a ejecutar el host, y va quedar escuchando en: https://localhost:44366.

```bash
cd ../App.HttpApi.Host
dotnet run
```
