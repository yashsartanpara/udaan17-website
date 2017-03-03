var JQDoc = $(document);
JQDoc.ready(function () {
    $(".main").onepage_scroll({
        animationTime: 600,
        easing: 'ease-in-out',
        updateURL: true,
        loop: false,
        pagination: false,
        direction: "horizontal"
    });
    var temp = document.getElementById('swipe-window');
    var hammer = new Hammer.Manager(temp);
    var swipe = new Hammer.Swipe();
    hammer.add(swipe);
    hammer.on('swipeleft', function (e) {
        $(".main").moveDown();
    });
    hammer.on('swiperight', function (e) {
        $(".main").moveUp();
    });

});
