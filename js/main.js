var JQDoc = $(document);
JQDoc.ready(function () {
    //begin: scrolling
    $(".main").onepage_scroll({
        animationTime: 1000,
        easing: 'ease-in-out',
        updateURL: true,
        loop: false,
        pagination: false,
        direction: "horizontal"
    });
    //end : scrolling

    //begin: hammer swipe events
    var hammer = new Hammer.Manager(document.getElementById('swipe-window'));
    var swipe = new Hammer.Swipe();
    hammer.add(swipe);
    hammer.on('swipeleft', function () {
        $(".main").moveDown();
    });
    hammer.on('swiperight', function () {
        $(".main").moveUp();
    });
    //end: hammer swipe events

    //begin:collagePlus
    $('.Collage').collagePlus();
    //end : collagePlus
});
