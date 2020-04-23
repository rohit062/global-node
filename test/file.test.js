/* eslint-disable no-undef */
const { isFileExist } = require('../lib/file');

test('File Present', () => {
  expect(isFileExist(`${__dirname}/.env`)).toBe(true);
});

test('File Not Present', () => {
  expect(isFileExist('./.nofile')).toBe(false);
});
