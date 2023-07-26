import throttle from 'lodash.throttle';
import { loadFromLS, saveToLS } from './helpers.js';

const refs = {
  form: document.querySelector('.feedback-form'), 
};

refs.form.addEventListener('input', throttle(e => { 
  const key = e.target.name;    
  const value = e.target.value; 
  saveToLS(key, value);         
},500));

refs.form.addEventListener('submit', e => {    
  e.preventDefault();        
  const email = e.target.elements.email.value; 
  const message = e.target.elements.message.value; 
  console.log({ email, message }); 
  localStorage.clear(); 
  e.target.reset();     
});

function onPageLoad() {       
  const email = loadFromLS('email'); 
  const message = loadFromLS('message');

  refs.form.elements.email.value = email || '';
  refs.form.elements.message.value = message || '';
}
onPageLoad(); 
   