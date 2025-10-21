import { useMemo } from 'react'

import './Logo.scss'

export function Logo(props: {
  flagDesign: FlagDesign
  flagAngle: FlagAngle
  sides: SideStyle
  gap: number
  background: BgColor
}) {
  const style = useMemo(
    () => ({
      '--gap': `${props.gap}rem`,
    }),
    [props.gap],
  )

  return (
    <section
      className={`qubo-logo bg-${props.background}`}
      style={style as React.CSSProperties}
    >
      <div
        className={`top flag-${props.flagDesign} angle-${props.flagAngle}`}
      />

      <div className={`sides ${props.sides}`}>
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
