// Este problema apareció en el certamen recuperativo 1 del segundo semestre de 2011 en el campus Vitacura.
// Una máquina de alimentos tiene productos de tres tipos, A, B y C, que valen respectivamente $270, $340 y $390. La máquina acepta y da de vuelto monedas de $10, $50 y $100.
// Escriba un programa que pida al usuario elegir el producto y luego le pida ingresar las monedas hasta alcanzar el monto a pagar. Si el monto ingresado es mayor que el precio del producto, el programa debe entregar las monedas de vuelto, una por una.
console.log("Hello world!");

confirm("Desea comprar un producto?")

let producto = prompt("Elije el producto que quieres:\n\n A\n B\n C\n ");

if (producto !== "A" && producto !== "B" && producto !== "C"){
    alert("Producto incorrecto, elige solo A, B o C");
}else{

    let precios ={
        A:270,
        B:340,
        C:390
    };

    let precioTotal = precios[producto];


    let monedasEntregadas = 0;
    while (monedasEntregadas < precioTotal){
        let moneda = prompt("Ingresa una moneda de 10, 50 o 100");
        if (moneda === "10" || moneda === "50" || moneda === "100"){
            moneda = moneda * 1;
            monedasEntregadas = (monedasEntregadas + moneda);
        }
    }
    
    let vueltos = (monedasEntregadas - precioTotal);
    let mensajeVT = "Sus vueltos son:\n";
    
    while (vueltos > 0){
        if (vueltos >= 100) {
            mensajeVT += "100\n";
            vueltos -= 100;
        } else if (vueltos >= 50) {
            mensajeVT += "50\n";
            vueltos -= 50;
        } else if (vueltos >= 10) {
            mensajeVT += "10\n";
            vueltos -= 10;
        }
    }
    alert(mensajeVT);
}