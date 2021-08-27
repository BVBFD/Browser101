const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
const delBtn = document.querySelector('.item__delete');
const newForm = document.querySelector('.new-form');

// 1. 먼저 input 값을 받고
// 2. 플러스 버튼 누르면 추가되는 단계로 넘어가고
// 3. DOM 요소를 만들고 조합하고 추가

let id = 0;
function onAdd(){
    const text = input.value;
    if(text === ''){
        return;
    }
    
    const item__row = document.createElement('li');
    item__row.setAttribute('class', 'item__row');
    item__row.setAttribute('data-id', id);
    item__row.innerHTML = `
    <div class="item">
        <span class="item__name">${text}</span>
        <button class="item__delete" data-id=${id}>
            <i class="fas fa-trash-alt" data-id=${id}></i>
        </button>
    </div>
    <div class="item__divider"></div>
    `;
    items.appendChild(item__row);
    // const item = createItem(text);
    // item__row.appendChild(item);
    // const item__divider = document.createElement('div');
    // item__divider.setAttribute('class', 'item__divider');
    // item__row.appendChild(item__divider);
    // items.appendChild(item__row);
    input.value = '';
    input.focus();
    item__row.scrollIntoView();
    id++;
};

// function createItem(text){
//     const item = document.createElement('div');
//     item.setAttribute('class', 'item');
//     const item__name = document.createElement('span');
//     item__name.setAttribute('class', 'item__name');
//     item__name.innerText = text;
//     const item__delete = document.createElement('button');
//     item__delete.setAttribute('class', 'item__delete');
//     item__delete.innerHTML = `<i class="fas fa-trash-alt"></i>`;
//     item__delete.addEventListener('click', () => {
//         items.removeChild(item.parentNode);
//     });

//     item.appendChild(item__name);
//     item.appendChild(item__delete);
//     return item;
// };

newForm.addEventListener('submit', (event) => {
    event.preventDefault();
    onAdd();
});
// addBtn.addEventListener('click', () => {
//     onAdd();
// });

// input.addEventListener('keydown', (event) => {

//     if(event.key === 'a'){
//         event.preventDefault();
//     }

//     if(event.isComposing){
//         return;
//     }
//     // 글자가 만들어지고 있는 중에 발생하는 이벤트는 무시

//     if(event.key === 'Enter'){
//         onAdd();
//     }
// });
// // keypress는 deprecated 되어 버림
// // keydown(누르면 이벤트 발생), keyup(떼면 이벤트 발생) 차이점 알아두기.


items.addEventListener('click', (event) => {
    const id = event.target.dataset.id
    if(id){
        const deletedList = document.querySelector(`.item__row[data-id='${id}']`);
        deletedList.remove();
    }
});