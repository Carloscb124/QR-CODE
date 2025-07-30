# 📱 Projeto: Gerador de QR Code e Senhas Aleatórias

Este repositório contém a implementação de um projeto prático proposto na formação **Node.js** da [DIO (Digital Innovation One)](https://www.dio.me/). A aplicação permite:

✅ Gerar **QR Codes** a partir de links ou textos  
🔐 Gerar **senhas aleatórias seguras** com comprimento e composição definidos

Tudo isso utilizando JavaScript com Node.js no terminal!

---

## 🚀 Objetivos do Projeto

- Reforçar conceitos fundamentais de **Node.js**
- Interagir com o terminal utilizando `readline`
- Trabalhar com geração de **QR Codes** via pacote `qrcode`
- Criar um gerador de **senhas aleatórias** personalizadas

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [qrcode](https://www.npmjs.com/package/qrcode) – geração de QR Codes
- [readline](https://nodejs.org/api/readline.html) – entrada de dados no terminal


---

## 📦 Como Executar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/Carloscb124/QR-CODE.git
cd QR-CODE
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute a aplicação
```bash
node index.js
```

---

## 💻 Funcionalidades

### 🧾 Geração de QR Code
- O terminal solicitará que você digite uma URL ou texto
- Um arquivo `qrcode.png` será gerado automaticamente no diretório do projeto

### 🔐 Geração de Senhas Aleatórias
- Após gerar o QR Code, você pode optar por gerar uma senha aleatória
- A senha é criada com base em letras, números e símbolos

---

## 📸 Exemplo de Saída

```bash
Digite um link ou texto para gerar QR Code: https://dio.me
✅ QR Code gerado com sucesso!

Deseja gerar uma senha segura? (s/n): s
🔐 Sua senha gerada: a8$L!z2P#4dW
```

---

## 📁 Estrutura do Projeto

```
QR-CODE/
├── node_modules/
├── index.js
├── package.json
├── package-lock.json
└── qrcode.png (gerado após execução)
```

---

## 📚 Aprendizados

- Modularização de código em Node.js
- Entrada/saída com `readline`
- Geração de QR Codes com a biblioteca `qrcode`
- Geração de senhas seguras com `crypto`
- Boas práticas de organização de projeto

---

## 🔗 Link do Desafio Original

- [Desafio QR Code - DIO](https://github.com/digitalinnovationone/formacao-nodejs/tree/main/projeto-qrcode)

---

## 👨‍💻 Autor

**Carlos**  
🔗 [Meu GitHub](https://github.com/Carloscb124)

---
