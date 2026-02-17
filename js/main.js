let registroDelDia = {
    dia: "",
    frutas: false,
    verduras: false,
    entreno: 0,
    agua: 0,
    descanso: 0,
}

const URL = "./db/data.json"

function obtenerData() {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            renderizarRegistro(data.registros)
            renderizarCosas(data.cosas)
        })
        .catch(err => Swal.fire("Hubo un error: " + err))
}
obtenerData()

let opcionesUno = document.getElementById("registros")

function renderizarRegistro(registros) {
    registros.forEach(registro => {
        let card = document.createElement("div")
        card.className = "div"
        card.innerHTML = `<div class="contenedor">
                            <img src=${registro.img} alt="">
                            <h2>${registro.nombre}</h2>
                            <h3>${registro.texto}</h3>
                        </div>
                        <div class="informacion">
                            <img class="signointe" src=./img/interrogacion.png>
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

        const signo = card.querySelector(".signointe")

        signo.addEventListener("click", () => {
            Swal.fire({
                title: "Recomendaciones Diarias",
                html:  `<ul style="text-align:left;">
                            <li>Ingerir al menos 400-500 gramos diarios</li>
                            <li>Realizar al menos 1 hora de actividad física</li>
                            <li>Tomar agua de 2 litros diarios</li>
                            <li>Descansar 8 horas diarias</li>
                        </ul>`
            });
        })

        opcionesUno.appendChild(card)
    })
}

function renderizarCosas(cosas) {
    cosas.forEach(cosa => {
        let carta = document.createElement("div")
        carta.className = "div"
        carta.innerHTML = `<div class="contenedor">
                            <img src=${cosa.img} alt="">
                            <h2>${cosa.titulo}</h2>
                            <h3>${cosa.horas}</h3>
                        </div>
                        <div class="informacion">
                            <img class="signointe" src=./img/interrogacion.png>
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
            registroDelDia[cosa.titulo.toLowerCase()] = contador
        })

        restar.addEventListener("click", () => {
            if (contador > 0) {
                contador--
                counter.innerHTML = contador
                registroDelDia[cosa.titulo.toLowerCase()] = contador
            }
        })

        const signointe = carta.querySelector(".signointe")

        signointe.addEventListener("click", () => {
            Swal.fire({
                title: "Recomendaciones Diarias",
                html:  `<ul style="text-align:left;">
                            <li>Ingerir al menos 400-500 gramos diarios</li>
                            <li>Realizar al menos 1 hora y 30 minutos de actividad física</li>
                            <li>Tomar agua de 2 litros diarios</li>
                            <li>Descansar 8 horas diarias</li>
                        </ul>`
            });
        })

        opcionesUno.appendChild(carta)

    })
}

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

    if (registroDelDia.dia == "") {
        Swal.fire({
            title: "Falta indicar la fecha del registro",
            icon: "error"
        });
    }
    else {
        registroDelDia.dia = textInput.value

        Swal.fire({
            title: "Perfecto, guardaste tu registro",
            icon: "success"
        });

        let Catalogos = JSON.parse(localStorage.getItem("Catalogos")) || []

        Catalogos.push(registroDelDia)

        localStorage.setItem("Catalogos", JSON.stringify(Catalogos))
    }
})
