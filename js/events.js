var JQDoc = $(document);
JQDoc.ready(function () {
    //begin:background color and img

    $('body').css('background-color', $('#ubg').data('ubgc'));
    $('.udaan-pop-heads').attr('src', "img/" + $('#ubg').data('ubgi')+".svg");
    $('.pop-head-line').attr('src', "img/" + $('#ubg').data('ubgi')+"-line.svg");
    //end: background color and img

    $('.modal-close').on('click',function () {
        $('.modal').css('display', 'none');
    });
});
function openeventmodal(elem) {
    console.log($(elem).children('a').attr('href'));
    var temp = document.getElementById($(elem).children('a').attr('href').slice(1));
    $(temp).css('animation', 'zoomIn 0.4');
    $(temp).css('display', 'block');

}
