---
layout: layouts/base.njk
---
    
# link to `note` page 

We can interlink and cross-refer notes by giving each one its own page. Now authors can easily bicker and dismiss each other's opinions by including a simple link.

<ul>
{%- for note in collections.note | reverse -%}

   <li> <a href="{{note.url}}">{{ note.data.title }}</a> </li>

{%- endfor -%}
</ul>