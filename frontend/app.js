const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

let objects = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

// GET request to RESTApi //

fetch('http://127.0.0.1:8000/api/companies/')
  .then(response => response.json())
  .then(data => {
    
    let cont = 1;
    for (res of data.Companies) {
        console.log("Objeto " + cont);
        console.log(res);
        objects.push(res);

        cont+=1;
    }
  })
  .catch(error => console.error(error));

// POST request to RESTApi //

//fetch('http://127.0.0.1:8000/api/companies/', {
//  method: 'POST',
//  headers: {
//    'Content-Type': 'application/json'
//  },
//  body: JSON.stringify({
//    name: '',
//    website: '',
//    foundation: '',
//  })
//})
//  .then(response => response.json())
//  .then(data => console.log(data))
//  .catch(error => console.error(error));

/////////////////////////////////////////////////////

// Manejo de vistas
app.get("/", function(req, res) { 
    let clientes = "Clientes";

    res.render('home', {
        Title: clientes,
        APIResponse: objects,                    
    });

});  
app.listen(port, function() {
    console.log("Server running on port " + port);
});



