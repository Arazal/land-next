import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <header>
      <section className="hero-banner">
        <Image src="/sflogo.png" alt="logo" width={45} height={45}/>
        <h1 >Deliver <span>on</span> our every promise</h1>
        <div className="container">
          <Link className="ui-button" href="/features">Get Started</Link>
        </div>  
      </section>
    </header>
  )
}
