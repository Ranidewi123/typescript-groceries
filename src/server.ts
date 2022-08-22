import express from 'express';

const app = express();

app.get('/', (req, res)=> {
    res.json({hello:'word'});
})

export  const server = () => {
    app.listen(3000);
    console.log(`Server started at http://localhost:${3000}`);
    console.log(`Press Command+C to quit`)
};
