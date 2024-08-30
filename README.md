
# Documentation

This is a simple Node.js application built using Express.js that serves random jokes and jokes in image format as response to different HTTP GET requests. 


## Project Structure

1. index.js: Main server file where the Express server is set up and routes are defined.
2. package.json: Contains project metadata and dependencies.
## API Endpoints

GET http://127.0.0.1:8888

    Description: Returns a randomly generated joke.

GET http://127.0.0.1:8888/both

    Description: Returns a randomly generated joke and it's image.




## Challenges

Sending pictures proved to be difficult as we can't directly send it without using some predefined express functions.