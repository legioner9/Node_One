const connect_mdb = require('_/db');
console.log('connect_mdb new :: ', connect_mdb);

const app = require('_/app');
const conf = require('_/config');
const port = +conf.PORT;
connect_mdb.promise_mdb()
    .then(() => {
        console.log('Yess');
        app.listen(port, () => console.log(`Listening on ${port} port!)`));
    })
    .catch(e =>
        console.log(e));


