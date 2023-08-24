# Dynamic Styling with JavaScript

This project showcases dynamic styling of an HTML element using JavaScript. The webpage consists of a sample box that users can style by adjusting various properties using dropdown menus.

## How It Works

1. **HTML Structure:** The `index.html` file defines the basic structure of the webpage. It includes a sample box and dropdown menus for style customization.

2. **Initial Styling:** The `styles.css` file provides initial styling for the sample box and the webpage layout.

3. **JavaScript Interactivity (`script.js`):**

   - **Color Selection:** The event listener attached to the "Text Color" dropdown detects changes and updates the `color` style property of the sample box using the `style.color` property.

   - **Background Color Selection:** Similar to text color, changes in the "Background Color" dropdown trigger updates to the `backgroundColor` property of the sample box.

   - **Padding Adjustment:** The "Padding" dropdown triggers adjustments to the `padding` style property of the sample box.

   - **Font Size Selection:** The "Font Size" dropdown changes the `fontSize` property of the sample box.

   - **Font Weight Selection:** The "Font Weight" dropdown modifies the `fontWeight` property of the sample box.

4. **Real-time Updates:** As users make selections, the event listeners capture those changes and immediately apply the selected styles to the sample box.

## Usage

1. Open the `index.html` file in a web browser.

2. Use the dropdown menus under the "Controls" section to adjust the sample box's styles.

3. Observe the immediate visual changes to the sample box as you make selections.

Feel free to explore the code files (`index.html`, `styles.css`, and `script.js`) to understand how each part contributes to achieving dynamic styling with JavaScript.

## Technologies Used

- HTML
- CSS
- JavaScript