# Proyecto Frutas

Proyecto para gestionar gestionar y comparar frutas utilizando un servicio rest.

## Contenido de la app
    - Comparador (página de inicio): Compara el precio y Kcal de dos frutas que puedes seleccionar de una lista. Si 'compras' la fruta se añadirá al carrito.

    - Zona privada (listado de frutas): Un listado en forma de tabla donde puedes ver todas las frutas, desde aquí puedes gestionar las frutas.

    - Formulario: Un formulario para crear, modificar o eliminar las frutas.

    - Login: Para acceder a la zona privada debes registrarte en la app. [Usuario de prueba](#usuario-de-prueba).


## Arrancar api-rest

Para arrancar el servicio rest se debe ejecutar el comando `json-server --watch db.json` en la carpeta raíz del proyecto.

## Arrancar la aplicación

Para arrancar la app se debe ejecutar el comando `ng serve -o` en la carpeta raíz del proyecto.

## Buscador
Para que funcione el buscador se debe instalar el módulo `Ng2SearchPipeModule`.

El comando es el siguiente `npm i ng2-search-filter --save`.

Se debe instalar en la carpeta raíz del proyecto.

## Usuario de prueba
Para acceder a la zona privada de la aplicación existe un usuario de prueba:
    - Nombre: **admin**
    - Password: **admin**

![Imagen de portada de la app](https://github.com/adriangarciasantos/proyecto-frutas/blob/master/src/assets/img/app-cover-img.PNG)


