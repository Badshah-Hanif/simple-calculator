# Calculator App --- Project Documentation

## 1. Project Overview

**Project name:** Calculator App\
**Type:** Front-end web application\
**Technologies:** HTML5, CSS3, JavaScript\
**Purpose:** A browser-based calculator interface with a display screen
and buttons for entering numbers, arithmetic operators, clearing input,
switching the calculator on/off, and evaluating expressions.

The interface shown in `Calculator.PNG` has a dark purple-to-green
background, a light gradient display, and a grid of dark buttons. The
heading reads "welcom to my Calculator app".

## 2. Project Files

Keep these files together in the same project folder:

``` text
calculator-project/
├── calculator.html
├── style.css
├── backend.js
└── Calculator.PNG
```

-   **`calculator.html`** --- defines the calculator's page structure,
    display field, buttons, and links to the CSS and JavaScript files.
-   **`style.css`** --- controls layout, sizing, colors, spacing,
    borders, and hover styling.
-   **`backend.js`** --- handles button clicks, display updates,
    clearing, power toggling, and expression evaluation.
-   **`Calculator.PNG`** --- screenshot/reference image of the
    interface.

## 3. Features in the Current Source Code

### Display screen

The HTML contains an input field with the ID `inp-scr`:

``` html
<input type="text" name="input-screen" id="inp-scr" readonly disabled>
```

The display starts **disabled and read-only**. The JavaScript enables it
when the power button is clicked to turn the calculator on, and disables
it when the calculator is turned off. The script also clears the display
when toggling power.

### Buttons

The current HTML includes these controls:

  -----------------------------------------------------------------------
  Button                              Intended/current behavior
  ----------------------------------- -----------------------------------
  `ON` / `OFF`                        Toggles calculator power state. The
                                      displayed label changes to the
                                      opposite action.

  `C`                                 Removes the last character from the
                                      current expression (backspace-style
                                      behavior).

  `AC`                                Clears the entire expression and
                                      display.

  `0`--`9`                            Adds the selected digit to the
                                      expression.

  `.`                                 Adds a decimal point to the
                                      expression.

  `+`, `-`, `/`                       Adds the selected operator to the
                                      expression.

  `x`                                 Adds the letter `x` to the
                                      expression in the current source;
                                      this is not valid JavaScript
                                      multiplication syntax, so
                                      calculations using it will usually
                                      show an error.

  `%`                                 Adds `%` to the expression. With
                                      JavaScript `eval`, `%` is the
                                      remainder operator, not a
                                      calculator-style percentage
                                      conversion.

  `=`                                 Attempts to evaluate the entered
                                      expression and shows the result, or
                                      `Error` if evaluation throws an
                                      error.
  -----------------------------------------------------------------------

**Important current limitation:** The supplied HTML places the `+`
button beside the main button grid, but the supplied JavaScript listens
to all `<button>` elements, so it can still receive clicks.

## 4. How the Interface Is Built

### HTML structure

The page uses these main elements:

1.  `.calculator` --- outer calculator layout and page heading.
2.  `.input-screen` --- wrapper around the display input.
3.  `.main-div` --- contains the main button grid and the separate
    operator/equal area.
4.  `.button-grid` --- contains clear, power, number, decimal,
    percentage, multiplication, division, and subtraction buttons.
5.  `.equal` --- contains the plus and equals buttons.

The HTML links the stylesheet in the `<head>`:

``` html
<link rel="stylesheet" href="style.css">
```

The JavaScript is loaded near the end of the `<body>`:

``` html
<script src="backend.js"></script>
```

### CSS styling

The supplied stylesheet uses:

-   Flexbox to center the calculator content vertically and
    horizontally.
-   A linear gradient for the calculator background and display.
-   Dark buttons with light text, rounded corners, and a hover effect.
-   A fixed-size main button area and a separate area for the `+` and
    `=` buttons.

Key selectors include `.calculator`, `#inp-scr`, `button`, `.equal`,
`.main-div`, `.button-grid`, and `button:hover`.

## 5. How the JavaScript Works

The script begins by storing the expression in a variable:

``` javascript
let string = "";
```

It selects every button on the page and attaches a click listener to
each one. When a button is clicked:

1.  The script reads the button's visible text.
2.  If the button is `ON` or `OFF`, it toggles the display's
    disabled/read-only state, clears the expression and display, and
    changes the button label.
3.  If the calculator is enabled and the button is `=`, it evaluates the
    expression and displays the result.
4.  If the button is `C`, it removes the last character.
5.  If the button is `AC`, it clears the full expression.
6.  Otherwise, it appends the button text to the expression and updates
    the display.

## 6. How to Run the App

1.  Place `calculator.html`, `style.css`, and `backend.js` in the same
    folder.
2.  Make sure the filenames and paths match the references in the HTML.
3.  Open `calculator.html` in a modern web browser (such as Chrome,
    Edge, or Firefox). No build process is required for this simple
    front-end project.
4.  The display starts disabled. Click **ON** to enable it.
5.  Click number and operator buttons to build an expression.
6.  Click **=** to calculate the expression.
7.  Click **C** to remove the last character, or **AC** to clear
    everything.
8.  Click **OFF** to disable the display and clear the current
    expression.

## 7. Example Usage

For the basic supported operators, the intended workflow is:

1.  Click `ON`.
2.  Click `7`.
3.  Click `+`.
4.  Click `3`.
5.  Click `=`.
6.  The display should show `10`.

You can use `-`, `/`, and decimal points in expressions as well. The `x`
and `%` buttons have the limitations described above in the button
table.

## 8. Known Limitations and Recommended Improvements

These observations are based on the supplied source files, not on tests
of a running application.

### Calculation and input handling

-   **Multiplication:** The button text is `x`, but JavaScript
    expressions use `*` for multiplication. Map the visible `x` button
    to `*` internally, or change its label to `*`.
-   **Percentage:** JavaScript's `%` operator calculates a remainder. If
    the desired behavior is a conventional calculator percentage,
    implement that behavior separately.
-   **Expression evaluation:** `eval(string)` executes JavaScript code.
    It is risky for applications that accept arbitrary text. For a
    learning project with fixed buttons, consider replacing it with a
    safe arithmetic-expression parser.
-   **Error handling:** The current code displays `Error` if evaluation
    throws, but the expression variable may still contain the invalid
    expression. Consider resetting or allowing the user to edit it.
-   **Repeated decimals/operators:** The current code does not validate
    expression structure, so users can enter invalid sequences such as
    multiple decimal points or operators.
-   **Result continuation:** After `=`, the result is stored in
    `string`, allowing later button clicks to append to it. Decide
    whether this is the desired calculator behavior.

### Layout and responsiveness

-   The CSS uses several fixed widths and heights. On narrow screens,
    the calculator may not fit without responsive media queries.
-   The `button:hover` rule changes button dimensions, which can make
    the layout shift when the pointer moves over a button. Consider
    changing only the background, text color, or transform on hover.
-   Prefer CSS classes over inline styles for maintainability. The HTML
    currently uses inline styles for the main gradient, heading color,
    and some button colors/heights.
-   Use semantic labels or accessible names where appropriate, and
    ensure keyboard interaction is considered if you extend the app.

### Display behavior

-   The display is initially `disabled` and `readonly`. A disabled input
    cannot receive focus or user input. The JavaScript removes both
    restrictions when turning on; the current button-driven interface
    itself does not require typing into the display.
-   The CSS `cursor: not-allowed` remains applied to the display even
    when it is enabled. If the display should look interactive when on,
    adjust the cursor style based on its state.

## 9. Quick Troubleshooting

  -----------------------------------------------------------------------
  Problem                             What to check
  ----------------------------------- -----------------------------------
  Styling does not appear             Confirm `style.css` is in the
                                      expected location and the `<link>`
                                      path is correct.

  Buttons do nothing                  Confirm `backend.js` is beside the
                                      HTML file and the script path is
                                      correct. Open the browser developer
                                      console for errors.

  Display remains disabled            Click `ON`; check that the button
                                      text is exactly `ON` or `OFF` and
                                      that the input ID is `inp-scr`.

  Multiplication displays `Error`     The current button adds `x`;
                                      JavaScript evaluation expects `*`.

  Percentage behaves unexpectedly     `%` is JavaScript's remainder
                                      operator in the current
                                      implementation.

  Layout overflows on a phone         Add responsive CSS and reduce fixed
                                      widths/heights for smaller screens.
  -----------------------------------------------------------------------

## 10. Summary

This is a small client-side calculator project built with HTML, CSS, and
JavaScript. HTML defines the controls, CSS creates the visual layout,
and JavaScript handles button interactions and calculations. The
supplied version includes power toggling, backspace-style clear (`C`),
all clear (`AC`), number/operator entry, and evaluation with `=`.
Multiplication, percentage handling, expression validation, and
responsive layout are the main areas to improve next.
