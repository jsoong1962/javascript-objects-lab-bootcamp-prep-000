var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function updateObjectWithKeyAndValue(object, key, value) {
  var clone = Object.assign({}, object, {[key]:value});
  return clone;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  delete object[key] = value;
  return object;
}