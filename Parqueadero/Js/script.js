function calcularTiempoTranscurrido(horaEntrada, horaSalida) {
    const milisegundoPorMinuto = 60000;
    const tiempoTranscurrido = horaSalida - horaEntrada;
    return Math.round(tiempoTranscurrido / milisegundoPorMinuto);
  }
  let tipo = prompt("Ingrese el tipo de vehículo");
  let placa = prompt("Ingrese su placa");
  let horaEntrada = new Date(
    prompt(
      "Ingrese la fecha (AAAA/MM/DD), Ingrese la hora de entrada (hora militar)"
    )
  );
  
  let horaSalida = new Date(
    prompt(
      "Ingrese la fecha (AAAA/MM/DD), Ingrese la hora de salida (hora militar)"
    )
  );
  let tiempoTranscurrido = calcularTiempoTranscurrido(horaEntrada, horaSalida);
  let montoAPagar = tiempoTranscurrido * 100;

  let valorIngresado = parseInt(
    prompt(`Su vehículo tipo\n ${tipo} \nPlaca\n ${placa} \n Tiempo de permanencia\n ${tiempoTranscurrido} minutos \n Costo a pagar es de ${montoAPagar} \n Favor ingrese el monto a pagar`) );
  
  let devolucionDinero = montoAPagar - valorIngresado;
  
  if (devolucionDinero < montoAPagar) {
    alert(`sus vueltas son${devolucionDinero}`);
  } else {
    alert(`falta ${devolucionDinero} por pagar`);
  }