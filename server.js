const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Simulated AI code generation endpoint
app.post('/api/generate', (req, res) => {
  const { prompt } = req.body;

  // For demonstration, respond with a simple code snippet based on prompt
  const generatedCode = "// Generated code based on prompt: " + prompt + "\n\nfunction helloWorld() {\n  console.log(\"Hello, world!\");\n}\n\nhelloWorld();";

  res.json({ code: generatedCode });
});

app.listen(port, () => {
  console.log("AI app builder backend listening at http://localhost:" + port);
});
