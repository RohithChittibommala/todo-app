var btn=document.getElementById('button');
btn.addEventListener('click',addItem);
header.addEventListener('click',removeItem);
header.addEventListener('click',doneItem);
header.addEventListener('dblclick',unCheckItem);
function unCheckItem(e)
{

    e.preventDefault();
if(e.target.classList.contains('fas')&&e.target.parentElement.parentElement.style.textDecoration=="line-through")
{
    var item=e.target.parentElement.parentElement;

    var item1=e.target.parentElement;
    item1.style.color="green"
    item1.innerHTML='<i class="far fa-check-circle fa-3x"></i>'

    item.style.textDecoration="none";
    item.style.backgroundColor="#fff";
    item.style.Color="black";


}

}

function doneItem(e)
{
e.preventDefault();
if(e.target.classList.contains('far'))
{
    var item=e.target.parentElement.parentElement;
    var item1=e.target.parentElement;
    item1.style.color="green"
    item1.innerHTML='<i class="fas fa-check-circle fa-3x"></i>'

    item.style.textDecoration="line-through";
    item.style.backgroundColor="lightgrey";
    item.style.Color="grey";


}
}

function addItem(e)
{

e.preventDefault();
    var name=document.getElementById('inputText').value;
    // console.log(name.length);
    if(name.length>0)
    {
    var li=document.createElement('li');
    li.className='added';
    li.appendChild(document.createTextNode(name));
    var deleteb=document.createElement('button');
    var doneB=document.createElement('button');
    doneB.className='icon2';
    deleteb.className='icon1';
    doneB.innerHTML='<i class="far fa-check-circle fa-3x"></i>';
deleteb.innerHTML='<i class="fas fa-trash-alt fa-3x"></i>';
    header.appendChild(li);
    li.appendChild(doneB);
    li.appendChild(deleteb);
    }
    else
    {
        alert("master please add your task");
    }
}
// console.log(li.length);
function removeItem(e)
{
    e.preventDefault();
   if(e.target.classList.contains('fa-trash-alt'))
   {
var p=e.target.parentElement.parentElement;
// console.log(p);
header.removeChild(p);
   }

}
function animationRemove(pi)
{
    // li.
   
    // header

}