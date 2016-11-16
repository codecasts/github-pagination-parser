const exec = (rx, str) => rx.exec(str)
const makeExec = rx => str => exec(rx, str)
const rxPage = makeExec(/[?|&]page=(\d+)/)
const rxRel = makeExec(/rel="(.+)"/)

module.exports = { rxPage, rxRel }
