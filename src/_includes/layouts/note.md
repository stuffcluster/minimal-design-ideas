---
layout: "layouts/base.njk"
---

# {{ title }}

{{ content | safe }}

<details>
    <summary>
        note as an independent page
    </summary>

It's useful to be able to pick out specific notes by referring to a page, but there's an interesting thing here: we're assigning each note a URL to allow editors to arbitrarily refer to other bits of content, _not_ (primarily) because it's valuable to consume that content as a single page. 

Consider other approaches we might take: 

- make the whole note quotable inside another note [The disclosure](/details-summary) pattern could be useful for that, but:
    - it would get messy with recursive note-nesting
    - more complex and less flexible to implement in the CMS
    - much more cumbersome to use as an author
- give every heading a slug-based id for in-page anchor linking.
    - feels less precise in terms of UX
    - allows linking to a _contextualised_ note; you might want to link to piece on heading hierarchy in a list of notes tagged "SEO" rather than the **same note** as a section of a larger article about accessibility.
    - as the number of notes grows, this system will fail if the display page is paginated

Anyway, my point is that we have generated a UI/UX problem for ourselves: now we have to handle pages with very little content. Notes (by definition) are short, discrete chunks of content concerned with a single subject. A page with a single note on it is going to look very empty, possibly even broken, if your page template expects a certain rhythm of use in which the user views above the fold information, then scrolls.
</details>
 

## tags    
<ul>
{% for tag in tags %}
    <li>{{tag}}</li>
{% endfor %}
</ul>
