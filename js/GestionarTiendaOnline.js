class TiendaOnline {
    iniciar() {
        fetch(url)
            .then((respuesta) => respuesta.json())
            .then((resultado) => {
                console.log(resultado);
                const html = document.getElementById("productos");
                const fragSect = document.createDocumentFragment();
                resultado.forEach((item) => {
                    const container = document.createElement("div");
                    container.innerHTML = ` <div class="contenedor">
                                                <div class="Cards">
                                                    <div class="imgCont">
                                                        <img src="${item.Img}" class="imgCard">
                                                    </div>                                               
                                                    <div class="infoCard">
                                                        <h3 class="cardTitle">${item.Nombre}</h3>
                                                        <p class="descripcion">${item.Descripcion}</p>
                                                        <h5 class="cantidad">${"Producción mínima" + " " + item.ProduccionMinima}</h5>                       
                                                        <a href="./Contacto.html" class="boton">Consulta</a>
                                                    </div>
                                                </div>
                                            </div>`;
                    fragSect.appendChild(container);
                });
                
                html.appendChild(fragSect);
            });
    }

    cargarProductos(productos) {
        const divProductos = document.querySelector("#productos");
        divProductos.innerHTML = "";

        productos.forEach((producto) => {
            let product = document.createElement("div");
            product.classList.add("row", "row-cols-1", "row-cols-md-3 g-4");
            product.setAttribute("id", "row_" + producto.id);

            product.innerHTML += ` <div class="contenedor">
                                    <div class="Cards">
                                        <div class="imgCont">
                                            <img src="${item.Img}" class="imgCard">
                                        </div>                                               
                                        <div class="infoCard">
                                            <h3 class="cardTitle">${item.Nombre}</h3>
                                            <p class="descripcion">${item.Descripcion}</p>
                                            <h5 class="cantidad">${"Producción mínima" + " " + item.ProduccionMinima}</h5>                       
                                            <a href="./Contacto.html" class="boton">Consulta</a>
                                        </div>
                                    </div>
                                </div>`;
            divProductos.appendChild(product);
        });
    }
}