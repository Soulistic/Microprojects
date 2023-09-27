const countValue=document.querySelector('#display');
const increment=()=>{
    let value=parseInt(countValue.innerHTML);
    value++;
    countValue.innerHTML = value;
};
const decrement=()=>{
    let value=parseInt(countValue.innerHTML);
    value--;
    countValue.innerHTML = value;
};