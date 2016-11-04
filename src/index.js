const mock = require('../mock')
const sections = mock.split(',')
const values = sections.map(section => section.split(';'))

values.map(section => {
  console.log(section[0]);
  console.log(section[1]);
})

// console.log(values)
