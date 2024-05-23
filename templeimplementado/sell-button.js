const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="./css.css">

<div class="weather-card">
<div class="weather-side">
  <div class="climahead">
    <div class="today">
      <div class="clima-icono">
        <div>
          <p class="dia">Domingo</p>
          <div class="grados">25°</div>
        </div>
        <div class="iconoclima"><img src="" alt="" /></div>
      </div>
      <div lugar>Santa Cruz de la Sierra</div>
    </div>
    <div class="humedadyviento">
      <div class="humedad">Humedad: 50</div>
      <div class="humedad">Viento: 30</div>
    </div>
  </div>
  <div class="climafood">
    <div class="day">
      <p>1 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>2 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>3 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>4 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>5 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>6 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>7 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>8 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>9 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>10 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>11 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>12 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>13 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>14 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>15 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>16 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>17 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>18 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>19 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>20 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>21 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>22 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>23 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    <div class="day">
      <p>24 am</p>
      <div class="tdia">30°</div>
      <div class="imgdia"><img src="" alt="" /></div>
    </div>
    
  </div>
</div>

<div class="info-side">
  <div class="week">
    <div class="week-cont">
      <div class="day">
        <p>lunes</p>
        <div class="tdia">30°</div>
        <div class="imgdia"><img src="" alt="" /></div>
      </div>
      <div class="day">
        <p>martes</p>
        <div class="tdia">30°</div>
        <div class="imgdia"><img src="" alt="" /></div>
      </div>
      <div class="day">
        <p>miercoles</p>
        <div class="tdia">22°</div>
        <div class="imgdia"><img src="" alt="" /></div>
      </div>
      <div class="day">
        <p>jueves</p>
        <div class="tdia">17°</div>
        <div class="imgdia"><img src="" alt="" /></div>
      </div>
      <div class="day">
        <p>Viernes</p>
        <div class="tdia">17°</div>
        <div class="imgdia"><img src="" alt="" /></div>
      </div>
      <div class="day">
        <p>Sabado</p>
        <div class="tdia">17°</div>
        <div class="imgdia"><img src="" alt="" /></div>
      </div>
    </div>
  </div>
</div>
</div>
`;

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
customElements.define('sell-button', SellButton);