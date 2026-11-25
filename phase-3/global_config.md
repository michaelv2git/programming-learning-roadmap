# VER LA VERSIÓN DE GIT Y SABER SI ESTÁ INSTALADO
* git --versión

# INGRESAR USUARIO Y CORREO
* git config --global user.name "michaelv2git"
* git config --global user.email "michaelhenaov2@gmail.com"

# QUITAR USUARIO Y CORREO
* git config --global --unset user.name "michaelv2git"
* git config --global --unset user.email "michaelhenaov2@gmail.com"

# CONFIGURAR POR DEFECTO EL EDITOR QUE USAMOS, EN ESTE CASO VISUAL STUDIO CODE
* git config --global core.editor "code --wait"

# ABRIR EL EDITOR
* git config --global -e

# CONFIGURAR LA NOMENCLATURA DE SI ES WINDOWS, LINUX O MAC
* WIN/LINUX: git config --global core.autocrlf true
* MAC: git config --global core.autocrlf input

# CONFIGURACIONES ESTABLECIDAS
* git config --global --list
