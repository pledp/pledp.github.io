---
title: About leaving the Object-Oriented mindset
date: 2026-06-01
excerpt: 
tags: []
---

Some time ago I stumbled upon [Brian Will's hit piece on Object-Oriented programmming](https://www.youtube.com/watch?v=QM1iUe6IofM).
After my world being blown up by the thought of that I've been doing this thing wrong my entire life, I was left with a plethora of questions:

- Why is it so bad for functions to be associated with a data type?

- What about polymorphism? How will I have flexible modules if not for my abstract *base class* interfaces?

- If not use classes, what should I use instead?

It took me a long time to make my interpretation for Brian Will's hit piece. The Object-Oriented question is largely a philosophical process issue. 
Programmers have a very hard time describing the *why's and what instead's* of these sorts of issues.

In this blog post I will go through how I arrived at my interpretation of the Object-Oriented question. Sit back and relax!

## A code sample

```js
function greet(name) {
  return `hello, ${name}!`;
}

console.log(greet("world"));
```

Some **bold**, some *italic*, and a [link](https://github.com/pledp).

- supports lists
- supports tables
- supports strikethrough (~~like this~~)

| Feature | Supported |
| --- | --- |
| Frontmatter | yes |
| Code highlighting | yes |
