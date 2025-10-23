import { useMemo } from 'react'

import './Logo.scss'

export function Logo(props: { state: LogoState }) {
  const { state } = props

  const style = useMemo(
    () => ({
      '--gap': `${state.gap}rem`,
    }),
    [state.gap],
  )

  return (
    <section
      className={`Logo bg-${state.background} filter-${state.filter}`}
      style={style as React.CSSProperties}
    >
      <div className={`top flag-${state.flag} angle-${state.angle}`} />

      <div className={`sides ${state.sides} ff-${state.font}`}>
        <div className='left'>
          <span className='text'>QU</span>
        </div>

        <div className='right'>
          <span className='text'>BO</span>
        </div>
      </div>
    </section>
  )
}
