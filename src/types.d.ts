type FlagDesign = 'pride' | 'progress-1' | 'progress-2'

type FlagAngle = 'horizontal' | 'diagonal'

type SideStyle =
  | 'stripes-1'
  | 'stripes-2'
  | 'stripes-3'
  | 'solid-bg'
  | 'no-text'

type FontFamily = 'caixa' | 'eras'

type GapSize = '0' | '1'

type BgColor = 'black' | 'blue' | 'white'

type ColorFilter = 'none' | 'grayscale'

type LogoState = {
  readonly flag: FlagDesign
  readonly angle: FlagAngle
  readonly sides: SideStyle
  readonly font: FontFamily
  readonly gap: GapSize
  readonly background: BgColor
  readonly filter: ColorFilter
}
