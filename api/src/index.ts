import app from "./server";

const port = 6000

app.listen(`${port}`, () => {
    console.log(`Servidor rodando na porta ${port}`);
  }
);