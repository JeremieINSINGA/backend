const express = require ("express")
const app = express()

const port = 8000

app.get(
    '/Authors API',
    (req,res)) => {
        
        const Authors1 = ["Lawrence Nowell, UK"];
        const Authors2 = ["William Shakespeare, UK"];
        const authors3 = ["Charles Dickens, US"];
        const authors4 = ["Oscar Wilde", "UK"];
    }
console.log


const express = require ("express")
const app = express()

const port = 8000  


app.get(
    '/hello',
     (req,res)) => {

         const = [1, 2, 3]

         res.send('arr');
    }
);

app.get('/bonjour/:name/au revoir/:Jérémie', (req, res) =>  {

    console.log("req.params: ", req.params)

    res.send('bonjour ${req.params.name} !');
    });


app.listen(port, () => {
    console.log(The server is listening in the port ${port} )
})
