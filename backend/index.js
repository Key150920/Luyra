const express = require('express');
const app = require();
const cors = require('cors');
const routes = require('./routes/usuarios');


app.use(cors({origin: '*'}));
app.set('port',process.env.PORT || 4001);

app.use(express.json());

app.use('/api/usuarios',routes)


app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})