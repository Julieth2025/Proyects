 let intentos = 0;

while (intentos < 3) {
  let usuario = prompt("Nombre de Usuario o Correo");
  let contrasena = prompt("Contraseña");

  switch (true) {
    case usuario !== "abcdfg" || contrasena !== "123456":
      intentos++;
      alert("ERROR!! \nUsuario o Contraseña son incorrectos. \nIntente de nuevo.");
      break;
    default:
      alert("Inicio de sesión exitoso");
      intentos = 3;
      break;
  }
}

if (intentos === 3) {
  alert("ALERTA!!\nNúmero máximo de intentos fallidos. \n Usuario bloqueado.");
}

