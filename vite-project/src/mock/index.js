import { Server } from "miragejs"; //SERVER JA VEM PADRÃO DO MIRAGEJS

function Mock() {
  return new Server({ //aki dentro ficam as configurações
    routes() {
      this.urlPrefix = "http://www.ws.dev/"; //url API do dominio que vai rodar, pode ser localmente ou não
      this.namespace = "api/account"; // em qual parte da api ex: /login, /cadastro e etc...

      this.get("/", () => {
        //metodo get na gota main
        return { message: "servidor OKAY" };
      });

      this.post("/resgistrar", () => {
        // metodo post na rota registrar
      });

      this.post("/auth", () => {
        //metodo post na rota autenticar
      });
    },
  });
}

export default Mock;
