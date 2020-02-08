const json = '{"result":true, "count":42}';
//const message='{"data":"TH","bit":"1","temperature":"12","humidity":"90"}';  {} without ''alarm
//SyntaxError: Unexpected token o in JSON at position 1
const message='{"data":"TH","bit":"1","temperature":"12","humidity":"90"}';
const obj = JSON.parse(message);

console.log(obj.data);
// expected output: 42

console.log(obj.temperature);
// expected output: true