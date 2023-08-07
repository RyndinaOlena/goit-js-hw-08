import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
const texteria = document.querySelector('.feedback-form textarea');
const email = document.querySelector('.feedback-form input');
const KEY_STORIGE = 'feedback-form-state';


form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', formInput)
texteria.addEventListener('input', throttle(sevedValueAll, 500));
email.addEventListener('input', throttle(sevedValueAll, 500));
savedValue();

function sevedValueAll() {
    const valueInput = {
        textareaValue: texteria.value,
        emailValue: email.value,
    }
    localStorage.setItem(KEY_STORIGE, JSON.stringify(valueInput))
    // console.log(valueInput)
};


function onFormSubmit(evt) {
    evt.preventDefault()
    evt.target.reset()
    console.log(localStorage.getItem(KEY_STORIGE))
    localStorage.removeItem(KEY_STORIGE)
};

function savedValue() {
    const saveMessege = localStorage.getItem(KEY_STORIGE)



    if (saveMessege) {
        const savedValues = JSON.parse(saveMessege)
        texteria.value = savedValues.textareaValue || '';
        email.value = savedValues.emailValue || '';
    }
};


