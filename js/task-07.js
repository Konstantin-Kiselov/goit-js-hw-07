const inputRef = document.querySelector('#font-size-control');
// console.log(inputRef);

const textRef = document.querySelector('#text');
// console.log(textRef);

console.log(inputRef.value);
inputRef.addEventListener('input', function() {            
    text.style.fontSize = `${inputRef.value * 0.32}px`;
    console.log(text.style.fontSize);
});
