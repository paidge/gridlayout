# Responsive Grid Layout with CSS Grid

## CSS Files

Here is a light weight CSS library to theme and build responsive websites with CSS grid, CSS Custom properties and Sass. There are two compressed CSS files :
- css/gridlayout-full.min.css (25ko)
- css/gridlayout-grid-only.min.css (8ko)

---

## CSS Classes you can use

- For the Grid-only version :
    - Containers : .container, .container-fluid (for applying a padding)
    - Grids : .grid (all the direct children are considered as .col-12 items)
    - Gutters : .g-1 to .g-5, .gx-1 to .gx-5, .gy-1 to .gy-5 (gutters for the grid)
    - Columns : .col-1 to .col-11 and then .col-{breakpoint}, .col-{breakpoint}-1 to .col-{breakpoint}-11 for responsiveness
    - Rows : .row-2 to .row-5, .row-{breakpoint}-2 to .row-{breakpoint}-5 for responsiveness
    - Starts : .start-1 to .start-11, .start-{breakpoint}-1 to .start-{breakpoint}-11 for responsiveness

- For the full version, you cans also use theses classes :
    - Theme colors : .{color} (substitutes the primary color wih the new one and fixes the default values for borders and fonts colors)
    - Font Colors : .text-{color}
    - Background colors : .bg-{color}
    - Borders : .border, .border-2 to .border-5 (use the CSS Custom property --border-color), .border-{color} and .border-{color}-2 to .border-{color}-5
    - Displays : .d-{display}, .d-{breakpoint}-{display}
    - Rounded : .round-0 to .round-5, .round-circle

{breakpoint} is a value amongst [sm, md, lg, xl, xxl]

{color} is a value amongst [primary, secondary, light, dark, theme1, theme2, theme3, theme4]

{display} is value amongst [none, block, inline-block, flex, grid]

---

You can produce your own CSS files by creating custom Sass files like the one provided as an example and by compiling them into CSS :
- scss/custom-example.scss

This allows you to customize all the appearance of your layout (theme colors, grid-breakpoints, number of columns, etc.)

The documentation is available in the /doc folder.