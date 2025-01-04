# express-mongodb-jquery

The main purpose of this repository is to build a basic project and workflow for writing a fullstack project with Node/Express, Jquery and MongoDb for database.


| method             | resource         | description                                                                                    |
|:-------------------|:-----------------|:-----------------------------------------------------------------------------------------------|
| `POST`             | `/api/register`  | creates a user in the MongoDB                                                                  |
| `POST`             | `/api/login`     | login a user                                                                                   |

## Pre-reqs
To build and run this app locally you will need:
- Install [Node.js](https://nodejs.org/en/)

# Getting Started
- Clone the repository
```
git clone ttps://github.com/JessanyKaline/express-mongodb-jquery <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Run the project 
```
node server.js
```
Now you will need to run Docker, instructions bellow:

## Docker 
A docker-compose file has been added to the project with a MongoDB (mongoose).

It is as easy as go to the project folder and execute the command ```docker-compose up --build``` once you have Docker installed.

## Acess Front-end

http://localhost:3000/

## Acess MongoDB to view data

Using command line with Docker

- Connect to MongoDB container
```docker exec -it express-mongodb-jquery-mongodb-1 mongosh```

- Once inside MongoDB shell, you can:
  
```show dbs ```               # Show all databases

```use basicapp ```           # Switch to your database

```show collections ```     # Show all collections

```db.users.find() ```         # Show all users in the users collection
