const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
const delBtn = document.querySelector('.item__delete');

// 1. 먼저 input 값을 받고
// 2. 플러스 버튼 누르면 추가되는 단계로 넘어가고
// 3. DOM 요소를 만들고 조합하고 추가

function onAdd(){
    const text = input.value;
    if(text === ''){
        return;
    }
    const item = createItem(text);
    
    const item__row = document.createElement('li');
    item__row.setAttribute('class', 'item__row');
    item__row.appendChild(item);
    const item__divider = document.createElement('div');
    item__divider.setAttribute('class', 'item__divider');
    item__row.appendChild(item__divider);
    items.appendChild(item__row);
    input.value = '';
    input.focus();
    item__row.scrollIntoView();
};

function createItem(text){
    const item = document.createElement('div');
    item.setAttribute('class', 'item');
    const item__name = document.createElement('span');
    item__name.setAttribute('class', 'item__name');
    item__name.innerText = text;
    const item__delete = document.createElement('button');
    item__delete.setAttribute('class', 'item__delete');
    item__delete.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    item__delete.addEventListener('click', () => {
        items.removeChild(item.parentNode);
    });

    item.appendChild(item__name);
    item.appendChild(item__delete);
    return item;
};

addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        onAdd();
    }
});

delBtn.addEventListener('click', (event) => {
    items.removeChild(event.target.parentNode.parentNode.parentNode);
});