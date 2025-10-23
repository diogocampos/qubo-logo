import { ChangeEvent, useCallback } from 'react'

import './Options.scss'

type OptionList<T extends string> = readonly {
  readonly value: T
  readonly label: string
}[]

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

const FONT_FAMILIES: OptionList<FontFamily> = [
  { value: 'caixa', label: 'Caixa Std' },
  { value: 'eras', label: 'Eras Bold' },
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
  state: LogoState
  onChange(changed: Partial<LogoState>): void
}) {
  const { state, onChange } = props

  return (
    <section className='options'>
      <Select
        name='flag'
        label='Bandeira'
        options={FLAG_DESIGNS}
        value={state.flag}
        onChange={useCallback((flag) => onChange({ flag }), [onChange])}
      />

      <Select
        name='angle'
        label='Ângulo'
        options={FLAG_ANGLES}
        value={state.angle}
        onChange={useCallback((angle) => onChange({ angle }), [onChange])}
      />

      <Select
        name='sides'
        label='Laterais'
        options={SIDE_STYLES}
        value={state.sides}
        onChange={useCallback((sides) => onChange({ sides }), [onChange])}
      />

      <Select
        name='font'
        label='Fonte'
        options={FONT_FAMILIES}
        value={state.font}
        onChange={useCallback((font) => onChange({ font }), [onChange])}
      />

      <Select
        name='gap'
        label='Espaçamento'
        options={GAP_SIZES}
        value={state.gap}
        onChange={useCallback((gap) => onChange({ gap }), [onChange])}
      />

      <Select
        name='background'
        label='Fundo'
        options={BG_COLORS}
        value={state.background}
        onChange={useCallback(
          (background) => onChange({ background }),
          [onChange],
        )}
      />

      <Select
        name='filter'
        label='Filtro'
        options={COLOR_FILTERS}
        value={state.filter}
        onChange={useCallback((filter) => onChange({ filter }), [onChange])}
      />
    </section>
  )
}

function Select<T extends string>(props: {
  name: string
  label: string
  options: OptionList<T>
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
