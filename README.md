# Kicks-App

![Alt text](client/public/shoe-icon.png "Shoe art")

Have you been wanting to buy a new shoe but have no idea where to start? Or maybe you just started a new sport and need the BEST shoe you can buy to boost your game.. You don't have to be a shoe enthusiast to understand what shoes are bringing to the table what you're looking for. Welcome to <span style="color: #f97316;">Kicks</span>. 
The Kicks application works by taking in your input for what you'd prefer in a shoe ("Comfortable, Sole Support, Color.. etc.") and finds you options from popular shoe sellers through AI power, eliminating the need for you to lookup shoes on your own. 


## Technology
This is a MERN Stack application, with three key components: the client, server, and microservice. 

### Client
The UI/UX portion of this project was built with React and Tailwind CSS after being designed in Miro. It is fully adaptable to mobile and desktop screens, providing users with the choice of where they want to use its features. Shoe information whether stored or retrieved points back to original seller sites so that users can quickly make purchases by having the original seller site available to them.

### Server
The backend of this project was built with Express which manages the API calls and routes to fetch information. For shoe recommendations, the server prompts a Llama 3.1 LLM model through Hugging Face's Inference API, returning recommendation in JSON that is parsed and served to the frontend. For data storage, the server interacts with a MongoDB database for easy functionality. Finally, for specific shoe lookups and real-time price retrieval, the server calls the Flask microservice. 

### Microservice
The secondary core of this project is a Flask API microservice built to serve prices and shoe information from shoe seller sites. Developed using Scrapy, Selenium, and the Twisted Reactor, calling the API provides shoe information in JSON format that can be processed and displayed to interested users. The API is hosted on an AWS EC2 instance, and is setup via NGINX and Gunicorn. Read more about how the microservice works [here](https://github.com/AshishT558/Kicks). 