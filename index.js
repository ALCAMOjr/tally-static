// index.js
const express = require('express');
const path = require('path');

const app = express();

// Le decimos a Express que sirva TODO lo que haya en la carpeta actual (./)
app.use(express.static(path.join(__dirname)));

// Si quisieras forzar solo index.html, bastaría con app.use(express.static(...))
// Pero al dejar “__dirname”, Express servirá index.html como raíz automáticamente.

// Puerto que asigna Railway a la variable de entorno PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor estático levantado y escuchando en el puerto ${port}`);
});

