import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import fs from 'fs';

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
app.get('/search', (req, res) => {
    const query = req.query.q;
  
    // Read the documents.json file
    fs.readFile('documents.json', 'utf-8', (err, data) => {
      if (err) {
        return res.status(500).send("Error reading documents file.");
      }
  
      // Parse the data to JSON
      const documents = JSON.parse(data);
  
      // If no query is provided, return all documents
      if (!query) {
        return res.json(documents);
      }
  
      // Filter documents based on the query
      const filteredDocuments = documents.filter(doc =>
        Object.values(doc).some(value =>
          typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase())
        )
      );
  
      // Return the filtered documents
      res.json(filteredDocuments);
    });
  });
  