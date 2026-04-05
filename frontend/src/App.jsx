import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./routes/Login"

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/login" index element={<Login />}></Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
