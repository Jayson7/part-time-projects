window.addEventListener("load", () => {
    var input = document.querySelector("input");
    var button = document.querySelector("button");


    button.addEventListener("click", () => {
        text = input.value;
        len = text.length
        alert(len)
    })
})