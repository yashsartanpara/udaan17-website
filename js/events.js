var JQDoc = $(document);

Handlebars.registerHelper('succ', function (index) {
    return index + 1
});

Handlebars.registerHelper('urlencode', function (str) {
    return encodeURIComponent(str);
});

JQDoc.ready(function () {
    //begin:background color and img

    $('body').css('background-color', $('#ubg').data('ubgc'));
    $('.udaan-pop-heads').attr('src', "img/" + $('#ubg').data('ubgi') + ".svg");
    $('.pop-head-line').attr('src', "img/" + $('#ubg').data('ubgi') + "-line.svg");
    //end: background color and img
    //begin: jqcloud
    document.eventData = getTechEvents($('#ubg').data('udpt'));
    $('#event').html(getWordArray(document.eventData).map(function (event) {
        var randomPadding = Math.floor(Math.random() * 25) + 'px';
        return '<li style="padding: 0px ' +
            randomPadding  + '"' +
            '" class="event-name" data-id="' +
            event.id  + '">' +
            event.text +
            '</li>'
    }));

    $('.event-name').click(function(){
        openeventmodal(this);
    });

    // end:jqcloud
    //start: modal
    //end:modal
});
window.onhashchange = function () {
    if (location.hash == '') {
        closeEventModal();
    }
};

function openeventmodal(elem) {
    var index = +($(elem).data('id'));
    window.location.hash = 'event' + index;
    var modal = $('#event-modal');
    var modalData = (document.eventData[index]);
    modalData.theme = theme;
    modal.html(Handlebars.templates['event'](modalData));
    $('.close').on('click', closeEventModal);
    modal.css('animation', 'zoomIn 0.4');
    modal.css('display', 'block');

}

function closeEventModal() {
    $('#event-modal').css('display', 'none');
}


function getTechEvents(deptName) {
    return data.tech.find(function (dept) {
        return dept.name == deptName;
    }).events;
}

function getWordArray(events) {
    return events.map(getWordData);
}

function getWordData(event, id) {
    return {
        text: event.name,
        id: id
    }
}