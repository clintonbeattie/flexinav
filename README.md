# FlexiNav

## Overview
FlexiNav is a full width navigation calculator for use in determining percentage widths of navigation items in responsive layouts. It is built with HTML, CSS & Javascript.

## Why FlexiNav was created
In day to day website builds our team of developers were coming across more sites with full width navigation which needed to be built responsively. Due to the nature of the designs there was a delicate balance between pixel perfection and the somewhat opposing inherent nature of responsiveness. To save time doing maths during the builds FlexiNav was created.

## Usage
Open your website design file in whatever design software you use eg Photoshop, Fireworks, GIMP etc. If you have designed multiple layouts for a responsive design, use the large desktop view as this will allow you to calculate widths easier. For this example we will assume that the navigation is the same width as the website so lets assume the website max-width is 1140px. Add that into the 'Navigation width' field in FlexiNav.

Next we need to get the width, in pixels of all the navigation items. Sometimes each navigation item may have a border, or spacing. You will need to factor that in when getting the widths and figure out how you are going to style the elements in your CSS eg Will you account for padding using border-sizing; Will the borders be added to the element or will you use a background image.

Add the width of the first navigation item into the second field and continue adding fields and values until you arrive at your total 'Navigation Width', in this case 1140px.

As you add values the calculator will tell you how many pixels you have left to play with and the % total width incase you have made an error in retrieving the widths from your design.

Click 'Calculate' and you will be shown the % values to add to each navigation item.

In the attached example I have added an 'id' to each li tag which is a tried and tested method of highlighting navigation on pages by matching each with a similarly named body tag class. You could alternatively use nth-child().


An example outcome of using FlexiNav can be seen in the 'Navigation Demo' folder.

Some of the styles may not work in older browsers. This will be remedied in future updates.

A Demo can be found at http://www.clintonbeattie.com