  <h2>Designing Software for the Web (Honors)</h2>

  <table>
    <thead>
  <tr><th>unit</th><th>name</th><th>summary</th><th>topics</th></tr>
  </thead>

<tbody>

{% for unit in site.dsw %}
{% if unit.hnum  %} <!-- avoids including index.md in list -->
  <tr>
     <td class="unit_num">{{unit.hnum}}</td>
     <td class="unit_name"><a href="{{unit.url}}">{{ unit.name }}</a></td>
     <td class="unit_summary">{{ unit.summary }}</td>
     <td class="unit_topics">{% for topic in unit.topics %}{% if forloop.first == true %}{{ topic }}{% else %},{{ topic }}{% endif %}{% endfor %}</td>
   </tr>

{% endif %} <!-- if unit.num -->
{% endfor %} <!-- for unit in site.dsw -->
  </tbody>
  </table>
