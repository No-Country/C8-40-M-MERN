import { connect as _connect } from 'mongoose';
import { config } from 'dotenv';
config();

const MONGODB_URI = process.env.MONGODB_URI;

export default () => {
  const connect = () => {
    _connect(MONGODB_URI, (err) => {
      if (err) {
        console.log('DB: ERROR !!');
      } else {
        console.log('Conexion correcta!!');
      }
    });
  };

  connect();
};
