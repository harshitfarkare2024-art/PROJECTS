# Dice Roller

## Introduction
Dice Roller is an interactive web application that simulates rolling multiple dice. It provides a fun and simple way to roll dice for games, decision-making, or any other purpose where you need random numbers between 1 and 6.

## Features
- **User-Friendly Interface**: Clean and intuitive design with a centered container
- **Dynamic Input**: Enter any number of dice you want to roll
- **Visual Representation**: Each die roll is displayed with corresponding dice images
- **Random Generation**: Uses JavaScript's Math.random() to generate authentic random results
- **Responsive Design**: Modern styling with smooth hover effects and transitions

## How to Use
1. Open the `1.html` file in your web browser
2. Enter the number of dice you want to roll in the input field
3. Click the "Roll!" button
4. The results will be displayed with dice images showing each roll

## Technical Details

### Files Included:
- **1.html** - Main HTML structure
- **1.css** - Styling and layout
- **1.js** - Dice rolling logic and DOM manipulation

### Technologies Used:
- HTML5
- CSS3 (with flexbox for centering)
- Vanilla JavaScript (ES6)

### Key Components:

**HTML Structure:**
- Input field to accept the number of dice
- Button to trigger the roll function
- Container divs to display results and dice images

**CSS Styling:**
- Responsive container with box shadow and rounded corners
- Hover effects on the "Roll!" button for better UX
- Clean, modern design with gray and white color scheme

**JavaScript Logic:**
- `roll_dice()` function that:
  - Gets the user input (number of dice)
  - Generates random numbers between 1-6 for each die
  - Creates image tags for visual representation
  - Displays results in the DOM

## Requirements
- Web browser (Chrome, Firefox, Safari, Edge, etc.)
- Dice images folder (`dice/`) with images named `1.png` through `6.png`

## Future Enhancements
- Add dice images in a `dice/` folder
- Display sum of all rolls
- Add different types of dice (d4, d8, d12, d20)
- Add roll history
- Add sound effects

## Author
Created by harshitfarkare2024-art

## License
Feel free to use and modify this project for personal or educational purposes.
