## Live URL : https://fem-newsletter-sign-up.netlify.app/

# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./design/mobile-design.jpg)
![](./design/desktop-design.jpg)


### Links

- Solution URL: https://github.com/melawout/newsletter-sign-up-with-success-message-main
- Live Site URL: https://fem-newsletter-sign-up.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

The below CSS snippet helped me to create the shadow behing the button

```css
form{
  isolation: isolate;
}

.button:hover::after,
.button:focus-visible::after{
  content: '';
  position: absolute;
  z-index: -1;
  inset: 0;
  background: inherit;
  border-radius: inherit;
  translate: 0 1.5rem;
  filter: blur(1rem);
  opacity: .5;
}
```

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

- make it effectively send an email to the email address

### Useful resources

- [CSS code reset](https://www.joshwcomeau.com/css/custom-css-reset/) - This is an amazing article which helped me setting up the style file

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- LinkedIn - [Franck Lobe](https://www.linkedin.com/in/lobe-loic/)
- Frontend Mentor - [@melawout](https://www.frontendmentor.io/profile/melawout)
- Twitter - [@floic_lobe](https://x.com/floic_lobe)

