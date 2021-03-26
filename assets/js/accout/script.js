document.addEventListener("DOMContentLoaded", function(){

    menu_responsive();
    function menu_responsive(){
        let icon_menu = document.querySelector('.menu .menu__top .top__icon');
        let menu_bottom = document.querySelector('.menu .menu__bottom');
        
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
}, false)