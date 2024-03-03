//configurando a store
import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import favoritarReducer from './reducers/favoritar'

import api from '../services/api'
import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

export const store = configureStore({
  //fazendo o root reducer
  reducer: {
    favoritos: favoritarReducer,
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

//configurando o typescript e criando o tipo
export type RootReducer = ReturnType<typeof store.getState>
