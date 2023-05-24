
function addNavShadow(){


    if(this.scrollY > 100){

        const navbar = document.getElementById('navbar')
        navbar.style.boxShadow="0px 1px 5px gray";
    }
    else if(this.scrollY < 100){
        
        const navbar = document.getElementById('navbar')
        navbar.style.boxShadow="0px 0px 0px gray";
    }

    

}


window.addEventListener('scroll', addNavShadow, false)