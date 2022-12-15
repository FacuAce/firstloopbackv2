# StoreLooback

Backend para administrar artículos, ya sea crearlos, modificarlos o eliminarlos, y también ver un listado de estos.

## Funcionamiento

Para que este funcione debe descargar las dependencias con el comando:

```sh
npm install
```

Para instalar solo dependencias resueltas en `package-lock.json`:

```sh
npm ci
```
Antes de correr la aplicación asegúrese de modificar las credenciales dentro de `src/datasources/mongo-db.datasource.ts` en la constante config con valores de una base de datos mongo local existente.

# # Correr la aplicación

Para iniciar la aplicación utilice el siguiente comando: 

```sh
npm start
```
