import { ChangeEvent, useCallback } from 'react'

import './Options.scss'

export function Options(props: {
  flagDesign: FlagDesign
  flagAngle: FlagAngle
  sides: SideStyle
  gap: number
  background: BgColor
  onChangeFlagDesign: (flag: FlagDesign) => void
  onChangeFlagAngle: (flag: FlagAngle) => void
  onChangeSides: (sides: SideStyle) => void
  onChangeGap: (gap: number) => void
  onChangeBackground: (background: BgColor) => void
}) {
  const handleChangeFlagDesign = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      props.onChangeFlagDesign(event.target.value as FlagDesign)
    },
    [props.onChangeFlagDesign],
  )

  const handleChangeFlagAngle = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      props.onChangeFlagAngle(event.target.value as FlagAngle)
    },
    [props.onChangeFlagAngle],
  )

  const handleChangeSides = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      props.onChangeSides(event.target.value as SideStyle)
    },
    [props.onChangeSides],
  )

  const handleChangeGap = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      props.onChangeGap(+event.target.value)
    },
    [props.onChangeGap],
  )

  const handleChangeBackground = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      props.onChangeBackground(event.target.value as BgColor)
    },
    [props.onChangeBackground],
  )

  return (
    <section className='options'>
      <div className='field'>
        <label htmlFor='flag-design-select'>Bandeira</label>
        <select
          name='flag-design'
          id='flag-design-select'
          value={props.flagDesign}
          onChange={handleChangeFlagDesign}
        >
          <option value='pride'>Original</option>
          <option value='progress-1'>Progresso 1</option>
          <option value='progress-2'>Progresso 2</option>
        </select>
      </div>

      <div className='field'>
        <label htmlFor='flag-angle-select'>Ângulo</label>
        <select
          name='flag-angle'
          id='flag-angle-select'
          value={props.flagAngle}
          onChange={handleChangeFlagAngle}
        >
          <option value='horizontal'>Horizontal</option>
          <option value='diagonal'>Diagonal</option>
        </select>
      </div>

      <div className='field'>
        <label htmlFor='sides-select'>Laterais</label>
        <select
          name='sides'
          id='sides-select'
          value={props.sides}
          onChange={handleChangeSides}
        >
          <option value='stripes'>Listras</option>
          <option value='solid-bg'>Fundo sólido</option>
          <option value='no-text'>Sem texto</option>
        </select>
      </div>

      <div className='field'>
        <label htmlFor='gap-select'>Espaçamento</label>
        <select
          name='gap'
          id='gap-select'
          value={props.gap}
          onChange={handleChangeGap}
        >
          <option value='0'>Não</option>
          <option value='1'>Sim</option>
        </select>
      </div>

      <div className='field'>
        <label htmlFor='background-select'>Fundo</label>
        <select
          name='background'
          id='background-select'
          value={props.background}
          onChange={handleChangeBackground}
        >
          <option value='black'>Preto</option>
          <option value='blue'>Azul</option>
          <option value='white'>Branco</option>
        </select>
      </div>
    </section>
  )
}
