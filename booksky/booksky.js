var overlayj=document.querySelector(".overlay")
var popupboxj=document.querySelector(".popup-box")
var sidebtnj=document.querySelector(".sidebutton")

sidebtnj.addEventListener('click',function(event){
    popupboxj.style.display="block"
    overlayj.style.display="block"
})



//cancel Button

var cancelbtn=document.getElementById("cancelbook")
cancelbtn.addEventListener("click",function(){
    event.preventDefault()
    popupboxj.style.display='none'
    overlayj.style.display='none'
})
//contianer, bookcontainer, add, 


var addbtn=document.getElementById("add-book")
var container=document.querySelector('.container')
var booktitle=document.getElementById("booktitle")
var bookauthor=document.getElementById("bookauthor")
var bookdescripation=document.getElementById("bookdescripation")

addbtn.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <P>${bookdescripation.value}</p>
    <button onclick="delepro(event)">Delete</button>`
    container.append(div)
    popupboxj.style.display='none'
    overlayj.style.display='none'
})

function delepro(event){
    event.target.parentElement.remove()
}
