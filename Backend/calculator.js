console.log("Helloword Node.js");

var params= process.argv.slice(2);

var numero1=parseFloat(params[0]);
var numero2=parseFloat(params[1]);

var planti=`
la suma es: ${numero1+numero2}
la resta es: ${numero1-numero2}


`;
console.log(planti);
