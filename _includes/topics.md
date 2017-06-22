  <h2>Topics</h2>

<ul>
{% for t in site.topics %}
  <li><a href="{{t.url}}">{{t.topic}}</a>&mdash;{{t.desc}}</li>
{% endfor %} <!-- for unit in site.dsw -->
</ul>
