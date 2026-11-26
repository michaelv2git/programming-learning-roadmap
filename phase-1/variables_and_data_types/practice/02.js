// const
// operadores aritméticos
// .toFixed
// declarar un variable const llamada TAX_RATE (0.16 (16%))
// declarar variable let llamada swordPrice (precio espada) (250.50)
// declarar variable let llamada quantity (cantidad de espadas) (3)
// calcular el subtotal
// calcular el total sumando el impuesto con el subtotal
// imprimir mostrando la cantidad comprada, el subtotal y el total

const TAX_RATE = 0.16;
let swordPrice = 250.50;
let quantity = 3;
let subtotal = swordPrice * quantity;
let iva = subtotal * TAX_RATE;
let total = subtotal + iva;
console.log(`Sumercé compró ${quantity} espadas por un subtotal de $${subtotal.toFixed(2)} con IVA de $${iva.toFixed(2)} y un total de $${total.toFixed(2)}.`);
