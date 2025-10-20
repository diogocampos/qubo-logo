import { useState } from 'react'

import { Logo } from './Logo'
import { Options } from './Options'

export function App() {
  const [flag, setFlag] = useState<FlagStyle>('progress-2')
  const [sides, setSides] = useState<SideStyle>('stripes')
  const [gap, setGap] = useState<number>(0)
  const [background, setBackground] = useState<BgColor>('white')

  return (
    <>
      <Logo flag={flag} sides={sides} gap={gap} background={background} />
      <Options
        flag={flag}
        sides={sides}
        gap={gap}
        background={background}
        onChangeFlag={setFlag}
        onChangeSides={setSides}
        onChangeGap={setGap}
        onChangeBackground={setBackground}
      />
    </>
  )
}
