---
theme: ./
colorSchema: auto
author: Mu-Tsun Tsai
date: 2023/01/01
transition: slide-left
---

# Slidev Theme Frankfurt

Presentation slides for developers

<div class="pt-12">
  <span @click="next" class="px-2 p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
section: Introduction
---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)


---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

## Keyboard Shortcuts

|     |     |
| --- | --- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

---
layout: image-right
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
section: Frankfurt
---

# Frankfurt theme

<Item title="Definition 1">This is definition 1.</Item>

---

# Theorem 1

<Item title="Theorem 1">

Let $A\subseteq\N$ be a set such that $\pi_A(x)=x/\delta+O(x^\alpha)$,
where $\delta\in[1,\infty)$ and $0\le\alpha<1$.
Then we have

$$
M_A(x)=\frac{1}{2\delta}x\log x+
	\frac 1 \delta\left(\gamma-\frac{1}{2}\log\frac \delta 2-\frac{1}{2}\right)x
	+O_A\!\left(x^{\frac{2\alpha+2}{\alpha+3}}\right).
$$

</Item>

---

# Theorem 2

<Item title="Theorem 2">

Let $A\subseteq\N$ be a set such that, for some $\delta>0$,
$$
\pi_A(x)=\frac{x}{\delta\log x}\left(1+\frac{1}{\log x}+O\!\left({\frac{1}{\log^2 x}}\right)\right)
$$
for all sufficiently large $x$. Then we have, for sufficiently large $x$,
$$
\begin{align*}
	M_A(x)
	&=
	\frac{\log2}{\delta}x-\frac{1}{\delta}\frac{x\log\log x}{\log x}+
	\frac{1}{\delta}\left(\gamma-\log\frac{\delta}{4}\right)\frac{x\log\log x}{\log x}\\
	&\qquad+
	\frac{1}{2\delta}\frac{x(\log\log x)^2}{\log^2 x}+O_A\!\left(\frac{x\log\log x}{\log^2 x}\right).
\end{align*}
$$

</Item>

---
section: Final words
layout: center
class: "text-center"
---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
