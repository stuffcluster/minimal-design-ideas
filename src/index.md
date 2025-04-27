---
layout: layouts/base.njk
---
    
# `note` as a content section

The simplest implementation of the `note` content model is as a generic `<section>`. The `title` property populates a heading element and tags in the `section`'s body come from the CMS's markdown widget. The CMS does not permit internal headings.

On this interpretation, each `note` is subsection, contextually related under the page's level one heading. The intent is that each section contributes part of a coherent document. The reader ought not to suspect the page of having been assembled from discrete content modules rather than being a single composition.  

{%- for note in collections.note | reverse -%}
    <section>
        <h2>{{ note.data.title }}</h2>
        {{ note.content | safe}}
    </section>
{%- endfor -%}
