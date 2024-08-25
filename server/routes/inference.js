import express from "express"
import axios from "axios";

const inference_router = express.Router();

const LLM_KEY = process.env.LLM_KEY

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

    const headers = {
        'Authorization': `Bearer ${LLM_KEY}`,
        'Content-Type': 'application/json'
    };

    const data = {
        'inputs': prompt,
        'parameters': {
            'max_new_tokens': 40,
            'return_full_text': false
        }
    };

    try {
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8b-Instruct',
            data, // No need to stringify the data; axios does this automatically
            { headers }
        );
        const generatedTextJSON = response.data;
        console.log(generatedTextJSON)
        res.status(200).send(generatedTextJSON);
    } catch (error) {
        console.error("Error getting recommendation:", error.response ? error.response.data : error.message);
        res.status(500).send("Error getting recommendation");
    }
});

export default inference_router;
