# Contact Sample React Application

This is a sample single-page application for managing contacts built in React.

## Running the application
Here are the steps to run the application:
1. Clone the git repository.
1. `cd` to the folder where the git repository was cloned to.
1. Run `npm install`.
1. Run `yarn test`, then type `a` to run all the tests. It should take a few seconds to run, and all the tests should show as green and say they passed. Then type `q` to exit the test runner interface.
1. Run `yarn start`. This will run the application, and open a web browser window to http://localhost:3000/ where you can see it run.

## Application functionality

The application allows creating contacts with the following fields:
1. First name
1. Last name
1. Email address
1. Phone number
1. Status - active or inactive

All fields are required except phone number, which is optional. No validations are done on the contents of any field.

The application supports the following features:
1. All contacts are listed, in the order they were created.
1. A new contact can be added and saved.
1. An existing contact can be edited, including changing its status between active and inactive and vice versa.
1. A contact can be deleted.

Note that contacts are not saved beyond the current page load, making the application unsuitable for storing contacts (see potential extesnsions section below).

# Code organization
The code organization of this application is based on the setup from create-react-app (see below):
1. The top-level directory contains:
    1. This README.md file.
    1. package.json, which defines the application's name, dependencies, scripts, configuration for the ESLint code checker, and a few other items.
    1. yarn.lock, which was automatically generated from package.json when the application's dependencies were installed. This file ensures that versions of dependencies will be the same when the application is run on different computers.
    1. .gitignore, which tells git which files to exclude, such as log files and the node_modules/ folder which contains installed dependencies.
1. The public/ folder contains files which can be served directly. The most important is index.html, which is the basis for the HTML page which is served for the application. It contains a div with id "root", which src/index.js uses as the place to insert the application. The public/ folder also includes some icons, plus a manifest.json describing the application's name and available icons, and a robots.txt file saying that any crawler can access any pages in the application.
1. The src/ folder contains the source code for the application, with these contents:
    1. index.js (mentioned above) uses ReactDOM.render to render the App component into public/index.html.
    1. src/components/ folder contains all the application's components. The top-level component is in App.js, and its tests are in App.test.js in the same folder. All other components are in a file called ComponentName.js, with their tests in ComponentName.test.js.
    1. The App component renders two components, AddContact and Contacts.
    1. AddContact renders the "Add contact" button, and when that button is clicked it also renders the form for adding a contact, using the ContactForm component.
    1. Contacts renders the list of contacts, or a message "No contacts to show" if there aren't any contacts.
    1. The Contacts component renders a list of Contact components, one for each contact to display.
    1. The Contact component shows the data for a contact, namely first name, last name, email address, phone number, and active/inactive status; plus Edit and Delete buttons. When the Edit button is clicked, Contact renders the same ContactForm component that is used when adding a new contact.

# Tests
The tests for this application use Jest as the test runner, and React Testing Library for rendering components, finding page elements, firing events, making assertions about them, and so on.

A typical test renders a component, does some setup, and then looks for certain contents on the page. For example, src/components/App.test.js contains a test "adding a contact". That test does these steps:
1. Renders the App component.
1. Calls a helper function addContact, which clicks the "Add contact" button, fills in the form fields, and clicks "Save contact".
1. Asserts that no error message is shown, and the "Save contact" button is not shown.
1. Asserts that the page contains the new contact's full name, email address, phone number, and "Active" or "Inactive".

# Potential extensions
The application only supports a basic set of functionality. Possible extensions include:
1. Persisting contacts, either to a server or to local storage.
1. Displaying all inactive contacts together at the end of the contact list, under an "Inactive" heading.
1. Adding a "Search" box which allows filtering the contacts based on any of the fields.
1. Adding more validations, such as some checking that email addresses are valid, and possibly integrating a service for auto-checking for misspelled email domain names.
1. Better styling.
1. Different user interaction patterns for activating/deactivating and for deleting, say by adding a confirmation step or the ability to un-delete.

# Auto-generated instructions for running the application

Below are the instructions for running the application and its tests. They were generated by the create-react-app tools; I have left them unchanged.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
