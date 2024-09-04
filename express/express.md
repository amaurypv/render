para iniciar un proyecto primero se tiene que hacer un init desde npm desde la carpeta 
que se quiere iniciar el proyecto
    npm init
se crea un archivo index.js que debe de estar en el archivo package js 
en la parte start y debe de tener el mismo nombre por ejemplo: node index.js
la parte de node al principio debe de ponerse de forma manual 

despues se instala express
    npm install express 

para que pueda ejecutarse el servidor cada vez que se guarde el archivo express
es importante que se instale desde dev ya que asi se esta actualizando cada vez
que se guarde un archivo
    npm install --save -dev  nodemon
para ejecutarlo 
    node_modules/.bin/nodemon index.js

para que solo se ejecute de manera mas facil en el apartado de scripts desde package.js
agregar:
    "dev":"nodemon index.js",
 ahora si para ejecutar de manera mas facil solo poner en la terminal 
 npm run dev