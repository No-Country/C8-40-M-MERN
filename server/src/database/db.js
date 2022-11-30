import { connect } from 'mongoose';

import config from '../config.js';

const { mongoUri } = config.development;

export default () => {
  const connection = () => {
    connect(mongoUri, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(new Error('( ͠° ͟ʖ ͡°) Connection error!'));
      } else {
        // eslint-disable-next-line no-console
        console.log('Successfull connection!');
      }
    });
  };
  connection();
};
