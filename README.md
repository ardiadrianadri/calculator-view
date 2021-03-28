# \<calculator-view>

## Public atributes

### buttons
It is an array of Button objects. Each Button object must have the following attributes:

* **label**: Text displayed inside the button
* **type**: Describe the action that fires the button. It can be:
  - **number**: It means that the button adds a new number in the calculator display
  - **operation**: It means that the button fires a math operation with the number in the display
  - **clear**: Remove the number in the calculator display
* **value**: The value send in each *calc-event*
* **size**: The size of the button width which can be **small**, **medium** or **big**
* **keys**: The list of the computer keys that fire the press button event

## Public events

### calc-event
It is an event that is fired each time the user press a button of type **operation**. The event return an detail object with the next attributes:

* **number**: The number displayed on the calculator screen
* **operation**: The operation that should be applied at the number

## CSS variables:

### --calcultor-mobile-width:
Sets the width of the component for a screen width smaller than 768px

### --calculator-desktop-width:
Sets the width of the component for a screen width bigger or equal than 768px

### --display-mobile-height:
Sets the height of the calculator display for a screen width smaller than 768px

### --display-desktop-height:
Sets the height of the calculator display for a screen width bigger or equal than 768px

### --display-mobile-font-size:
Sets the size of the font for the number inside the calculator display

### --display-font-color:
Sets the display font color

### --diplay-background-color:
Sets the display background color

### --color-background-calculator:
Sets the background color for the calculator

### --calculator-margin:
Sets the separation space between the different elements in the calculator

### --general-border-radius:
Sets the radius of the corners in all the elements of the calculator

### --button-margin:
Sets the separation space between the calculator buttons

### --button-mobile-width:
Sets the buttons width for a screen width smaller than 768px

### --button-desktop-width:
Sets the buttons width for a screen width bigger or equal than 768px

### --button-mobile-height:
Sets the buttons height for a screen width smaller than 768px

### --button-desktop-height:
Sets the buttons height for a screen width bigger or equal than 768px

### --button-font-size:
Sets the buttons font size

### --button-font-color:
Sets the buttons font color

### --button-background-color:
Sets the buttons background color

### --button-press-background-color:
Sets the buttons background color when they are pressed

### --button-clear-mobile-width:
Sets the width of the big buttons for a screen width smaller than 768px

### --button-clear-desktop-width:
Sets the width of the big buttons for a screen width bigger or equal than 768px

### --button-0-mobile-width:
Sets the width of the medium buttons for a screen width smaller than 768px

### --button-0-desktop-width:
Sets the width of the medium bottons for a screen width bigger or equal than 768px

# \<calculator-logic>

## Public attributes:

### calculation:
Calculation is an object that must have the next attributes:

* **number**: The number used for the calculation
* **operation**: The calculation that should be applied to the number. This attributes accepts the next values:
 - **divide**: Calculates the division between the previous number and the current one
 - **multiply**: Calculates the multiplication between the previous number and the current one
 - **substract**: Calculates the subtraction between the previous number and the current one
 - **add**: Calculates the addition between the previous number and the current one
 - **calculate**: Perform the last calculation and fire the event *result* with the final result

## Public events:

### result:
This event is fired when a *calculate* operation is intruduced in the **calculation** attribute. The object detail of this event contains the attribute **result** with the final value of all the calculations made for each input value introduced by **calculation**