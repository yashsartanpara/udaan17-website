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
});
