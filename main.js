const inputText = document.querySelector('#txt');
const myButton = document.querySelector('.btn-list');
const list = document.querySelector('.container ul');

myButton.addEventListener('click', (e) => {
if(inputText.value != ""){
    e.preventDefault();


    //creating the li
    const myLi = document.createElement("li");
    myLi.innerHTML = inputText.value;
    list.appendChild(myLi);

    //creating the delete span
    const mySpan = document.createElement('span');
    mySpan.innerHTML = 'x';
    myLi.appendChild(mySpan);
}


//closing the li once clicked on the span "x"
const close = document.querySelectorAll('span');
for(let i=0; i <close.length; i++){
    close[i].addEventListener('click', () => {
        close[i].parentElement.style.textDecoration = "line-through"
    })
}
inputText.value = ""
});
