Handlebars.registerHelper('succ', function (index) {
    return index + 1
});

Handlebars.registerHelper('urlencode', function (str) {
    return encodeURIComponent(str);
});

var events = data.tech.find(function (department) {
    return department.alias == window.department
}).events;

$(function () {
    $('#events').html(events.map(function (event, index) {
        return '<li style="padding: 0 ' + Math.floor(Math.random() * 25) + 'px;"' +
            '" class="event-name" data-index="' + index + '">' + event.name + '</li>'
    }));
    $('.event-name').click(function () {
        openEventModal(this);
    });
});

window.onhashchange = function () {
    if (location.hash == '') closeEventModal();
    else populateModal(location.hash.substr(7))
};

function openEventModal(elem) {
    var index = $(elem).data('index');
    window.location.hash = 'event-' + index;
}

function closeEventModal() {
    var modal = $('#event-modal')
        .removeClass('modal-open-animation')
        .addClass('modal-close-animation')
    setTimeout(function () {
        modal.css('display', 'none');
    }, 500)
}

function populateModal(index) {
    $('#event-modal')
        .html(Handlebars.templates['event'](events[index]))
        .removeClass('modal-close-animation')
        .css('display', 'block')
        .addClass('modal-open-animation');
    $('.close').on('click', function () {
        history.back()
    });
}