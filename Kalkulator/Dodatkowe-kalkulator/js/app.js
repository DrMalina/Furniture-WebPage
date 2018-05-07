

document.addEventListener('DOMContentLoaded', function () {

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
        finalPrice = document.querySelector('.sum strong');

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

            //hide options
            this.parentElement.style.display = 'none';
            //show selected option
            this.parentElement.previousElementSibling.previousElementSibling.innerText = optionSelected;
            this.parentElement.previousElementSibling.previousElementSibling.style.color = 'black';
            //show in summary
            leftPanelTitle.innerText = optionSelected;
        })
    })

    //Color of chair

    var chairColor = document.querySelectorAll('.color li');

    chairColor.forEach(function (color) {
        color.addEventListener('click', function () {
            var optionSelected = this.innerText;

            //hide options
            this.parentElement.style.display = 'none';
            //show selected option
            this.parentElement.previousElementSibling.previousElementSibling.innerText = optionSelected;
            this.parentElement.previousElementSibling.previousElementSibling.style.color = 'black';
            //Show in summary
            leftPanelColor.innerText = optionSelected;
        })
    })

    //Material of chair

    var chairMaterial = document.querySelectorAll('.material li');

    chairMaterial.forEach(function(material){
        material.addEventListener('click', function () {
            var optionSelected = this.innerText;

            //hide options
            this.parentElement.style.display = 'none';
            //show selected option
            this.parentElement.previousElementSibling.previousElementSibling.innerText = optionSelected;
            this.parentElement.previousElementSibling.previousElementSibling.style.color = 'black';
            //show in summary
            leftPanelPattern.innerText = optionSelected;
        })
    })


});
