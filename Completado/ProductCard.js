class ProductCard extends HTMLElement {
  constructor() {
    super();

    //Creamos el shadwDom en modo open para permitir acceso del exterior
    const shadow = this.attachShadow({ mode: "open" });

    //definir los atributos personalizados
    const title = this.getAttribute("title");
    const description = this.getAttribute("description");
    const price = this.getAttribute("price");
    const image = this.getAttribute("image");

    /*
     * Creo los diferentes elementos html de mi componente
     */
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("product-card");

    const imageElement = document.createElement("img");
    imageElement.src = image;
    imageElement.alt = "Producto";
    cardContainer.appendChild(imageElement);

    const titleElement = document.createElement("h2");
    titleElement.classList.add("product-title");
    titleElement.textContent = title;
    cardContainer.appendChild(titleElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("product-description");
    descriptionElement.textContent = description;
    cardContainer.appendChild(descriptionElement);

    const priceElement = document.createElement("p");
    priceElement.classList.add("product-price");
    priceElement.textContent = price;
    cardContainer.appendChild(priceElement);

    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add("add-to-cart-btn");
    addToCartButton.textContent = "Añadir al carrito";
    cardContainer.appendChild(addToCartButton);

    /**
     * Logica del contador
     */

    const counterElement = document.createElement("p");
    let count = 0;
    counterElement.textContent = `Cantidad: ${count}`;
    cardContainer.appendChild(counterElement);

    addToCartButton.addEventListener("click", () => {
      count++;
      counterElement.textContent = `Cantidad: ${count}`;
    });

    /*
     * Carga de estilos externos
     */

    shadow.appendChild(cardContainer);
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "estilos.css");
    shadow.appendChild(link);
  }
}
customElements.define("product-card", ProductCard);

class weathercard extends HTMLElement {
  constructor() {
    super();

    //Creamos el shadwDom en modo open para permitir acceso del exterior
    const shadow = this.attachShadow({ mode: "open" });

    //definir los atributos personalizados
   
    const humedad = this.getAttribute("humedad");
    const viento = this.getAttribute("viento")
    const ubicacion =this.getAttribute("ubicacion");
    const imagen = this.getAttribute("imagen");
    const dia = this.getAttribute("dia");
    const temp = this.getAttribute("temp");
    /*
      Creo los diferentes elementos html de mi componente
     */
    const weathercontainer = document.createElement("div");
    weathercontainer.classList.add("weather-card");

    
    //weather-side
    const weatherside = document.createElement("div");
    weatherside.classList.add("weather-side");
    weathercontainer.appendChild(weatherside);

    //today-side
    const today = document.createElement("div");
    today.classList.add("today-side");
    weatherside.appendChild(today);
    //hoycont-side
    const hoycont = document.createElement("div");
    hoycont.classList.add("hoycont-side");
    today.appendChild(hoycont);
    //img-cont
    const imgcont = document.createElement('div');
    imgcont.classList.add("img-cont");
    hoycont.appendChild(imgcont);

    const imageElement = document.createElement("img");
    imageElement.classList.add("imagen-clima");
    imageElement.src = imagen;
    imageElement.alt = "clima";
    imgcont.appendChild(imageElement);
    //temp
    const tempcont =document.createElement('div');
    tempcont.classList.add('temp-cont');
    hoycont.appendChild(tempcont);

    const diacont = document.createElement("h3");
    diacont.classList.add("dia-cont");
    diacont.textContent=dia;
    tempcont.appendChild(diacont);

    const temperatura = document.createElement("h3");
    temperatura.classList.add("temperatura-value");
    temperatura.textContent=temp+'°C';
    tempcont.appendChild(temperatura);






    
    //ubicacioncont-side
    const ubicacioncont = document.createElement("div");
    ubicacioncont.classList.add("ubicacioncont-side");
    ubicacioncont.textContent=ubicacion;
    today.appendChild(ubicacioncont);


    //wh-side
    const wh = document.createElement("div");
    wh.classList.add("wh-side");
    weatherside.appendChild(wh);
    //humedad
    const humedadcont = document.createElement("div");
    humedadcont.classList.add("humedadcont-side");
    wh.appendChild(humedadcont);
    
    const titelhumedad = document.createElement("h3");
    titelhumedad.classList.add("titelhumedad-side");
    titelhumedad.textContent = "Humedad";
    humedadcont.appendChild(titelhumedad);

    const valuehumedad = document.createElement("h3");
    valuehumedad.classList.add("valuehumedad-side");
    valuehumedad.textContent = humedad+"%";
    humedadcont.appendChild(valuehumedad);
    //viento
    const vientocont = document.createElement("div");
    vientocont.classList.add("vientocont-side");
    wh.appendChild(vientocont);
    
    const titleviento = document.createElement("h3");
    titleviento.classList.add("titleviento-side");
    titleviento.textContent = "Viento";
    vientocont.appendChild(titleviento);

    const valueviento = document.createElement("h3");
    valueviento.classList.add("valueviento-side");
    valueviento.textContent = viento+"m/s";
    vientocont.appendChild(valueviento);






    //info-side
    const infoside = document.createElement("div");
    infoside.classList.add("info-side");
    weathercontainer.appendChild(infoside);

    
    const infoweek = document.createElement("div");
    infoweek.classList.add("info-week");
    infoside.appendChild(infoweek);

    //info day box
    // //info day 1
    const infodayl = document.createElement("div");
    infodayl.classList.add("info-day1");
    infoweek.appendChild(infodayl);

    



    // //info day 2
    const infoday2 = document.createElement("div");
    infoday2.classList.add("info-day2");
 
    infoweek.appendChild(infoday2);

    // //info day 3
    const infoday3 = document.createElement("div");
    infoday3.classList.add("info-day3");

    infoweek.appendChild(infoday3);

    // //info day 4
    const infoday4 = document.createElement("div");
    infoday4.classList.add("info-day4");
 
    infoweek.appendChild(infoday4);





    
    // const ifoHumendad = document.createElement("p");
    // ifoHumendad.classList.add("info-humedad");
    // ifoHumendad.textContent = title + "%";
    // infocontainer.appendChild(ifoHumendad);

    /*
     * Carga de estilos externos
     */

    shadow.appendChild(weathercontainer);
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "estilos.css");
    shadow.appendChild(link);
  }
}
customElements.define("weather-card", weathercard);
