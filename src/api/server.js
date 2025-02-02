const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Dados de exemplo
const receitas = [
  {
    id: 1,
    titulo: "Bolo de Chocolate",
    ingredientes: [
      "2 xícaras de farinha de trigo",
      "1 xícara de açúcar",
      "1/2 xícara de cacau em pó",
      "1 xícara de leite",
      "1/2 xícara de óleo",
      "2 ovos",
      "1 colher de sopa de fermento em pó"
    ],
    modoDePreparo: "1. Preaqueça o forno a 180°C.\n2. Em uma tigela, misture a farinha, o açúcar, o cacau e o fermento.\n3. Adicione o leite, o óleo e os ovos. Misture até obter uma massa homogênea.\n4. Despeje a massa em uma forma untada e enfarinhada.\n5. Asse por cerca de 30 minutos ou até que um palito saia limpo ao ser inserido no centro.\n6. Deixe esfriar antes de desenformar."
  },
  {
    id: 2,
    titulo: "Lasagna à Bolonhesa",
    ingredientes: [
      "12 folhas de lasanha",
      "500g de carne moída",
      "1 cebola picada",
      "2 dentes de alho picados",
      "1 lata de molho de tomate",
      "200g de queijo mussarela",
      "100g de queijo parmesão",
      "1/2 xícara de leite",
      "1 colher de sopa de óleo",
      "Sal e pimenta a gosto"
    ],
    modoDePreparo: "1. Cozinhe a carne moída com a cebola e o alho no óleo até dourar.\n2. Adicione o molho de tomate e cozinhe por 15 minutos. Tempere com sal e pimenta.\n3. Cozinhe as folhas de lasanha conforme as instruções do pacote.\n4. Em um refratário, coloque uma camada de molho, seguida por uma camada de lasanha, e uma camada de queijo mussarela.\n5. Repita as camadas até acabar os ingredientes, finalizando com molho e queijo parmesão.\n6. Asse em forno preaquecido a 180°C por 30-40 minutos."
  },
  {
    id: 3,
    titulo: "Salada Caesar",
    ingredientes: [
      "1 alface americana",
      "1 peito de frango grelhado",
      "1/2 xícara de queijo parmesão ralado",
      "1/2 xícara de croutons",
      "1/4 xícara de molho Caesar",
      "Sal e pimenta a gosto"
    ],
    modoDePreparo: "1. Corte o peito de frango em tiras.\n2. Lave e rasgue as folhas de alface.\n3. Em uma tigela grande, misture a alface, o frango, o queijo parmesão e os croutons.\n4. Adicione o molho Caesar e misture bem.\n5. Tempere com sal e pimenta a gosto."
  },
  {
    id: 4,
    titulo: "Sopa de Abóbora",
    ingredientes: [
      "1 abóbora média descascada e picada",
      "1 cebola picada",
      "2 dentes de alho picados",
      "4 xícaras de caldo de legumes",
      "1/2 xícara de creme de leite",
      "2 colheres de sopa de azeite",
      "Sal e pimenta a gosto"
    ],
    modoDePreparo: "1. Aqueça o azeite em uma panela grande e refogue a cebola e o alho até ficarem macios.\n2. Adicione a abóbora e o caldo de legumes. Cozinhe até a abóbora estar macia.\n3. Bata a sopa no liquidificador até obter uma textura cremosa.\n4. Retorne à panela e adicione o creme de leite. Cozinhe por mais 5 minutos.\n5. Tempere com sal e pimenta a gosto antes de servir."
  },
  {
    id: 5,
    titulo: "Pasta Carbonara",
    ingredientes: [
      "200g de macarrão",
      "100g de bacon picado",
      "2 ovos",
      "1/2 xícara de queijo parmesão ralado",
      "2 dentes de alho picados",
      "Sal e pimenta a gosto",
      "Azeite para fritar"
    ],
    modoDePreparo: "1. Cozinhe o macarrão conforme as instruções do pacote.\n2. Em uma frigideira, aqueça o azeite e frite o bacon até ficar crocante. Adicione o alho e cozinhe por mais 1 minuto.\n3. Em uma tigela, bata os ovos e misture com o queijo parmesão.\n4. Escorra o macarrão e adicione à frigideira com bacon e alho. Retire do fogo.\n5. Misture os ovos e queijo ao macarrão ainda quente, mexendo bem para que o molho se forme.\n6. Tempere com sal e pimenta a gosto e sirva imediatamente."
  },
  {
    id: 6,
    titulo: "Tacos de Carne",
    ingredientes: [
      "500g de carne moída",
      "1 pacote de tempero para tacos",
      "1/2 xícara de água",
      "12 tortilhas de milho",
      "1 xícara de alface picada",
      "1/2 xícara de tomate picado",
      "1/2 xícara de queijo ralado",
      "1/4 xícara de creme azedo"
    ],
    modoDePreparo: "1. Em uma frigideira grande, cozinhe a carne moída até dourar. Escorra o excesso de gordura.\n2. Adicione o tempero para tacos e a água. Cozinhe por 5 minutos até o molho engrossar.\n3. Aqueça as tortilhas em uma frigideira ou no micro-ondas.\n4. Monte os tacos com a carne, alface, tomate e queijo.\n5. Adicione uma colher de creme azedo por cima e sirva."
  },
  {
    id: 7,
    titulo: "Frango ao Curry",
    ingredientes: [
      "500g de peito de frango cortado em cubos",
      "1 cebola picada",
      "2 dentes de alho picados",
      "2 colheres de sopa de curry em pó",
      "1 lata de leite de coco",
      "1/2 xícara de caldo de galinha",
      "1 colher de sopa de óleo",
      "Sal e pimenta a gosto"
    ],
    modoDePreparo: "1. Aqueça o óleo em uma panela e refogue a cebola e o alho até ficarem macios.\n2. Adicione o frango e cozinhe até dourar.\n3. Misture o curry em pó e cozinhe por 1 minuto.\n4. Adicione o leite de coco e o caldo de galinha. Cozinhe por 15 minutos ou até o frango estar completamente cozido.\n5. Tempere com sal e pimenta a gosto e sirva com arroz."
  },
  {
    id: 8,
    titulo: "Smoothie de Frutas",
    ingredientes: [
      "1 banana",
      "1 xícara de morangos congelados",
      "1/2 xícara de iogurte natural",
      "1/2 xícara de suco de laranja",
      "1 colher de sopa de mel"
    ],
    modoDePreparo: "1. Coloque todos os ingredientes no liquidificador.\n2. Bata até obter uma mistura homogênea.\n3. Sirva imediatamente para aproveitar a frescura do smoothie."
  },
  {
    id: 9,
    titulo: "Panqueca Americana",
    ingredientes: [
      "1 xícara de farinha de trigo",
      "2 colheres de sopa de açúcar",
      "1 colher de sopa de fermento em pó",
      "1/2 colher de chá de sal",
      "1 ovo",
      "1 xícara de leite",
      "2 colheres de sopa de manteiga derretida"
    ],
    modoDePreparo: "1. Em uma tigela, misture a farinha, o açúcar, o fermento e o sal.\n2. Em outra tigela, bata o ovo, o leite e a manteiga derretida.\n3. Adicione os ingredientes úmidos aos ingredientes secos e misture até obter uma massa homogênea.\n4. Aqueça uma frigideira untada em fogo médio.\n5. Despeje pequenas porções de massa na frigideira e cozinhe até aparecerem bolhas na superfície. Vire e cozinhe o outro lado até dourar.\n6. Sirva com xarope de bordo ou frutas."
  },
  {
    id: 10,
    titulo: "Guacamole",
    ingredientes: [
      "3 abacates maduros",
      "1 cebola roxa picada",
      "2 tomates picados",
      "1/4 xícara de coentro fresco picado",
      "1 limão (suco)",
      "Sal a gosto"
    ],
    modoDePreparo: "1. Amasse os abacates em uma tigela.\n2. Misture a cebola, os tomates e o coentro.\n3. Adicione o suco de limão e tempere com sal a gosto.\n4. Sirva imediatamente com tortilhas ou como acompanhamento."
  }
];

// Middleware para permitir CORS
app.use(cors());

// Middleware para parser JSON
app.use(express.json());

// Endpoint para obter todas as receitas
app.get('/receitas', (req, res) => {
  res.json(receitas);
});

// Endpoint para obter uma receita específica por ID
app.get('/receitas/:id', (req, res) => {
  const receitaId = parseInt(req.params.id, 10);
  const receita = receitas.find(r => r.id === receitaId);
  if (receita) {
    res.json(receita);
  } else {
    res.status(404).json({ message: 'Receita não encontrada' });
  }
});

// Endpoint para criar uma nova receita
app.post('/receitas', (req, res) => {
  const novaReceita = req.body;
  if (!novaReceita.titulo || !novaReceita.ingredientes || !novaReceita.modoDePreparo) {
    return res.status(400).json({ message: 'Dados da receita inválidos' });
  }

  const novoId = receitas.length ? Math.max(...receitas.map(r => r.id)) + 1 : 1;
  novaReceita.id = novoId;
  receitas.push(novaReceita);
  res.status(201).json(novaReceita);
});

// Endpoint para deletar uma receita por ID
app.delete('/receitas/:id', (req, res) => {
  const receitaId = parseInt(req.params.id, 10);
  const index = receitas.findIndex(r => r.id === receitaId);
  if (index !== -1) {
    receitas.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Receita não encontrada' });
  }
});

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
