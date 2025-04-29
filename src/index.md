---
layout: layouts/base.njk
---
    
# `note` as a content section

The simplest implementation of the `note`  model is as chunk of content "sectioned" by way of a heading tag. The `title` property populates a heading and markup in the in the `note`'s body come from the markdown widget provided by the CMS,from which subheadings have been disallowed.

On this interpretation, each `note` is subsection, contextually related under the page's level one heading. The intent is that each section contributes part of a coherent document. The reader ought not to suspect the page of having been assembled from discrete content modules rather than being a single composition.

[This article](https://www.smashingmagazine.com/2020/01/html5-article-section/) explains the distinction. 

{%- for note in collections.note | reverse -%}
<h2>{{ note.data.title }}</h2>
{{ note.content | safe}}
{%- endfor -%}
