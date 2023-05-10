let estrato, servicio, KWh, cuenta;
cuenta = 0;
estrato = 0;
servicio = 0;
KWh = 0;
cuenta = prompt("Ingrese el número de cuenta");
estrato = prompt("Estrato socioeconómico");
servicio = prompt("Servicio \n1 Residencial. \n2 Comercial. \n3 Industrial");
KWh = prompt("Ingrese KWh Consumidos");
let valor;
if (KWh > 0 && KWh <= 150) {
  valor = 320.45 * KWh;
  console.log("Consumo", valor);
} else if (KWh > 150 && KWh <= 250) {
  valor = 450.75 * KWh;
  console.log("Consumo", valor);
} else if (KWh > 250 && KWh <= 350) {
  valor = 501.65 * KWh;
  console.log("Consumo", valor);
} else {
  valor = 600.5 * KWh;
  console.log("Consumo", valor);
}
let opc;
switch (parseInt(estrato)) {
  case 1: {
    opc = 13550;
    break;
  }
  case 2: {
    opc = 14280;
    break;
  }
  case 3: {
    opc = 15485;
    break;
  }
  case 4: {
    opc = 17090;
    break;
  }
  default: {
    opc = 19895;
  }
}
console.log(opc);

let Descuento;
switch (parseInt(servicio)) {
  case 1:
    Descuento = (valor + opc) * 0.3;
    break;
  case 2:
    Descuento = (valor + opc) * 0.27;
    break;
  case 3:
    Descuento = (valor + opc) * 0.18;
    break;
}
document.write=prompt("Total a Pagar", valor + opc - Descuento);
