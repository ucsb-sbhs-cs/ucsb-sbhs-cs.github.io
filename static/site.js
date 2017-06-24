// site.js

$(document).bind('pageinit', function( event, data ){
    console.log("pageinit firing");

    $('[data-topic]').each(function() {
	var value = $(this).data('topic');	
	t = topicHash[value]
	console.log("t=" + JSON.stringify(t));
	$(this).html($('<span><a href="' + t.url + '">' + t.topic + '</a>&mdash;' + t.desc + '</span>'));
    });

    
    $('[data-viz]').each(function() {
	var viz = $(this).data('viz');
	$(this).html(Viz(viz));
    });


});





