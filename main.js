import 'bootstrap/dist/css/bootstrap.css';
import eventHandler from './utils/event';

document.querySelector("#app").innerHTML = `
<div class="container my-5">
<div class="mb-3">
      <label for="number-1" class="form-label">First Number</label>
      <input type="number" class="form-control" id="number-1">
</div>
<div class="mb-3">
      <label for="number-2" class="form-label">Second Number</label>
      <input type="number" class="form-control" id="number-2">
</div>

<div class = "btn-group" role = "group" aria-label = "Button Selection for Group"> 
<button id="add" class="btn btn-primary mb-3">Add</button>
<button id="multiply" class="btn btn-danger mb-3">Multiply</button>
<button id="subtract" class="btn btn-info mb-3">Subtract</button>
<button id="divide" class="btn btn-success mb-3">Divide</button>
</div>

<div class="mt-5 rounded border p-5 bg-secondary text-white">
      Result: <div id="result">
</div>
</div>
`;

eventHandler();




