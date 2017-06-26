<h2>Assignments</h2>

<ul>
{% for a in site.assignments %}
  <li>
    <a href="{{a.url}}">{{ a.name}}</a>&mdash;{{a.desc}}
  </li>
{% endfor %} 
</ul>
