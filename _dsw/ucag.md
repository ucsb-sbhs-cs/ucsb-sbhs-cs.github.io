---
title: "Designing Software for the Web"
layout: default
---

<h2>Course Description</h2>
{% include dsw_desc.md %}


<h2>Units</h2>

{% for unit in site.dsw %}
{% if unit.num  %} <!-- avoids including index.md in list -->

<h3><a href="{{unit.url}}">Unit {{unit.num}}: {{unit.name}}</a></h3>

<h4>Unit Summary</h4>
{{ unit.uc_ag_summary }}

<h4>Key Assignment</h4>
{{ unit.uc_ag_assignment }}

{% endif %} <!-- if unit.num -->
{% endfor %} <!-- for unit in site.dsw -->
