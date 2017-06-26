<h2>Resources</h2>

<ul>
{% for topic in site.resources %}
  <li {% if topic.indent %} class="indent" {% endif %}>
    <a href="{{topic.url}}">{{ topic.topic }}</a>&mdash;{{topic.desc}}
  </li>
{% endfor %} 
</ul>
