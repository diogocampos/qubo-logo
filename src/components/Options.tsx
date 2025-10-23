import { ChangeEvent, useCallback } from 'react'

import './Options.scss'

type OptionList<T extends string> = { value: T; label: string }[]

const FLAG_DESIGNS: OptionList<FlagDesign> = [
  { value: 'pride', label: 'Original' },
  { value: 'progress-1', label: 'Progresso 1' },
  { value: 'progress-2', label: 'Progresso 2' },
]

const FLAG_ANGLES: OptionList<FlagAngle> = [
  { value: 'horizontal', label: 'Horizontal' },
  { value: 'diagonal', label: 'Diagonal' },
]

const SIDE_STYLES: OptionList<SideStyle> = [
  { value: 'stripes-1', label: 'Listras 1' },
  { value: 'stripes-2', label: 'Listras 2' },
  { value: 'stripes-3', label: 'Listras 3' },
  { value: 'solid-bg', label: 'Fundo sólido' },
  { value: 'no-text', label: 'Sem texto' },
]

const GAP_SIZES: OptionList<GapSize> = [
  { value: '1', label: 'Sim' },
  { value: '0', label: 'Não' },
]

const BG_COLORS: OptionList<BgColor> = [
  { value: 'white', label: 'Branco' },
  { value: 'blue', label: 'Azul' },
  { value: 'black', label: 'Preto' },
]

const COLOR_FILTERS: OptionList<ColorFilter> = [
  { value: 'none', label: 'Normal' },
  { value: 'grayscale', label: 'Tons de cinza' },
]

export function Options(props: {
  flag: FlagDesign
  angle: FlagAngle
  sides: SideStyle
  gap: GapSize
  background: BgColor
  filter: ColorFilter
  onChangeFlag(flag: FlagDesign): void
  onChangeAngle(angle: FlagAngle): void
  onChangeSides(sides: SideStyle): void
  onChangeGap(gap: GapSize): void
  onChangeBackground(background: BgColor): void
  onChangeFilter(filter: ColorFilter): void
}) {
  return (
    <section className='options'>
      <Select
        name='flag'
        label='Bandeira'
        options={FLAG_DESIGNS}
        value={props.flag}
        onChange={props.onChangeFlag}
      />

      <Select
        name='angle'
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

      <Select
        name='filter'
        label='Filtro'
        options={COLOR_FILTERS}
        value={props.filter}
        onChange={props.onChangeFilter}
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
