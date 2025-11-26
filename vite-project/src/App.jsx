  import { Routes, Route } from "react-router-dom";
import Home from "./NavComponents/Home"
import Pej2 from "./NavComponents/Pej2"
import Pej3 from "./NavComponents/Pej3"
import Pej4 from "./NavComponents/Pej4"
import Pej5 from "./NavComponents/Pej5"
import Layout from "./Components/Layout";
// import CardDetail from "./Pages/CardDetail";
const App = () => {
  return (
    <>
        <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="Pej2" element={<Pej2 />} />
      <Route path="Pej3" element={<Pej3 />} />
        <Route path="Pej4" element={<Pej4 />} />
        <Route path="Pej5" element={<Pej5 />} />
      </Route>
    </Routes> 
    {/* <CardDetail /> */}
    </>
  )
}

export default App