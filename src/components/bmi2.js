import { LitElement, html, css } from 'lit';

class BMIComponent extends LitElement {
  static get properties() {
    return {
      weight: { type: Number },
      height: { type: Number },
      bmi: { type: Number },
    };
  }

  constructor() {
    super();
    this.weight = 0;
    this.height = 0;
    this.bmi = 0;
  }

  static get styles() {
    return css`
      .formulario {
        margin: 80px;
      }
      .result {
        margin-top: 20px;
      }

      .result img {
        width: auto;
        height: 300px; /* Fixed height for the images */
        object-fit: cover;
      }
    `;
  }

  calculateBMI() {
    if (this.weight <= 0 || this.height <= 0) {
      alert('Por favor ingrese valores validos');
      return;
    }

    const heightMeters = this.height / 100;
    this.bmi = this.weight / (heightMeters * heightMeters);
  }

  getImage() {
    const bmiRanges = [
      { min: 0, max: 18.5, image: 'public/images/obesidad2.jpg' },
      { min: 18.5, max: 24.9, image: 'public/images/peso-normal.webp' },
      { min: 25, max: 29.9, image: 'public/images/sobrepeso.jpg' },
      { min: 30, max: 34.9, image: 'public/images/obesidad1.jpg' },
      { min: 35, max: 39.9, image: 'public/images/obesidad2.jpg' },
      { min: 40, max: 99.9, image: 'public/images/obesidad3.jpg' }
    ];

    for (const range of bmiRanges) {
      if (this.bmi >= range.min && this.bmi < range.max) {
        return range.image;
      }
    }
  }

  render() {
    return html`
      <div class="formulario">
        <label>Peso (kg):</label>
        <input type="number" .value="${this.weight}" @input="${(e) => this.weight = e.target.value}">
        <br>
        <label>Altura (cm):</label>
        <input type="number" .value="${this.height}" @input="${(e) => this.height = e.target.value}">
        <br>
        <button @click="${this.calculateBMI}">Calcular IMC</button>
      </div>

      ${this.bmi > 0 ? html`
        <div class="result">
          <p>Tu indice de masa corporal es: ${this.bmi.toFixed(2)}</p>
          <img src="${this.getImage()}" alt="BMI Image">
        </div>
      ` : ''}
    `;
  }
}

customElements.define('bmi-component', BMIComponent);