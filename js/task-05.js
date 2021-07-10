const inputRef = document.querySelector('#name-input');

const nameRef = document.querySelector('#name-output');

const onInputName = (event) => {
    const userName = event.currentTarget.value;
    console.log(userName);
    return nameRef.textContent = userName ? `${userName}` : 'незнакомец';
}

inputRef.addEventListener('input', onInputName);