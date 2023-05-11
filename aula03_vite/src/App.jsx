import './App.css'


const usuario = () =>{
  nome: "Gilmar"
}


const OlaMundo = () =>{
  return (
    <>
      <h3>Olá Mundo</h3>
    </>
  )
}

const UsuarioBemVindo = () =>{
  return (
    <>
      <p>seja bem vindo {usuario.name}</p>
    </>
  )
}

function App() {
  
return (
   <>
   <OlaMundo/>
   <UsuarioBemVindo/>
   </>
  )
}

export default App
