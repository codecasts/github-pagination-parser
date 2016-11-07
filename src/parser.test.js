const parser = require('./parser');
const mock = require('../mock')

test('mockfile parsed from parser function', () => {
  expect(parser(mock)).toEqual({ next: 4, last: 100, first: 1, prev: 2 })
})
