---
title: Identity by design
description: A system component's identity originates in the design intent, not
  in the implementation structure.
date: 2025-04-26T14:35:07.101Z
tags:
  - note
---
We think because two things look the same they are the same thing. Or, more commonly, we think that because two things look *similar* they should be variations on a single component. So we intone some development mantra: "DRY", "best practice", "It is known" and stuff in some props to account for stylistic variations across contexts. 

B﻿ut the whole idea of componentisation is to establish consistency. So if we have one component serving multiple (functional? UX?) purposes, then as soon as we want to *differentiate* those purposes, we're fucked. Imagine we have two kinds of boxes: one that signals user interaction is required ("I accept these T&Cs" \[checkbox]) and another that passively conveys important information to the user ("Important! by submitting this form you accept our T&Cs"). The initial design casts each of these as an inset block, maybe with different background colors, maybe one with border radius and one without; superficial differences implemented via props. 

S﻿o because these things **look** kind of similar at one arbitrary breakpoint in a static design artifact, we end up with a de facto system component based on the flimsiest of presentational inferences. Post-launch we discover that  the UI does not adequately communicate the legally significant difference between explicit and implicit consent, and we need to change it. What do you think happens? Do we split this "card" into two separate system components with distinct design intent? Nope. We just layer in more props to stylistically differentiate the instances.