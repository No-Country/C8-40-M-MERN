import { connect as _connect } from 'mongoose';
import config from '../config.js';

const mongoUri = config.development.mongoUri

export default () => {
  const connect = () => {
    _connect(mongoUri, (err) => {
      if (err) {
        console.log('DB: ERROR !!');
      } else {
        console.log('Conexion correcta!!');
      }
    });
  };

  connect();
};
