//1. Import Area
import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/component/Header';
import Main from '@/component/Main';
import Footer from '@/component/Footer';


//2. Function defination Area
 function Home() {
  return (
   <>
   <Header />
   <Main />
   <Footer />

   </>
  )
}

//3. Export Area
 export default Home;