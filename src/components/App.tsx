import { useState } from 'react'

import { Logo } from './Logo'
import { Options } from './Options'

export function App() {
  const [flag, setFlag] = useState<FlagStyle>('progress-2')
  const [sides, setSides] = useState<SideStyle>('stripes')
  const [gap, setGap] = useState<number>(0)

  return (
    <>
      <Logo flag={flag} sides={sides} gap={gap} />
      <Options
        flag={flag}
        sides={sides}
        gap={gap}
        onChangeFlag={setFlag}
        onChangeSides={setSides}
        onChangeGap={setGap}
      />
    </>
  )
}
