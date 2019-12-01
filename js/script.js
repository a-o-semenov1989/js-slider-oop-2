window.onload = function () {
    var images = document.querySelectorAll('.gallery-1 .photos img');
    var slider = new Slider(images);
    
    document.querySelector('.gallery-1 .buttons .prev').onclick = function(){
        slider.prev();
    }
 
    document.querySelector('.gallery-1 .buttons .next').onclick = function(){
        slider.next();
    }
    
    var images2 = document.querySelectorAll('.gallery-2 .photos img');
    var slider2 = new Slider(images2);
    
    document.querySelector('.gallery-2 .buttons .prev').onclick = function(){
        slider2.prev();
    }
 
    document.querySelector('.gallery-2 .buttons .next').onclick = function(){
        slider2.next();
    }

    setInterval(
        slider2.next, 1000); //теперь контекст не теряется
}

function Slider(images) {
    this.images = images;
    var i = 0;
    var slider = this; //таким образом мы не теряем контекст //ссылка на текущий объект

    this.prev = function () {
        slider.images[i].classList.remove('showed');
        i--;

        if (i < 0) {
            i = slider.images.length - 1;
        }

        slider.images[i].classList.add('showed');
    }

    this.next = function () {
        slider.images[i].classList.remove('showed');
        i++;

        if (i >= slider.images.length) {
            i = 0;
        }

        slider.images[i].classList.add('showed');
    }
}