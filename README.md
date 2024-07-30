Description

My motivation was to create an organizer or planner to view and add departments, roles, and percentage of employees. I built this for managers of all kinds looking for a robust organizing tool. This project solves the problem of sloppy work and poor organization. Additionally, I learned more about using PostgreSQL during this project.

Table of Contents

	•	Installation
	•	Package JSON
	•	Usage
	•	Features
	•	Tests
	•	Credits
	•	License

Installation

To work with JSON data in SQL, you need to ensure you have the appropriate tools and packages installed. Below are instructions for a few common SQL environments:

PostgreSQL

PostgreSQL has built-in support for JSON. If you are using PostgreSQL, you don’t need to install anything additional to handle JSON data.

MySQL

MySQL also supports JSON data types natively. Ensure you are using MySQL version 5.7.8 or higher.

Creating Tables with JSON in PostgreSQL

PostgreSQL supports JSON data types natively. You can create tables with JSON columns and use various functions to work with JSON data.

Create a table with JSON column:

CREATE TABLE users (
id SERIAL PRIMARY KEY,
data JSONB
);

Insert JSON data:

INSERT INTO users (data) VALUES (’{“name”: “John”, “age”: 30}’);

Package JSON

Here is the package.json configuration for this project:

{
“name”: “02-challenge”,
“version”: “1.0.0”,
“description”: “## Your Task”,
“main”: “index.js”,
“scripts”: {
“test”: “echo "Error: no test specified" && exit 1”
},
“keywords”: [],
“author”: “”,
“license”: “ISC”,
“dependencies”: {
“inquirer”: “^8.2.4”,
“pg”: “^8.12.0”
},
“devDependencies”: {}
}

Usage

For more details, refer to this video: https://drive.google.com/file/d/1AdkT4f2UlrUbu-dmrC9eXakPhR067qNU/view

Features

	•	View and add employees, including their salary and roles.
	•	Organize departments and roles efficiently.
	•	Manage employee data with JSON columns in PostgreSQL.

Tests

Refer to connection.js for testing the database connection and other functionalities.




