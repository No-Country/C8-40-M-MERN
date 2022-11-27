import { connect as _connect } from 'mongoose';

import config from '../config.js';

const { mongoUri } = config.development;

export default () => {
  const connect = () => {
    _connect(mongoUri, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(new Error('( ͠° ͟ʖ ͡°) Connection error!'));
      } else {
        // eslint-disable-next-line no-console
        console.log('Successfull connection!');
      }
    });
  };

  connect();
};
