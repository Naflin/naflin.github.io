window.onload = function() {

    var text = {};
    text.opacityIn = [0,1];
    text.scaleIn = [0.2, 1];
    text.scaleOut = 3;
    text.durationIn = 800;
    text.durationOut = 600;
    text.delay = 500;

    anime.timeline({
        loop: false
    }).add({
        targets: '.animated-text .letters-1',
        opacity: text.opacityIn,
        scale: text.scaleIn,
        duration: text.durationIn
    }).add({
        targets: '.animated-text .letters-1',
        opacity: 0,
        scale: text.scaleOut,
        duration: text.durationOut,
        easing: "easeInExpo",
        delay: text.delay
    }).add({
        targets: '.animated-text .letters-2',
        opacity: text.opacityIn,
        scale: text.scaleIn,
        duration: text.durationIn
    }).add({
        targets: '.animated-text .letters-2',
        opacity: 0,
        scale: text.scaleOut,
        duration: text.durationOut,
        easing: "easeInExpo",
        delay: text.delay
    }).add({
        targets: '.animated-text .letters-3',
        opacity: text.opacityIn,
        scale: text.scaleIn,
        duration: text.durationIn
    }).add({
        targets: '.animated-text .letters-3',
        opacity: 0,
        scale: text.scaleOut,
        duration: text.durationOut,
        easing: "easeInExpo",
        delay: text.delay
    }).add({
        targets: '.animated-text',
        opacity: 0,
        duration: 500,
        delay: 500,
        complete: function() {
            window.location.href = '/home';
        }
    });
};