async function handle() {
    let characters = [];
    let password = []; // Deve ser string

    const passwordLength = Number(process.env.PASSWORD_LENGTH); // Converter para número

    if (process.env.UPPERCASE_LETTERS === "true") {
        characters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    if (process.env.LOWERCASE_LETTERS === "true") {
        characters.push(..."abcdefghijklmnopqrstuvwxyz");
    }
    if (process.env.NUMBERS === "true") {
        characters.push(..."0123456789");
    }
    if (process.env.SPECIAL_CHARACTERS === "true") {
        characters.push(..."!@#$%&");
    }

    // Verifica se há caracteres disponíveis
    if (characters.length === 0) {
        throw new Error("Nenhum tipo de caractere foi selecionado no .env");
    }

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;
}

export default handle;