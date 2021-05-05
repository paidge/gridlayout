# Responsive Grid Layout with CSS Grid

## CSS Files

Here is a light weight CSS library to theme and build responsive websites with CSS grid, CSS Custom properties and Sass. There are two compressed CSS files :
- css/gridlayout-full.min.css (20ko)
- css/gridlayout-grid-only.min.css (8ko)

---

## CSS Classes you can use

- For the Grid-only version :

    Parent items :

    - Containers : .container, .container-fluid (for applying a padding)
    - Grids : .grid (all the direct children are considered as .col-12 items)
    - Gutters : .g-1 to .g-5, .gx-1 to .gx-5, .gy-1 to .gy-5 (gutters for the grid)

    Children items :

    - Columns : .col-1 to .col-12 and then .col-{breakpoint}-1 to .col-{breakpoint}-12 for responsiveness
    - Rows : .row-2 to .row-5, .row-{breakpoint}-2 to .row-{breakpoint}-5 for responsiveness
    - Starts : .start-1 to .start-12, .start-{breakpoint}-1 to .start-{breakpoint}-12 for responsiveness

- For the full version, you cans also use theses classes :
    - Theme colors : .{color} (set the --primary CSS variable with --{color} and and use var(--primary) for font-color)
    - Font Colors : .text-{color}
    - Background colors : .bg-{color}
    - Borders : .border, .border-0 to .border-5, .border-{color} and .border-{position}
    - Displays : .d-{display}, .d-{breakpoint}-{display}
    - Rounded : .round-0 to .round-5, .round-circle
    - Margin : .m-0 to .m-5, .m{sides}-0 to .m{sides}-5
    - Padding : .p-0 to .p-5, .p{sides}-0 to .p{sides}-5

{breakpoint} is a value amongst [sm, md, lg, xl, xxl]

{color} is a value amongst [primary, secondary, light, dark, theme1, theme2, theme3, theme4]

{position} is a value amongst [top, bottom, left, right]

{display} is a value amongst [none, block, inline-block, flex, grid]

{sides} is a value amongst [x, y, b, t, r, l] corresponding to [horizonal, vertical, bottom, top, righ, left]

---

You can produce your own CSS files by creating custom Sass files like the one provided as an example and by compiling them into CSS :
- scss/custom-example.scss

This allows you to customize all the appearance of your layout (theme colors, grid-breakpoints, number of columns, etc.)

The documentation is available in the /doc folder.