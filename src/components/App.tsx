import { useReducer } from 'react'

import { Logo } from './Logo'
import { Options } from './Options'

const INITIAL_STATE: LogoState = {
  flag: 'progress-2',
  angle: 'diagonal',
  sides: 'stripes-1',
  font: 'caixa',
  gap: '1',
  background: 'white',
  filter: 'none',
}

function reducer(state: LogoState, action: Partial<LogoState>): LogoState {
  return { ...state, ...action }
}

export function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  return (
    <>
      <Logo state={state} />
      <Options state={state} onChange={dispatch} />
    </>
  )
}
