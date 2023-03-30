/Calcular el IVA de un valor Neto/
var valorNeto = prompt("Ingrese el monto neto para calcular IVA", 0)
const tasa = 0.19;;
let impuesto = valorNeto * tasa;
console.log("La valor del IVA es: " + impuesto);
