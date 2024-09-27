const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Imagine que você descobre uma nova tecnologia capaz de reduzir drasticamente a emissão de poluentes. O que você faz primeiro?",
        alternativas: [
            {
                texto: "Eu ficaria empolgado e começaria a trabalhar para implementar essa tecnologia o mais rápido possível!",
                afirmacao: "Você vê a tecnologia como uma chance para melhorar o meio ambiente e quer usar isso como uma ferramenta."
            },
            {
                texto: "Acho que precisamos ser cuidadosos. Primeiro, deveríamos fazer uma análise detalhada e testes para garantir que tudo esteja certo.",
                afirmacao: "É cuidadoso e prefere garantir que a tecnologia seja segura e eficaz antes de implementá-la no dia a dia."
            }
        ]
    },
    {
        enunciado: "Uma nova política global para proteger os oceanos está sendo discutida. Como você se envolve nessa discussão?",
        alternativas: [
            {
                texto: "Organizo campanhas para divulgar e engajar a política na comunidade. Acredito que a conscientização é o começo!",
                afirmacao: "Valoriza a mobilização comunitária e acha que é essencial que o público esteja de acordo para que a coisa funcione."
            },
            {
                texto: "Trabalho em soluções tecnológicas inovadoras para ajudar a proteger os oceanos de forma prática e eficaz.",
                afirmacao: "Acreditando que a inovação tecnológica é a chave para resolver problemas ambientais e prefere focar em soluções concretas."
            }
        ]
    },
    {
        enunciado: "Durante uma reunião sobre mudanças climáticas, você é convidado a apresentar soluções para enfrentar o aquecimento global. O que você sugere?",
        alternativas: [
            {
                texto: "Proponho a utilização de fontes e recursos renováveis para reduzir a emissão de carbono.",
                afirmacao: "Prefererindo uma abordagem ampla e sustentável para lidar com as mudanças climáticas e acredita em soluções de longo prazo."
            },
            {
                texto: "Sugiro começar com projetos locais e comunitários que possam ser rapidamente implementados e adaptados às necessidades específicas.",
                afirmacao: "Acreditando que as mudanças começam em um nível menor, começando pela diferença na comunidade."
            }
        ]
    },
    {
        enunciado: "Você está desenvolvendo um projeto para promover a sustentabilidade em sua cidade. Como você estrutura seu plano?",
        alternativas: [
            {
                texto: "Crio um plano detalhado que inclui educação ambiental, incentivos para práticas sustentáveis e melhorias na infraestrutura.",
                afirmacao: "Você acredita que uma abordagem completa e integrada é a melhor maneira de promover a sustentabilidade e alcançar resultados duradouros,"
            },
            {
                texto: "Desenvolvo uma solução inovadora, como uma nova tecnologia verde, que pode servir de exemplo para outras cidades.",
                afirmacao: "Você prefere se concentrar em inovações que podem se destacar e inspirar outras cidades a seguir o mesmo caminho,"
            }
        ]
    },
    {
        enunciado: "Seu governo está considerando cortar o orçamento para programas ambientais. Como você reage a isso?",
        alternativas: [
            {
                texto: "Faço pressão para que o orçamento seja mantido ou até aumentado, ressaltando a importância desses programas para a saúde do nosso planeta.",
                afirmacao: "E está comprometido em proteger os programas ambientais e lutar para que eles recebam o apoio financeiro necessário."
            },
            {
                texto: "Sugiro alternativas de financiamento, como parcerias com empresas privadas e campanhas de arrecadação de fundos para manter os programas.",
                afirmacao: "E procura soluções alternativas para garantir a continuidade dos programas ambientais, buscando fontes de financiamento fora do orçamento governamental."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    limpaAlternativas(); // Limpa alternativas anteriores
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function limpaAlternativas() {
    caixaAlternativas.innerHTML = "";
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O futuro do planeta está agora nas suas mãos...";
    textoResultado.textContent = historiaFinal;
    limpaAlternativas();
}

mostraPergunta();
