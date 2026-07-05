// =============================================
//  BANCO DE DADOS DOS QUIZZES
//  Cada quiz tem: id, titulo, franquia, cartaz,
//  nota, personagens e perguntas.
//
//  PONTUAÇÃO: cada alternativa tem um array
//  "pontos" que soma para cada personagem
//  na ordem definida em "personagens".
//  Ex: [2,0,1,0] → +2 no personagem 0, +1 no 2
// =============================================

const QUIZZES = [

    // ─────────────────────────────────────────
    //  1. HARRY POTTER
    // ─────────────────────────────────────────
    {
        id: "harry-potter",
        titulo: "Qual personagem de Harry Potter você é?",
        franquia: "🧙‍♂️ Harry Potter",
        cartaz: "images/harrypotter.jpg",
        nota: 9.1,
        personagens: [
            {
                nome: "Harry Potter",
                descricao: "Corajoso e impulsivo, você age pelo coração e nunca abandona quem ama, mesmo diante do perigo.",
                imagem: "images/harry.jpg"
            },
            {
                nome: "Hermione Granger",
                descricao: "Inteligente e lógica, você resolve problemas com raciocínio e se prepara para tudo com antecedência.",
                imagem: "images/hermione.jpg"
            },
            {
                nome: "Ron Weasley",
                descricao: "Engraçado e leal, você alivia a tensão com humor mas carrega inseguranças que subestimam seu valor.",
                imagem: "images/ron.jpg"
            },
            {
                nome: "Draco Malfoy",
                descricao: "Orgulhoso e complexo, você tem uma postura fria, mas esconde conflitos internos profundos.",
                imagem: "images/draco.jpg"
            }
        ],
        perguntas: [
            {
                texto: "Um amigo está em perigo. O que você faz?",
                alternativas: [
                    { texto: "Corro para ajudar sem pensar duas vezes",         pontos: [3,0,1,0] },
                    { texto: "Planejo a melhor estratégia antes de agir",       pontos: [0,3,0,0] },
                    { texto: "Fico nervoso mas vou junto com medo",             pontos: [0,0,3,0] },
                    { texto: "Avalio se vale o risco para mim",                 pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "Como você se sai nas provas da escola?",
                alternativas: [
                    { texto: "Passo na base do esforço e sorte",                pontos: [3,0,1,0] },
                    { texto: "Estudo muito e tiro as melhores notas",           pontos: [0,3,0,0] },
                    { texto: "Me viro com cola dos amigos",                     pontos: [0,0,3,0] },
                    { texto: "Uso todos os recursos disponíveis, certo?",       pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "Qual é o seu maior medo?",
                alternativas: [
                    { texto: "Perder as pessoas que amo",                       pontos: [3,0,0,0] },
                    { texto: "Falhar quando mais importa",                      pontos: [0,3,0,0] },
                    { texto: "Não ser bom o suficiente",                        pontos: [0,0,3,0] },
                    { texto: "Parecer fraco ou inferior",                       pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "Qual objeto mágico você escolheria?",
                alternativas: [
                    { texto: "Vassoura de Quidditch — velocidade e ação",       pontos: [3,0,1,0] },
                    { texto: "Uma biblioteca encantada infinita",               pontos: [0,3,0,0] },
                    { texto: "Mapa do Maroto — diversão garantida",             pontos: [0,0,3,0] },
                    { texto: "Varinha das Varinhas — poder absoluto",           pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "Seus amigos diriam que você é...",
                alternativas: [
                    { texto: "O protetor do grupo",                             pontos: [3,0,0,0] },
                    { texto: "O mais inteligente com certeza",                  pontos: [0,3,0,0] },
                    { texto: "O que faz todo mundo rir",                        pontos: [0,0,3,0] },
                    { texto: "O mais difícil de decifrar",                      pontos: [0,0,0,3] }
                ]
            }
        ]
    },

    // ─────────────────────────────────────────
    //  2. MARVEL
    // ─────────────────────────────────────────
    {
        id: "marvel",
        titulo: "Qual Vingador você é?",
        franquia: "🦸 Marvel",
        cartaz: "images/marvel.jpg",
        nota: 8.5,
        personagens: [
            {
                nome: "Tony Stark",
                descricao: "Egocêntrico e brilhante, você resolve tudo com inteligência e um sarcasmo afiado.",
                imagem: "images/tony.jpg"
            },
            {
                nome: "Steve Rogers",
                descricao: "Honrado e disciplinado, você coloca o dever acima de tudo e nunca desiste do que é certo.",
                imagem: "images/steve.jpg"
            },
            {
                nome: "Thor",
                descricao: "Impulsivo e emocional, você age pela força e sente tudo na intensidade máxima.",
                imagem: "images/thor.jpg"
            },
            {
                nome: "Natasha Romanoff",
                descricao: "Fria e estratégica, você observa antes de agir e raramente mostra o que sente.",
                imagem: "images/natasha.jpg"
            },
            {
                nome: "Loki",
                descricao: "Manipulador e carismático, você usa as palavras como armas e sempre tem um plano B.",
                imagem: "images/loki.jpg"
            }
        ],
        perguntas: [
            {
                texto: "Qual é sua abordagem num conflito?",
                alternativas: [
                    { texto: "Tecnologia e provocação — venci antes de começar",    pontos: [3,0,0,0,0] },
                    { texto: "Escudo no braço e princípios no peito",               pontos: [0,3,0,0,0] },
                    { texto: "Martelo na mão e grito de guerra",                    pontos: [0,0,3,0,0] },
                    { texto: "Analiso, espero e ataco na hora certa",               pontos: [0,0,0,3,0] },
                    { texto: "Faço o inimigo se voltar contra si mesmo",            pontos: [0,0,0,0,3] }
                ]
            },
            {
                texto: "O que você mais valoriza?",
                alternativas: [
                    { texto: "Liberdade e genialidade",                             pontos: [3,0,0,0,0] },
                    { texto: "Justiça e integridade",                               pontos: [0,3,0,0,0] },
                    { texto: "Família e honra",                                     pontos: [0,0,3,0,0] },
                    { texto: "Controle e missão",                                   pontos: [0,0,0,3,0] },
                    { texto: "Poder e reconhecimento",                              pontos: [0,0,0,0,3] }
                ]
            },
            {
                texto: "Como você reage a uma derrota?",
                alternativas: [
                    { texto: "Construo uma armadura melhor",                        pontos: [3,0,0,0,0] },
                    { texto: "Levanto, ajusto e continuo",                          pontos: [0,3,0,0,0] },
                    { texto: "Fico devastado mas volto mais forte",                 pontos: [0,0,3,0,0] },
                    { texto: "Processo em silêncio e planejo a reviravolta",        pontos: [0,0,0,3,0] },
                    { texto: "Culpo as circunstâncias e mudo de estratégia",        pontos: [0,0,0,0,3] }
                ]
            },
            {
                texto: "Qual superpoder você escolheria?",
                alternativas: [
                    { texto: "Inteligência sobre-humana e armadura",                pontos: [3,0,0,0,0] },
                    { texto: "Super força e escudo indestrutível",                  pontos: [0,3,0,0,0] },
                    { texto: "Controlar o trovão e voar",                           pontos: [0,0,3,0,0] },
                    { texto: "Habilidades de combate e furtividade",                pontos: [0,0,0,3,0] },
                    { texto: "Magia e ilusão",                                      pontos: [0,0,0,0,3] }
                ]
            },
            {
                texto: "Seus amigos te descrevem como...",
                alternativas: [
                    { texto: "O mais inteligente e irritante da turma",             pontos: [3,0,0,0,0] },
                    { texto: "O mais confiável em qualquer situação",               pontos: [0,3,0,0,0] },
                    { texto: "O mais intenso e apaixonado",                         pontos: [0,0,3,0,0] },
                    { texto: "O mais misterioso e calculista",                      pontos: [0,0,0,3,0] },
                    { texto: "O mais imprevisível e fascinante",                    pontos: [0,0,0,0,3] }
                ]
            }
        ]
    },

    // ─────────────────────────────────────────
    //  3. HOMEM-ARANHA
    // ─────────────────────────────────────────
    {
        id: "homem-aranha",
        titulo: "Qual personagem do Homem-Aranha você é?",
        franquia: "🕷️ Homem-Aranha",
        cartaz: "images/homemaranha.jpg",
        nota: 8.0,
        personagens: [
            {
                nome: "Peter Parker",
                descricao: "Responsável e ansioso, você carrega o peso do mundo nos ombros e ainda assim nunca desiste.",
                imagem: "images/peter.jpg"
            },
            {
                nome: "MJ",
                descricao: "Irônica e independente, você tem opiniões fortes e não precisa da aprovação de ninguém.",
                imagem: "images/mj.jpg"
            },
            {
                nome: "Gwen Stacy",
                descricao: "Inteligente e focada, você é determinada, brilhante e sabe exatamente onde quer chegar.",
                imagem: "images/gwen.jpg"
            },
            {
                nome: "Harry Osborn",
                descricao: "Instável e emocional, você sente tudo com intensidade e luta contra conflitos que vêm de dentro.",
                imagem: "images/harry-o.jpg"
            }
        ],
        perguntas: [
            {
                texto: "Como você lida com responsabilidade?",
                alternativas: [
                    { texto: "Assumo tudo mesmo que me pese demais",               pontos: [3,0,0,0] },
                    { texto: "Faço o que é meu, sem aceitar fardo alheio",         pontos: [0,3,0,0] },
                    { texto: "Me organizo e cumpro tudo no prazo",                 pontos: [0,0,3,0] },
                    { texto: "Depende do dia — às vezes tudo desmorona",           pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "No colégio você era...",
                alternativas: [
                    { texto: "O nerd que todo mundo subestimava",                  pontos: [3,0,0,0] },
                    { texto: "A que tinha opinião sobre tudo",                     pontos: [0,3,0,0] },
                    { texto: "A estudiosa com foco total",                         pontos: [0,0,3,0] },
                    { texto: "O popular com problemas em casa",                    pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "O que mais te move?",
                alternativas: [
                    { texto: "Proteger quem amo a qualquer custo",                 pontos: [3,0,0,0] },
                    { texto: "Ser fiel a mim mesmo",                               pontos: [0,3,0,0] },
                    { texto: "Alcançar meus objetivos",                            pontos: [0,0,3,0] },
                    { texto: "Provar que sou mais do que pareço",                  pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "Sua maior fraqueza?",
                alternativas: [
                    { texto: "Não sei dizer não",                                  pontos: [3,0,0,0] },
                    { texto: "Sou dura demais às vezes",                           pontos: [0,3,0,0] },
                    { texto: "Perfeccionismo que me paralisa",                     pontos: [0,0,3,0] },
                    { texto: "Deixo as emoções me dominarem",                      pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "Quando tudo dá errado você...",
                alternativas: [
                    { texto: "Levanto e tento de novo — sempre",                   pontos: [3,0,0,0] },
                    { texto: "Processo sozinha e sigo em frente",                  pontos: [0,3,0,0] },
                    { texto: "Analiso o que errei e corrijo",                      pontos: [0,0,3,0] },
                    { texto: "Entro em espiral emocional antes de me recompor",    pontos: [0,0,0,3] }
                ]
            }
        ]
    },

    // ─────────────────────────────────────────
    //  4. JOGOS VORAZES
    // ─────────────────────────────────────────
    {
        id: "jogos-vorazes",
        titulo: "Qual personagem dos Jogos Vorazes você é?",
        franquia: "🎯 Jogos Vorazes",
        cartaz: "images/vorazes.jpg",
        nota: 7.8,
        personagens: [
            {
                nome: "Katniss Everdeen",
                descricao: "Protetora e fechada, você faz de tudo por quem ama mas tem dificuldade em confiar no mundo.",
                imagem: "images/katniss.jpg"
            },
            {
                nome: "Peeta Mellark",
                descricao: "Gentil e emocional, você enxerga o bem nas pessoas e usa palavras para conectar ao invés de dividir.",
                imagem: "images/peeta.jpg"
            },
            {
                nome: "Gale Hawthorne",
                descricao: "Intenso e rebelde, você questiona o sistema e está disposto a tudo pela causa em que acredita.",
                imagem: "images/gale.jpg"
            },
            {
                nome: "Effie Trinket",
                descricao: "Exagerada e organizada, você tem um jeito único de ver o mundo e leva a sério cada detalhe.",
                imagem: "images/effie.jpg"
            }
        ],
        perguntas: [
            {
                texto: "O que você faria para proteger sua família?",
                alternativas: [
                    { texto: "Qualquer coisa — sem limites",                       pontos: [3,0,0,0] },
                    { texto: "Tentaria convencer com palavras primeiro",            pontos: [0,3,0,0] },
                    { texto: "Lutaria contra o sistema inteiro se precisasse",      pontos: [0,0,3,0] },
                    { texto: "Organizaria um plano detalhado e eficiente",          pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "Como as pessoas te descrevem?",
                alternativas: [
                    { texto: "Fechado mas confiável na hora H",                    pontos: [3,0,0,0] },
                    { texto: "Caloroso e fácil de conversar",                      pontos: [0,3,0,0] },
                    { texto: "Intenso e apaixonado pelas causas",                  pontos: [0,0,3,0] },
                    { texto: "Organizado e cheio de personalidade",                pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "Numa situação de crise você...",
                alternativas: [
                    { texto: "Ajo instintivamente para sobreviver",                pontos: [3,0,0,0] },
                    { texto: "Tento manter a calma e negociar",                    pontos: [0,3,0,0] },
                    { texto: "Enfrento de frente sem recuar",                      pontos: [0,0,3,0] },
                    { texto: "Sigo o plano à risca",                               pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "O que te move mais?",
                alternativas: [
                    { texto: "Sobrevivência e proteção",                           pontos: [3,0,0,0] },
                    { texto: "Amor e conexão humana",                              pontos: [0,3,0,0] },
                    { texto: "Liberdade e justiça",                                pontos: [0,0,3,0] },
                    { texto: "Organização e propósito",                            pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "Sua relação com emoções?",
                alternativas: [
                    { texto: "Guardo para mim — mostrar é perigoso",              pontos: [3,0,0,0] },
                    { texto: "Expresso com facilidade e sem vergonha",             pontos: [0,3,0,0] },
                    { texto: "Sinto tudo intensamente e às vezes explodo",         pontos: [0,0,3,0] },
                    { texto: "Controlo bem, prefiro foco",                         pontos: [0,0,0,3] }
                ]
            }
        ]
    },

    // ─────────────────────────────────────────
    //  5. CREPÚSCULO
    // ─────────────────────────────────────────
    {
        id: "crepusculo",
        titulo: "Qual personagem de Crepúsculo você é?",
        franquia: "🧛 Crepúsculo",
        cartaz: "images/crepusculo.jpg",
        nota: 6.8,
        personagens: [
            {
                nome: "Bella Swan",
                descricao: "Introvertida e emocional, você sente as coisas com profundidade e busca pertencer a algo maior.",
                imagem: "images/bella.jpg"
            },
            {
                nome: "Edward Cullen",
                descricao: "Controlador e intenso, você ama com obsessão e carrega o peso de séculos de autocontrole.",
                imagem: "images/edward.jpg"
            },
            {
                nome: "Jacob Black",
                descricao: "Direto e caloroso, você é fiel, protetor e nunca esconde o que sente.",
                imagem: "images/jacob.jpg"
            }
        ],
        perguntas: [
            {
                texto: "Como você age quando está apaixonado?",
                alternativas: [
                    { texto: "Me entrego completamente e esqueço tudo",            pontos: [3,0,0] },
                    { texto: "Controlo cada passo para não machucar a pessoa",     pontos: [0,3,0] },
                    { texto: "Sou direto e mostro o que sinto na hora",            pontos: [0,0,3] }
                ]
            },
            {
                texto: "Qual ambiente você prefere?",
                alternativas: [
                    { texto: "Cidades pequenas, quietas, nubladas",                pontos: [3,0,0] },
                    { texto: "Mansões antigas, música clássica, solidão",          pontos: [0,3,0] },
                    { texto: "Ar livre, floresta, liberdade",                      pontos: [0,0,3] }
                ]
            },
            {
                texto: "Como lida com perigo?",
                alternativas: [
                    { texto: "Fico paralisada mas algo me empurra",                pontos: [3,0,0] },
                    { texto: "Controlo a situação com precisão fria",              pontos: [0,3,0] },
                    { texto: "Pulo na frente para proteger quem amo",              pontos: [0,0,3] }
                ]
            },
            {
                texto: "Seus amigos diriam que você é...",
                alternativas: [
                    { texto: "Quieto mas profundo demais",                         pontos: [3,0,0] },
                    { texto: "Intenso e difícil de entender",                      pontos: [0,3,0] },
                    { texto: "Sempre presente e sincero",                          pontos: [0,0,3] }
                ]
            },
            {
                texto: "O que é mais importante para você?",
                alternativas: [
                    { texto: "Encontrar onde pertenço",                            pontos: [3,0,0] },
                    { texto: "Proteger quem amo de mim mesmo",                     pontos: [0,3,0] },
                    { texto: "Ser autêntico e estar presente",                     pontos: [0,0,3] }
                ]
            }
        ]
    },

    // ─────────────────────────────────────────
    //  6. HIGH SCHOOL MUSICAL
    // ─────────────────────────────────────────
    {
        id: "high-school-musical",
        titulo: "Qual personagem de HSM você é?",
        franquia: "🎤 High School Musical",
        cartaz: "images/high.jpg",
        nota: 7.2,
        personagens: [
            {
                nome: "Troy Bolton",
                descricao: "Confuso mas popular, você equilibra expectativas alheias com o que realmente quer ser.",
                imagem: "images/troy.jpg"
            },
            {
                nome: "Gabriella Montez",
                descricao: "Calma e inteligente, você cresce na sombra até encontrar coragem para brilhar.",
                imagem: "images/gabriella.jpg"
            },
            {
                nome: "Sharpay Evans",
                descricao: "Ambiciosa e teatral, você não aceita segundo lugar e sabe exatamente o que quer.",
                imagem: "images/sharpay.jpg"
            },
            {
                nome: "Ryan Evans",
                descricao: "Criativo e contido, você tem talento de sobra mas prefere brilhar nos bastidores.",
                imagem: "images/ryan.jpg"
            }
        ],
        perguntas: [
            {
                texto: "Como você lida com pressão social?",
                alternativas: [
                    { texto: "Fico dividido entre o que querem e o que quero",     pontos: [3,0,0,0] },
                    { texto: "Me calo e espero o momento certo",                   pontos: [0,3,0,0] },
                    { texto: "Imponho minha vontade sem hesitar",                  pontos: [0,0,3,0] },
                    { texto: "Apoio quem precisa e fico nos bastidores",           pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "O que você faz numa festa?",
                alternativas: [
                    { texto: "Fico no centro das atenções sem querer",             pontos: [3,0,0,0] },
                    { texto: "Converso com poucas pessoas mas de verdade",         pontos: [0,3,0,0] },
                    { texto: "Organizo, destaco e brilho",                         pontos: [0,0,3,0] },
                    { texto: "Cuido da música ou da vibe do lugar",                pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "Qual é seu talento escondido?",
                alternativas: [
                    { texto: "Tenho mais de um e não sei qual escolher",           pontos: [3,0,0,0] },
                    { texto: "Inteligência que surpreende todo mundo",             pontos: [0,3,0,0] },
                    { texto: "Performar e se destacar em tudo",                   pontos: [0,0,3,0] },
                    { texto: "Criar e enxergar o que outros não veem",             pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "Como você enfrenta um rival?",
                alternativas: [
                    { texto: "Tento agradar os dois lados",                        pontos: [3,0,0,0] },
                    { texto: "Provo meu valor com resultados",                     pontos: [0,3,0,0] },
                    { texto: "Entro em modo competição total",                     pontos: [0,0,3,0] },
                    { texto: "Deixo meu trabalho falar por mim",                   pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "O que as pessoas mais gostam em você?",
                alternativas: [
                    { texto: "Minha energia e carisma natural",                    pontos: [3,0,0,0] },
                    { texto: "Minha calma e inteligência",                         pontos: [0,3,0,0] },
                    { texto: "Minha determinação e presença",                      pontos: [0,0,3,0] },
                    { texto: "Minha criatividade e lealdade",                      pontos: [0,0,0,3] }
                ]
            }
        ]
    },

    // ─────────────────────────────────────────
    //  7. DIVERTIDA MENTE
    // ─────────────────────────────────────────
    {
        id: "divertida-mente",
        titulo: "Qual emoção de Divertida Mente você é?",
        franquia: "🧠 Divertida Mente",
        cartaz: "images/insideout.jpg",
        nota: 8.2,
        personagens: [
            {
                nome: "Alegria",
                descricao: "Otimista e energética, você encontra o bom em tudo e irradia positividade por onde passa.",
                imagem: "images/alegria.jpg"
            },
            {
                nome: "Tristeza",
                descricao: "Sensível e empática, você sente tudo fundo e tem um dom especial para acolher os outros.",
                imagem: "images/tristeza.jpg"
            },
            {
                nome: "Raiva",
                descricao: "Explosivo e apaixonado, você tem senso de justiça afiadíssimo e não aceita desrespeito.",
                imagem: "images/raiva.jpg"
            },
            {
                nome: "Medo",
                descricao: "Ansioso e cauteloso, você antecipa tudo e raramente age sem calcular os riscos antes.",
                imagem: "images/medo.jpg"
            },
            {
                nome: "Nojinho",
                descricao: "Crítico e seletivo, você tem padrões altos e uma visão de mundo que poucos conseguem acompanhar.",
                imagem: "images/nojinho.jpg"
            }
        ],
        perguntas: [
            {
                texto: "Como você acorda de manhã?",
                alternativas: [
                    { texto: "Animado, já pensando no dia",                        pontos: [3,0,0,0,0] },
                    { texto: "Devagar, com peso no peito às vezes",                pontos: [0,3,0,0,0] },
                    { texto: "Irritado se algo está fora do lugar",                pontos: [0,0,3,0,0] },
                    { texto: "Já preocupado com o que pode dar errado",            pontos: [0,0,0,3,0] },
                    { texto: "Seletivo — depende de como a noite foi",             pontos: [0,0,0,0,3] }
                ]
            },
            {
                texto: "Alguém te trata mal. Sua reação?",
                alternativas: [
                    { texto: "Tento transformar em algo positivo",                 pontos: [3,0,0,0,0] },
                    { texto: "Fico magoado em silêncio",                           pontos: [0,3,0,0,0] },
                    { texto: "Confronto na hora mesmo",                            pontos: [0,0,3,0,0] },
                    { texto: "Fico remoendo por dias",                             pontos: [0,0,0,3,0] },
                    { texto: "Risca essa pessoa da minha vida",                    pontos: [0,0,0,0,3] }
                ]
            },
            {
                texto: "Qual sua memória favorita?",
                alternativas: [
                    { texto: "Uma conquista que celebrei com todo mundo",          pontos: [3,0,0,0,0] },
                    { texto: "Um momento quieto que me tocou fundo",               pontos: [0,3,0,0,0] },
                    { texto: "Uma injustiça que lutei e corrigi",                  pontos: [0,0,3,0,0] },
                    { texto: "Uma situação que evitei porque senti o perigo",      pontos: [0,0,0,3,0] },
                    { texto: "Uma experiência que só eu soube aproveitar",         pontos: [0,0,0,0,3] }
                ]
            },
            {
                texto: "Você mais se parece com...",
                alternativas: [
                    { texto: "O sol do grupo",                                     pontos: [3,0,0,0,0] },
                    { texto: "O ombro amigo",                                      pontos: [0,3,0,0,0] },
                    { texto: "A voz da verdade, mesmo que doa",                   pontos: [0,0,3,0,0] },
                    { texto: "O que sempre pensa no pior cenário",                 pontos: [0,0,0,3,0] },
                    { texto: "O mais difícil de agradar",                          pontos: [0,0,0,0,3] }
                ]
            },
            {
                texto: "O que você não suporta?",
                alternativas: [
                    { texto: "Negatividade sem necessidade",                       pontos: [3,0,0,0,0] },
                    { texto: "Indiferença com quem está sofrendo",                 pontos: [0,3,0,0,0] },
                    { texto: "Injustiça e falta de respeito",                      pontos: [0,0,3,0,0] },
                    { texto: "Imprevistos e falta de controle",                    pontos: [0,0,0,3,0] },
                    { texto: "Mediocridade e falta de padrão",                     pontos: [0,0,0,0,3] }
                ]
            }
        ]
    },

    // ─────────────────────────────────────────
    //  8. GAME OF THRONES
    // ─────────────────────────────────────────
    {
        id: "game-of-thrones",
        titulo: "Qual personagem de Game of Thrones você é?",
        franquia: "🐉 Game of Thrones",
        cartaz: "images/thrones.jpg",
        nota: 9.2,
        personagens: [
            {
                nome: "Jon Snow",
                descricao: "Honorável e reservado, você segue o dever acima de tudo e carrega um peso que raramente divide.",
                imagem: "images/jon.jpg"
            },
            {
                nome: "Daenerys Targaryen",
                descricao: "Forte e idealista, você tem uma visão de mundo clara e está disposta a queimar tudo para realizá-la.",
                imagem: "images/daenerys.jpg"
            },
            {
                nome: "Tyrion Lannister",
                descricao: "Inteligente e sarcástico, você usa as palavras como arma e enxerga o que outros ignoram.",
                imagem: "images/tyrion.jpg"
            },
            {
                nome: "Arya Stark",
                descricao: "Fria e independente, você traça seu próprio caminho e não tem medo de fazer o que precisa ser feito.",
                imagem: "images/arya.jpg"
            }
        ],
        perguntas: [
            {
                texto: "O que você faria pelo poder?",
                alternativas: [
                    { texto: "Nada — o poder não é o objetivo",                    pontos: [3,0,0,0] },
                    { texto: "Quase tudo, se for pela causa certa",                pontos: [0,3,0,0] },
                    { texto: "Usaria minha inteligência para obtê-lo",             pontos: [0,0,3,0] },
                    { texto: "Me importo mais com liberdade do que poder",         pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "Como você lida com traidores?",
                alternativas: [
                    { texto: "Com justiça, mesmo que doa",                         pontos: [3,0,0,0] },
                    { texto: "Punição exemplar para ninguém repetir",              pontos: [0,3,0,0] },
                    { texto: "Com ironia e distanciamento estratégico",            pontos: [0,0,3,0] },
                    { texto: "Guardo na lista e aguardo o momento",                pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "Qual é sua maior força?",
                alternativas: [
                    { texto: "Minha honra e lealdade",                             pontos: [3,0,0,0] },
                    { texto: "Minha determinação e visão",                         pontos: [0,3,0,0] },
                    { texto: "Minha inteligência e adaptabilidade",                pontos: [0,0,3,0] },
                    { texto: "Minha frieza e precisão",                            pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "O que as pessoas subestimam em você?",
                alternativas: [
                    { texto: "Minha capacidade de liderança",                      pontos: [3,0,0,0] },
                    { texto: "Minha força de vontade",                             pontos: [0,3,0,0] },
                    { texto: "Minha profundidade por trás do humor",               pontos: [0,0,3,0] },
                    { texto: "Meu perigo quando provoco",                          pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "Seu maior defeito?",
                alternativas: [
                    { texto: "Sou ingênuo demais para um mundo cruel",             pontos: [3,0,0,0] },
                    { texto: "Deixo a obsessão me cegar",                          pontos: [0,3,0,0] },
                    { texto: "Uso o cinismo como escudo",                          pontos: [0,0,3,0] },
                    { texto: "Sou frio demais com quem merecia mais",              pontos: [0,0,0,3] }
                ]
            }
        ]
    },

    // ─────────────────────────────────────────
    //  9. STRANGER THINGS
    // ─────────────────────────────────────────
    {
        id: "stranger-things",
        titulo: "Qual personagem de Stranger Things você é?",
        franquia: "🕶️ Stranger Things",
        cartaz: "images/strangerthings.jpg",
        nota: 8.7,
        personagens: [
            {
                nome: "Eleven",
                descricao: "Silenciosa e poderosa, você guarda um universo dentro de si e age quando as palavras não bastam.",
                imagem: "images/eleven.jpg"
            },
            {
                nome: "Mike Wheeler",
                descricao: "Leal e emotivo, você coloca os amigos acima de tudo e sente cada perda como se fosse sua.",
                imagem: "images/mike.jpg"
            },
            {
                nome: "Dustin Henderson",
                descricao: "Engraçado e inteligente, você usa o humor para conectar pessoas e resolve problemas de formas únicas.",
                imagem: "images/dustin.jpg"
            },
            {
                nome: "Max Mayfield",
                descricao: "Independente e forte, você não precisa de aprovação e enfrenta traumas com coragem real.",
                imagem: "images/max.jpg"
            }
        ],
        perguntas: [
            {
                texto: "Como você se expressa melhor?",
                alternativas: [
                    { texto: "Com ações, não com palavras",                        pontos: [3,0,0,0] },
                    { texto: "Com discursos apaixonados sobre o que importa",      pontos: [0,3,0,0] },
                    { texto: "Com piadas e referências que só eu entendo",         pontos: [0,0,3,0] },
                    { texto: "Com honestidade direta, às vezes dura",              pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "Qual é sua relação com o grupo?",
                alternativas: [
                    { texto: "Sou o elemento mais misterioso",                     pontos: [3,0,0,0] },
                    { texto: "Sou a cola que mantém todo mundo junto",             pontos: [0,3,0,0] },
                    { texto: "Sou o humor e a energia do grupo",                   pontos: [0,0,3,0] },
                    { texto: "Sou independente mas estou lá quando precisa",       pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "Diante do desconhecido você...",
                alternativas: [
                    { texto: "Encaro de frente com tudo que tenho",                pontos: [3,0,0,0] },
                    { texto: "Reúno o grupo antes de agir",                        pontos: [0,3,0,0] },
                    { texto: "Analiso, teorizo e proponho uma solução",            pontos: [0,0,3,0] },
                    { texto: "Processo sozinha e ajo no meu tempo",                pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "O que te move?",
                alternativas: [
                    { texto: "Encontrar onde pertenço",                            pontos: [3,0,0,0] },
                    { texto: "Proteger quem amo",                                  pontos: [0,3,0,0] },
                    { texto: "Descobrir como as coisas funcionam",                 pontos: [0,0,3,0] },
                    { texto: "Ser livre e superar o que vivenciei",                pontos: [0,0,0,3] }
                ]
            },
            {
                texto: "Sua maior qualidade?",
                alternativas: [
                    { texto: "Coragem que vai além do medo",                       pontos: [3,0,0,0] },
                    { texto: "Lealdade incondicional",                             pontos: [0,3,0,0] },
                    { texto: "Criatividade e resolução de problemas",              pontos: [0,0,3,0] },
                    { texto: "Resiliência real diante da dor",                     pontos: [0,0,0,3] }
                ]
            }
        ]
    },

    // ─────────────────────────────────────────
    //  10. O DIABO VESTE PRADA
    // ─────────────────────────────────────────
    {
        id: "diabo-veste-prada",
        titulo: "Qual personagem de O Diabo Veste Prada você é?",
        franquia: "🎭 O Diabo Veste Prada",
        cartaz: "images/prada.jpg",
        nota: 7.5,
        personagens: [
            {
                nome: "Miranda Priestly",
                descricao: "Exigente e fria, você tem padrões impossíveis, mas por trás da dureza existe uma visão que poucos entendem.",
                imagem: "images/miranda.jpg"
            },
            {
                nome: "Andy Sachs",
                descricao: "Insegura mas evolutiva, você chega sem saber quem é e sai com uma identidade que construiu sozinha.",
                imagem: "images/andy.jpg"
            },
            {
                nome: "Emily",
                descricao: "Ambiciosa e competitiva, você trabalha mais do que todos e não tolera quem não leva a sério.",
                imagem: "images/emily.jpg"
            }
        ],
        perguntas: [
            {
                texto: "Como você age num ambiente competitivo?",
                alternativas: [
                    { texto: "Estabeleço os padrões que os outros seguem",         pontos: [3,0,0] },
                    { texto: "Me adapto e aprendo mais rápido do que pareço",      pontos: [0,3,0] },
                    { texto: "Me dedico mais do que todos sem reclamar",           pontos: [0,0,3] }
                ]
            },
            {
                texto: "Qual é sua relação com moda / estética?",
                alternativas: [
                    { texto: "É minha língua — falo através dela",                 pontos: [3,0,0] },
                    { texto: "Aprendi a valorizar quando precisei",                pontos: [0,3,0] },
                    { texto: "É quase uma religião para mim",                      pontos: [0,0,3] }
                ]
            },
            {
                texto: "O que as pessoas pensam de você no trabalho?",
                alternativas: [
                    { texto: "Temem e respeitam ao mesmo tempo",                   pontos: [3,0,0] },
                    { texto: "Gostam, mas não levam a sério de início",            pontos: [0,3,0] },
                    { texto: "Sabem que podem contar mas me acham intensa",        pontos: [0,0,3] }
                ]
            },
            {
                texto: "Como você enfrenta uma crítica?",
                alternativas: [
                    { texto: "Não recebo — eu que critico",                        pontos: [3,0,0] },
                    { texto: "Absorvo e uso para crescer",                         pontos: [0,3,0] },
                    { texto: "Me abala mas me motiva a melhorar",                  pontos: [0,0,3] }
                ]
            },
            {
                texto: "Qual é seu maior sonho?",
                alternativas: [
                    { texto: "Ser a referência máxima na minha área",              pontos: [3,0,0] },
                    { texto: "Descobrir quem sou e o que realmente quero",         pontos: [0,3,0] },
                    { texto: "Ser reconhecida pelo esforço que coloco em tudo",    pontos: [0,0,3] }
                ]
            }
        ]
    },

    // ─────────────────────────────────────────
    //  11. JOGOS DE AÇÃO / GENÉRICO
    // ─────────────────────────────────────────
    {
        id: "acao",
        titulo: "Qual arquétipo de ação você é?",
        franquia: "💥 Jogos de Ação",
        cartaz: "images/tlf.jpg",
        nota: 7.0,
        personagens: [
            {
                nome: "O Líder",
                descricao: "Decidido e forte, você assume o comando naturalmente e inspira quem está ao redor.",
                imagem: "images/lider.jpg"
            },
            {
                nome: "O Estrategista",
                descricao: "Calmo e inteligente, você pensa dez passos à frente e raramente age por impulso.",
                imagem: "images/estrategista.jpg"
            },
            {
                nome: "O Impulsivo",
                descricao: "Emocional e rápido, você age pelo instinto e muitas vezes chega primeiro quando outros ainda pensam.",
                imagem: "images/impulsivo.jpg"
            },
            {
                nome: "O Engraçado",
                descricao: "Leve e social, você une o grupo com humor e tem uma inteligência emocional que poucos percebem.",
                imagem: "images/engracado.jpg"
            },
            {
                nome: "O Misterioso",
                descricao: "Fechado e observador, você vê tudo mas revela pouco — e isso te dá uma vantagem enorme.",
                imagem: "images/misterioso.jpg"
            }
        ],
        perguntas: [
            {
                texto: "Numa missão em grupo, você é...",
                alternativas: [
                    { texto: "Quem decide o plano e lidera",                       pontos: [3,0,0,0,0] },
                    { texto: "Quem pensa na estratégia antes de agir",             pontos: [0,3,0,0,0] },
                    { texto: "Quem já entrou antes de combinar",                   pontos: [0,0,3,0,0] },
                    { texto: "Quem mantém o moral do grupo alto",                  pontos: [0,0,0,3,0] },
                    { texto: "Quem observa e age no momento exato",                pontos: [0,0,0,0,3] }
                ]
            },
            {
                texto: "Sob pressão você...",
                alternativas: [
                    { texto: "Fico mais focado e assumo o controle",               pontos: [3,0,0,0,0] },
                    { texto: "Analiso as opções com calma",                        pontos: [0,3,0,0,0] },
                    { texto: "Ajo pelo instinto imediatamente",                    pontos: [0,0,3,0,0] },
                    { texto: "Faço piada para aliviar a tensão",                   pontos: [0,0,0,3,0] },
                    { texto: "Fico quieto e processo tudo internamente",           pontos: [0,0,0,0,3] }
                ]
            },
            {
                texto: "Sua arma favorita seria...",
                alternativas: [
                    { texto: "Espada — direto, poderoso, decisivo",                pontos: [3,0,0,0,0] },
                    { texto: "Sniper — precisão à distância",                      pontos: [0,3,0,0,0] },
                    { texto: "Facas — rápido e imprevisível",                      pontos: [0,0,3,0,0] },
                    { texto: "Nenhuma — prefiro resolver sem violência",           pontos: [0,0,0,3,0] },
                    { texto: "Tudo que estiver disponível — me adapto",            pontos: [0,0,0,0,3] }
                ]
            },
            {
                texto: "Qual é sua motivação em campo?",
                alternativas: [
                    { texto: "Proteger e liderar o time",                          pontos: [3,0,0,0,0] },
                    { texto: "Vencer com o plano perfeito",                        pontos: [0,3,0,0,0] },
                    { texto: "A adrenalina de estar no limite",                    pontos: [0,0,3,0,0] },
                    { texto: "Manter todo mundo vivo e unido",                     pontos: [0,0,0,3,0] },
                    { texto: "Completar a missão sem ser visto",                   pontos: [0,0,0,0,3] }
                ]
            },
            {
                texto: "Depois da batalha você...",
                alternativas: [
                    { texto: "Faz o debriefing e planeja o próximo passo",         pontos: [3,0,0,0,0] },
                    { texto: "Anota o que pode melhorar na estratégia",            pontos: [0,3,0,0,0] },
                    { texto: "Ainda está com adrenalina — precisa de mais",        pontos: [0,0,3,0,0] },
                    { texto: "Checa se todo mundo está bem antes de si",           pontos: [0,0,0,3,0] },
                    { texto: "Vai para um canto quieto processar tudo",            pontos: [0,0,0,0,3] }
                ]
            }
        ]
    },

     // ─────────────────────────────────────────
    //  12. THE SUMMER I TURNED PRETTY
    // ─────────────────────────────────────────

    {
    id: "the-summer-i-turned-pretty",

    titulo: "Qual personagem de The Summer I Turned Pretty você é?",

    franquia: "🌊 The Summer I Turned Pretty",

    cartaz: "images/tsitp.jpg",

    nota: 8.9,

    personagens: [
        {
            nome: "Belly",
            descricao: "Romântica e sonhadora, você vive tudo intensamente e está sempre tentando descobrir quem realmente é.",
            imagem: "images/belly.jpg"
        },

        {
            nome: "Conrad",
            descricao: "Reservado e intenso, você sente muito mais do que demonstra e protege quem ama.",
            imagem: "images/conrad.jpg"
        },

        {
            nome: "Jeremiah",
            descricao: "Carismático e divertido, você ilumina qualquer ambiente e valoriza as pessoas ao seu redor.",
            imagem: "images/jeremiah.jpg"
        },

        {
            nome: "Taylor",
            descricao: "Confiante e sincera, você fala o que pensa e apoia seus amigos acima de tudo.",
            imagem: "images/taylor.jpg"
        }
    ],

    perguntas: [
        {
            texto: "Como você demonstra que gosta de alguém?",

            alternativas: [
                { texto: "Me entrego completamente", pontos: [3,0,0,0] },

                { texto: "Escondo meus sentimentos", pontos: [0,3,0,0] },

                { texto: "Faço a pessoa rir e me aproximo", pontos: [0,0,3,0] },

                { texto: "Sou direta e sincera", pontos: [0,0,0,3] }
            ]
        },

        // mais 4 perguntas...
    ]
},

 // ─────────────────────────────────────────
//  VAMPIRE DIARIES
// ─────────────────────────────────────────
{
    id: "vampire-diaries",

    titulo: "Você é mais Damon ou Stefan?",

    franquia: "🩸 The Vampire Diaries",

    cartaz: "images/tvd.jpg",

    nota: 8.8,

    personagens: [
        {
            nome: "Damon Salvatore",

            descricao: "Sarcástico e intenso, você esconde seus sentimentos atrás de ironia e age pelo coração, mesmo fingindo o contrário.",

            imagem: "images/damon.jpg"
        },

        {
            nome: "Stefan Salvatore",

            descricao: "Leal e sensível, você tenta fazer a coisa certa e coloca as pessoas que ama acima de si mesmo.",

            imagem: "images/stefan.jpg"
        }
    ],

    perguntas: [

        {
            texto: "Quando você gosta de alguém, você...",

            alternativas: [

                {
                    texto: "Demonstro com atitudes, mesmo fingindo que não me importo.",

                    pontos: [3,0]
                },

                {
                    texto: "Sou cuidadoso e faço de tudo para a pessoa ficar bem.",

                    pontos: [0,3]
                }
            ]
        },

        {
            texto: "Se alguém te machuca, você...",

            alternativas: [

                {
                    texto: "Guardo rancor e ajo por impulso.",

                    pontos: [3,0]
                },

                {
                    texto: "Tento entender o motivo e seguir em frente.",

                    pontos: [0,3]
                }
            ]
        },

        {
            texto: "Como seus amigos te descrevem?",

            alternativas: [

                {
                    texto: "Engraçado, intenso e um pouco imprevisível.",

                    pontos: [3,0]
                },

                {
                    texto: "Calmo, confiável e sempre disposto a ajudar.",

                    pontos: [0,3]
                }
            ]
        },

        {
            texto: "Qual frase mais combina com você?",

            alternativas: [

                {
                    texto: "Prefiro pedir desculpas do que pedir permissão.",

                    pontos: [3,0]
                },

                {
                    texto: "Sempre existe uma forma de fazer a coisa certa.",

                    pontos: [0,3]
                }
            ]
        },

        {
            texto: "No amor você é...",

            alternativas: [

                {
                    texto: "Intenso, ciumento e apaixonado.",

                    pontos: [3,0]
                },

                {
                    texto: "Romântico, leal e protetor.",

                    pontos: [0,3]
                }
            ]
        }

    ]
},

// ─────────────────────────────────────────
//  OUTER BANKS
// ─────────────────────────────────────────
{
    id: "outer-banks",

    titulo: "Qual personagem de Outer Banks você é?",

    franquia: "🌞 Outer Banks",

    cartaz: "images/outerbanks.jpg",

    nota: 8.4,

    personagens: [
        {
            nome: "John B",

            descricao: "Aventureiro e leal, você faz de tudo pelos amigos e nunca desiste de uma missão.",

            imagem: "images/johnb.jpg"
        },

        {
            nome: "Sarah Cameron",

            descricao: "Corajosa e romântica, você segue seu coração e enfrenta qualquer obstáculo.",

            imagem: "images/sarah.jpg"
        },

        {
            nome: "JJ Maybank",

            descricao: "Engraçado e rebelde, você vive intensamente e faria qualquer coisa por quem ama.",

            imagem: "images/jj.jpg"
        },

        {
            nome: "Kiara",

            descricao: "Sincera e independente, você luta pelo que acredita e não se deixa influenciar.",

            imagem: "images/kiara.jpg"
        },

        {
            nome: "Pope",

            descricao: "Inteligente e responsável, você pensa antes de agir e está sempre ajudando os outros.",

            imagem: "images/pope.jpg"
        }
    ],

    perguntas: [

        {
            texto: "O que você mais valoriza?",

            alternativas: [

                {
                    texto: "Liberdade.",

                    pontos: [3,0,0,0,0]
                },

                {
                    texto: "Amor.",

                    pontos: [0,3,0,0,0]
                },

                {
                    texto: "Amizade.",

                    pontos: [0,0,3,0,0]
                },

                {
                    texto: "Justiça.",

                    pontos: [0,0,0,3,0]
                },

                {
                    texto: "Futuro.",

                    pontos: [0,0,0,0,3]
                }
            ]
        },

        {
            texto: "Como seus amigos te descrevem?",

            alternativas: [

                {
                    texto: "Aventureiro.",

                    pontos: [3,0,0,0,0]
                },

                {
                    texto: "Carinhoso.",

                    pontos: [0,3,0,0,0]
                },

                {
                    texto: "Engraçado.",

                    pontos: [0,0,3,0,0]
                },

                {
                    texto: "Sincero.",

                    pontos: [0,0,0,3,0]
                },

                {
                    texto: "Inteligente.",

                    pontos: [0,0,0,0,3]
                }
            ]
        },

        {
            texto: "Num momento de perigo, você...",

            alternativas: [

                {
                    texto: "Age por impulso para salvar todos.",

                    pontos: [3,0,0,0,0]
                },

                {
                    texto: "Protege quem ama.",

                    pontos: [0,3,0,0,0]
                },

                {
                    texto: "Enfrenta tudo sem medo.",

                    pontos: [0,0,3,0,0]
                },

                {
                    texto: "Mantém a calma e ajuda.",

                    pontos: [0,0,0,3,0]
                },

                {
                    texto: "Procura a melhor estratégia.",

                    pontos: [0,0,0,0,3]
                }
            ]
        },

        {
            texto: "Qual seria seu passatempo ideal?",

            alternativas: [

                {
                    texto: "Explorar lugares novos.",

                    pontos: [3,0,0,0,0]
                },

                {
                    texto: "Passar tempo com quem ama.",

                    pontos: [0,3,0,0,0]
                },

                {
                    texto: "Fazer algo radical.",

                    pontos: [0,0,3,0,0]
                },

                {
                    texto: "Cuidar do meio ambiente ou ajudar causas.",

                    pontos: [0,0,0,3,0]
                },

                {
                    texto: "Estudar ou aprender algo novo.",

                    pontos: [0,0,0,0,3]
                }
            ]
        },

        {
            texto: "Seu maior defeito é...",

            alternativas: [

                {
                    texto: "Ser impulsivo.",

                    pontos: [3,0,0,0,0]
                },

                {
                    texto: "Colocar os outros acima de mim.",

                    pontos: [0,3,0,0,0]
                },

                {
                    texto: "Agir sem pensar.",

                    pontos: [0,0,3,0,0]
                },

                {
                    texto: "Ser teimoso.",

                    pontos: [0,0,0,3,0]
                },

                {
                    texto: "Me cobrar demais.",

                    pontos: [0,0,0,0,3]
                }
            ]
        }

    ]
},

// ─────────────────────────────────────────
//  EUPHORIA
// ─────────────────────────────────────────
{
    id: "euphoria",

    titulo: "Qual personagem de Euphoria você é?",

    franquia: "✨ Euphoria",

    cartaz: "images/euphoria.jpg",

    nota: 6.9,

    personagens: [
        {
            nome: "Rue Bennett",

            descricao: "Intensa e sensível, você sente tudo profundamente e vive em constante busca por entender a si mesma.",

            imagem: "images/rue.jpg"
        },

        {
            nome: "Jules Vaughn",

            descricao: "Criativa e sonhadora, você busca liberdade para ser quem realmente é.",

            imagem: "images/jules.jpg"
        },

        {
            nome: "Maddy Perez",

            descricao: "Confiante e marcante, você sabe seu valor e não aceita menos do que merece.",

            imagem: "images/maddy.jpg"
        },

        {
            nome: "Cassie Howard",

            descricao: "Romântica e emocional, você ama intensamente e deseja ser amada da mesma forma.",

            imagem: "images/cassie.jpg"
        },

        {
            nome: "Lexi Howard",

            descricao: "Observadora e inteligente, você prefere analisar tudo antes de agir e entende as pessoas como ninguém.",

            imagem: "images/lexi.jpg"
        }
    ],

    perguntas: [

        {
            texto: "Como seus amigos te descrevem?",

            alternativas: [

                {
                    texto: "Intenso e um pouco misterioso.",

                    pontos: [3,0,0,0,0]
                },

                {
                    texto: "Criativo e espontâneo.",

                    pontos: [0,3,0,0,0]
                },

                {
                    texto: "Confiante e popular.",

                    pontos: [0,0,3,0,0]
                },

                {
                    texto: "Emotivo e romântico.",

                    pontos: [0,0,0,3,0]
                },

                {
                    texto: "Inteligente e observador.",

                    pontos: [0,0,0,0,3]
                }

            ]
        },

        {
            texto: "No amor você é...",

            alternativas: [

                {
                    texto: "Muito intenso, às vezes até demais.",

                    pontos: [3,0,0,0,0]
                },

                {
                    texto: "Livre, mas gosta de conexões verdadeiras.",

                    pontos: [0,3,0,0,0]
                },

                {
                    texto: "Exigente, porque sabe o próprio valor.",

                    pontos: [0,0,3,0,0]
                },

                {
                    texto: "Se entrega completamente.",

                    pontos: [0,0,0,3,0]
                },

                {
                    texto: "Demora para se abrir.",

                    pontos: [0,0,0,0,3]
                }

            ]
        },

        {
            texto: "Qual dessas qualidades você mais valoriza?",

            alternativas: [

                {
                    texto: "Autenticidade.",

                    pontos: [3,0,0,0,0]
                },

                {
                    texto: "Liberdade.",

                    pontos: [0,3,0,0,0]
                },

                {
                    texto: "Confiança.",

                    pontos: [0,0,3,0,0]
                },

                {
                    texto: "Amor.",

                    pontos: [0,0,0,3,0]
                },

                {
                    texto: "Inteligência.",

                    pontos: [0,0,0,0,3]
                }

            ]
        },

        {
            texto: "Quando algo dá errado, você...",

            alternativas: [

                {
                    texto: "Se fecha e tenta lidar sozinho.",

                    pontos: [3,0,0,0,0]
                },

                {
                    texto: "Procura mudar de ambiente e recomeçar.",

                    pontos: [0,3,0,0,0]
                },

                {
                    texto: "Finge que está tudo bem.",

                    pontos: [0,0,3,0,0]
                },

                {
                    texto: "Chora e procura apoio.",

                    pontos: [0,0,0,3,0]
                },

                {
                    texto: "Analisa tudo antes de agir.",

                    pontos: [0,0,0,0,3]
                }

            ]
        },

        {
            texto: "Qual frase combina mais com você?",

            alternativas: [

                {
                    texto: "Estou tentando me encontrar.",

                    pontos: [3,0,0,0,0]
                },

                {
                    texto: "Quero viver do meu jeito.",

                    pontos: [0,3,0,0,0]
                },

                {
                    texto: "Eu sei exatamente quem eu sou.",

                    pontos: [0,0,3,0,0]
                },

                {
                    texto: "Só quero ser amada.",

                    pontos: [0,0,0,3,0]
                },

                {
                    texto: "Observar ensina mais do que falar.",

                    pontos: [0,0,0,0,3]
                }

            ]
        }

    ]
},

// ─────────────────────────────────────────
//  ONE TREE HILL
// ─────────────────────────────────────────
{
    id: "one-tree-hill",

    titulo: "Qual personagem de One Tree Hill você é?",

    franquia: "🏀 One Tree Hill",

    cartaz: "images/oth.jpg",

    nota: 8.9,

    personagens: [
        {
            nome: "Lucas Scott",

            descricao: "Sensível e leal, você pensa muito antes de agir e sempre tenta fazer a coisa certa.",

            imagem: "images/lucas.jpg"
        },

        {
            nome: "Nathan Scott",

            descricao: "Confiante e determinado, você amadureceu com os erros e protege quem ama acima de tudo.",

            imagem: "images/nathan.jpg"
        },

        {
            nome: "Brooke Davis",

            descricao: "Carismática e divertida, você parece forte por fora, mas tem um coração enorme.",

            imagem: "images/brooke.jpg"
        },

        {
            nome: "Haley James",

            descricao: "Inteligente e equilibrada, você valoriza amizade, amor e nunca abandona seus princípios.",

            imagem: "images/haley.jpg"
        },

        {
            nome: "Peyton Sawyer",

            descricao: "Artística e intensa, você sente tudo profundamente e transforma dor em força.",

            imagem: "images/peyton.jpg"
        }
    ],

    perguntas: [

        {
            texto: "O que é mais importante para você?",

            alternativas: [

                {
                    texto: "Lealdade.",

                    pontos: [3,0,0,0,0]
                },

                {
                    texto: "Família.",

                    pontos: [0,3,0,0,0]
                },

                {
                    texto: "Amizade.",

                    pontos: [0,0,3,0,0]
                },

                {
                    texto: "Conhecimento.",

                    pontos: [0,0,0,3,0]
                },

                {
                    texto: "Expressar quem eu sou.",

                    pontos: [0,0,0,0,3]
                }

            ]
        },

        {
            texto: "Como você lida com seus sentimentos?",

            alternativas: [

                {
                    texto: "Escrevo ou reflito sozinho.",

                    pontos: [3,0,0,0,0]
                },

                {
                    texto: "Protejo quem amo e sigo em frente.",

                    pontos: [0,3,0,0,0]
                },

                {
                    texto: "Converso e tento animar todo mundo.",

                    pontos: [0,0,3,0,0]
                },

                {
                    texto: "Tento agir com razão.",

                    pontos: [0,0,0,3,0]
                },

                {
                    texto: "Uso arte ou música para me expressar.",

                    pontos: [0,0,0,0,3]
                }

            ]
        },

        {
            texto: "Seus amigos te descrevem como...",

            alternativas: [

                {
                    texto: "Calmo e confiável.",

                    pontos: [3,0,0,0,0]
                },

                {
                    texto: "Determinado e protetor.",

                    pontos: [0,3,0,0,0]
                },

                {
                    texto: "Divertido e sociável.",

                    pontos: [0,0,3,0,0]
                },

                {
                    texto: "Inteligente e maduro.",

                    pontos: [0,0,0,3,0]
                },

                {
                    texto: "Criativo e intenso.",

                    pontos: [0,0,0,0,3]
                }

            ]
        },

        {
            texto: "No amor você é...",

            alternativas: [

                {
                    texto: "Romântico e leal.",

                    pontos: [3,0,0,0,0]
                },

                {
                    texto: "Apaixonado e protetor.",

                    pontos: [0,3,0,0,0]
                },

                {
                    texto: "Carinhoso e divertido.",

                    pontos: [0,0,3,0,0]
                },

                {
                    texto: "Cuidadoso e compreensivo.",

                    pontos: [0,0,0,3,0]
                },

                {
                    texto: "Intenso e cheio de emoções.",

                    pontos: [0,0,0,0,3]
                }

            ]
        },

        {
            texto: "Qual frase combina mais com você?",

            alternativas: [

                {
                    texto: "As pessoas que amamos nos definem.",

                    pontos: [3,0,0,0,0]
                },

                {
                    texto: "Sempre vale a pena lutar pelo que importa.",

                    pontos: [0,3,0,0,0]
                },

                {
                    texto: "A vida fica melhor quando compartilhada.",

                    pontos: [0,0,3,0,0]
                },

                {
                    texto: "Nunca deixe de ser você mesmo.",

                    pontos: [0,0,0,3,0]
                },

                {
                    texto: "A música e a arte dizem o que palavras não conseguem.",

                    pontos: [0,0,0,0,3]
                }

            ]
        }

    ]
},

// ─────────────────────────────────────────
//  YOU
// ─────────────────────────────────────────
{
    id: "you",

    titulo: "Qual personagem de You você é?",

    franquia: "📚 You",

    cartaz: "images/you.jpg",

    nota: 8.1,

    personagens: [
        {
            nome: "Joe Goldberg",

            descricao: "Inteligente e observador, você presta atenção em cada detalhe e faria tudo para proteger quem ama.",

            imagem: "images/joe.jpg"
        },

        {
            nome: "Love Quinn",

            descricao: "Apaixonada e intensa, você vive as emoções no máximo e faz de tudo pelas pessoas importantes.",

            imagem: "images/love.jpg"
        },

        {
            nome: "Kate Lockwood",

            descricao: "Reservada e independente, você prefere demonstrar amor com atitudes e valoriza sua liberdade.",

            imagem: "images/kate.jpg"
        },

        {
            nome: "Peach Salinger",

            descricao: "Confiante e sofisticada, você gosta de estar no controle e protege ferozmente quem considera seu.",

            imagem: "images/peach.jpg"
        }
    ],

    perguntas: [

        {
            texto: "Qual é sua maior qualidade?",

            alternativas: [

                {
                    texto: "Sou muito observador.",

                    pontos: [3,0,0,0]
                },

                {
                    texto: "Sou extremamente leal.",

                    pontos: [0,3,0,0]
                },

                {
                    texto: "Sou independente.",

                    pontos: [0,0,3,0]
                },

                {
                    texto: "Tenho muita confiança em mim.",

                    pontos: [0,0,0,3]
                }

            ]
        },

        {
            texto: "No amor você é...",

            alternativas: [

                {
                    texto: "Intenso e faria qualquer coisa pela pessoa.",

                    pontos: [3,0,0,0]
                },

                {
                    texto: "Apaixonado e protetor.",

                    pontos: [0,3,0,0]
                },

                {
                    texto: "Cuidadoso, mas preciso do meu espaço.",

                    pontos: [0,0,3,0]
                },

                {
                    texto: "Ciumento e seletivo.",

                    pontos: [0,0,0,3]
                }

            ]
        },

        {
            texto: "Como você lida com problemas?",

            alternativas: [

                {
                    texto: "Analiso tudo antes de agir.",

                    pontos: [3,0,0,0]
                },

                {
                    texto: "Sigo meu coração.",

                    pontos: [0,3,0,0]
                },

                {
                    texto: "Mantenho a calma e procuro uma solução.",

                    pontos: [0,0,3,0]
                },

                {
                    texto: "Assumo o controle da situação.",

                    pontos: [0,0,0,3]
                }

            ]
        },

        {
            texto: "Seus amigos te descrevem como...",

            alternativas: [

                {
                    texto: "Inteligente e misterioso.",

                    pontos: [3,0,0,0]
                },

                {
                    texto: "Carinhoso e intenso.",

                    pontos: [0,3,0,0]
                },

                {
                    texto: "Maduro e reservado.",

                    pontos: [0,0,3,0]
                },

                {
                    texto: "Elegante e confiante.",

                    pontos: [0,0,0,3]
                }

            ]
        },

        {
            texto: "Qual frase combina mais com você?",

            alternativas: [

                {
                    texto: "Sempre existe algo além do que as pessoas mostram.",

                    pontos: [3,0,0,0]
                },

                {
                    texto: "Eu faria qualquer coisa por quem amo.",

                    pontos: [0,3,0,0]
                },

                {
                    texto: "Nem tudo precisa ser dito.",

                    pontos: [0,0,3,0]
                },

                {
                    texto: "Eu gosto de estar um passo à frente.",

                    pontos: [0,0,0,3]
                }

            ]
        }

    ]
},

// ─────────────────────────────────────────
//  RIVERDALE
// ─────────────────────────────────────────
{
    id: "riverdale",

    titulo: "Qual personagem de Riverdale você é?",

    franquia: "🍒 Riverdale",

    cartaz: "images/riverdale.jpg",

    nota: 7.7,

    personagens: [
        {
            nome: "Archie Andrews",

            descricao: "Corajoso e leal, você protege quem ama e sempre tenta fazer a coisa certa.",

            imagem: "images/archie.jpg"
        },

        {
            nome: "Betty Cooper",

            descricao: "Inteligente e determinada, você é curiosa, observadora e nunca desiste de descobrir a verdade.",

            imagem: "images/betty.jpg"
        },

        {
            nome: "Veronica Lodge",

            descricao: "Confiante e sofisticada, você gosta de estar no controle e sabe exatamente o que quer.",

            imagem: "images/veronica.jpg"
        },

        {
            nome: "Jughead Jones",

            descricao: "Criativo e reservado, você prefere observar tudo ao seu redor e tem um jeito único de ver o mundo.",

            imagem: "images/jughead.jpg"
        }
    ],

    perguntas: [

        {
            texto: "Como seus amigos te descrevem?",

            alternativas: [

                {
                    texto: "Leal e protetor.",

                    pontos: [3,0,0,0]
                },

                {
                    texto: "Inteligente e curioso.",

                    pontos: [0,3,0,0]
                },

                {
                    texto: "Confiante e estiloso.",

                    pontos: [0,0,3,0]
                },

                {
                    texto: "Misterioso e criativo.",

                    pontos: [0,0,0,3]
                }

            ]
        },

        {
            texto: "Qual é sua maior qualidade?",

            alternativas: [

                {
                    texto: "Coragem.",

                    pontos: [3,0,0,0]
                },

                {
                    texto: "Determinação.",

                    pontos: [0,3,0,0]
                },

                {
                    texto: "Autoconfiança.",

                    pontos: [0,0,3,0]
                },

                {
                    texto: "Criatividade.",

                    pontos: [0,0,0,3]
                }

            ]
        },

        {
            texto: "Quando surge um problema, você...",

            alternativas: [

                {
                    texto: "Enfrento de frente.",

                    pontos: [3,0,0,0]
                },

                {
                    texto: "Investigo até descobrir a verdade.",

                    pontos: [0,3,0,0]
                },

                {
                    texto: "Assumo o controle da situação.",

                    pontos: [0,0,3,0]
                },

                {
                    texto: "Analiso tudo antes de agir.",

                    pontos: [0,0,0,3]
                }

            ]
        },

        {
            texto: "No amor você é...",

            alternativas: [

                {
                    texto: "Romântico e protetor.",

                    pontos: [3,0,0,0]
                },

                {
                    texto: "Carinhoso, mas preciso confiar primeiro.",

                    pontos: [0,3,0,0]
                },

                {
                    texto: "Apaixonado e intenso.",

                    pontos: [0,0,3,0]
                },

                {
                    texto: "Reservado, mas muito leal.",

                    pontos: [0,0,0,3]
                }

            ]
        },

        {
            texto: "Qual frase combina mais com você?",

            alternativas: [

                {
                    texto: "Sempre vou lutar por quem amo.",

                    pontos: [3,0,0,0]
                },

                {
                    texto: "A verdade sempre aparece.",

                    pontos: [0,3,0,0]
                },

                {
                    texto: "Eu faço minhas próprias regras.",

                    pontos: [0,0,3,0]
                },

                {
                    texto: "Às vezes observar vale mais do que falar.",

                    pontos: [0,0,0,3]
                }

            ]
        }

    ]
}
];



