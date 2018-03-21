document.addEventListener('DOMContentLoaded', function () {
    var prev = document.querySelector('.arrowLeft'),
        next = document.querySelector('.arrowRight'),
        imgs = document.querySelectorAll('.galleryPhoto ul li'),
        counter = Math.floor(Math.random()*2);

    //console.log(imgs, prev , next); DZIAŁA
    console.log(imgs[0], imgs[1]);

    imgs[counter].classList.add('visible');

    var timer = 0;

    
    function changeSlideManual() {

        prev.addEventListener('click', function (e) {
            e.preventDefault();

            clearTimeout(timer);


            imgs[counter].classList.remove('visible');
            counter--;
            if (counter<0) {counter=imgs.length-1}
            imgs[counter].classList.add('visible');

           timer= setTimeout(changeSlideAutomatically,7000);

        });

        next.addEventListener('click', function (e) {
            e.preventDefault();

            clearTimeout(timer);

            imgs[counter].classList.remove('visible');
            counter++;
            if(counter>imgs.length-1) {counter=0}
            imgs[counter].classList.add('visible');

            timer = setTimeout(changeSlideAutomatically,7000);
        });
    }

    function changeSlideAutomatically() {
        imgs[counter].classList.remove('visible');
        counter++;
        if(counter>imgs.length-1) {counter=0}
        imgs[counter].classList.add('visible');

        timer = setTimeout(changeSlideAutomatically,7000);


       /* prev.addEventListener('click', function () {
           clearTimeout(timer);
           timer= setTimeout(changeSlideAutomatically,5000);
        });

        next.addEventListener('click', function () {
           clearTimeout(timer);
           timer= setTimeout(changeSlideAutomatically,5000);
        }); */
    }

    changeSlideManual();
    changeSlideAutomatically();
});