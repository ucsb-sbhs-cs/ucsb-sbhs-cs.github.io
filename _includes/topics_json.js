// _includes/topics_json.js

var topicHash = {
	{% for t in site.topics %}
    "{{t.topic}}" : { "topic" : "{{t.topic}}",
		      "desc" : "{{t.desc}}",
		      "url" : "{{t.url}}"
		    },
	{% endfor %}
};

console.log("topicHash:" + JSON.stringify(topicHash));
