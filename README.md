# Tekkare technical test

Here's is my proposition for the technical test for a Front-end Developer position at Tekkare.

I decided to work on the molecules data. I used React as a framework to define my components as it is, for now, the only framework I have had some experience with.

## Additional installations

### [react-router-dom](https://reactrouter.com/en/main)

In order to put myself in the conditions where I would have to actually request the data from a backend, i decided to use react-router-dom that allows me to fetch the appropriate data and have dynamic URLs, for example to get the appropriate molecule based on her ID in the database. It is a package commonly used in react apps as it provides convenient ways to navigate through a Single Page Application.

Here the molecules didn't have IDs so I selected them by their index in the array provided in the .json file

### [chart.js](https://www.chartjs.org/)

In order to represent the price evolution of the different medications on a chart, I decided to use the chart.js library.

### [Tailwind CSS](https://tailwindcss.com/)

For the CSS part I decided to use Tailwind CSS as it is something I had heard about but never actually practiced with so I wanted to take the opportunity of this test to try it on a project.

### [Fontawesome](https://fontawesome.com/)

In order to add some icons I installed fontawesome which is a custom font that allows to easily add icons on the UI.

## General Organization And Folders Structure

I decided to anticipate the potential evolution of the site by starting right away to regroup the components by their core focus. In our case here, all the components related to the exploration of any molecule data are regrouped in the components/pages/molecules folder.

A global root component contains all the pages of the app and can consequently regroup all the elements that would be identical accross the different pages such as menus or footers. Thanks to react-router-dom I can update the pages inside of that root component seamlessly.

## Main Components

### MoleculesList

This component is basically the main page where someone can find the list of all the molecules existing in the data. They are summarized in clickable cards that then redirect to a page with more data available.

#### Filtering the molecules

I added a search bar that allows to dynamically filter through the list of molecules. In order to do so I created a variable through a useState react hook that will allow to refresh the page and the list every time the value of the input field changes.


### MoleculesCard

This component displays some information about a molecule and the associated components. Whenever a medication is matching a search term it is highlighted with a black background.
This component can also be added to favorites by clicking the star icon on the top right. This favorites list is stored in localStorage in the "favoritesMolecules" key.


### MoleculesPage

This page regroups all the data available on the current molecule that is being displayed. It provides global information as well as detailed information such as the current medication using the molecule as well as their dosage and price history.

### MedicationPriceChart

This component regroups the data available on the medication currently being displayed. A toggle button allows to switch between USD and EUR price.
