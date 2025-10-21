import { ChangeEvent, useCallback } from 'react'

import './Options.scss'

type OptionList<T extends string> = { value: T; label: string }[]

const BG_COLORS: OptionList<BgColor> = [
  { value: 'black', label: 'Preto' },
  { value: 'blue', label: 'Azul' },
  { value: 'white', label: 'Branco' },
]

const FLAG_ANGLES: OptionList<FlagAngle> = [
  { value: 'horizontal', label: 'Horizontal' },
  { value: 'diagonal', label: 'Diagonal' },
]

const FLAG_DESIGNS: OptionList<FlagDesign> = [
  { value: 'pride', label: 'Original' },
  { value: 'progress-1', label: 'Progresso 1' },
  { value: 'progress-2', label: 'Progresso 2' },
]

const GAP_SIZES: OptionList<GapSize> = [
  { value: '0', label: 'Não' },
  { value: '1', label: 'Sim' },
]

const SIDE_STYLES: OptionList<SideStyle> = [
  { value: 'stripes', label: 'Listras' },
  { value: 'solid-bg', label: 'Fundo sólido' },
  { value: 'no-text', label: 'Sem texto' },
]

export function Options(props: {
  flag: FlagDesign
  angle: FlagAngle
  sides: SideStyle
  gap: GapSize
  background: BgColor
  onChangeFlag(flag: FlagDesign): void
  onChangeAngle(angle: FlagAngle): void
  onChangeSides(sides: SideStyle): void
  onChangeGap(gap: GapSize): void
  onChangeBackground(background: BgColor): void
}) {
  return (
    <section className='options'>
      <Select
        name='flag-design'
        label='Bandeira'
        options={FLAG_DESIGNS}
        value={props.flag}
        onChange={props.onChangeFlag}
      />

      <Select
        name='flag-angle'
        label='Ângulo'
        options={FLAG_ANGLES}
        value={props.angle}
        onChange={props.onChangeAngle}
      />

      <Select
        name='sides'
        label='Laterais'
        options={SIDE_STYLES}
        value={props.sides}
        onChange={props.onChangeSides}
      />

      <Select
        name='gap'
        label='Espaçamento'
        options={GAP_SIZES}
        value={props.gap}
        onChange={props.onChangeGap}
      />

      <Select
        name='background'
        label='Fundo'
        options={BG_COLORS}
        value={props.background}
        onChange={props.onChangeBackground}
      />
    </section>
  )
}

function Select<T extends string>(props: {
  name: string
  label: string
  options: readonly { value: T; label: string }[]
  value: T
  onChange(newValue: T): void
}) {
  const selectId = `select-${props.name}`

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      props.onChange(event.target.value as T)
    },
    [props.onChange],
  )

  return (
    <div className='field'>
      <label htmlFor={selectId}>{props.label}</label>
      <select
        id={selectId}
        name={props.name}
        value={props.value}
        onChange={handleChange}
      >
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
