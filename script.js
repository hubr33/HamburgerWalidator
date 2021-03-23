const arrowBtn = document.querySelector('.head button');
const note = document.querySelector('.note')
const acceptBtn = document.querySelector('.accept');
const successPanel = document.querySelector('.show-registered');
const inputName = document.querySelector('#name');
const inputSurname = document.querySelector('#surname');
const inputAge = document.querySelector('#age');
const selectSex = document.querySelector('#sex');
const textName = document.querySelector('.user-name span');
const textAge = document.querySelector('.user-age span');
const textSex = document.querySelector('.user-sex span');
const error = document.querySelector('p');

let selectedSex;
let selectedSexValue = 0;

const registerOk = () => {
    if (inputName.value !== '' && inputSurname.value !== '' && inputAge.value !== '' && selectedSexValue !== 0) {
        successPanel.classList.add('show');
        textName.textContent = `${inputName.value} ${inputSurname.value}`;
        textAge.textContent = `${inputAge.value}`;
        textSex.textContent = `${selectedSex}`;
        error.classList.remove('error');
        arrowBtn.classList.toggle('active');
        note.classList.toggle('active2');
        acceptBtn.style.display = 'none';
        inputName.value = '';
        inputSurname.value = '';
        inputAge.value = '';
        selectSex.selectedIndex = 0;
        setTimeout(closeRegister, 5000)
    } else {
        error.classList.add('error');

    }
}

const selectValue = () => {
    selectedSex = sex.options[sex.selectedIndex].text;
    selectedSexValue = parseFloat(sex.options[sex.selectedIndex].value);
}

const closeRegister = () => {
    successPanel.classList.remove('show');
}

const showPanel = () => {
    arrowBtn.classList.toggle('active');
    note.classList.toggle('active2');
    if (note.classList.contains('active2')) {
        acceptBtn.style.display = 'none';
    } else {
        acceptBtn.style.display = 'block';
    }
}

acceptBtn.addEventListener('click', registerOk);
arrowBtn.addEventListener('click', showPanel);