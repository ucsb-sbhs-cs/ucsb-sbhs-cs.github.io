// site.js

$(document).bind('pageinit', function( event, data ){
    console.log("pageinit firing");

    $('[data-topic]').each(function() {
	var t = topicHash[$(this).data('topic')];
	console.log("t=" + JSON.stringify(t));
	$(this).html($('<p><a href="' + t.url + '">' + t.topic + '</a>&mdash;' + t.desc + '</p>'));
    });

    $('[data-viz]').each(function() {
	var viz = $(this).data('viz');
	$(this).html(Viz(viz));
    });


});





