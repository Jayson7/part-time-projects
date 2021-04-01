window.addEventListener("load", () => {
    var bars = document.getElementById("bars");
    var times = document.getElementById("times");
    window.addEventListener('resize', () => {
        var headerDisplay = document.querySelector("header").style.display = "none";

        if (window.innerWidth < 900) {
            bars.addEventListener("click", () => {
                var timesDisplay = document.querySelector("span > .fa-times").style.display = "flex";
                var barsDisplay = document.querySelector("span > .fa-bars").style.display = "none";


                var headerDisplay = document.querySelector("header").style.display = "flex";


            })
            times.addEventListener("click", () => {

                var headerDisplay = document.querySelector("header").style.display = "none";

                var timesDisplay = document.querySelector("span > .fa-times").style.display = "none";
                var barsDisplay = document.querySelector("span > .fa-bars").style.display = "flex";

            })

        } else {
            var headerDisplay = document.querySelector("header").style.display = "flex";

        }
    })
})