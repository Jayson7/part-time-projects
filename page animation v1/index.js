anime({

    targets: '.dance',
    translateX: [

        { value: -30, duration: 1000 },

        { value: 0, duration: 100 },
    ],
    delay: function(el, i, l) { return i * 100 + 100 },
    autoplay: true,
    loop: false,
    easing: 'easeInOutSine',


    opacity: [{
            value: "0"
        },
        {
            value: "1"
        },

    ]
});