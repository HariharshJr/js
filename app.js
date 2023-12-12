let button=document.querySelector('.arrow');
links=document.querySelector('.nav-links');
button.addEventListener("click", ()=> {
links.classlist.toggle('display');
})