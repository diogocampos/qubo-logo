import { useState } from 'react'

import { Logo } from './Logo'
import { Options } from './Options'

export function App() {
  const [flag, setFlag] = useState<FlagDesign>('progress-2')
  const [angle, setAngle] = useState<FlagAngle>('diagonal')
  const [sides, setSides] = useState<SideStyle>('stripes-1')
  const [gap, setGap] = useState<GapSize>('1')
  const [background, setBackground] = useState<BgColor>('white')
  const [filter, setFilter] = useState<ColorFilter>('none')

  return (
    <>
      <Logo
        flag={flag}
        angle={angle}
        sides={sides}
        gap={gap}
        background={background}
        filter={filter}
      />
      <Options
        flag={flag}
        angle={angle}
        sides={sides}
        gap={gap}
        filter={filter}
        background={background}
        onChangeFlag={setFlag}
        onChangeAngle={setAngle}
        onChangeSides={setSides}
        onChangeGap={setGap}
        onChangeBackground={setBackground}
        onChangeFilter={setFilter}
      />
    </>
  )
}
