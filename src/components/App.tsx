import { useState } from 'react'

import { Logo } from './Logo'

export function App() {
  const [flag, setFlag] = useState<Flag>('progress-2')
  const [gap, setGap] = useState<number>(0)

  return (
    <>
      <Logo flag={flag} gap={gap} />
    </>
  )
}
