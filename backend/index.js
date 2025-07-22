const express = require('express');
const router = require('./routes');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000'
}));

router(app);

const port = process.env.PORT || 8081; // Alterando a porta para 8083
const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Please use a different port.`);
        process.exit(1);
    } else {
        throw err;
    }
});

module.exports = server;