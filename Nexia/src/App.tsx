/* React */
import { type ReactNode, type JSX } from "react"

/* Hooks */
import { BrowserRouter, Routes, Route } from "react-router-dom"

/* Home page */
import Home from "./Mobile/pages/Home/mainHome"

/* Comoon page */
import Header from "./Mobile/pages/Common/Header"
import Footer from "./Mobile/pages/Common/Footer"

/* Style */
import "./Mobile/styles/main.css"



/* Layout */
const Layout = ({ children }: { children: ReactNode }) => {
  return (
  <>
    <Header />
    {children}
    <Footer />
  </>
  )
}


/* Render elements */
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Layout><Home /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App