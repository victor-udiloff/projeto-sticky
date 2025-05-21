import { useState, useRef, useEffect } from 'react'
import './App.css'
import { Network } from 'vis-network/standalone';

// Para visualizar a sequência de cenas
const GraphViewer = (props) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (props.generatedStory != []) {

      let nodes = props.generatedStory.map((scene) => {
        return { id: scene.cena, label: `Cena ${scene.cena}` }
      })

      let edges = []
      for (let i = 0; i < nodes.length; i++) {
        for (let j = 0; j < props.generatedStory[i].proximaCena.length; j++)
          edges.push({ from: i + 1, to: props.generatedStory[i].proximaCena[j] })
      }

      const data = { nodes, edges };
      const options = {
        nodes: { shape: 'dot', size: 20 },
        edges: { arrows: { to: { enabled: true } } },
        physics: { enabled: true },
      };

      const network = new Network(containerRef.current, data, options);
      console.log(nodes)
      console.log(edges)
      return () => network.destroy(); 
    }
  }, [props.generatedStory]);

  return (
    <div>
      <h2>História</h2>
      <div
        ref={containerRef}
        style={{ height: '300px', border: '1px solid lightgray' }}
      />
    </div>
  );
};

function App() {
  const [firstStory, setFirstStory] = useState("")
  const [generatedStory, setGeneratedStory] = useState({ data: [{ "cena": 1, "proximaCena": [], "imagem": "", "narracao": "", "falas": [{ "fala": 1, "personagem": "", "conteudo": "" }], "opcoes": [{ "opcao": "", "proximaBranch": 1 }] }] })
  const [sugestions, setSugestions] = useState("")
  const [Nscenes, setNscenes] = useState(1)
  const [drawingStyle, setdrawingStyle] = useState("")
  const [images, setImages] = useState([])
  const [currentImage, setCurrentImage] = useState(0)
  const [currentLine, setCurrentLine] = useState(0)

  const imgStyles = ["manga", "cartoon", "comics", "super hero golden age", "flash game"];

  const handleStoryNext = () => {
    if (currentLine < generatedStory.data[currentImage].falas.length - 1) {
      setCurrentLine(currentLine + 1)
    } 
  }

  const handleStoryPrevious = () => {
    if (currentLine > 0) {
      setCurrentLine(currentLine - 1)
    }
  }

  const handleNextButton = (scene) => {
    setCurrentImage(scene)
    setCurrentLine(0)
  }

  const handleFirstStory = () => {
    fetch("http://localhost:3000/firststory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstStory: firstStory, Nscenes: Nscenes })
    })
      .then(res => res.json())
      .then(message => {
        setGeneratedStory(message.GeneratedStory)
        console.log(message)
      });
  }

  const handleRedo = () => {
    fetch("http://localhost:3000/redo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ generatedStory: generatedStory, sugestions: sugestions, Nscenes: Nscenes })
    })
      .then(res => res.json())
      .then(mesage => {
        setGeneratedStory(mesage.GeneratedStory)
      });
  }

  const handleFinalStory = () => {
    fetch("http://localhost:3000/finalstory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ generatedStory: generatedStory, sugestions: sugestions, Nscenes: Nscenes, drawingStyle: drawingStyle })
    })
      .then(res => res.json())
      .then(message => {
        setGeneratedStory(message.GeneratedStory)
        setImages(message.images)
      });
  }

  const handleFirstStoryChange = (e) => {
    setFirstStory(e.target.value)
  }

  const handleGeneratedStoryChange = (e) => {
    setGeneratedStory(e.target.value)
  }

  const handleSugestionsChange = (e) => {
    setSugestions(e.target.value)
  }

  const handleStyleChange = (e) => {
    setdrawingStyle(e.target.value)
  }

  const handleNscenesChange = (e) => {
    setNscenes(e.target.value)
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1, height: '90vh', overflowX: 'auto' }}>
          <div style={{ width: '90%' }}>
            <h2>Gerador de Histórias</h2>
            <h2>Resumo:</h2>
            <textarea value={firstStory} placeholder='Resumo da história' onChange={handleFirstStoryChange} ></textarea>
            <h3>Número de cenas:</h3>
            <select value={Nscenes} onChange={handleNscenesChange}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <h3></h3>
            <button onClick={handleFirstStory}>Gerar historia</button>
            <h2>História gerada:</h2>
            <scroll>
              {generatedStory.data.map((element) => {
                return (
                  <div style={{ backgroundColor: '#242424', borderRadius: 10, margin: 10, padding: 10 }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 10, borderRadius: 10, padding: 10 }}>
                      <p> Cena: {element.cena}</p>
                      <p> Próxima cena: {element.proximaCena.map((e) =>{return(<span>{e} </span>)})}</p>
                    </div>
                    <p> Descrição da imagem: {element.imagem}</p>
                    <p> Narração: {element.narracao}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 10 }}>
                      {element.falas.map((fala) => {
                        return (
                          <div>
                            <div style={{ padding: 10, backgroundColor: '#006b0b', borderRadius: 10 }}>
                              <p>Personagem: {fala.personagem}</p>
                              <p>"{fala.conteudo}"</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </scroll>
            <h2>Sugerir alterações:</h2>
            <textarea value={sugestions} placeholder='Sugerir alterações' onChange={handleSugestionsChange}></textarea>
            <button onClick={handleRedo}>Refazer</button>
            <h3>Estilo de desenho:</h3>
            <select value={drawingStyle} onChange={handleStyleChange}>
              {imgStyles.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <h3></h3>
            <button onClick={handleFinalStory}>Confirmar versão final e gerar Imagens</button>
          </div>
        </div>
        <div style={{ flex: 1, margin: 20 }}>
          <img src={images[currentImage]} style={{ width: '70%', height: 'auto' }}></img>
          <div style={{ backgroundColor: 'aliceblue', color: 'black', padding: 10, borderRadius: 10 }}>
            <p>Narração: {generatedStory.data[currentImage].narracao}</p>
            <p>{generatedStory.data[currentImage].falas[currentLine].personagem}: {generatedStory.data[currentImage].falas[currentLine].conteudo}</p>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {generatedStory.data[currentImage].opcoes.map((opcao) => {
                return (
                  <button style={{ backgroundColor: 'gray',marginRight:10 }} onClick={() => handleNextButton(opcao.proximaBranch - 1)}>{opcao.opcao}</button>
                )
              })}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <button onClick={handleStoryPrevious}>Anterior</button>
            <button onClick={handleStoryNext}>Próximo</button>
          </div>
          <GraphViewer generatedStory={generatedStory.data}></GraphViewer>
        </div>
      </div>

    </>
  )
}

export default App