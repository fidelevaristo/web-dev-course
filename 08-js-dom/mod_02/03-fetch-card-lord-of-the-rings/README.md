# Lord of the Rings Card API

Simple project built with HTML, CSS and JavaScript that fetches and displays a card from the Lord of the Rings card game API.

## Features

- Fetch data from an external API
- Display character card image
- Display character name
- Dynamic rendering with JavaScript
- Modern responsive card layout

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API

## API

This project uses the RingsDB API:

```txt
https://ringsdb.com/api/doc
```

Example endpoint used in the project:

```txt
https://ringsdb.com/api/public/card/03002.json
```

## Preview

The application displays:

- Character image
- Character name

All content is generated dynamically from the API response.

## Project Structure

```txt
03-fetch-card-lord-of-the-rings/
│
├── index.html
├── style.css
├── index.js
└── README.md
```

## How to Run

1. Clone the repository

```bash
git clone https://github.com/fidelevaristo/web-dev-course.git
```

2. Open the project folder

3. Run the project using Live Server or open `index.html`

## Learning Goals

This project was created to practice:

- API requests with fetch
- Async/Await
- DOM manipulation
- Dynamic rendering
- Working with JSON data
- Error handling
