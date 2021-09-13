import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --header-height: 4rem;
  --text-color: #aaa;
  --title-color: #333333;
  --green-color: #3BB18D;

  // Font-size
  --biggest-font-size: 7.5rem;
  --bigger-font-size: 4.5rem;
  --big-font-size: 4rem;
  --h2-font-size: 1.5rem;
  --h3-font-size: 1.25rem;
  --normal--font-size: 1rem;
  --smaller-font-size: .875rem;
  --text-line-height: 2rem;

  // Margin bottom
  --mb-0-5: .5rem;
  --mb-0-75: .75rem;
  --mb-1: 1rem;
  --mb-1-5: 1.5rem;
  --mb-2: 2rem;
  --mb-2-5: 2.5rem;
}

@media screen and (max-width: 992px){
  :root{
  --biggest-font-size: 5rem;
  --bigger-font-size: 3.5rem;
  --big-font-size: 2.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1.125rem;
  --normal--font-size: .938rem;
  --smaller-font-size: .75rem;
  --text-line-height: 2rem;
  }
  
  }

*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: 'Urbanist', sans-serif;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
.slick-initialized{
  overflow: hidden;
}
`;

export default GlobalStyle;
