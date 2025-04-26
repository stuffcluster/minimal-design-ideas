---
layout: layouts/base.njk
---
    
# Notes

{%- for note in collections.note -%}
    <h2>{{ note.data.title }}</h2>
    {{ note.content | safe}}
{%- endfor -%}
