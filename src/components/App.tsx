import { useState } from 'react'

import { Logo } from './Logo'
import { Options } from './Options'

export function App() {
  const [flagDesign, setFlagDesign] = useState<FlagDesign>('progress-2')
  const [flagAngle, setFlagAngle] = useState<FlagAngle>('horizontal')
  const [sides, setSides] = useState<SideStyle>('stripes')
  const [gap, setGap] = useState<number>(0)
  const [background, setBackground] = useState<BgColor>('white')

  return (
    <>
      <Logo
        flagDesign={flagDesign}
        flagAngle={flagAngle}
        sides={sides}
        gap={gap}
        background={background}
      />
      <Options
        flagDesign={flagDesign}
        flagAngle={flagAngle}
        sides={sides}
        gap={gap}
        background={background}
        onChangeFlagDesign={setFlagDesign}
        onChangeFlagAngle={setFlagAngle}
        onChangeSides={setSides}
        onChangeGap={setGap}
        onChangeBackground={setBackground}
      />
    </>
  )
}
