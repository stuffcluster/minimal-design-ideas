---
layout: layouts/base.njk
---
    
# `Note` as disclosure summary

The `title` property of the `note` content model populates the `summary` child of the `details` element.

The value of this is the opportunity to declutter the document by permitting the `note` body to be hidden. This UI implies that the content of each `note` is available to the reader if the summary suggests it's relevant, but each one is inherently optional.

The notes are presented as being independent, unordered, and fit for consumption in arbitrary combinations.

It's tempting to think that these [should be wrapped in `<article>` tags](https://www.smashingmagazine.com/2020/01/html5-article-section/) and a heading included in the `<summary>`, but since this is just a minimal UI demo there't not enough context to justify that. Screen reader test required. 

{% for note in collections.note | reverse %}
    <details>
        <summary>{{ note.data.title }}</summary>
        {{ note.content | safe}}
    </details>
{% endfor %}


