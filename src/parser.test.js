const parser = require('./index');
const mock = require('../mock')

test('mockfile parsed from parser function', () => {
  expect(parser(mock)).toEqual({ next: 4, last: 100, first: 1, prev: 2 })
})

test('handler error', () => {
  expect(() => { parser() }).toThrowError('str must be a string')

  expect(() => { parser('') }).toThrowError('str is a invalid string')
})
