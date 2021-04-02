window.addEventListener("load", () => {


    var nav = document.querySelector("nav");
    var times = document.querySelector(".fa-times");
    var bars = document.querySelector(".fa-bars");
    bars.addEventListener("click", () => {
        times.style.display = "flex";
        bars.style.display = "none";
        nav.style.display = "grid";
        window.addEventListener("resize", () => {
            times.style.display = "none";

        })

    })
    times.addEventListener("click", () => {
        times.style.display = "none";
        bars.style.display = "flex";
        nav.style.display = "none";

    })
    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            bars.style.display = "none";
            nav.style.display = "flex"
            times.style.display = "none"
        }
        if (window.innerWidth < 900) {
            bars.style.display = "flex";
            nav.style.display = "none"
        }


    })

})