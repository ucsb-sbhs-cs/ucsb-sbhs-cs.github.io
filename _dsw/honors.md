---
title: "Designing Software for the Web (Honors)"
layout: default
---

{% for unit in site.dsw %}
{% if unit.hnum  %} <!-- avoids including index.md in list -->

<h2><a href="{{unit.url}}">Unit {{unit.hnum}}: {{unit.name}}</a></h2>

<h3>Summary</h3>
{{ unit.summary }}

<h3>Topics</h3>
<ul>
{% for topic in unit.topics %}
<li>{{ topic }}</li>
{% endfor %}
</ul>

<h3>Learning Objectives</h3>
<ul>
{% for lo in unit.learning_objectives %}
<li>{{ lo }}</li>
{% endfor %}
</ul>


{% endif %} <!-- if unit.num -->
{% endfor %} <!-- for unit in site.dsw -->
