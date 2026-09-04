# Personal Project Showcase App

A simple React application for creating, viewing, and searching personal projects.

The application uses **React** for the user interface and **JSON Server** as a simple REST API for storing project data. Users can add projects through a form, view the available projects, and search for projects by name.

## Features

* Add a new project
* View a list of projects
* Search projects by project name
* Store project data using JSON Server
* Form inputs managed using React state
* Fetch project data from a REST API
* Responsive layout using Tailwind CSS

## Technologies Used

* **React**
* **Vite**
* **JavaScript**
* **Tailwind CSS**
* **JSON Server**
* **Fetch API**

## Project Structure

```text
src/
├── components/
│   ├── Addproject.jsx
│   ├── Projects.jsx
│   ├── Projectslist.jsx
│   └── Searchprojects.jsx
│
├── App.jsx
└── main.jsx

db.json
package.json
```

## How It Works

The application consists of three main components:

### 1. Addproject

The `Addproject` component provides a form for adding a new project.

The form collects:

* Project title
* Project description

When the user clicks **Add**, the component sends a `POST` request to JSON Server.

```js
fetch('http://localhost:3000/projects', {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(input)
})
```

After the project is successfully added, the form is cleared.

### 2. Searchprojects

The `Searchprojects` component allows users to search for projects.

The search works by filtering the projects based on the project name:

```js
const results = projects.filter(project => {
  const word = searchWord.toLowerCase();
  const projectName = project.project_name.toLowerCase();

  return projectName.includes(word);
});
```

For example, searching for:

```text
react
```

will return projects whose names contain `"react"`.

### 3. Projectslist

The `Projectslist` component is responsible for retrieving projects from JSON Server and displaying them.

The data is fetched when the component loads:

```js
useEffect(() => {
  fetch('http://localhost:3000/projects')
    .then(response => response.json())
    .then(data => getProjects(data));
}, []);
```

The projects are then displayed using `.map()`.

## Application Data Flow

The basic data flow is:

```text
                 JSON Server
                     │
                     │ GET
                     ▼
              Projectslist
                     │
                     ▼
                  projects
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
   Searchprojects          Projects
          │
          │ filter
          ▼
       results
```

Adding a project follows a different flow:

```text
User
 │
 ▼
Addproject form
 │
 │ POST
 ▼
JSON Server
 │
 ▼
db.json
```

## State Management

The main application state is managed in `App.jsx` using `useState`.

```js
const [projects, getProjects] = useState([]);
const [searchWord, setSearchWord] = useState("");
const [results, setResults] = useState([]);
```

### `projects`

Stores all projects retrieved from JSON Server.

```js
const [projects, getProjects] = useState([]);
```

### `searchWord`

Stores the text entered into the search input.

```js
const [searchWord, setSearchWord] = useState("");
```

### `results`

Stores the projects returned after performing a search.

```js
const [results, setResults] = useState([]);
```

## JSON Server

The application uses JSON Server as a simple backend.

Example `db.json`:

```json
{
  "projects": [
    {
      "id": 1,
      "project_name": "Coffee Shop App",
      "description": "A React application for managing a coffee shop."
    }
  ]
}
```

The API endpoint is:

```text
http://localhost:3000/projects
```

## Installation

### 1. Clone the project

```bash
git clone <your-repository-url>
```

### 2. Navigate into the project

```bash
cd <project-folder>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the React development server

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

### 5. Start JSON Server

In another terminal:

```bash
npx json-server --watch db.json --port 3000
```

The API will be available at:

```text
http://localhost:3000/projects
```

## Running the Application

You need two servers running:

**Terminal 1 – React**

```bash
npm run dev
```

**Terminal 2 – JSON Server**

```bash
npx json-server --watch db.json --port 3000
```

Then open the React application in your browser.

## Component Communication

`App.jsx` maintains the main project state and passes it to child components through props.

```text
App
│
├── Addproject
│      ├── projects
│      └── getProjects
│
└── Searchprojects
       ├── projects
       ├── searchWord
       ├── setSearchWord
       └── setResults

└── Projectslist
       ├── projects
       ├── getProjects
       ├── searchWord
       └── results
```

This project therefore demonstrates an important React concept:

> **Parent components can manage state and pass data and state-updating functions to child components through props.**

## Future Improvements

Possible improvements include:

* Edit existing projects
* Delete projects
* Add project images
* Add project categories
* Add project dates
* Add project URLs/GitHub links
* Add pagination
* Add sorting
* Add form validation
* Add loading indicators
* Add error messages
* Move API requests into a separate service
* Use React Context for shared project state
* Add React Router for multiple pages
* Add authentication for an administrator section

## Learning Objectives

This project provides practice with:

* React components
* `useState`
* `useEffect`
* Props
* Controlled forms
* Event handling
* Array `.map()`
* Array `.filter()`
* Fetch API
* GET requests
* POST requests
* JSON Server
* REST APIs
* Tailwind CSS
* Parent-child component communication
* Basic state management

## Licence
MIT

## Author
Hope Kathomi
