## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Collaboration](#collaboration)


# Task Manager
## General Info

This task manager is a school project with the intention of aiding to manage all the tasks found on different areas of ITC.
<p></p>
View mockup for this application: https://www.fluidui.com/editor/live/preview/cF9OYlRJV1J4YlEwYWg5Y3hTTHZCcGVTTkdNNlRTT2s0Rg==

## Technologies

Frontend:
* [Angular](https://angular.io/): Version 9.0.7
* [Bootstrap](https://getbootstrap.com/)
***
Backend:
* [NodeJS](https://nodejs.org/es/): Version 13.11.0
* [Sequelize ORM](https://sequelize.org/): v6
* [MySQL](https://www.mysql.com/): Version 8.0.21

## Installation
Using the command-line make sure you install:

<li>npm
</li>
  
```bash
npm install npm@latest -g
```
<li>Angular CLI
</li>

```bash
 npm install @angular/cli -g
```

***

Once you've finished installing them:

<li>Using the command-line, navigate to the directory were you want to download the project and clone this repository
</li>

```bash
git clone https://github.com/JoelLF/Task-Manager
```

<li>Using the command-line navigate towards the backend and frontend folder respectively and install the required modules
</li>

```bash
npm install
```

***

<li> Import the tables found in the db folder into your MySQL server
</li>

<li> Change MySQL user and password to your own at
</li>

```bash
backend/config/db.config.js
```


## Usage

To start using this application:

<li>To start the backend server, use the command-line navigate towards the backend folder and use the command:
</li>

```bash
node server
```

<li>To start the frontend server, use the command-line navigate towards the backend folder and use the command:
</li>

```bash
ng serve --port 8081
```

<li> You can now start using the application by accessing http://localhost:8081/ on your browser
</li>

## Collaboration
 
