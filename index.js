const connect_mdb = require('_/db');
console.log('connect_mdb new :: ', connect_mdb);

const app = require('_/app');
const conf = require('_/config');
const port = +conf.PORT;
connect_mdb.promise_mdb()
    .then((info) => {
        let base_i = {base_i_name_: info.name, base_i_host_: info.host, base_i_port_: info.port};
        console.log('info_int :: ', base_i);
        app.listen(port, () => console.log(`Listening on ${port} port!)`));
    })
    .catch(e => {
        console.log(e);
        process.exit(1);
    });


