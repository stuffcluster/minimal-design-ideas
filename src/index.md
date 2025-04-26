---
title: home
layout: layouts/base.njk
year: 2025
week: 15
---
    
# {{ title }}

<ul>
{%- for post in collections.all -%}
    <li>
        <a href="{{ post.url }}">{{ post.url }}</a>
    </li>   
{%- endfor -%}
</ul>