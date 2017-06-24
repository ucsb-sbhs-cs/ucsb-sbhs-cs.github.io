// _includes/topics_json.js

var topicHash = {
	{% for t in site.topics %}
    "{{t.topic}}" : { "topic" : "{{t.topic}}",
		      "desc" : "{{t.desc}}",
		      "url" : "{{t.url}}",
		      "indent" : {% if t.indent %}true{% else %} false {%endif%}
		    },
	{% endfor %}
};

console.log("topicHash:" + JSON.stringify(topicHash));
