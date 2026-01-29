let registroDelDia = {
    dia: "",
    frutas: false,
    verduras: false,
    entreno: 0,
    agua: 0,
    descanso: 0
}

const registros = [
    {
        img: "./img/manzana.png",
        nombre: "Frutas",
        texto: "¿Consumió Frutas?"
    },
    {
        img: "./img/brocoli.png",
        nombre: "Verduras",
        texto: "¿Consumió Verduras?"
    }
]

const cosas = [
    {
        img: "./img/pesa.png",
        nombre: "Entreno",
        texto: "¿Cuantas horas entreno?"
    },
    {
        img: "./img/agua.png",
        nombre: "Agua",
        texto: "¿Cuantos litros de agua consumió?"
    },
    {
        img: "./img/descanso.png",
        nombre: "Descanso",
        texto: "¿Cuantas horas descanso?"
    }
]

let opcionesUno = document.getElementById("registros")

registros.forEach(registro => {
    let card = document.createElement("div")
    card.className = "div"
    card.innerHTML = `<div class="contenedor">
                            <img src=${registro.img} alt="">
                            <h2>${registro.nombre}</h2>
                            <h3>${registro.texto}</h3>
                        </div>
                        <div class="imput">
                            <h2 class="SiNo">No</h2>
                            <input class="boton" type="checkbox">
                        </div>`

    const SiNo = card.querySelector(".SiNo")
    const boton = card.querySelector(".boton")

    boton.onchange = () => {
    if (boton.checked) {
        SiNo.innerHTML = "Sí"
        registroDelDia[registro.nombre.toLowerCase()] = true
    } else {
        SiNo.innerHTML = "No"
        registroDelDia[registro.nombre.toLowerCase()] = false
    }
}

    opcionesUno.appendChild(card)
})

cosas.forEach(cosa => {
    let carta = document.createElement("div")
    carta.className = "div"
    carta.innerHTML = `<div class="contenedor">
                            <img src=${cosa.img} alt="">
                            <h2>${cosa.nombre}</h2>
                            <h3>${cosa.texto}</h3>
                        </div>
                        <div class="imput">
                            <button class="menos">-</button>
                            <span class="counter">0</span>
                            <button class="mas">+</button>
                        </div>`

    const counter = carta.querySelector(".counter")
    const sumar = carta.querySelector(".mas")
    const restar = carta.querySelector(".menos")
    let contador = 0

    sumar.addEventListener("click", () => {
    contador++
    counter.innerHTML = contador
    registroDelDia[cosa.nombre.toLowerCase()] = contador
})

restar.addEventListener("click", () => {
    if (contador > 0) {
        contador--
        counter.innerHTML = contador
        registroDelDia[cosa.nombre.toLowerCase()] = contador
    }
})

    opcionesUno.appendChild(carta)

})

let botonNombre = document.getElementById("botonNombre")
let textInput = document.getElementById("text")
let contenedor = document.getElementById("uno")
let bienvenida = document.createElement("h2")

contenedor.appendChild(bienvenida)

botonNombre.addEventListener("click", () => {
    registroDelDia.dia = textInput.value
    bienvenida.textContent = `Registro del día: ${textInput.value}`
})

let guardar = document.getElementById("guardar")

guardar.addEventListener("click", () => {

    let catalogos = JSON.parse(localStorage.getItem("catalogos"))

    catalogos.push(registroDelDia)

    localStorage.setItem("catalogos", JSON.stringify(catalogos))
})
