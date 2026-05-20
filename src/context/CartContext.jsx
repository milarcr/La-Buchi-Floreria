import { createContext, useContext, useReducer } from 'react'

const CartCtx = createContext(null)

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const found = state.find(i => i.id === action.item.id)
      if (found) return state.map(i => i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i)
      return [...state, { ...action.item, qty: 1 }]
    }
    case 'DEC': {
      const found = state.find(i => i.id === action.id)
      if (found.qty <= 1) return state.filter(i => i.id !== action.id)
      return state.map(i => i.id === action.id ? { ...i, qty: i.qty - 1 } : i)
    }
    case 'REMOVE': return state.filter(i => i.id !== action.id)
    case 'CLEAR':  return []
    default: return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [])
  const total = items.reduce((s, i) => s + i.price * i.qty, 0)
  const count = items.reduce((s, i) => s + i.qty, 0)
  return <CartCtx.Provider value={{ items, total, count, dispatch }}>{children}</CartCtx.Provider>
}

export const useCart = () => useContext(CartCtx)
