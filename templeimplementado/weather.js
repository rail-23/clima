'use strict';
const ApiKey='1bafec787c78a46d0d38f49740ef0c64';

const cityInput=document.querySelector('.cityImput');
const searchButton=document.querySelector('.BTNsearch');
const CardDivs=document.querySelector('.CardInsert');
const inputSearch = document.getElementById('city');

const template = document.createElement('template');


class SellButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ['text'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'text') {
            this.shadowRoot.querySelector('#text').textContent = newValue;
        }
    }

    connectedCallback() {
        const textAttribute = this.getAttribute('text');
        if (textAttribute) {
            this.shadowRoot.querySelector('#text').textContent = textAttribute;
        }
    }


}
customElements.define('sell-weather', SellButton);



const getDayName = (dateString) => {
  const date = new Date(dateString);
  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado','Domingo'];
  return days[date.getDay()];
}

const createWeathercard = (weatherItem, dailyForecasts) => {
  return template.innerHTML =  `
  <link rel="stylesheet" href="./css.css">

<div class="weather-card">
<div class="weather-side">
  <div class="climahead">
    <div class="today">
      <div class="clima-icono">
        <div>
          <p class="dia">${getDayName(dailyForecasts[0].date)}</p>
          <div class="grados">${(weatherItem.main.temp - 273.15).toFixed(2)}°C</div>
        </div>
        <div class="iconoclima"><img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png" alt="" /></div>
      </div>
      <div lugar>${weatherItem.name}</div>
    </div>
    <div class="humedadyviento">
      <div>ALERTA: ${weatherItem.weather[0].description}</div>
      <div class="humedad">${weatherItem.main.humidity}%</div>
      <div class="humedad">${weatherItem.wind.speed} m/s</div>
    </div>
  </div>
  <div class="climafood">

  <div class="day">
  <p>1:00am</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>2:00am</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>3:00am</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>4:00am</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>5:00am</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>6:00am</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>7:00am</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>8:00am</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>9:00am</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>10:00am</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>11:00am</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>12:00pm</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>13:00pm</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>14:00pm</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>15:00pm</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>16:00pm</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>17:00pm</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>18:00pm</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>19:00pm</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>20:00pm</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>21:00pm</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>22:00pm</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>23:00pm</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>
<div class="day">
  <p>24:00pm</p>
  <div class="tdia">30°C</div>
  <div class="imgdia"><img src="" alt="" /></div>
</div>


  </div>
</div>

<div class="info-side">
  <div class="week">
    <div class="week-cont">
      <div class="day">
        <p>${getDayName(dailyForecasts[1].date)}</p>
        <div class="tdia">${(dailyForecasts[1].temp - 273.15).toFixed(2)} °C</div>
        <div class="imgdia"><img src="" alt="" /></div>
      </div>
      <div class="day">
        <p>${getDayName(dailyForecasts[2].date)}</p>
        <div class="tdia">${(dailyForecasts[2].temp - 273.15).toFixed(2)} °C</div>
        <div class="imgdia"><img src="" alt="" /></div>
      </div>
      <div class="day">
        <p>${getDayName(dailyForecasts[3].date)}</p>
        <div class="tdia">${(dailyForecasts[3].temp - 273.15).toFixed(2)} °C</div>
        <div class="imgdia"><img src="" alt="" /></div>
      </div>
      <div class="day">
        <p>${getDayName(dailyForecasts[4].date)}</p>
        <div class="tdia">${(dailyForecasts[4].temp - 273.15).toFixed(2)} °C</div>
        <div class="imgdia"><img src="" alt="" /></div>
      </div>
      <div class="day">
        <p>${getDayName(dailyForecasts[5].date)}</p>
        <div class="tdia">${(dailyForecasts[5].temp - 273.15).toFixed(2)} °C</div>
        <div class="imgdia"><img src="" alt="" /></div>
      </div>
    </div>
  </div>
</div>
</div>
  `;
}
const getWeatherDetails = (cityName, lat, lon) => {
  const API_Weather = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${ApiKey}`;
  console.log(API_Weather)
  fetch(API_Weather)
    .then(res => res.json())
    .then(data => {
      const weatherItem = data.list[0]; // Primer pronóstico
      weatherItem.name = cityName; //nombre de la ciudad

      const uniqueForecastDays = []; 
      const dailyForecasts = data.list.filter(forecast => {
        const forecastDate = new Date(forecast.dt_txt).getDate();
        if (!uniqueForecastDays.includes(forecastDate)) {
          uniqueForecastDays.push(forecastDate);
          return true;
        }
        return false;
      }).map(forecast => ({
        date: forecast.dt_txt.split(" ")[0],
        temp: forecast.main.temp
      }));

      if (dailyForecasts.length >= 5) {
        CardDivs.insertAdjacentHTML("beforeend", createWeathercard(weatherItem, dailyForecasts));
      } else {
        alert("No se encontraron suficientes pronósticos diarios.");
      }
      console.log(dailyForecasts);
      })
      .catch(() => {
        alert("Se ha encontrado un error mientras se buscaba el pronóstico del clima");
      });
}

/*funcion para obtener el contenido de la barra de busqueda(input) y las coordenadas de la ciudad a buscar*/
searchButton.addEventListener('click', function () {
  CardDivs.innerHTML = "";
  const cityName = inputSearch.value.trim();
  if (!cityName) return;
  const CODE_URL_API = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${ApiKey}`;
  fetch(CODE_URL_API)
    .then(res => res.json())
    .then(data => {
      if (!data.length) return alert(`No se encontraron las coordenadas para: ${cityName}`);
      const { name, lat, lon } = data[0];
      getWeatherDetails(name, lat, lon);
      console.log(data);
    })
    .catch(() => {
      alert("Se ha encontrado un error mientras se buscaba una coordenada");
    })
    
});
