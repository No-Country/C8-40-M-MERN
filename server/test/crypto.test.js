/* eslint-disable no-unused-vars */
import { assert } from 'chai';

import { describe, it } from 'mocha';

import connection from '../src/database/db.js';

import { encryptPassword, comparePassword } from '../src/helpers/crypto.js';

describe('HELPERS/CRYPTO.JS', () => {
  const password = 'userPass';
  const differentPassword = 'anotherUserPass';
  const hashedPassword = encryptPassword(password);
  const areSamePassword = comparePassword(password, hashedPassword);

  describe('encryptPassword function', () => {
    it('hashedPassword must be a string', () => {
      assert.typeOf(hashedPassword, 'string', 'hasedPassword must be a string');
    });
    it('hashedPassword must be different to original password', () => {
      assert.notEqual(password, hashedPassword, 'hashedPassword and password must be differents');
    });
  });

  describe('comparePassword function', () => {
    it('areSamePassword must be a boolean', () => {
      assert.typeOf(areSamePassword, 'boolean', 'areSamePassword must be a boolean');
    });
    it('comparePassword with a differentPassword must return false', () => {
      assert.strictEqual(
        comparePassword(differentPassword, hashedPassword),
        false,
        'comparePassword must return false'
      );
    });
  });
});
