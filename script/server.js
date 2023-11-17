const express = require('express');
const cors = require('cors');
const app = express();

// Habilita o CORS para todas as rotas
app.use(cors());

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.use(cors());

app.get('/yelp', async (req, res) => {
  const yelpApiKey = 'XtjG783BnA-iqYLVKPurc4d0YSJuEL2QwlvBVqB6PmJ90oz8sVuUZCXU9qWBJLF33w6EGCU8RZyZ2pMGEquEB4iO57TkHpLHsr8MqfF9XM7xC6f92V92uZZKuNlWZXYx';
  const yelpApiUrl = `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${location}&limit=1&open_now=true`;

  try {
    const response = await fetch(yelpApiUrl, {
      headers: {
        'Authorization': `Bearer ${yelpApiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao obter dados do Yelp');
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`);
});
