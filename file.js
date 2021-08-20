
      const scrollToTop = document.querySelector(".scrollTop");
        scrollToTop.addEventListener("click",smoothScroll);
        function smoothScroll(){
        window.scrollTo({top:0,behavior:'smooth'});}