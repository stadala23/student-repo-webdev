## Code Review Exercise

Write your code review here in markdown format.

### Issue #1:

It has been observed that all images have been coded using the <img> tag and alt text. To improve the semantic structure of the HTML code, we use figure and figcaption elements.
Initial code:

<img
           alt="A scottish fold kitten whose ears are hold by a pair of hands"
           class="characteristics-image"
           src="./images/Straight-eared_Scottish_Fold.jpg"
         />

Updated code:

<figure class="characteristics-image">
 <img
   alt="A scottish fold kitten whose ears are hold by a pair of hands"
   src="./images/Straight-eared_Scottish_Fold.jpg"
 />
 <figcaption>A scottish fold kitten whose ears are held by a pair of hands</figcaption>
</figure>

### Issue #2:

It has been observed that the <div> element is being used to define content for all sections. To enhance the semantic structure and accessibility, it is recommended to use the <section> element instead of <div>.

Initial code:

<div class="dark-background-container section-below-navbar">
 <div
   class="space-evenly-distributed-row-container vertically-stacked-mid-screen-container content-container"
 >
   <div class="landing-image"></div>
   <div class="landing-text-container">
     <h1 class="heading-1">Scottish Fold</h1>
     <p>
       The Scottish Fold is a breed of domestic cat with a natural dominant
       gene mutation that affects cartilage throughout the body, causing the
       ears to "fold", bending forward and down towards the front of the head,
       which gives the cat what is often described as an "owl-like" appearance.
     </p>
   </div>
 </div>
 <div id="Introduction" class="content-container"></div>....
</div>

Updated code:

<section class="dark-background-container section-below-navbar">
     <div
       class="space-evenly-distributed-row-container vertically-stacked-mid-screen-container content-container"
     >
       <div class="landing-image"></div>
       <div class="landing-text-container">
         <h1 class="heading-1">Scottish Fold</h1>
         <p>
           The Scottish Fold is a breed of domestic cat with a natural dominant gene mutation that
           affects cartilage throughout the body, causing the ears to "fold", bending forward and
           down towards the front of the head, which gives the cat what is often described as an
           "owl-like" appearance.
         </p>
       </div>
       </div>
       <div id="Introduction" class="content-container"></div>....
     </section>

### Issue #3:

To ensure code semantic the addition of a "More info" button should not be done within a <a> element. Instead, it should be replaced with the <button> element.

Initial code:
<a class="more-info-button">More Info</a>

Updated code:
<button class="more-info-button">More Info</button>

### Issue #4:

The given code does not include an ARIA label for the navigation bar. Therefore it is recommended that ARIA-LABELS be added in order to make the navigation bar more accessible and user-friendly for screenreaders.

Initial code:

<nav class="navbar large-screen-navbar">

Updated code:

<nav class="navbar large-screen-navbar" aria-label="Main Navigation">

### Issue #5:

Detected unused CSS classes in the current CSS code. These classes should be eliminated from the CSS file as part of the CSS refactoring process.

.navbar-toggle-close-button is one of the class that can removed from the css file.

.navbar-toggle-close-button {
font-size: 1.5rem;
color: var(--white);
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
width: 60px;
height: 60px;
background-color: transparent;
border: none;
margin: auto;
}
