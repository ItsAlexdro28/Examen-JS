import './components/bmi2.js' //que lindo tener que repetir el ejercisio :3
import './components/Galery.js'
import './components/table.js'
import './components/api.js'
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

  //mostrar web component IMC
  function showBMI () {
   let BMIbmi = document.createElement('bmi-component');
   document.getElementById('main').innerHTML = '';
   document.getElementById('main').appendChild(BMIbmi);
  }

  document.getElementById('BMI').addEventListener('click', function(event) {
    event.preventDefault();
    showBMI();
  });

  //mostrar web component galeria
  function showGalery () {
   let gagalery = document.createElement('galery-comp');
   document.getElementById('main').innerHTML = '';
   document.getElementById('main').appendChild(gagalery) ;
  }

  document.getElementById('Galery').addEventListener('click', function(event) {
    event.preventDefault();
    showGalery();
  });
  
  //mostrar web component tabla
  function showTable () {
   let tatable = document.createElement('table-component');
   document.getElementById('main').innerHTML = '';
   document.getElementById('main').appendChild(tatable) ;
  }

  document.getElementById('Table').addEventListener('click', function(event) {
    event.preventDefault();
    showTable();
  });

  //mostrar web component APi
  function showApi () {
   let AAApi = document.createElement('api-data-list');
   document.getElementById('main').innerHTML = '';
   document.getElementById('main').appendChild(AAApi) ;
  }

  document.getElementById('API').addEventListener('click', function(event) {
    event.preventDefault();
    showApi();
  });
  // static get styles() {
  // static get styles() {
    // return css`
    // `
  // }

