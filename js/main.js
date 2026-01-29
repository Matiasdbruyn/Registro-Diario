const catalogos = [
    { dia: ""},
    { frutas: false },
    { verduras: false },
    { entreno: 0 },
    { agua: 0 },
    { descanso: 0 },
]

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
            SiNo.textContent = "Sí"
        } else {
            SiNo.textContent = "No"
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

    sumar.addEventListener("click", clickSumar)
    function clickSumar() {
        contador++
        counter.innerHTML = contador
    }

    restar.addEventListener("click", clickRestar)
    function clickRestar() {
        contador--
        counter.innerHTML = contador
    }

    opcionesUno.appendChild(carta)

})

let botonNombre = document.getElementById("botonNombre")
let textInput = document.getElementById("text")
let contenedor = document.getElementById("uno")
let bienvenida = document.createElement("h2")

contenedor.appendChild(bienvenida)
botonNombre.addEventListener("click", clickNombre)
function clickNombre() {
    let nombreUsuario = textInput.value
    bienvenida.textContent = `Registro del día: ${nombreUsuario}`
}

let guardar = document.getElementById("guardar")

guardar.addEventListener("click", clickGuardar)
function clickGuardar() {
    localStorage.setItem("catalogos", JSON.stringify(catalogos))
}