import throttle from 'lodash.throttle';
import { loadFromLS, saveToLS } from './helpers.js'; 

const refs = {
  form: document.querySelector('.feedback-form'), 
};

const key = 'feedback-form-state';
let userData = {
    email: refs.form.elements.email.value,
    message: refs.form.elements.message.value
  }

refs.form.addEventListener('input', throttle(() => { 
   userData = {
    email: refs.form.elements.email.value,
    message: refs.form.elements.message.value,
  };
  saveToLS(key, userData);         
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
  const dataFromLS = loadFromLS(key);
  if (dataFromLS) {
    userData = dataFromLS;
  };
  refs.form.elements.email.value = userData.email || ''; 
  refs.form.elements.message.value = userData.message || ''; 
}
onPageLoad(); 
  