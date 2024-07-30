# <manageplanner>

Description

My motivation was to create an organizer or planner to view and add departments, roles, and percentage of employees. I built this for managers of all kinds looking for a robust organizing tool. This project solves the problem of sloppy work and poor organization. Additionally, I learned more about using PostgreSQL during this project.

Table of Contents 
	•	Installation
	•	Package JSON
	•	Usage
	•	Credits
	•	License
Installation

To work with JSON data in SQL, you need to ensure you have the appropriate tools and packages installed. Below are instructions for a few common SQL environments:

PostgreSQL

PostgreSQL has built-in support for JSON. If you are using PostgreSQL, you don’t need to install anything additional to handle JSON data.

MySQL

MySQL also supports JSON data types natively. Ensure you are using MySQL version 5.7.8 or higher.

Creating Tables with JSON in PostgreSQL

PostgreSQL supports JSON data types natively. You can create tables with JSON columns and use various functions to work with JSON data. For example
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    data JSONB
);

INSERT INTO users (data) VALUES ('{"name": "John", "age": 30}');

Package JSON

Creating the Table

First, create a table with a JSONB column:

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    data JSONB
);

Inserting JSON Data

Insert JSON data into the users table:

INSERT INTO users (data) VALUES ('{"name": "John", "age": 30}');

Querying JSON Data

You can query the JSON data using PostgreSQL’s JSON functions and operators. For example, to extract the name from the JSON data:

SELECT data->>'name' AS name FROM users WHERE data->>'age' = '30';

This command retrieves the name field from the JSON data for users where the age is 30.

Here is the `package.json` configuration for this project:

```json
{
  "name": "02-challenge",
  "version": "1.0.0",
  "description": "## Your Task",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "inquirer": "^8.2.4",
    "pg": "^8.12.0"
  },
  "devDependencies": {}
}

Usage

To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

![alt text](assets/images/screenshot.png)

Features

	•	View and add employees, including their salary and roles.
	•	Organize departments and roles efficiently.
	•	Manage employee data with JSON columns in PostgreSQL.

Tests

Refer to connection.js for testing the database connection and other functionalities.





This includes the new “Package JSON” section and details on how to work with JSON in PostgreSQL.
