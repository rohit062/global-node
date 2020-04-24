/* eslint-disable no-undef */
const Globaljs = require('../index');

describe('Testing Globaljs', () => {
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

    test('Property Don\'t Exist', () => {
      expect(Globaljs.isPropertyExist('SET_PROPS2')).toBe(false);
    });


    test('Property Do Exist', () => {
      expect(Globaljs.isPropertyExist('SET_PROPS')).toBe(true);
    });

    // test('List Property', () => {
    //   expect(Globaljs.listProperty()).toStrictEqual(['GLOBAL_TEST', 'SET_PROPS']);
    // });

    test('Get Property After Set', () => {
      // set property
      Globaljs.emptyAll();
      Globaljs.setProperty('SET_PROPS', 'PROPS');
      expect(Globaljs.getValue('SET_PROPS')).toBe('PROPS');
    });
    // delete property
    Globaljs.setProperty('SET_PROPS2', 'PROPS2');
    Globaljs.deleteProperty('SET_PROPS2');
    test('Get After Delete Property', () => {
      expect(() => { Globaljs.getValue('SET_PROPS2'); }).toThrowError(Error);
    });

    test('Delete Non existing Property', () => {
      expect(() => { Globaljs.deleteProperty('SET_PROPS2'); }).toThrowError(Error);
    });

    test('Property Don\'t Exist', () => {
      expect(Globaljs.isPropertyExist('SET_PROPS2')).toBe(false);
    });


    test('Property Do Exist', () => {
      expect(Globaljs.isPropertyExist('SET_PROPS')).toBe(true);
    });

    // test('List Property', () => {
    //   expect(Globaljs.listProperty()).toStrictEqual(['SET_PROPS']);
    // });
  });
});
