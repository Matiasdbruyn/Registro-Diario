let contenedorRegistro = document.getElementById("cajaResumen")

let Catalogos = localStorage.getItem("Catalogos")
Catalogos = JSON.parse(Catalogos)

function renderRegistro() {
        const ahora = Date.now();
        const tiempo = 5000;
        const registrosVivos = Catalogos.filter(cat => ahora - cat.creadoEn < tiempo);
        localStorage.setItem("Catalogos", JSON.stringify(registrosVivos));

        contenedorRegistro.innerHTML = "";

        registrosVivos.forEach(Catalogo => {

            const cart = document.createElement("div")
            cart.className = "contenedor"

            cart.innerHTML = `<div class="resumenDatos">
                        <ul>
                            <li><strong>Dia:</strong> ${Catalogo.dia}</li>
                            <li><strong>Fruta:</strong> ${Catalogo.frutas ? "Comiste frutas" : "No Comiste frutas"}</li>
                            <li><strong>Verdura:</strong> ${Catalogo.verduras ? "Comiste verduras" : "No Comiste verduras"}</li>
                            <li><strong>Entreno:</strong> ${Catalogo.entreno} horas</li>
                            <li><strong>Agua:</strong> Consumiste ${Catalogo.agua} litros</li>
                            <li><strong>Descanso:</strong> ${Catalogo.descanso} horas</li>
                        </ul>
                    </div>`

            const resumenDatos = cart.querySelector(".resumenDatos")

            evaluarRegistro(Catalogo)
                .then(() => {
                    const devolucionBien = document.createElement("div")
                    devolucionBien.className = "devolucionBien"
                    devolucionBien.innerHTML = `<h2>Habitos saludables</h2>
                                            <img src="../img/correcto.png">`
                    resumenDatos.appendChild(devolucionBien)
                })
                .catch(() => {
                    const devolucionMal = document.createElement("div")
                    devolucionMal.className = "devolucionMal"
                    devolucionMal.innerHTML = `<h2>Habitos no saludables</h2>
                                            <img src="../img/mal.png">`
                    resumenDatos.appendChild(devolucionMal)
                })

            contenedorRegistro.appendChild(cart)

        })
    }
renderRegistro(Catalogos)

setInterval(() => {
    let Catalogos = JSON.parse(localStorage.getItem("Catalogos")) || []
    renderRegistro(Catalogos)
}, 1000)

function evaluarRegistro(registro) {
    return new Promise((resolve, reject) => {

        if (
            registro.frutas === true &&
            registro.verduras === true &&
            registro.descanso >= 8 &&
            registro.entreno >= 1 &&
            registro.agua >= 2
        ) {
            resolve()
        } else {
            reject()
        }

    })
}