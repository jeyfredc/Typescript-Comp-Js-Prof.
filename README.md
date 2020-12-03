# Typescript-Comp-Js-Prof.

## Tabla de contenido 

[Introducción](#Introducción)

[]()

[]()

[]()

[]()

[]()

[]()

[]()

[]()

[]()

[]()

[]()

[]()

[]()

[]()

## Introducción

**TypeScript** es un superset de JavaScript que añade tipado a nuestras variables y funciones.

En JavaScript no se hace esto, a una variable no hay que decirle que es un numero o que es una funcion o que una funcion regresa un objeto, etc.

TypeScript ayuda a detectar errores de forma temprana y mejorar el autocompletado, tambien mejorando toda la sintaxis para que el desarrollo sea mas agradable y seguro.

Ahora se debera instalar un servidor distinto a **liveserver** ya que este no es capaz de transpilar codigo TypeScript a JavaScript para eso se va a usar una herramienta llamada **parcel**

Como esto es una continuacion del [curso profesional de Js](https://github.com/jeyfredc/Profesional-Js#tabla-de-contenido) se puede clonar o copiar las carpetas que se tenian en el curso si se quiere empezar en un nuevo proyecto o continuar haciendolo sobre la carpeta del repositorio anterior.

Para instalar parcel abrir la consola y ubicacion del proyecto para usar npm 

`npm i -D parcel-bundler`

la `i` es de `install`, la bandera D `-D` quiere decir que este proyecto es solo para desarrollo. `parcel-bundler` cuando parcel se terminal de instalar lo que va a hacer es que va a reemplazar el script que inicia el servidor, anteriormente se estaba usando `liver-server` y ahora se va a usar parcel

A continuacion abrir el archivo **package.json** en el scripts esta live-server de esta forma

```
  "scripts": {
    "start": "live-server"
  },
```

reempĺazar "liver-server" por lo siguiente, donde estaran los html que parcel procese

```
  "scripts": {
    "start": "parcel index.html ejercicios/index.html ejercicios/**/*.html"
  },
```

Despues de las dependencias se añade una configuracion de `browserslist`, lo cual es una indicacion de cuales son los navegadores que se les va a brindar apoyo, en este caso se indica que sea la ultima version de Google Chrome `"last 1 Chrome version"`

```
{
  "name": "Curso-javascript-profesional",
  "version": "1.0.0",
  "description": "PlatziVideo",
  "license": "MIT",
  "author": "Jeyfred Calderon <jeyfredc@gmail.com>",
  "keywords": [
    "platzi"
  ],
  "scripts": {
    "start": "parcel index.html ejercicios/index.html ejercicios/**/*.html"
  },
  "devDependencies": {
    "live-server": "^1.2.1",
    "parcel-bundler": "^1.12.4"
  },
  "browserslist": [
    "last 1 Chrome version"
  ]
}

```

A continuacion guardar y en la consola se va a quitar live-server con el siguiente comando

`npm rm live-server`

Cuando ya se notifique que no esta live-server.

Ejecutar `npm start`

El nuevo servidor abrira en http://localhost:1234 pero si se pone solo no va a funcionar por tanto hay que darle la ruta asi http://localhost:1234/index.html

![assets-git/1.png](assets-git/1.png)

Dentro de la carpeta de **ejercicios** añadir una nueva carpeta que se llame **Typescript** y dentro de esta crear un archivo llamado **index.ts** la extension **ts** de **typescript** y tambien crear un archivo **index.html**

En **index.html** agregar lo siguiente

```
<html>
    <head>
        <title>TypeScript</title>
    </head>
    <body>
        <script src="/ejercicios/typescript/index.ts"></script>
    </body>
</html>
```

y cargar la ruta en el navegador al archivo que se acaba de crear es decir http://localhost:1234/ejercicios/typescript/index.html

Si aparece esta imagen lo que se debe hacer es desconectar del servidor

![assets-git/2.png](assets-git/2.png)

Dirigir a la terminal y con el teclado hacer **Ctrl + c**

Es comun que se tengan que borrar dos carpetas las cuales son **.cache** y **dist**

Para borrarlas en la terminal escribir `rm -rf .cache dist` y nuevamente iniciar el servidor con `npm start`

Despues de esto nuevamente regresar al navegador refrescarlo y ya debe aparecer la pantalla en blanco y a continuacion abrir la consola del navegador con **Ctrl + Shift + i**

![assets-git/3.png](assets-git/3.png)

En el archivo **index.ts** agregar la siguiente linea

`console.log('Hello World!')` -> hasta el momento esto es JavaScript y se imprime en la consola del navegador

La siguiente funcion ya tiene typescript porque se esta haciendo tipado y tanto `a` como a `b` se les esta indicando que son numeros

```
console.log('Hello World!')

function add (a: number,b: number){
    return a + b ;
}

const sum = add(4 , 6);

console.log(sum)

```

Esto es lo que se obtiene en el navegador

![assets-git/4.png](assets-git/4.png)