document.addEventListener("DOMContentLoaded", function(){
    var btn_dishes = document.querySelectorAll('.info .info__layout-choose a');
    var main_content = document.querySelectorAll('.info .info__main');
    // var slide_active = document.querySelector('.info .info__main.main__active');
    var menu_container = document.querySelector('.content__dishes-info');
    var arrow_left = document.querySelector('.title__left');
    var arrow_right = document.querySelector('.title__right');
    var layout = document.querySelector('.info .info__layout');

    var title_h4 = document.querySelector('.info .info__layout-content .content__dishes-title h4');

    var title_menu = ["Beverages", "Starters","Mains/Grill", "Vegetarian", "Desserts"];

    var pos_slide = 0;

    menu_container.style.height = main_content[0].offsetHeight + 'px';
    for(let i = 0; i < btn_dishes.length; i++){
        btn_dishes[i].onclick = function(){
            pos_slide = i;
            manual_slide();
            return false;
        }
    }

    arrow_left.onclick = function(){
        pos_slide = pos_slide - 1;
        manual_slide();
        return false;
    }

    arrow_right.onclick = function(){
        pos_slide = pos_slide + 1;

        manual_slide();
        return false;
    }

    function display_arrow(){
        if( pos_slide === 0){
            arrow_left.style.display = 'none';
            arrow_right.style.display = 'block';
        }else{
            if(pos_slide === 4){
                arrow_left.style.display = 'block';
                arrow_right.style.display = 'none';
            }else{
                arrow_left.style.display = 'block';
                arrow_right.style.display = 'block';
            }
        }
    }

    function manual_slide(){
        display_arrow();
        menu_container.style.marginLeft = pos_slide*(-1068) + 'px';
        menu_container.style.height = main_content[pos_slide].offsetHeight + 'px';

        title_h4.innerText = title_menu[pos_slide];
    }
}, false)