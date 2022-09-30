# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)
## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./images/Screenshot_desktop_2022-09-30%20at%2022-42-24%20Frontend%20Mentor%20Intro%20section%20with%20dropdown%20navigation.png)

![](./images/Screenshot_desktop_active_state_2022-09-30%20at%2022-43-11%20Frontend%20Mentor%20Intro%20section%20with%20dropdown%20navigation.png)

![](./images/Screenshot_mobile_2022-09-30%20at%2022-44-00%20Frontend%20Mentor%20Intro%20section%20with%20dropdown%20navigation.png)

![](./images/Screenshot_mobile_dropdown_2022-09-30%20at%2022-45-10%20Frontend%20Mentor%20Intro%20section%20with%20dropdown%20navigation.png)

![](./images/Screenshot_mobile_dropdown_expanded2022-09-30%20at%2022-45-49%20Frontend%20Mentor%20Intro%20section%20with%20dropdown%20navigation.png)


### Links

- Solution URL: [Add solution URL here](https://github.com/MichaelOmoniyi/intro-section-with-dropdown-navigation-main)
- Live Site URL: [Add live site URL here](https://michaelomoniyi.github.io/intro-section-with-dropdown-navigation-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

I learned how to create a navbar dropdown

```js
let openNavDropdown = () => {
    document.querySelector('#navDropdown').style.display = 'block'
    document.querySelector('#jsBody').style.height = '100vh'
    document.querySelector('#jsBody').style.overflow = 'hidden'
}
let closeNavDropdown = () => {
    document.querySelector('#navDropdown').style.display = 'none'
}
// Toggle Mobile Feature Dropdown
let openFeatureDropdown = () => {
    document.querySelector('#FeatureDropdownImage').style.display = 'none'
    document.querySelector('#FeaturesDropupImage').style.display = 'inline-block'
    document.querySelector('#featureDropdown').style.display = 'block'
}
let closeFeatureDropdown = () => {
    document.querySelector('#FeatureDropdownImage').style.display = 'inline-block'
    document.querySelector('#FeaturesDropupImage').style.display = 'none'
    document.querySelector('#featureDropdown').style.display = 'none'
}
// Toggle Mobile Company Dropdown
let openCompanyDropdown = () => {
    document.querySelector('#CompanyDropdownImage').style.display = 'none'
    document.querySelector('#CompanyDropUpImage').style.display = 'inline-block'
    document.querySelector('#companyDropdown').style.display = 'block'
}
let closeCompanyDropdown = () => {
    document.querySelector('#CompanyDropdownImage').style.display = 'inline-block'
    document.querySelector('#CompanyDropUpImage').style.display = 'none'
    document.querySelector('#companyDropdown').style.display = 'none'
}
// Toggle Desktop Feature Dropdown
let openDesktopFeatures = () => {
    document.querySelector('#desktopFeatureDropdownImage').style.display = 'none'
    document.querySelector('#desktopFeatureDropUpImage').style.display = 'inline-block'
    document.querySelector('#desktopFeatures').style.display = 'block'
}
let closeDesktopFeatures = () => {
    document.querySelector('#desktopFeatureDropdownImage').style.display = 'inline-block'
    document.querySelector('#desktopFeatureDropUpImage').style.display = 'none'
    document.querySelector('#desktopFeatures').style.display = 'none'
}
// Toggle Desktop Company Dropdown
let openDesktopCompany = () => {
    document.querySelector('#desktopCompanyDropdownImage').style.display = 'none'
    document.querySelector('#desktopCompanyDropUpImage').style.display = 'inline-block'
    document.querySelector('#desktopCompany').style.display = 'block'
}
let closeDesktopCompany = () => {
    document.querySelector('#desktopCompanyDropdownImage').style.display = 'inline-block'
    document.querySelector('#desktopCompanyDropUpImage').style.display = 'none'
    document.querySelector('#desktopCompany').style.display = 'none'
}
```

### Continued development

For developmental purpose, i'll continue to master better and standard ways to create dropdowns.

### Useful resources

- [resource 1](https://www.w3schoold.com) - This is an amazing website which has made me understand drop-downs development. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Michael Omoniyi](https://github.com/MichaelOmoniyi)
- Frontend Mentor - [@MichaelOmoniyi](www.frontendmentor.io/profile/MichaelOmoniyi)
- Twitter - [@Omons_Mikel](https://twitter.com/Omons_Mikel)
