import express from "express"
import axios from "axios";
import { InferenceClient } from "@huggingface/inference";

const inference_router = express.Router();
//UPDATED 2025 - use inference client instead of route
const LLM_KEY = process.env.LLM_KEY
const client = new InferenceClient(LLM_KEY)

// Route to call llama 3 and get shoe recommendations
inference_router.get("/:encodedPrefs", async (req, res) => {
    const decodedPrefs = decodeURIComponent(req.params.encodedPrefs).split(',')
    const prompt = `Based on the following criteria: [${decodedPrefs}], 
    provide one recommended shoe model from each of the following brands: Nike, Skechers, Adidas, and Under Armour. 
    Respond only with the shoe model names in the following format:

    Nike: [Nike Shoe Model]
    Skechers: [Skechers Shoe Model]
    Adidas: [Adidas Shoe Model]
    Under Armour: [Under Armour Shoe Model]
    
    Do not repeat the prompt.
    Do not include any additional text.`;

    // const headers = {
    //     'Authorization': `Bearer ${LLM_KEY}`,
    //     'Content-Type': 'application/json'
    // };

    // const data = {
    //     'inputs': prompt,
    //     'parameters': {
    //         'max_new_tokens': 40,
    //         'return_full_text': false
    //     }
    // };

    try {
        // const response = await axios.post(
        //     'https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8b-Instruct',
        //     data, // No need to stringify the data; axios does this automatically
        //     { headers }
        // );
        // const generatedTextJSON = response.data;
        completion = client.chatCompletion(
            model="meta-llama/Llama-3.1-8B-Instruct",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ],
        )
        const generatedText = completion.choices[0].message.content
        console.log(generatedText)
        res.status(200).send(generatedText);
    } catch (error) {
        console.error("Error getting recommendation:", error.response ? error.response.data : error.message);
        res.status(500).send("Error getting recommendation");
    }
});

//route to call Flask microservice, send results to mongodb, and return shoe results
inference_router.get("/get_shoe/:encodedShoe", async (req, res) => {
    let decodedShoe = decodeURIComponent(req.params.encodedShoe)
    // get json data form Flask microservice
    try {
        //adjust underarmour
        if(decodedShoe.toLowerCase().includes("under armour")) {
            decodedShoe = decodedShoe.replace("Under Armour", "underarmour")
        }
        const response = await axios.get(`http://18.219.22.255/scrape/${decodedShoe}`)

        const shoeJSON = response.data
        console.log(shoeJSON)
        // send data to mongodb
        axios.post('http://localhost:5050/record/insert_shoes', shoeJSON)
        .then(response => {
            console.log('Success importing data to mongo');
          })
          .catch(error => {
            console.error('Error importing data');
          });

        console.log(response.data)
        res.status(200).send(response.data)
    } catch (error) {
        console.error("Error getting shoes from Flask or importing into Mongo. Error:", error)
        res.status(500).send("Error on server side")
    }
    
})

export default inference_router;
