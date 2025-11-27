# Tutorial de uso

- clone o repositório para sua máquina, navegue e faça o deploy com docker
```bash
$ git clone https://github.com/caldeira04/docker-bun-test.git
$ cd docker-bun-test
$ docker compose up --build
```
- utilize o curl ou o seu visitador de urls de preferência (insomnium, wget, curl, navegador, etc) para acessar http://localhost:3000

## métodos aceitos
- GET /users: retorna todos usuários do banco
- POST /users: recebe um json com name onde name é uma string
- DELETE /users/:id: remove o usuário com o id da requisição
