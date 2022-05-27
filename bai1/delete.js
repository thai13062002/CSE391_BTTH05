
let btndelete = document.querySelector(".btn-delete")
let modal=document.querySelector(".modal-item")
let cancel=document.querySelector(".btn-cancel")
let confirm=document.querySelector(".btn-confirm")
let todoitem=document.querySelector(".todoitem")
btndelete.addEventListener('click', showPopup)
function showPopup(){
    modal.classList.add('open')
}
cancel=addEventListener('click',cancelmodal)
function cancelmodal()
{
    modal.classList.remove('open')
}
confirm=addEventListener('click', confirmmodal)
function confirmmodal()
{
    todoitem.remove();
}
