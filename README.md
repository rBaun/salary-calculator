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
* feature
  * Uses common components to define a feature
  * No styling for the element. ONLY STRUCTURE for the feature
  * Logic is used here to define the specific feature and how it is implemented
* page
  * Uses feature/common components to setup a page structure
  * No styling for elements! ONLY STRUCTURE for the page
  * No logic is applied, but data is allowed to be passed from feature to feature if needed

The component structure comes with a bunch of benefits, but mainly it allows for quick and easy maintenance. In order to make the project less error-prone, then the features/page components should implement logic in a declarative way using rxjs functions. This will set the project up for the most optimal performance and fewest error/bugs.

# Services
Services can be used to fetch data from various servers, but can also be used to implement common logic, such that it can be used multiple places. A good example of this would be dialogs. A dialog can be shown anywhere in the application and creating a service for the dialog will make it easy to inject and use anywhere in the application. Similar functionalities should be considered when creating "feature" components, since these components primarily focuses on functionality that requires logic. Try to make the feature specific logic as abstract as possible for better reusability.  

The following types of services can be created:
* Feature service
  * service-name.feature.service.ts
  * Abstract features that can be re-used across multiple component features
* Data service
  * service-name.data.service.ts
  * Service that fetches data from a server
* Mock Data service
  * service-name.mock.service.ts
  * Service that mocks fetching data from a server