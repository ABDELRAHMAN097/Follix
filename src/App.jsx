import { Helmet } from 'react-helmet-async'
import { Suspense } from 'react'
import Navbar from './components/navbar/Navbar'
import AppRoutes from './AppRoutes'
import Loader from './components/general/Loader'
import Footer from './components/footer/Footer';
import SideBAr from './components/sidebar/SideBAr';

function App() {
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);
  return (
    <>
      <Helmet>
        <title>Miqat In || Dashboard</title>
        <meta name="description" content="A React app with all required libraries" />
      </Helmet>

      <div className="bg-black">
        <Layout>
          <AppRoutes />
        </Layout>
      </div>
    </>
  );
}

export default App




const Layout = ({children}) => {
    return (
        <div className='flex flex-col min-h-screen fixed top-0 left-0 right-0 bottom-0 '>
            <Navbar />
            <SideBAr />
            <div className='min-h-[150vh] overflow-auto pt-[72px] ps-64'>
              <Suspense fallback={<Loader />}>
                {children}
              </Suspense>
            </div>
            {/* <Footer /> */}
        </div>
    )
}



