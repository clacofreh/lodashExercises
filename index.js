var _ = require('lodash');
var fp = require('lodash/fp');

// Uso de filter en lodash, a la función se le pasa la colección, luego el callback 
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];


 const filtrados =  _.filter(users, (x) => { return x.age >  38; });
 
 console.log(filtrados)

//Esta seria la salida del Join => a,b,c ----> se puede utilizar como separador
 const join = _.join(['a', 'b', 'c'],  ',');

 console.log(join)