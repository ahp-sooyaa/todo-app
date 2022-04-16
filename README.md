# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

Desktop Light theme
![Light Desktop Preview](./Docs/Light%20Desktop%20Preview.png)

Mobile Light theme
![Light Mobile Preview](./Docs/Light%20Mobile%20Preview.png)

Desktop Dark theme
![Dark Desktop Preview](./Docs/Dark%20Desktop%20Preview.png)

Mobile Dark theme
![Dark Mobile Preview](./Docs/Dark%20Mobile%20Preview.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/responsive-todo-app-with-alpinejs-and-tailwindcss-Hk0RIRPVc](https://www.frontendmentor.io/solutions/responsive-todo-app-with-alpinejs-and-tailwindcss-Hk0RIRPVc)
- Live Site URL: [https://ahp-sooyaa.github.io/todo-app/](https://ahp-sooyaa.github.io/todo-app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [TailwindCss](https://tailwindcss.com) - Css Framework
- [AlpineJs](https://alpinejs.dev/) - JS Framework

### What I learned

I learned AlpineJs from [Laracast's alpinejs essential series](https://laracasts.com/series/alpine-essentials/). It is very good series for learning alpinejs.

I used alpinejs ```$watch``` properties for the first time in this project.

```js
this.$watch('todos', () => {
    localStorage.setItem('todo-store', JSON.stringify(this.todos))
})
```

### Useful resources

- [AlpineJs](https://alpinejs.dev)
- [TailwindCss](https://tailwindcss.com)
- [Laracast's alpinejs essential series](https://laracasts.com/series/alpine-essentials/) - this is the most useful resource

## Author

- Website - [http://aunghtetpaing.herokuapp.com/](http://aunghtetpaing.herokuapp.com/)
- Frontend Mentor - [@ahp-sooyaa](https://www.frontendmentor.io/profile/ahp-sooyaa)
- Twitter - [@aunghte23771311](https://www.twitter.com/aunghte23771311)

## Acknowledgments

Thank you Jeffrey Way :)
