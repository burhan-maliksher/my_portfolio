import { Inter } from 'next/font/google'
// import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <div className='bg-black'>
        <h1 className='text-white'>hi</h1>
      </div>
    </main>
  )
}
