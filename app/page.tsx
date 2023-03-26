import { Inter } from 'next/font/google'
import Herosection from './components/herosection'
import Contentsection from './components/contentsection'
import Projectsection from './components/projecsection'
// import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''>
      <Herosection />
      <Contentsection/>
      <Projectsection/>
    </main>
  )
}
