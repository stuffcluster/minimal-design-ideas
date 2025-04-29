---
title: Unstyled elements
description: Unstyled by default is harder than you think
date: 2025-04-29T10:35:07.101Z
tags:
  - note
---

Ignoring CSS completely is turning out to be a very interesting exercise. It forces you to think in a much more focused way on what it is you're trying to do at a structural level.

If we do adopt a principle that [unstyled is the default presentation](/notes/your-stylesheets-are-not-authoritative) then things should look "good" in HTML alone. 

But I'm running into issues with that due to the nature of the elements themselves. 

For example, say I want to render [a collection of notes as disclosure summary elements](/details-summary). Since each one is a standalone piece, capable of being syndicated to multiple contexts, [I ought to make each one an `<article>`](https://www.smashingmagazine.com/2020/01/html5-article-section/). 

Now, [`article` is a sectioning element and should be given a heading](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/article). We can wrap the `title` data inside `summary`, where [headings are explicitly permitted](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/summary).

But because the heading is a block level element, it wraps onto a new line:

<details>
<summary><h3>See?</h3>
</details>

STOP PRESS! On referring to that MDN article, it literally says:

> "This currently has some spacing issues that could be addressed using CSS."

Well, this is the thing I'm complaining about - I don't want to use CSS (yet!). But also as well, _none of this matters_ beacause it turns out:

>"Warning: Because the `<summary>` element has a default role of button (which strips all roles from child elements), this example will not work for users of assistive technologies such as screen readers. The `<h4>` will have its role removed and thus will not be treated as a heading for these users."

And since they're the very users I want to make it a heading FOR, I need to rethink the whole thing. 