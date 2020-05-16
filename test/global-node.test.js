/* eslint-disable no-undef */
const globalNode = require('../index');

describe('Testing global-node', () => {
  describe('Testing Global Instance With File', () => {
    test('Check Property Exists', () => {
      expect(globalNode.isPropertyExist('GLOBAL_TEST')).toBe(true);
    });
    test('Get Property', () => {
      expect(globalNode.getValue('GLOBAL_TEST')).toBe('TEST VALUE');
    });
    // set property
    globalNode.setProperty('SET_PROPS', 'PROPS');
    test('Get Property After Set', () => {
      expect(globalNode.getValue('SET_PROPS')).toBe('PROPS');
    });
    // delete property
    globalNode.setProperty('SET_PROPS2', 'PROPS2');
    globalNode.deleteProperty('SET_PROPS2');
    test('Delete Property After Set', () => {
      expect(() => { globalNode.getValue('SET_PROPS2'); }).toThrowError(Error);
    });

    test('Property Don\'t Exist', () => {
      expect(globalNode.isPropertyExist('SET_PROPS2')).toBe(false);
    });


    test('Property Do Exist', () => {
      expect(globalNode.isPropertyExist('SET_PROPS')).toBe(true);
    });

    test('List Property', () => {
      expect(globalNode.listProperty()).toStrictEqual(['GLOBAL_TEST', 'SET_PROPS']);
    });

    test('Get Property After Set', () => {
      // set property
      globalNode.emptyAll();
      globalNode.setProperty('SET_PROPS', 'PROPS');
      expect(globalNode.getValue('SET_PROPS')).toBe('PROPS');
    });
    // delete property
    globalNode.setProperty('SET_PROPS2', 'PROPS2');
    globalNode.deleteProperty('SET_PROPS2');
    test('Get After Delete Property', () => {
      expect(() => { globalNode.getValue('SET_PROPS2'); }).toThrowError(Error);
    });

    test('Delete Non existing Property', () => {
      expect(() => { globalNode.deleteProperty('SET_PROPS2'); }).toThrowError(Error);
    });

    test('Property Don\'t Exist', () => {
      expect(globalNode.isPropertyExist('SET_PROPS2')).toBe(false);
    });


    test('Property Do Exist', () => {
      expect(globalNode.isPropertyExist('SET_PROPS')).toBe(true);
    });

    test('List Property', () => {
      expect(globalNode.listProperty()).toStrictEqual(['SET_PROPS']);
    });
  });
});
