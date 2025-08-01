import chalk from "chalk";

const promptQRCode = [
    {
        name: "Link",
        description: chalk.yellow("Digite o link para gerar o QR CODE"),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre o tipo de QRcode (1- NORMAL ou 2- TERMINAL"),
        pattern: /^[1-2]+$/,
        message: chalk.italic("Escolha apenas entre 1 e 2"),
        require: true,
    }
];

export default promptQRCode;