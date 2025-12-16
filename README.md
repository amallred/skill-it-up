# Skill It Up
### Overview:

A [Code:You](https://code-you.org/) capstone project building a custom API while applying HTML, CSS, and JavaScript skills.

### Project Overview:

Many cooking applications assume their users possess a certain level of cooking acumen and lack opportunities to personally track the cooking process. This project addresses organization of the cooking process, as well as offers opportunities to learn skills and cooking terms through execution of the recipe. This application also allows users to share recipes to the website. 

## How to Download

1. Install [Node.js](https://nodejs.org/en)
2. In your terminal, run `node -v` and `npm -v` to check your version. Node should be >= `v22.20.0` and npm should be >= `11.6.2`.
3. Clone the repository using GIT
```bash
git clone https://github.com/amallred/skill-it-up.git
```
4. Navigate to the project directory
```bash
cd skill-it-up
```
5. Install dependencies
```bash
npm install
```
6. Start the server
```bash
npm run dev
```
7. Open your browser and navigate to:
```bash
http://localhost:2025
```
### DEPENDENCIES
- Cors
- Express

## CAPSTONE FEATURES

- Create a node.js web server using Express.js.
  - Built a custom server by following tutorials provided by both Code:You and the [Express Crash Course](https://www.youtube.com/watch?v=CnH3kAXSrmU) by Traversy Media.
- Create an API that implements HTTP requests for GET and POST. Data can be stored in a JSON file on the back-end.
  - Constructed two routes to my custom API, both of which allow the user to GET data from their respective json file and one that also allows the user to POST data to it.
- Analyze data that is stored in arrays, objects, sets or maps and display information about it in your app. 
  - I parsed the information stored in my json files and displayed it in a more readable way throughout my application.

## REFLECTIONS: THINGS I WOULD DO DIFFERENTLY NEXT TIME
- Use the BEM naming convention for more navigable css classes
- Make the random tip generation code modular to use across files

## NEXT GOALS IN THIS PROJECT
- Store ingredient/recipe checklists to local storage.
- Add tooltips to explain measurement abbreviations. 
- Easily add ingredients to a personal shopping list/pantry list for meal planning.

## ACKNOWLEDGEMENTS

- Thank you to Dan Collins for his guidance and support through this project, as well as my mentors Justin Schuhmann and Lawrence Caudle.
- [List tutorial](https://www.youtube.com/watch?v=G0jO8kUrg-I&ab_channel=GreatStack)
- [Form confirmation message](https://www.tutorialpedia.org/blog/confirmation-on-form-submit-html-css/)
- General guidance throughout the project from:
  - [w3schools.com](https://www.w3schools.com/)
  - [developer.mozilla.org](https://developer.mozilla.org/en-US/)
  - [css-tricks.com](https://css-tricks.com/)