var JQDoc = $(document);
JQDoc.ready(function () {
    //begin:background color and img
    $('body').css('background-color', $('#ubg').data('ubgc'));
    $('.udaan-pop-heads').css('background-image', "url('img/" + $('#ubg').data('ubgi') + "')");
    //end: background color and img
});