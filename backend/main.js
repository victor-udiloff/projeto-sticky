const fs = require('fs');
const path = require('path');
const OpenAI = require("openai");
const express = require("express")
const cors = require('cors');
const promptTest = require('./PromptTest')

const client = new OpenAI({ apiKey: "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" });

const app = express()
app.use(cors());
app.use(express.json());

// usado para obter as imagens da pasta local do backend
function getImageBase64(imagePath) {
  const filePath = path.resolve(imagePath);
  const imageBuffer = fs.readFileSync(filePath);
  const mimeType = getMimeType(filePath);
  return `data:${mimeType};base64,${imageBuffer.toString('base64')}`;
}

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.png': return 'image/png';
    case '.jpg':
    case '.jpeg': return 'image/jpeg';
    case '.gif': return 'image/gif';
    default: return 'application/octet-stream';
  }
}


app.post("/firststory",async (req,res)=>{
    console.log("firstStory")
    let standardFirstPrompt = `Crie uma história que segue o roteiro abaixo. A história deve ser no estilo de uma graphic novel interativa. A história deve ser dividida em ${req.body.Nscenes} cenas. Cada cada cena terá uma imagem estática e as falas do narrador e dos personagens apareceram na forma de balões. Crie apenas o texto por enquanto no formato json, a historia pode ter varias branches que convergem para uma branch principal ,sendo ex: {data:[{cena:1,proximaCena:[2],imagem:"descricao da imagem da cena",narracao:"", falas:[{fala:1,personagem:"",conteudo:""}],opcoes:[{opcao:""},proximaBranch:2]]}, responda apenas com as {} e os objeto, sem nenhum texto fora`
    let firstStory = req.body.firstStory
    
    console.log(req.body)
    /*
    // Obtém a resposta por meio da api da openai, as respostas ainda estão inconsistentes e é necessário fazer um verificação

    const response = await client.responses.create({
        model: "gpt-4.1",
        input: standardFirstPrompt + firstStory
    });
    console.log(response)
    res.json({GeneratedStory: JSON.parse(response.output_text)})
    //*/

    //Prompt teste
    res.json({GeneratedStory:promptTest.promptTest})

})

// refazer a história com sugestões
app.post("/redo",async (req,res)=>{
    console.log("redo")
    let standardRedoPrompt = `A história deve ser no estilo de uma graphic novel interativa. A história deve ser dividida em ${req.body.Nscenes} cenas. Cada cada cena terá uma imagem estática e as falas do narrador e dos personagens apareceram na forma de balões. Crie apenas o texto por enquanto no formato json, a historia pode ter varias branches que convergem para uma branch principal ,sendo ex: [{cena:1,proximaCena:[2],imagem:"descricao da imagem da cena",narracao:"", falas:[{fala:1,personagem:"",conteudo:""}],opcoes:[{opcao:""},proximaBranch:2]] historia:`
    let generatedStory = req.body.generatedStory
    let suggestions = req.body.suggestions
    let  redo = "Refaça a história abaixo, mudando:" + suggestions + standardRedoPrompt + generatedStory

    console.log(req.body)
    /*
    const response = await client.responses.create({
        model: "gpt-4.1",
        input: standardFirstPrompt + firstStory
    });
    console.log(response.output_text)
    res.json(response.output_text)
    //*/
})

app.post("/finalstory",async (req,res)=>{
  console.log("finalstory")
  let FinalStory = req.body.generatedStory;
  let Nscenes = Math.min(10,req.body.Nscenes)
  let drawingStyle = req.body.drawingStyle;
  /*
    // rascunho da resposta da openai

    for(let i =1;i<=nscenes;i++){
      let ImgPrompt = FinalStory[i].imagem
      const result = await openai.images.generate({
      model: "gpt-image-1",
      ImgPrompt,
      });
      const image_base64 = result.data[0].b64_json;
      const image_bytes = Buffer.from(image_base64, "base64");
      fs.writeFileSync(`scene${i}.png`, image_bytes);
    }
    res.json(response)
    //*/

    // imagens locais no backend para teste
    const image1 = getImageBase64('./images/im1.png');
    const image2 = getImageBase64('./images/im2.png');
    const image3 = getImageBase64('./images/im3.jpg');
    const image4 = getImageBase64('./images/im4.jpeg');
    const image5 = getImageBase64('./images/im5.jpeg');
    const image6 = getImageBase64('./images/im6.jpeg');
    const image7 = getImageBase64('./images/im7.jpeg');
    const image8 = getImageBase64('./images/im8.jpeg');
    const image9 = getImageBase64('./images/im9.jpeg');
    const image10 = getImageBase64('./images/im10.jpeg');
    res.json({images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10],GeneratedStory:FinalStory})
})

app.listen(3000)