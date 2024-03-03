import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Produto } from '../../App'

//criando o tipo
type CarrinhoState = {
  itens: Produto[]
}

//criando um objeto para o estado inicial
const initialState: CarrinhoState = {
  itens: []
}

//criando a função
const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

//Reescrevendo a função dentro de um reducer
// function adicionarAoCarrinho(produto: Produto) {
//   if (carrinho.find((p) => p.id === produto.id)) {
//     alert('Item já adicionado')
//   } else {
//     setCarrinho([...carrinho, produto])
//   }
// }

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
