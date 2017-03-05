var JQDoc = $(document);
JQDoc.ready(function () {
    //begin:background color and img
    $('body').css('background-color', $('#ubg').data('ubgc'));
    $('.udaan-pop-heads').attr('src', "img/" + $('#ubg').data('ubgi'));
    //end: background color and img
});