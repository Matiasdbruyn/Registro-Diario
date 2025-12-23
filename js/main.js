let registro = true

while (registro) {
    let nombre = prompt("Ingrese su nombre")
    let agua = prompt("Cuanta cantidad de agua tomo hoy? (en litros)")
    let entrenar = prompt("Ingrese las horas que entreno hoy")
    let dormir = prompt("Ingrese cuantas horas durmio")
    let frutas = prompt("Comio frutas hoy? (si/no)").toLowerCase()
    let verduras = prompt("Comio verduras hoy? (si/no)").toLowerCase()

    if (frutas == "si") {
        frutas = "comió frutas"
    } else {
        frutas = "no comió frutas"
    }

    if (verduras == "si") {
        verduras = "comió verduras"
    } else {
        verduras = "no comió verduras"
    }

    console.log(nombre + " tomo " + agua + " litros de agua y entreno " + entrenar + " hs. Durmio " + dormir + " hs, " + frutas + " y " + verduras)

    let confirmacion = prompt("Desea hacer otro registro? (si/no)").toLowerCase()
    if (confirmacion == "no"){
        registro = false
        console.log("Muchas gracias!");
    }
}

function dias(ayer, hoy) {
    let suma = ayer + hoy
    console.log(suma + " Litros de agua")
}

dias(4, 10)

const items =["hidratacion", "entreno", "descanso", "frutas", "verduras"]

items.push("alcohol")

let agregar= prompt("Ingrese otro dato que quisiera registrar")

items.push(agregar)

items.sort()

//console.log(items.join (" - "))

for (const item of items){
    console.log("Dato: "+ item)
}
