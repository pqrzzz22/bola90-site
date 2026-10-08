// =========================
// BOLA 90 - JAVASCRIPT
// =========================

// Elementos da IA
const aiButton = document.getElementById("ai-button");
const aiQuestion = document.getElementById("ai-question");
const aiAnswer = document.getElementById("ai-answer");


// =========================
// IA DE DEMONSTRAÇÃO
// =========================

function responderPergunta() {

    const pergunta = aiQuestion.value
        .toLowerCase()
        .trim();

    if (pergunta === "") {
        aiAnswer.textContent = "Digite uma pergunta sobre futebol.";
        return;
    }

    let resposta = "";


    if (
        pergunta.includes("palmeiras") &&
        pergunta.includes("brasileirão")
    ) {
        resposta =
            "O Palmeiras é um dos clubes mais tradicionais do futebol brasileiro e possui vários títulos nacionais.";
    }

    else if (
        pergunta.includes("maior") &&
        pergunta.includes("brasil")
    ) {
        resposta =
            "O futebol brasileiro possui vários clubes gigantes. A discussão sobre qual é o maior depende dos critérios usados, como títulos, torcida e história.";
    }

    else if (
        pergunta.includes("libertadores")
    ) {
        resposta =
            "A Libertadores é a principal competição de clubes da América do Sul e reúne grandes equipes do continente.";
    }

    else if (
        pergunta.includes("champions")
    ) {
        resposta =
            "A UEFA Champions League reúne os principais clubes da Europa e é uma das competições mais importantes do futebol mundial.";
    }

    else if (
        pergunta.includes("futebol")
    ) {
        resposta =
            "Futebol é paixão! ⚽ No Bola 90 você pode acompanhar jogos, campeonatos, times e muito mais.";
    }

    else {
        resposta =
            "Boa pergunta! 🤔 Essa é uma versão inicial da Bola 90 IA. Em uma próxima etapa podemos conectar uma inteligência artificial de verdade ao projeto.";
    }

    aiAnswer.textContent = resposta;
}


// =========================
// BOTÃO DA IA
// =========================

aiButton.addEventListener("click", responderPergunta);


// =========================
// ENTER NO CAMPO DA IA
// =========================

aiQuestion.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        responderPergunta();
    }

});


// =========================
// ANIMAÇÃO AO ENTRAR NA PÁGINA
// =========================

console.log("⚽ Bola 90 carregado com sucesso!");
