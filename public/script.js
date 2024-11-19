const a = document.body.querySelector('#hamburger');
const b = document.body.querySelector('#nav');

a.addEventListener("click", ()=>{
    // if(b.classList.contains("hidden")){
    //     b.classList.remove("hidden");
    //     // b.classList.remove("sm:h-0");
    //     // b.classList.add("");
    // }else{
    //     b.classList.add("hidden");
    // }

    if (b.classList.contains('hidden')) {
        // Remove "hidden" to make the element display
        b.classList.remove('hidden');
    
        // Add animation classes
        setTimeout(() => {
          b.classList.remove('opacity-0', 'transform', 'scale-95');
        }, 10); // Delay for transition effect
      } else {
        // Add animation classes for hiding
        b.classList.add('opacity-0', 'transform', 'scale-95');
    
        // Use a delay before hiding the element completely
        setTimeout(() => {
          b.classList.add('hidden');
        }, 300); // Match transition duration
      }
})
