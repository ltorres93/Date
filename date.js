var moment = require('moment');
var horaSalida = "2017-01-19 11:40";


	var horasalidaFullData = moment(horaSalida, "YYYY-MM-DD HH:mm");
	var horasalidaPrueba = moment(horaSalida, "YYYY-MM-DD HH:mm").format("YYYY-MM-DDTHH:mm");
    var horaSalidaISO = moment(horasalidaFullData).format("DD MMM HH:mm");

    var horaBoardingFullData = moment(horasalidaFullData).subtract(45, 'minutes');
    var horaBoardingISO = moment(horaBoardingFullData).format("DDMMM HH:mm"); 
    var horaBoarding =moment(horaBoardingFullData).format("HH:mm"); 

    var horaLlegadaFullData = moment(horasalidaFullData).add(1, 'hour').add(15, 'minutes');
    var horaLlegadaISO = moment(horaLlegadaFullData).format(); 
    var horaLlegada =moment(horaLlegadaFullData).format("HH:mm");

console.log (`La hora de salida es ${horaSalidaISO}`);
console.log (`La hora de salida es ${horasalidaPrueba}`);
console.log (`La hora de boarding es ${horaBoardingISO}`);
console.log (`La hora de boarding es ${horaLlegada}`);