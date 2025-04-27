---
layout: layouts/base.njk
---
    
# link to `note` page 

<ul>
{%- for note in collections.note | reverse -%}

   <li> <a href="{{note.url}}">{{ note.data.title }}</a> </li>

{%- endfor -%}
</ul>