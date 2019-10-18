# Star Wars Api Character Search

This project is a simple implementation of the Star Wars api character search using [Create React App](https://github.com/facebook/create-react-app), SCSS, [animate.css](https://daneden.github.io/animate.css/), [axios](https://github.com/axios/axios), and [Font Awesome](https://fontawesome.com/). Components have been made reusable where applicable.

## Features Include
- Search all characters
- Search for a specific character
- Sort results alphabetically or in reverse alphabetical order
- Pagination
- Basic animation
- Responsive Design

### Available Scripts

#### To run this project:
- clone the repository via: `git clone https://github.com/jaredstevick/swapi-search.git`
- cd into project directory
- `npm install` or `yarn install`
- Create a local build: `npm start` or `yarn start`
- Create a minified production build: `npm build` or `yarn build`


### Contributing
Given more time, this project could include many more features. If you would like to add something, please feel free to open a pull request!

#### Ideas include:
- Show more detailed data about a character by clicking on their name
- Add more animations
- Make character data clickable (ex: clicking on a character's planet will show results for all characters from that planet)
- Add page numbers to the pagination component
- Add more species icons
- Better handling of the species data. The api doesn't follow the best design pattern, and the icons will all default to the question mark if the api changes
- Search without hitting enter
- Wait until animations finish before loading content
- Anything else _you_ think of!