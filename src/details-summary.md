---
layout: layouts/base.njk
---
    
# `Note` as disclosure summary

The `title` property of the `note` content model populates the `summary` child of the `details` element.

The value of this is the opportunity to declutter the document by permitting the `note` body to be hidden. This UI implies that the content of each `note` is available to the reader if the summary suggests it's relevant, but each one is inherently optional.

The notes are presented as being independent, unordered, and fit for consumption in arbitrary combinations.

{% for note in collections.note | reverse %} 
    <details>
        <summary>{{ note.data.title }}</summary>
        {{ note.content | safe}}
    </details>
{% endfor %}


