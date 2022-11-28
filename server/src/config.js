import * as dotenv from 'dotenv';
dotenv.config();

export default {
  development: {
    port: process.env.PORT,
    jwtSec: process.env.JWT_SEC,
    passSec: process.env.PASS_SEC,
    mongoUri: process.env.MONGODB_URI,
    url: process.env.URL,
  },
};
