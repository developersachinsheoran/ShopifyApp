const request = require('request');
const express = require('express');

const app = express();



// apikey = '9b22ab3e9559dd0531e5d1f8aa1a9cff';
// apitoken = "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";
// endpoint = "customers";



let options = {
    'method': 'GET',
    'url' : 'https://9b22ab3e9559dd0531e5d1f8aa1a9cff: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@the-craftry.myshopify.com/admin/api/2023-01/products.json',
    'headers':  {
        'Content-type':'appication/json'
    }
};

app.get("/getdata", (req, res)=>{
    request(options, function(error, response){
        if(error) throw new Error(error);
        res.send(response.body);
        console.log(response.body);
    });
});

app.listen(3000);
