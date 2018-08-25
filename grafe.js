var vis = function (e) {
    var count = $(e).children('td').not(':first-of-type').length;
    var width = $('.chart').height();
    var barwidth = (width / count) - 10;
    var heighest = 0;
    var chartTitle = $('th:first-of-type').html();
    var tableTitle = $('.table-title').html();
    var chartTitleVal = $(e).children('td:first-of-type').html();
    $('.chart').empty();
    $('.legend').empty();
    $('.titles').empty();
    $('.title').empty();
    $('.x-axis').empty();
    $('.title').html(chartTitleVal);
    $('.chart').prepend('<div class="x-axis">' + tableTitle + '</div>');
    $('th').not(':first-of-type').each(function () {
        var title = $(this).html();
        $('.titles').append('<div style="width:' + barwidth + 'px;">' + title + '</div>');
    });
    $(e).children('td').not(':first-of-type').each(function () {
        var contents = $(this).html();
        var value = parseInt(contents);
        if (value > heighest) {
            heighest = value
        }
    });

    $(e).children('td').not(':first-of-type').each(function () {
        var contents = $(this).html();
        var value = parseInt(contents);
        var barheight = (value / heighest) * 100;
        $('.chart').append('<div class="bar" style="width:' + barheight + '%; height:' + barwidth + 'px;"></div>');
        $('.legend').append('<div style="width:' + barwidth + 'px;">' + value + '</div>');
    });
}

$('tr').not('.header').on('click', function () {
    var x = $(this);
    x.css({ 'background': '#E2EBC2' }).addClass('selected').siblings().removeClass('selected').css({ 'background': '#FFFFFF' });
    vis(x);
});


$(function () {
    var x = $('tr').not('.header').first(); x.css({ 'background': '#E2EBC2' }).addClass('selected').siblings().css({ 'background': '#FFFFFF' });
    vis(x);
});

$('td').on('keyup paste input', function () {
    var x = $(this).parent();
    vis(x);
});

$('th').on('keyup paste input', function () {
    var x = $('.selected');
    vis(x);
});

$('.table-title').on('keyup paste input', function () {
    var x = $('.selected');
    vis(x);
});