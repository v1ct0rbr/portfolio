# Use a imagem base do Node.js
FROM node:22.6.0

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

COPY . .


# Instale as dependências do projeto
RUN npm install

# Copie todo o código-fonte para o diretório de trabalho


# Exponha a porta em que a aplicação estará em execução
EXPOSE 8788

RUN npm run build

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]