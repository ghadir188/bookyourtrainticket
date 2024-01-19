
        window.onload = function () {
            var currentButton = 0;
            var carouselButtons = document.getElementsByClassName("carouselnav");
            setInterval(() => {
                checkNextCarouselButton();
                console.log(carouselButtons);
            }, 2000);
            function checkNextCarouselButton() {
                currentButton = (currentButton + 1) % 5;
                carouselButtons[currentButton].checked = true;
                document.getElementById('main#carousel').style.setProperty('--position', currentButton);

            }
        };