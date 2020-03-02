function mvopen() {
    $('.mainVideo-blackBG').css('display','flex');
    $('#video-placeholder').get(0).play();
}

function mvcolse() {
    $('.mainVideo-blackBG').css('display','none');
    $('.mainVideo iframe').remove();
    $('.mainVideo').append('<iframe id="video-placeholder" class="iframe_video" width="600" height="400" src="https://www.youtube.com/embed/sW6VacEFOn4?rel=0&amp;modestbranding=1&amp;autoplay=0&amp;enablejsapi=1&amp;origin=http%3A%2F%2Fgon.twwecan.com&amp;widgetid=1" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player"></iframe>');
}