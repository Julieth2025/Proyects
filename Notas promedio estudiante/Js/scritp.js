
let nota;
let nota1;
let nota2;
let nota3;
let nota4;
nota = parseInt(prompt("Ingrese 1° nota del estudiante"));
nota1 = parseInt(prompt("Ingrese 2° nota del estudiante"));
nota2 = parseInt(prompt("Ingrese 3° nota del estudiante"));
nota3 = parseInt(prompt("Ingrese 4° nota del estudiante"));
nota4 = parseInt(prompt("Ingrese 5° nota del estudiante"));

suma = nota + nota1 + nota2 + nota3 + nota4 ;

promedio = suma / 5;

if (promedio >= 10 && promedio <= 29) {
  document.write = prompt("Reprobado", promedio);

} 
else {
  promedio >= 30 && promedio <= 50;
  document.write= prompt("Aprobado", promedio);
}
