---
title: Your stylesheets are not authoritative
description: "Brand styles "
date: 2025-04-27T08:33:01.993Z
tags:
  - note
---
M﻿any things &mdash; maybe even the *majority* of things &mdash; we normally think of as crucial aspects of a website's design, should actually only be regarded as superficial and arbitrary. 

* brand styles
* presentational choices
* UX enhancements
* v﻿isual affordances

W﻿e think of our visual designs as the way the website looks "by default" and try to exercise a totalitarian level of control over it. Maybe it would be better to think of the default as being just the HTML with no CSS or JS applied. We can make in-house choices about how we want to improve that experience for our users, but we should do so in a way that's as agnostic as possible about the client they might be using (AT, e-ink display, plaintext reader, etc) and in a way that respects -- faciltates, even -- their right to programatically adapt the content to their own needs.