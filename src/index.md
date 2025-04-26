---
layout: layouts/base.njk
---
    
# Notes

<ul>
{%- for note in collections.note -%}
    <h2>{{ note.title }}</h2>
    {{ content | safe}}
{%- endfor -%}
</ul>