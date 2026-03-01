import { Routes, Route } from "react-router-dom";


import { Home } from './pages/Home'
import { Builder } from './components/Builder'
import { Header } from './layouts/Header'
import { Footer } from './layouts/Footer'
import { Demo } from "./pages/Demo";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/demo" element={<Demo />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
