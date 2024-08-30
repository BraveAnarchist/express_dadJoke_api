import express, { response } from 'express';
import axios from 'axios';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 8888;
const hostname = '127.0.0.1';


async function fetch(url, headers) {
  try {
    const response = await axios.get(url, { headers: headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
}


app.get('/', async (req, res) => {
  try {
    const data = await fetch('https://icanhazdadjoke.com/', {
      'Accept': 'application/json'
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});
app.get('/image', async (req, res) => {
    try {
      const data = await axios.get('https://icanhazdadjoke.com/j/<usWLJeaUvc>.png', 
        {responseType:"arraybuffer"}
      );
      res.set("Content-Type", "image/png")
      console.log(data)
      res.status(200).send(data.data);
    } catch (error) {
      res.status(500).send('Error fetching data');
    }
  });
  app.get('/both', async (req, res) => {
    try {
    
        let arr=[];
       let data = await fetch('https://icanhazdadjoke.com/', {
      'Accept': 'application/json'
    });
      arr.push(data);
       data = await axios.get(`https://icanhazdadjoke.com/j/<${data.id}>.png`, {
        responseType:"arraybuffer"
      });
      arr.push(data.data);
      res.status(200).send(arr);
    } catch (error) {
      res.status(500).send('Error fetching data: '+error);
    }
  });

app.listen(port, hostname, () => {
  console.log(`Server started at http://${hostname}:${port}`);
});
