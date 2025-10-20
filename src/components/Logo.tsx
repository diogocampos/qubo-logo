import './Logo.scss'

export function Logo(props: { flag: Flag; gap: number }) {
  return (
    <section
      className='qubo-logo'
      style={{ '--gap': `${props.gap}rem` } as React.CSSProperties}
    >
      <div className={`top bg-${props.flag}`} />

      <div className='sides'>
        <div className='left'>
          <span>QU</span>
        </div>

        <div className='right'>
          <span>BO</span>
        </div>
      </div>
    </section>
  )
}
