import { Produto } from '../../App'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FavoritosState {
  fav: Produto[]
}

const initialState: FavoritosState = {
  fav: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const index = state.fav.findIndex((p) => p.id === produto.id)

      if (index !== -1) {
        state.fav = state.fav.filter((p) => p.id !== produto.id)
      } else {
        state.fav.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions

export default favoritosSlice.reducer
