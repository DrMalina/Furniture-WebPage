document.addEventListener('DOMContentLoaded', function () {

    /**************************  SLIDER   ***************************************/

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

    /*******************************   KALKULATOR   ******************************************************/

        // SHOW CHAIR OPTIONS

    var listArrows = document.querySelectorAll(".list_arrow");

    listArrows.forEach(function(arrow){
        arrow.addEventListener("click", function() {
            var listPanel = this.nextElementSibling;

            if(listPanel.style.display === "none" || listPanel.style.display === "") {
                listPanel.style.display = "block";
            } else {
                listPanel.style.display = "none";
            }
        });
    });

    //summary

    var leftPanel = document.querySelector('.panel_left'),
        rightPanel = document.querySelector('.panel_right'),
        finalPrice = document.querySelector('.sum span');

    //left panel detailed

    var leftPanelColor = document.querySelector('.panel_left .color'),
        leftPanelPattern = document.querySelector('.panel_left .pattern'),
        leftPanelTransport = document.querySelector('.panel_left .transport'),
        leftPanelTitle = document.querySelector('.panel_left .title'),

        //right panel detailed

        rightPanelTitle = document.querySelector('.panel_right .title'),
        rightPanelColor = document.querySelector('.panel_right .color'),
        rightPanelPattern = document.querySelector('.panel_right .pattern'),
        rightPanelTransport = document.querySelector('.panel_right .transport');

    //Calculate Price of Chair

    function calcPrice() {
        var finalSum = 0;

        for(var i=0; i<rightPanel.children.length; i++){
            if(rightPanel.children[i].innerText !== '' && rightPanel.children[i].innerText !== '-'){
                finalSum += Number(rightPanel.children[i].innerText)
            }
        }

        finalPrice.innerText = finalSum + 'zł';
    }


    //Type of chair

    var chairType = document.querySelectorAll('.type li');

    chairType.forEach(function (type) {
        type.addEventListener('click', function () {

            var optionSelected = this.innerText;
            var price = this.dataset.price;

            //hide options
            this.parentElement.style.display = 'none';
            //show selected option
            this.parentElement.previousElementSibling.previousElementSibling.innerText = optionSelected;
            this.parentElement.previousElementSibling.previousElementSibling.style.color = '#575757';
            //show in summary
            leftPanelTitle.innerText = optionSelected;
            //show price
            rightPanelTitle.innerText = price;
            //add to price
            calcPrice();

        })
    })

    //Color of chair

    var chairColor = document.querySelectorAll('.color li');

    chairColor.forEach(function (color) {
        color.addEventListener('click', function () {
            var optionSelected = this.innerText;
            var price = this.dataset.price;

            //hide options
            this.parentElement.style.display = 'none';
            //show selected option
            this.parentElement.previousElementSibling.previousElementSibling.innerText = optionSelected;
            this.parentElement.previousElementSibling.previousElementSibling.style.color = '#575757';
            //Show in summary
            leftPanelColor.innerText = optionSelected;
            //show price
            rightPanelColor.innerText = price;
            //add to price
            calcPrice();

        })
    })

    //Material of chair

    var chairMaterial = document.querySelectorAll('.material li');

    chairMaterial.forEach(function(material){
        material.addEventListener('click', function () {
            var optionSelected = this.innerText;
            var price = this.dataset.price;

            //hide options
            this.parentElement.style.display = 'none';
            //show selected option
            this.parentElement.previousElementSibling.previousElementSibling.innerText = optionSelected;
            this.parentElement.previousElementSibling.previousElementSibling.style.color = '#575757';
            //show in summary
            leftPanelPattern.innerText = optionSelected;
            //show price
            rightPanelPattern.innerText = price;
            //add to price
            calcPrice();
        })
    })

    //Transport

    var transportOption = document.getElementById('transport');

    transportOption.addEventListener('click', function () {
        if (this.checked){
            //show in summary
            leftPanelTransport.innerText = 'Transport';
            //show price
            rightPanelTransport.innerText = this.dataset.price;
            //add to price
            calcPrice();
        } else {
            leftPanelTransport.innerText = '';
            rightPanelTransport.innerText = '';
            calcPrice();
        }
    })
});