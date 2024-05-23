
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
    const day1 = this.getAttribute("day1");
    const day2 = this.getAttribute("day2");
    const day3 = this.getAttribute("day3");
    const day4 = this.getAttribute("day4");
    const day1temp = this.getAttribute("day1temp");
    const day2temp = this.getAttribute("day2temp");
    const day3temp = this.getAttribute("day3temp");
    const day4temp = this.getAttribute("day4temp");




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
        //info day 1 cont
        const infodaylname = document.createElement("h3");
        infodaylname.classList.add("info-day1name");
        infodaylname.textContent=day1;
        infodayl.appendChild(infodaylname);

        const infodayltemp = document.createElement("h3");
        infodayltemp.classList.add("info-day1temp");
        infodayltemp.textContent=day1temp+"°";
        infodayl.appendChild(infodayltemp);

        const imgcontday = document.createElement('div');
        imgcontday.classList.add("imgday1-cont");
        infodayl.appendChild(imgcontday);
    
        const imageElementday1 = document.createElement("img");
        imageElementday1.classList.add("imagen-climaday1");
        imageElementday1.src = imagen;
        imageElementday1.alt = "clima";
        imgcontday.appendChild(imageElementday1);






    // //info day 2
    const infoday2 = document.createElement("div");
    infoday2.classList.add("info-day2");
    infoweek.appendChild(infoday2);
       //info day 2 cont
       const infoday2name = document.createElement("h3");
       infoday2name.classList.add("info-day2name");
       infoday2name.textContent=day2;
       infoday2.appendChild(infoday2name);

       const infoday2temp = document.createElement("h3");
       infoday2temp.classList.add("info-day2temp");
       infoday2temp.textContent=day2temp+"°";
       infoday2.appendChild(infoday2temp);

       const imgcontday2 = document.createElement('div');
       imgcontday2.classList.add("imgday2-cont");
       infoday2.appendChild(imgcontday2);
   
       const imageElementday2 = document.createElement("img");
       imageElementday2.classList.add("imagen-climaday2");
       imageElementday2.src = imagen;
       imageElementday2.alt = "clima";
       imgcontday2.appendChild(imageElementday2);


    // //info day 3
    const infoday3 = document.createElement("div");
    infoday3.classList.add("info-day3");
    infoweek.appendChild(infoday3);

        //info day 2 cont
        const infoday3name = document.createElement("h3");
        infoday3name.classList.add("info-day3name");
        infoday3name.textContent=day3;
        infoday3.appendChild(infoday3name);
 
        const infoday3temp = document.createElement("h3");
        infoday3temp.classList.add("info-day3temp");
        infoday3temp.textContent=day3temp+"°";
        infoday3.appendChild(infoday3temp);
 
        const imgcontday3 = document.createElement('div');
        imgcontday3.classList.add("imgday3-cont");
        infoday3.appendChild(imgcontday3);
    
        const imageElementday3 = document.createElement("img");
        imageElementday3.classList.add("imagen-climaday3");
        imageElementday3.src = imagen;
        imageElementday3.alt = "clima";
        imgcontday3.appendChild(imageElementday3);

    // //info day 4
    const infoday4 = document.createElement("div");
    infoday4.classList.add("info-day4");
    //info day 2 cont
        const infoday4name = document.createElement("h3");
        infoday4name.classList.add("info-day4name");
        infoday4name.textContent=day4;
        infoday4.appendChild(infoday4name);
 
        const infoday4temp = document.createElement("h3");
        infoday4temp.classList.add("info-day4temp");
        infoday4temp.textContent=day4temp+"°";
        infoday4.appendChild(infoday4temp);
 
        const imgcontday4 = document.createElement('div');
        imgcontday4.classList.add("imgday4-cont");
        infoday4.appendChild(imgcontday4);
    
        const imageElementday4 = document.createElement("img");
        imageElementday4.classList.add("imagen-climaday4");
        imageElementday4.src = imagen;
        imageElementday4.alt = "clima";
        imgcontday4.appendChild(imageElementday4);
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    /*logica para consumir un api*/
'use strict';
const ApiKey='1bafec787c78a46d0d38f49740ef0c64';

const cityInput=document.querySelector('.cityImput');
const searchButton=document.querySelector('.BTNsearch');
const CardDivs=document.querySelector('.CardInsert');
const inputSearch = document.getElementById('city');

const createWeathercard = (wheatherItem)=>{
  return`          
  <weather-card
  class="card"
  humedad="${wheatherItem.main.humidity}"
  viento="${wheatherItem.wind.speed}"
  ubicacion="Santa cruz de la Sierra"
  imagen="https://openweathermap.org/img/wn/${wheatherItem.weather[0].icon}@2x.png"
  dia="${wheatherItem.dt_txt.split(" ")[0]}"
  temp="${(wheatherItem.main.temp - 273.15).toFixed(2)}"
  day1="Lunes"
  day1temp="24"
  day2="martes"
  day2temp="25"
  day3="miercoles"
  day3temp="15"
  day4="jueves"
  day4temp="18"
></weather-card>`;
}

const getWeatherDetails =(cityName,lat,lon)=>{
  const API_Weather=`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${ApiKey}`;

  fetch(API_Weather)
  .then(res => res.json())
  .then(data => {

    // filtramos los pronosticos para obtener un solo pronostico por dia, por 6 dias

    const uniqueForecastDays = []; 
    
    const FiveForecastDays = data.list.filter(forecast=>{
      const forecastDate=  new Date(forecast.dt_txt).getDate(); 
      if(!uniqueForecastDays.includes(forecastDate)){
        return uniqueForecastDays.push(forecastDate);
      }
    });
    console.log(FiveForecastDays);
    FiveForecastDays.forEach(wheatherItem => {
      CardDivs.insertAdjacentHTML("beforeend",createWeathercard(wheatherItem));
    });
  })
  .catch(()=>{
    alert("se a encontrado un error mientras de buscaba la coordenada");
  })
}

/*funcion para obtener el contenido de la barra de busqueda(input) y las coordenadas de la ciudad a buscar*/
searchButton.addEventListener('click', function () {

  CardDivs.innerHTML="";
  var cityName = inputSearch.value.trim(); //obtenemos el contenido de input "la ciudad" y con trin()borramos los espacios
  if(!cityName)return;
  const CODE_URL_API = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${ApiKey}`;

  fetch(CODE_URL_API) //obtenemos las coordenadas de la ciudad (latitud,longitud y nombre) que esta en la API
  .then(res=>res.json())
  .then(data=>{
    if(!data.length) return alert(`no se encontraron las coordenadas para:${cityName}`);
    const { name, lat, lon } = data[0];
    getWeatherDetails(name,lat,lon);
    //console.log(data[0]);
  })
  .catch(()=>{
  alert("se a encontrado un error mientras de buscaba una coodenada")
  })

});





