var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://hamilton.eyde.me');

var i = 0;


var options = {
  refresh: 1000, //milliseconds
  timeout: 1000 //milliseconds
};
console.log('STARTING');
matrix.init('temperature', options).then(function(data){
  console.log('T>>>>>>>>', data);
  client.publish('matrix/uno/temperature', JSON.stringify(data)); 
});

matrix.init('uv', options).then(function(data){
  console.log('U>>>>>>>>', data);
  client.publish('matrix/uno/uv', JSON.stringify(data)); 
});

matrix.init('humidity', options).then(function(data){
  console.log('H>>>>>>>>', data);
  client.publish('matrix/uno/humidity', JSON.stringify(data)); 
});

matrix.init('pressure', options).then(function(data){
  console.log('P>>>>>>>>', data);
  client.publish('matrix/uno/pressure', JSON.stringify(data)); 
});


