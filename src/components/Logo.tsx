import { useMemo } from 'react'

import './Logo.scss'

export function Logo(props: {
  flag: FlagDesign
  angle: FlagAngle
  sides: SideStyle
  gap: GapSize
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
      className={`logo bg-${props.background}`}
      style={style as React.CSSProperties}
    >
      <div className={`top flag-${props.flag} angle-${props.angle}`} />

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
