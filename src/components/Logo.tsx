import { useMemo } from 'react'

import './Logo.scss'

export function Logo(props: {
  flag: FlagDesign
  angle: FlagAngle
  sides: SideStyle
  font: FontFamily
  gap: GapSize
  background: BgColor
  filter: ColorFilter
}) {
  const style = useMemo(
    () => ({
      '--gap': `${props.gap}rem`,
    }),
    [props.gap],
  )

  return (
    <section
      className={`logo bg-${props.background} filter-${props.filter}`}
      style={style as React.CSSProperties}
    >
      <div className={`top flag-${props.flag} angle-${props.angle}`} />

      <div className={`sides ${props.sides} ff-${props.font}`}>
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
