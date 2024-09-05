para crear una pagina desde render
entrar a la pagina de render y en el panel dar click en 
    new
        web service
            conectar a git hub (buscar el repositorio del proyecto, tiene dos carpetas backend y frontend)
 
 va a desplegar una lista que hay que llenar y ver bien si hay que modificar los siguientes espacios
    language:node
    Root Directory: se pone el nombre de la carpeta que contiene el backend
    Build command: npm install (esto en caso de que se cuente con un package.json)
    start command: npm start

y presionar el boton de abajo 
    deploy web service

para desplegar la pagina frontend
es importante cambiar la ubicacion del url de donde se van a tomar los datos del backend 
en el archivo noteServices.js
    const baseURL=https://agenda-express-zkrz.onrender.com/api/notes

en la pagina principal de render    
    NEW 
        static site
y se llenan los siguientes campos:
    Root Directory: prueba_cors (la carpeta que contiene el vite)
    Build command: npm install; npm run build (build es para generar un dist)
    publish directory: dist


