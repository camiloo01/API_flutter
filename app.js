require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const donadorRoutes = require('./routes/donadorRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/donadores', donadorRoutes);
this.donadoresPath = 'API_donador/donadores';

PORT = 3000;

mongoose.connect('mongodb+srv://camilocasas0625:camilo10@clusterapi.oitzbov.mongodb.net/fundacion', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}).catch(error => {
  console.error('Error de conexión a la base de datos:', error);
});