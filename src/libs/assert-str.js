const isString = str => typeof str === 'string'
const isEmpty = str => str.length === 0

const assertStr = str => {
  if (!isString(str)) {
    throw new Error('str must be a string')
  }

  if (isEmpty(str)) {
    throw new Error('str is a invalid string')
  }

  return str
}

module.exports = assertStr;
