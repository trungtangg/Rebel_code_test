#### Back-end
* For handling server requests: `Node.js with Express.js Framework`
* As Database: `MySQL`
* API tested using: `POSTMAN`

### FRONT-end
* React Framework
* Bootstrap
* axios to fetch api request

## Guidelines to setup
1. Create a `.env` file and the format should be as given in `.env.example`.
2. Setup your mysql database 
    create new schema named roster_challenge
    create new table named roster
    import json file in your mysql database
3. Open command line and cd to roster-challenge folder
    Run `npm install` to install all needed package for back end
4. Open a new command line and cd to roster-challenge/client folder
    Run `npm install` to install all needed package for front end
5. Start the servers
    ```
    Option 1 (for running both the servers simultaneously):
    
    npm run dev
    
    Option 2 (for running both the servers individually):
    
    npm run server (for backend server only)
    
    npm run client (for frontend server only)
    ```
_NOTE: Might take sometime to start as there will be 2 servers running._

## API Endpoints

#### Base Url - `http://localhost:5000/api`

#### Artist
* `GET /artists`
* `PUT /artists/:id`

## Future Scope
* Write more testing code for both side.
* Finish infinite scroll feature.
