const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/dos', async (req, res) => {
    const { ip, port } = req.query;
    try {
        const response = await axios.get(`http://${ip}:${port}`);
        res.json({ message: 'Conectado exitosamente', performance: [] });
    } catch (error) {
        res.json({ message: 'Error al conectar', performance: [] });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
