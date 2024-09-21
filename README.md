# Salary Calculator
**Disclaimer: The README page is basically my personal notes for the projects**  

Simple calculator that will convert gross income into the net income and give a detailed explanation of how the gross income is divided. The idea is to give the User a better insight of where their money is going.

# Components
A specific component structure is to be followed. The structure will ensure that the project is easy to maintain and is adaptable to changes and new features.  
There are 3 types of components:
* common
  * A common component is a component that visually presents something.
  * Only contains styling for the element. NOT STRUCTURE
  * No logic is applied. Inputs, Outputs and constructors are acceptable.
* widget
  * Uses common components to define a feature
  * No styling for the element. ONLY STRUCTURE for the feature
  * Logic is used here to define the specific feature and how it is implemented
* page
  * Uses feature/common components to setup a page structure
  * No styling for elements! ONLY STRUCTURE for the page
  * No logic is applied, but data is allowed to be passed from feature to feature if needed

The component structure comes with a bunch of benefits, but mainly it allows for quick and easy maintenance. In order to make the project less error-prone, then the features/page components should implement logic in a declarative way using rxjs functions. This will set the project up for the most optimal performance and fewest error/bugs.


# Dialog
The dialog is made generic by using the DialogInput model and allows for easy and flexible dialogs to be configured.  

## Dialog Input Model

- title *required*
  - The title of the dialog
- type *required*
  - The type of dialog
- message *optional*
  - Dialog content. Used for simple dialogs that don't require anything but a message
- content *optional*
  - Dialog content. Used for complex dialogs that require components as content.
  - Requires using type of custom for the component to be displayed
- showWarning *optional*
  - Should a warning be displayed, when action button is clicked?
- actions *optional*
  - The actions that can be performed in the dialog