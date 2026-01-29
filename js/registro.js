let contenedorRegistro = document.getElementById("cajaResumen")

let catalogos = localStorage.getItem("catalogos")
catalogos = JSON.parse(catalogos)

function renderRegistro(catalogoItems) {
    catalogoItems.forEach(catalogo => {
        const cart = document.createElement("div")
        cart.className = "contenedor"
        cart.innerHTML = `<div id="resumenDatos">
                            <div>
                            <h2>Dia: </h2>
                        </div>
                        <div>
                            <h2>Fruta: </h2>
                            <h3>Recomendacion diaria:</h3>
                        </div>
                        <div>
                            <h2>Verdura: </h2>
                            <h3>Recomendacion diaria:</h3>
                        </div>
                        <div>
                            <h2>Entreno: </h2>
                            <h3>Recomendacion diaria:</h3>
                        </div>
                        <div>
                            <h2>Agua: </h2>
                            <h3>Recomendacion diaria:</h3>
                        </div>
                        <div>
                            <h2>Descanso: </h2>
                            <h3>Recomendacion diaria:</h3>
                        </div>
                    </div>`
        contenedorRegistro.appendChild(cart)
    })
}
renderRegistro(catalogos)