import { render } from 'lit-html'
import { template } from './townsTemplate.js';
import { towns } from './towns.js';

const root = document.getElementById('towns');
const inputField = document.getElementById('searchText');
const searchBtn = document.querySelector('article button');
const resultDiv = document.getElementById('result');
searchBtn.addEventListener('click', search);

render(template(towns), root);
const liItems = Array.from(root.querySelectorAll('li'));

function search() {
   if (!inputField.value.trim()) {
      alert('Enter valid town input!');
      return;
   }

   let results = 0;
   liItems.forEach(town => {
      if (town.textContent.toLocaleLowerCase().includes(inputField.value.trim().toLocaleLowerCase())) {
         town.classList.add('active');
         results++;
      } else {
         town.classList.remove('active');
      }
   });

   inputField.value = '';
   resultDiv.textContent = `${results} matches found`;
}