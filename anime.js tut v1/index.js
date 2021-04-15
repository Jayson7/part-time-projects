anime({
    targets: 'div.box.one',
    translateY: [
        { value: 200, duration: 1000 },
        { value: -200, duration: 1000 }
    ],
    rotate: {
        value: '100turn',
        easing: 'easeInOutSine'
    },

    autoplay: true,
    loop: true
});
anime({
    targets: 'div.box.two',
    translateX: [
        { value: 200, duration: 1000 },
        { value: -200, duration: 1000 }
    ],
    rotate: {
        value: '100turn',
        easing: 'easeInOutSine'
    },

    autoplay: true,
    loop: true
});
anime({
    targets: 'div.box.three',
    translateX: [
        { value: 600, duration: 1000 },
        { value: -600, duration: 1000 }
    ],
    rotateX: {
        value: '100turn',
        easing: 'easeInOutSine'
    },

    autoplay: true,
    loop: true
});
anime({
    targets: 'div.box.four',
    translateY: [
        { value: 200, duration: 1000 },
        { value: -200, duration: 1000 }
    ],
    rotateY: {
        value: '100turn',
        easing: 'easeInOutSine'
    },

    autoplay: true,
    loop: true
});