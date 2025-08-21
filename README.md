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

Si usas Arch Linux o Fedora, probablemente necesites crear un contenedor con Docker para poder correr SQL Server. Por favor, siga las instrucciones:
https://docs.docker.com/desktop/setup/install/linux/archlinux/#install-docker-desktop.
> **Nota:** algunos usuarios reportaron no poder instalar ```dotnet-sdk``` en Fedora directamente desde el gestor de paquetes nativo:

Según la documentación oficial de Microsoft, alcanza con:
```bash
sudo dnf install dotnet-sdk-9.0
```
https://learn.microsoft.com/en-us/dotnet/core/install/linux-fedora?tabs=dotnet9

Pero si esto no funciona, puedes registrar las claves GPG y agregar el repositorio:
```bash
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo wget -O /etc/yum.repos.d/microsoft-prod.repo https://packages.microsoft.com/config/fedora/40/prod.repo
sudo dnf install dotnet-sdk-9.0
```

---


# Instalación local

## Clona el repositorio y navega al directorio del proyecto:

```bash
git clone https://github.com/QBiMM/App
cd App
```
---

## Instala el CLI del framework ABP y exporta 
```bash
dotnet tool install -g Volo.Abp.Cli
```
> **Nota:** Probablemente debas agregar la variable global PATH a tu .bashrc o .zshrc (o también en la terminal, pero en ese caso sería temporal):

### Linux
```bash
export PATH="$PATH:$HOME/.dotnet/tools"
```
### Windows
> **Nota:** si quieres agregarla temporalmente solo usa 1
```powershell
# 1 - Agrega para la sesión actual
$dotnetTools = "$env:USERPROFILE\.dotnet\tools"
if (-not ($env:Path -like "*$dotnetTools*")) { $env:Path += ";$dotnetTools" }

# 2 - Guarda el cambio de forma permanente para tu usuario
[System.Environment]::SetEnvironmentVariable("Path", $env:Path, "User")

# 3 - Verifica
$env:Path -split ';' | ? { $_ -like "*\.dotnet\tools" }
```
## Instala las librerias que necesita ABP:
```bash
abp install-libs
```

## Ingresa a la carpeta "angular" e instala dependencias:
```bash
cd angular
npm install @abp/utils@7.4.5 --legacy-peer-deps
cd ..
```

## Configuración de User Secrets

Configura una passphrase única para la encriptación, adaptada a tu sistema operativo. ESTE PASO ES OPCIONAL.

### Para Windows:

Ejecuta lo siguiente en la terminal:

```bash
cd aspnet-core/src/App.HttpApi.Host

# Generar passphrase aleatoria
$PASSPHRASE = & openssl rand -base64 32

# Inicializar y establecer user-secrets para App.HttpApi.Host
dotnet user-secrets init
dotnet user-secrets set "StringEncryption:DefaultPassPhrase" $PASSPHRASE
```

### Para Linux:

Ejecuta lo siguiente en la terminal:

```bash
cd aspnet-core/src/App.HttpApi.Host

# Generar passphrase aleatoria
PASSPHRASE=$(openssl rand -base64 32)

# Inicializar y establecer user-secrets para App.HttpApi.Host
dotnet user-secrets init
dotnet user-secrets set "StringEncryption:DefaultPassPhrase" "$PASSPHRASE"
```

Si usas Arch o Fedora (o cualquier distro no nativamente compatible con SQL Server), también vas a tener que generar una conexión al contenedor con:
```bash
cd aspnet-core/src/App.HttpApi.Host

# Establecer la cadena de conexión de la base de datos
dotnet user-secrets set "ConnectionStrings:Default" "Server=localhost,1433;Database=App;User Id=sa;Password=PassWoRDSecreta123!;TrustServerCertificate=true"

# Configurar URLs y CORS 
dotnet user-secrets set "App:SelfUrl" "https://<SU_IP_PUBLICA>:44366"
dotnet user-secrets set "App:ClientUrl" "https://<SU_IP_PUBLICA>:4200"
dotnet user-secrets set "App:CorsOrigins" "https://<SU_IP_PUBLICA>:4200"

cd ../App.DbMigrator
dotnet user-secrets init

# Establecer la cadena de conexión de la base de datos
dotnet user-secrets set "ConnectionStrings:Default" "Server=localhost,1433;Database=App;User Id=sa;Password=PassWoRDSecreta123!;TrustServerCertificate=true"

# Configurar URLs y CORS 
dotnet user-secrets set "App:SelfUrl" "https://<SU_IP_PUBLICA>:44366"
dotnet user-secrets set "App:ClientUrl" "https://<SU_IP_PUBLICA>:4200"
dotnet user-secrets set "App:CorsOrigins" "https://<SU_IP_PUBLICA>:4200"
```
> **Nota:** Asegúrese de exista una base de datos en SQL Server llamada "App" (si se llama distinto, puede cambiarlo en el comando). Revise que la contraseña tenga al menos 8 carácteres, con mayúsculas, minúsculas, números y símbolos.  

> **Nota:** Asegúrese de reemplazar `<SU_IP_PUBLICA>` por la IP pública o dominio de su servidor.

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
dotnet run --urls "http://0.0.0.0:44366"
```

## Ejecuta el frontend
Con esto ejecutamos Angular: http://localhost:4200

```bash
cd ../../../angular/
npm start -- --host 0.0.0.0 --ssl true --ssl-cert ../../angular-ssl-keys/angular-ssl.crt --ssl-key ../../angular-ssl-keys/angular-ssl.key
```
> **Nota:** Asegúrate de cambiar el valor de los argumentos --ssl-cert y --ssl-key con la rutas de tu certificado y llave ssl

Si algo falla, es recomendable que ejecutes el siguiente comando en la carpeta base "App": 
```bash 
dotnet build```
