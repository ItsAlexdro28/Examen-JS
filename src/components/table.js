//fuck it, we ball raw elements
//gracias jholver, love you to death
class TableComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      this.shadowRoot.innerHTML = `
        <style>
        input-row {
            margin: 30px;
            padding: 30px;
        }
          table {
             width: 100%; 
             border-collapse: collapse; 
            }
          th, td { 
            border: 1px solid #ccc; 
            padding: 8px; 
            text-align: left; }
          .input-row { display: flex; margin-bottom: 10px; }
          .input-row input { margin-right: 10px; }
        </style>
        <div class="all">
          <div class="input-row">
            <input type="text" id="name-input" placeholder="Nombre">
            <input type="text" id="age-input" placeholder="Edad">
            <button id="add-row">Agregar</button>
          </div>
          <table>
            <thead>
              <tr>

              </tr>
            </thead>
            <tbody id="table-body"></tbody>
          </table>
        </div>
      `;
    }
  
    connectedCallback() {
      this.shadowRoot.getElementById('add-row').addEventListener('click', () => this.addRow());
    }
  
    addRow() {
      const nameInput = this.shadowRoot.getElementById('name-input').value.trim();
      const ageInput = this.shadowRoot.getElementById('age-input').value.trim();
  
      if (nameInput && ageInput) {
        const tableBody = this.shadowRoot.getElementById('table-body');
        const row = document.createElement('tr');
  
        row.innerHTML = `
          <td>${nameInput}</td>
          <td>${ageInput}</td>
          <td><button class="delete-row">Eliminar <3</button></td>
        `;
  
        row.querySelector('.delete-row').addEventListener('click', () => tableBody.removeChild(row));
  
        tableBody.appendChild(row);
  
        this.shadowRoot.getElementById('name-input').value = '';
        this.shadowRoot.getElementById('age-input').value = '';
      }
    }
  }
  
  customElements.define('table-component', TableComponent);