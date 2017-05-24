---
title: "Designing Software for the Web"
layout: default
---

{% for unit in site.dsw %}
{% if unit.num  %} <!-- avoids including index.md in list -->

<h2><a href="{{unit.url}}">Unit {{unit.num}}: {{unit.name}}</a></h2>

<h3>Unit Summary</h3>
{{ unit.uc_ag_summary }}

<h3>Key Assignment</h3>
{{ unit.uc_ag_assignment }}

{% endif %} <!-- if unit.num -->
{% endfor %} <!-- for unit in site.dsw -->
