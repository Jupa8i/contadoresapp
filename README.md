
# ContadoresApp - Nuxt

Aplicación que permite agregar, ordenar y eliminar contadores de la lista.

![Logo](https://i.ibb.co/p0NpQqZ/nuxt-sm.png)

## Caracteristicas

- Nuxt3
- Vuex (localStorage, sessionStorage), Seguridad: datos encriptados
- SASS (CSS) compilado con node-sass en Google gloud
- Filters
- Helpers


## Filtros

- Operativos (menor que, menor o igual que, mayor que o maroy o igual que).
- Orden por atributo (nombre o número).
- Campo de búsqueda (nombre o número).

## Funcionalidades

- Crear contador.
- Borrar contador.
- Operar contador.
- Número máximo de contadores: 20.
- Limpiar LocalStorage(contadores) al cargar la pagina.
- Ningún contador puede ser menor a 0.
- Ningún contador puede ser mayor a 20.
- Validación nombre contador "requerido".
- Contadores en localstorage (VUEX).
- Filtros en sessionStorage (VUEX).

## Demo

[Demo](https://contadoresapp-rwaaqi4k7q-uc.a.run.app/)

## Screenshots

![App Screenshot](https://i.ibb.co/88jqmdn/desktop.jpg)
![App Screenshot](https://i.ibb.co/fNrrfMx/responsive.jpg)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

