document.addEventListener("DOMContentLoaded", function(){
    var menu_bottom = document.querySelector('.menu .menu__bottom');
    // click menu icon to display menu when responsive

    menu_responsive();

    // display_dropmenu();
    // fixed menu animation
    // fixed_menu();

    // window.onscroll = function(){
    //     let menu_top = document.querySelector('.menu .menu__top');
    //     if(window.pageYOffset > 200){
    //         menu_top.classList.add('menu__fixed');
    //     }else{
    //         menu_top.classList.remove('menu__fixed');
    //     }
    // }
    //Auto slides
    setInterval(slides_auto, 5000);
    function slides_auto(){
        let slides = document.querySelectorAll('.banner .banner__slide ul li');
        let slide_active = document.querySelector('.banner .banner__slide ul li.slide__active');
        let slide_content = document.querySelector('.banner .banner__btn a span');
        let pos_slide;
        
        for(pos_slide = 0; slide_active = slide_active.previousElementSibling; pos_slide++){}
        if(pos_slide < slides.length-1){
            for(let i = 0; i < slides.length; i++){
                slides[i].classList.remove('slide__active');
            }
            slides[pos_slide].nextElementSibling.classList.add('slide__active');
        }else{
            for(let i = 0; i < slides.length; i++){
                slides[i].classList.remove('slide__active');
            }
            slides[0].classList.add('slide__active');  
        }

        if((pos_slide) == 1){
            slide_content.innerHTML = "Enioy a drink or two with your friends!";
        }else{
            if((pos_slide) == 2){
                slide_content.innerHTML = "If food is an experience, you’ll find it in here";
            }else{
                slide_content.innerHTML = "Great ambience";
            }
        }
    }
    // End Auto slide 

    // Start Function fixed menu 
    // function fixed_menu(){
    //     let menu_top = document.querySelector('.menu .menu__top');
        
    //     window.onscroll = function(){
    //         if(window.pageYOffset > 100){
    //             menu_bottom.classList.add('menu__bottom_fixed');
    //             menu_top.classList.add('menu__top_hidden');
    //         }else{
    //             menu_bottom.classList.remove('menu__bottom_fixed');
    //             menu_top.classList.remove('menu__top_hidden');
    //         }
    //     }
    // }
    // end function fixed menu 

    // start function click menu icon to display menu when responsive 
    function menu_responsive(){
        let icon_menu = document.querySelector('.menu .menu__top .top__icon');
        
        icon_menu.onclick = function(){
            menu_bottom.classList.toggle('menu__bottom_display');

            if(menu_bottom.offsetHeight > 0){
                let height = menu_bottom.offsetHeight;
                // console.log(height);
                for(let i = height; i > 0; i--){
                    height--;
                    menu_bottom.style.height = height + 'px';
                }
            }else{
                let height = 0;
                for(let i =0; i < 650; i++){
                    height++;
                    menu_bottom.style.height = height + 'px';
                }
            }

            return false;
        }
    }
    
    function display_dropmenu(){
        let  dropdown = document.querySelectorAll('.menu .menu__bottom ul li.menu__bottom-dropdown');
        let dropdown_content = document.querySelectorAll('.menu .menu__bottom ul li.menu__bottom-dropdown .dropdown__content');
        
        let state = 0;
        for(let i = 0; i<dropdown.length; i++){
            dropdown[i].onclick = function(){

                dropdown_content[i].style.height = 'auto';
                dropdown_content[i].style.display = 'block';
                console.log(state);
                state++;
                if(state == 2){
                    dropdown_content[i].style.display = 'none';
                    state = 0;
                }
            }
        }
    }
}, false)