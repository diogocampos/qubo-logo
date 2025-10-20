import './Logo.scss'

export function Logo(props: {
  flag: FlagStyle
  sides: SideStyle
  gap: number
}) {
  const style = {
    '--gap': `${props.gap}rem`,
  } as React.CSSProperties

  return (
    <section className='qubo-logo' style={style}>
      <div className={`top bg-${props.flag}`} />

      <div className={`sides ${props.sides}`}>
        <div className='left'>
          <span className='text'>QU</span>
        </div>

        <div className='right'>
          <span className='text'>BO</span>
        </div>
      </div>
    </section>
  )
}
