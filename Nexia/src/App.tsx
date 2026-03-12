/* React - Hooks */
import { Routes, Route, useLocation } from "react-router-dom"
import { type ReactNode, type JSX, useEffect, useState } from "react"

/* Home page */
import HomeRender from "./Nexia/pages/Home/MainHome"

/* Common page */
import Header from "./Nexia/pages/Common/Header"
import Footer from "./Nexia/pages/Common/Footer"

/* Phone */
import DeviceRender from "./Nexia/pages/devices/devices"
import TermsAndConditions from "./Nexia/pages/Common/TermsAndConditions"

/* Components */
import ReloadAnimation from "./Nexia/components/ReloadAnimation"



/* Layout */
const Layout = ({ children }: { children: ReactNode }) => {
  return (
  <>
    <Header />

    <main>
      {children}
    </main>
    
    <Footer />
  </>
  )
}

/* Restart scroll */
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    })
  }, [pathname])

  return null
}



/* Render elements */
function App(): JSX.Element {
  /* Loading page */
  const location = useLocation()
  const [loading, setLoading] = useState<boolean>(false)

  /* Page load time */
  useEffect(() => {
    setLoading(true)

    const timer = setTimeout(() => setLoading(false), 500)

    return () => clearTimeout(timer)
  }, [location.pathname])

  if (loading) return <ReloadAnimation />



  return (
    <>
      {/* Restart scroll */}
      <ScrollToTop />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Layout><HomeRender /></Layout>} />

        {/* Devices */}
        <Route path="/Phone" element={<Layout><DeviceRender /></Layout>} />
        {/* Terminos y Condiciones */}
        <Route path="/terms" element={<Layout><TermsAndConditions /></Layout>} />
      </Routes>
    </>
  )
}

export default App