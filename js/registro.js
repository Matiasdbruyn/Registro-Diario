let contenedorRegistro = document.getElementById("cajaResumen")

let catalogos = localStorage.getItem("catalogos")
catalogos = JSON.parse(catalogos)

function renderRegistro(catalogoItems) {
    catalogoItems.forEach(catalogo => {
        const cart = document.createElement("div")
        cart.className = "contenedor"
        cart.innerHTML = `<div id="resumenDatos">
                            <div>
                            <h2>Dia: ${catalogo.dia}</h2>
                        </div>
                        <div>
                            <h2>Fruta: ${catalogo.frutas ? "Comió frutas" : "No comió frutas"}</h2>
                            <h3>Recomendacion diaria:</h3>
                        </div>
                        <div>
                            <h2>Verdura: ${catalogo.verduras ? "Comió verduras" : "No comió verduras"}</h2>
                            <h3>Recomendacion diaria:</h3>
                        </div>
                        <div>
                            <h2>Entreno: ${catalogo.entreno} horas</h2>
                            <h3>Recomendacion diaria:</h3>
                        </div>
                        <div>
                            <h2>Agua: ${catalogo.agua} litros</h2>
                            <h3>Recomendacion diaria:</h3>
                        </div>
                        <div>
                            <h2>Descanso: ${catalogo.descanso} horas</h2>
                            <h3>Recomendacion diaria:</h3>
                        </div>
                    </div>`
        contenedorRegistro.appendChild(cart)
    })
}
renderRegistro(catalogos)