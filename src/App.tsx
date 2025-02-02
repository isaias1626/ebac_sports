import { GlobalStyle } from './styles'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { Provider } from 'react-redux'

import { store } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const [, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    fetch('/ebac_sports')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])

  return (
    // importando o provider para ser o container de toda aplicação
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
