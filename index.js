var recipes = {}


function updateObjectWithKeyAndValue(object, key, value) {
<<<<<<< HEAD
  var newObj = Object.assign({},object)
  newObj[key] = value
  return newObj
}

=======
  var newObj = object[key] = value
  return newObj
}

updateObjectWithKeyAndValue(recipes,'diary','milk')
console.log(recipes)
updateObjectWithKeyAndValue(recipes,'diary','cheese')
console.log(recipes)

>>>>>>> c32f3d0f1ee91eaf21b67245e42d5fcce185673f
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}


function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({},object)
  delete newObj[key]
<<<<<<< HEAD
  return newObj
=======
  return object
>>>>>>> c32f3d0f1ee91eaf21b67245e42d5fcce185673f
}


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

