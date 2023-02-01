import 'bootstrap/dist/css/bootstrap.css';//loads in CSS
import addHandler, { multHandler } from './utils/event';

document.querySelector('#app').innerHTML= `<div class="container my-5">
<div class="mb-3">
      <label for="number-1" class="form-label">First Number</label>
      <input type="number" class="form-control" id="number-1">
</div>
<div class="mb-3">
      <label for="number-2" class="form-label">Second Number</label>
      <input type="number" class="form-control" id="number-2">
</div>

<button id="add" class="btn btn-primary mb-3">Add</button>
<button id="multiply" class="btn btn-primary mb-3">Multiply</button>
<div id="resultBox" class="mt-5 rounded border p-5 bg-secondary text-white">Result: <div id="result"></div>
</div>`;
addHandler();
multHandler();

//due to innerHtml being synchronous , despite that the elements referenced in the div tag are 
// not defined yet , I dont need to define it first and then run , instead I can define it after its
//referenced
//here we will create a logic file 
//document.getElementById('app').innerHTML='Hello Again World';
