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

# ELIMINAR HISTORIAL ACTUAL DE COMANDOS
* history - c

# SOBREESCRIBE EL HISTORIAL DE COMANDOS DESDE EL DISCO DURO
* history - w

# DIRECTORIO HISTORIAL DE COMANDOS
* C:\Users\TuNombreDeUsuario\.bash_history

# VER DIRECTORIO HISTORIAL DE COMANDOS
* echo $HISTFILE

# ELIMINA EL ARCHIVO DEL HISTORIAL DE COMANDOS
* rm -f ~/.bash_history && kill -9 $$

# VISUALIZAR LAS CARPETAS DEL DIRECTORIO ACTUAL
* ls

# VISUALIZAR LOS ARCHIVOS Y CARPETAS DEL DIRECTORIO ACTUAL, INCLUYENDO LOS QUE ESTEN OCULTOS
* ls -a

# PARA SABER EN QUE DIRECTORIO NOS ENCONTRAMOS
* pwd

# MOVERNOS ENTRE DIRECTORIOS
* cd

# RETROCEDER UN DIRECTORIO
* cd ..

# CREAR UNA CARPETA EN EL DIRECTORIO ACTUAL
* mkdir NombreDeLaCarpeta

# INICIALIZAR UN REPOSITORIO EN GIT
* git init

# VER EL ESTADO ACTUAL DE NUESTRO REPOSITORIO
* git status

# MODIFICAR EL NOMBRE DE LA RAMA PRINCIPAL A MAIN
* git branch -m main

# CARGAR TODOS LOS ARCHIVOS DEL DIRECTORIO
* git add .

# CARGAR ARCHIVOS ESPECÍFICOS
* git add index.html style.css game.js

# CONEXIÓN DE GIT CON EL REPOSITORIO
* git remote add origin LinkDelRepositorioDeGitHub

# CARGAR ARCHIVOS A LA RAMA MAIN DEL REPOSITORIO POR PRIMERA VEZ
* git push -u origin main

# CARGAR ARCHIVOS A LA RAMA MAIN DEL REPOSITORIO LAS PRÓXIMAS VECEZ
* git push

# CARGAR EL COMMIT DE LOS ARCHIVOS SELECCIONADOS
* git commit -m "Este es un commit"
