const promptTest ={data:
[
  {
    "cena": 1,
    "proximaCena": [2, 3],
    "imagem": "Uma nave espacial gótica sobrevoando Saturno, com imensas janelas envidraçadas e bandeiras rubras tremulando enquanto paira na órbita.",
    "narracao": "Num futuro distante, o lendário Clã Sangue Eterno viaja pelo espaço, caçando onde a luz jamais chega.",
    "falas": [
      {
        "fala": 1,
        "personagem": "Narrador",
        "conteudo": "Eles deixaram a Terra para trás... mas nunca sua sede."
      },
      {
        "fala": 2,
        "personagem": "Drausilla",
        "conteudo": "Estamos nos aproximando do setor Altar-13. Prontos para caçar?"
      }
    ],
    "opcoes": [
      {
        "opcao": "Sim, avançar diretamente para o ataque!",
        "proximaBranch": 2
      },
      {
        "opcao": "Não, investigar mais antes de atacar.",
        "proximaBranch": 3
      }
    ]
  },
  {
    "cena": 2,
    "proximaCena": [4],
    "imagem": "O salão de comando da nave, sombreado por luzes rubras. O capitão Rafael está diante dos controles, com presas à mostra.",
    "narracao": "O ataque foi decidido sem hesitação.",
    "falas": [
      {
        "fala": 1,
        "personagem": "Rafael",
        "conteudo": "Preparar as cápsulas de invasão. Hora do banquete."
      },
      {
        "fala": 2,
        "personagem": "Quiron",
        "conteudo": "A energia vital a bordo da estação é intensa, mas há algo... estranho."
      }
    ],
    "opcoes": [
      {
        "opcao": "Ignorar o aviso de Quiron e continuar.",
        "proximaBranch": 4
      }
    ]
  },
  {
    "cena": 3,
    "proximaCena": [5],
    "imagem": "Quiron observa os sensores, enquanto Drausilla examina projéteis de prata em uma mesa brilhante.",
    "narracao": "Os mais cautelosos decidem investigar antes de atacar.",
    "falas": [
      {
        "fala": 1,
        "personagem": "Quiron",
        "conteudo": "Capitão, há anomalias térmicas profundas na estação alvo."
      },
      {
        "fala": 2,
        "personagem": "Drausilla",
        "conteudo": "Talvez estejamos diante de uma armadilha?"
      }
    ],
    "opcoes": [
      {
        "opcao": "Enviar um drone de reconhecimento.",
        "proximaBranch": 5
      }
    ]
  },
  {
    "cena": 4,
    "proximaCena": [6],
    "imagem": "Vampiros desembarcam em cápsulas, invadindo a estação espacial escura; corredores iluminados por uma luz azul fria.",
    "narracao": "A tripulação invadiu em massa. O silêncio era sufocante.",
    "falas": [
      {
        "fala": 1,
        "personagem": "Drausilla",
        "conteudo": "Estou sentindo cheiro de sangue fresco, mas também... ozônio?"
      },
      {
        "fala": 2,
        "personagem": "Rafael",
        "conteudo": "Algo não está certo. Este lugar parece... vazio demais."
      }
    ],
    "opcoes": [
      {
        "opcao": "Explorar o laboratório central da estação.",
        "proximaBranch": 6
      }
    ]
  },
  {
    "cena": 5,
    "proximaCena": [6],
    "imagem": "O drone enviado revela corredores desertos, manchas de sangue nas paredes e estranhos símbolos brilhando no chão.",
    "narracao": "As câmeras do drone mostram uma cena inquietante.",
    "falas": [
      {
        "fala": 1,
        "personagem": "Quiron",
        "conteudo": "A temperatura está caindo rapidamente... impossível para humanos sobreviverem."
      },
      {
        "fala": 2,
        "personagem": "Rafael",
        "conteudo": "Mas há sinais de luta recente! Devemos investigar pessoalmente."
      }
    ],
    "opcoes": [
      {
        "opcao": "A equipe prepara-se e desembarca com cautela.",
        "proximaBranch": 6
      }
    ]
  },
  {
    "cena": 6,
    "proximaCena": [7,8],
    "imagem": "O laboratório central é um antro de máquinas reluzentes, tanques de estase e fórmulas lasers gravadas nas paredes.",
    "narracao": "No centro, um tubo de vidro guarda uma figura encapuzada, suspensa em líquido brilhante.",
    "falas": [
      {
        "fala": 1,
        "personagem": "Drausilla",
        "conteudo": "Alguém ou... algo está preso aqui."
      },
      {
        "fala": 2,
        "personagem": "Quiron",
        "conteudo": "Os controles indicam vitalidade sobrenatural. É um vampiro ancestral!"
      }
    ],
    "opcoes": [
      {
        "opcao": "Libertar o prisioneiro encapuzado.",
        "proximaBranch": 7
      },
      {
        "opcao": "Tentar se comunicar antes de libertar.",
        "proximaBranch": 8
      }
    ]
  },
  {
    "cena": 7,
    "proximaCena": [9],
    "imagem": "O tubo se abre e uma névoa densa envolve o laboratório; uma figura ancestral com olhar fulminante surge.",
    "narracao": "O vampiro ancestral desperta com sede de sangue cósmico.",
    "falas": [
      {
        "fala": 1,
        "personagem": "Vampiro Ancestral",
        "conteudo": "Finalmente... livres das correntes do tempo e do espaço!"
      },
      {
        "fala": 2,
        "personagem": "Rafael",
        "conteudo": "Cuidado! Não sabemos de que lado ele está."
      }
    ],
    "opcoes": [
      {
        "opcao": "Oferecer aliança ao ancestral.",
        "proximaBranch": 9
      }
    ]
  },
  {
    "cena": 8,
    "proximaCena": [9],
    "imagem": "Drausilla ativa um comunicador, tentando contato telepático com o ser no tubo; um eco sombrio responde.",
    "narracao": "Uma conexão mental é feita entre Drausilla e o prisioneiro.",
    "falas": [
      {
        "fala": 1,
        "personagem": "Vampiro Ancestral (telepatia)",
        "conteudo": "Libertem-me. Prometo poder para quem for digno."
      },
      {
        "fala": 2,
        "personagem": "Drausilla",
        "conteudo": "Acho que podemos confiar nele. Mas a promessa tem dois gumes..."
      }
    ],
    "opcoes": [
      {
        "opcao": "Libertar o ancestral e propor aliança.",
        "proximaBranch": 9
      }
    ]
  },
  {
    "cena": 9,
    "proximaCena": [10],
    "imagem": "Vampiros diante do ser ancestral, com a estação tremendo. Uma fenda escura se abre no espaço exterior da janela.",
    "narracao": "A libertação desencadeia uma reação – um portal dimensional se abre, ameaçando consumir tudo.",
    "falas": [
      {
        "fala": 1,
        "personagem": "Quiron",
        "conteudo": "Estamos sendo puxados! A estação vai colapsar!"
      },
      {
        "fala": 2,
        "personagem": "Vampiro Ancestral",
        "conteudo": "Sigam-me pelo Portal, filhos da noite. Ou fiquem e pereçam!"
      }
    ],
    "opcoes": [
      {
        "opcao": "Entrar no portal com o vampiro ancestral.",
        "proximaBranch": 10
      }
    ]
  },
  {
    "cena": 10,
    "proximaCena": [],
    "imagem": "No outro lado do portal, uma galáxia sombria repleta de luas sangrentas e planetas cobertos pela noite eterna.",
    "narracao": "Os vampiros conquistam o novo domínio, tornando-se senhores do universo sombrio.",
    "falas": [
      {
        "fala": 1,
        "personagem": "Rafael",
        "conteudo": "Aqui, começaremos um novo império."
      },
      {
        "fala": 2,
        "personagem": "Drausilla",
        "conteudo": "Na escuridão das estrelas, seremos eternos."
      }
    ],
    "opcoes": []
  }
]};

module.exports.promptTest = promptTest