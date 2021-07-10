const spanElem = document.querySelector('#value');

let counterValue = Number(spanElem.textContent);

const btnIncrement = document.querySelector('[data-action="increment"]');

const btnDecrement = document.querySelector('[data-action="decrement"]');

const increment = () => {
    counterValue += 1;
    console.log("Увеличиваю значение на 1");
    spanElem.textContent = `${counterValue}`;
    console.log('Значение равно:', spanElem.textContent);
};

const decrement = () => {
    counterValue -= 1;
    console.log("Уменьшаю значение на 1");
    spanElem.textContent = `${counterValue}`;
    console.log('Значение равно:', spanElem.textContent);
}

const btnIncrementEvent = btnIncrement.addEventListener('click', increment);

const btnDecrementEvent = btnDecrement.addEventListener('click', decrement);

// console.log(spanElem.textContent);