  <h2>Topics</h2>

<ul>
{% for topic in site.topics %}
  {% if topic.no_index %}{% else %}
  <li {% if topic.indent %} class="indent" {% endif %}>
    <a href="{{topic.url}}">{{ topic.topic }}</a>&mdash;{{topic.desc}}
  </li>
  {% endif %}
{% endfor %} <!-- for unit in site.dsw -->
</ul>
