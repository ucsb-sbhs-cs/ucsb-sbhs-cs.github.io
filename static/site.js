// site.js

$(document).bind('pageinit', function( event, data ){
    console.log("pageinit firing");

    $('[data-topic]').each(function() {
	var data_topic = $(this).data('topic');
	var data_desc = $(this).data('desc');

	t = topicHash[data_topic];
	var desc =  (data_desc=="none") ? '': (t.desc);
	    
	$(this).html($('<span><a href="' + t.url + '">' + t.topic + '</a>' + desc + '</span>'));
    });

    
    $('[data-viz]').each(function() {
	var viz = $(this).data('viz');
	$(this).html(Viz(viz));
    });


});





