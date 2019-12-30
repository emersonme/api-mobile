module.exports = function _fieldsToLower(obj) {
  const newObj = {}
  for (key in obj) {
    newObj[key.toLowerCase()] = obj[key]
  }
  return newObj
}
