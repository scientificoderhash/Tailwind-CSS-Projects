const a = document.body.querySelector('#hamburger');
const b = document.body.querySelector('#nav');

a.addEventListener("click", ()=>{
    if(b.classList.contains("hidden")){
        b.classList.remove("hidden");
        // b.classList.remove("sm:h-0");
        b.classList.add("sm:h-auto");
    }else{
        b.classList.add("hidden");
    }
})