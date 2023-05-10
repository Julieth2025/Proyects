let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
let votoblanco = 0;
let siVotan = 0;
let n = prompt("Ingrese la cantidad de personas a realizar la encuesta");

for (let i = 0; i < n; i++) {
  let votara = prompt(`¿Desea votar ${i + 1}? (SI/NO)`);
  
  if (votara.toUpperCase() === "SI") {
    siVotan++;
    let candidatos = prompt("Elija el candidato presidencial a votar. \n 1.Juan Ramiro \n 2.Pablo Perez \n 3.Emilio Vazquez");
    
    switch (candidatos) {
      case "1":
        candidato1++;
        break;
      case "2":
        candidato2++;
        break;
      case "3":
        candidato3++;
        break;
      default:
        alert("ERROR \nElija una opción");
        i--;
        break;
    }
  } else if (votara.toUpperCase() === "NO") {
    votoblanco++;
  } else {
    alert("ERROR \nIngrese la opción");
    i-candidato
  }
}
let totalVotantes = siVotan + votoblanco;
let pcvotoblanco = (votoblanco / totalVotantes) * 100;
let pcPartido1 = (candidato1 / siVotan) * 100;
let pcPartido2 = (candidato2 / siVotan) * 100;
let pcPartido3 = (candidato3 / siVotan) * 100;

alert(`Resultados de las encuestas:
- Candidato 1: ${candidato1} votos (${pcPartido1.toFixed(2)}%)
- Candidato 2: ${candidato2} votos (${pcPartido2.toFixed(2)}%)
- Candidato 3: ${candidato3} votos (${pcPartido3.toFixed(2)}%)
- Voto en Blanco: ${votoblanco} personas (${pcvotoblanco.toFixed(2)}%)
- Personas que votaron: ${siVotan} personas (${((siVotan / totalVotantes) * 100).toFixed(2)}%)`);

// Encontrar el partido con más votos
let partidoGanador = "";
let maxVotos = Math.max(candidato1, candidato2, candidato3);

if (maxVotos === candidato1) {
  partidoGanador = "Partido 1";
} else if (maxVotos === candidato2) {
  partidoGanador = "Partido 2";
} else if (maxVotos === candidato3) {
  partidoGanador = "Partido 3";
}
alert(`El partido con más votos es ${partidoGanador}`);
