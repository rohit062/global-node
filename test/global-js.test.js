/* eslint-disable no-undef */
const Globaljs = require('../index');

describe('Testing Global Instance With File', () => {
  describe('Testing Global Instance With File', () => {
    test('Check Property Exists', () => {
      expect(Globaljs.isPropertyExist('GLOBAL_TEST')).toBe(true);
    });
    test('Get Property', () => {
      expect(Globaljs.getValue('GLOBAL_TEST')).toBe('TEST VALUE');
    });
    // set property
    Globaljs.setProperty('SET_PROPS', 'PROPS');
    test('Get Property After Set', () => {
      expect(Globaljs.getValue('SET_PROPS')).toBe('PROPS');
    });
    // delete property
    Globaljs.setProperty('SET_PROPS2', 'PROPS2');
    Globaljs.deleteProperty('SET_PROPS2');
    test('Delete Property After Set', () => {
      expect(() => { Globaljs.getValue('SET_PROPS2'); }).toThrowError(Error);
    });
  });


  // describe('Testing Global Instance Without File', () => {
  //   test('', () => {
  //   });
  // });
});
