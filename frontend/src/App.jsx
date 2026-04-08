import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Login from "./routes/Login"
import Dashboard from "./routes/Dashboard"


function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/login" index element={<Login />}></Route>
          <Route path="/dashboard" element={localStorage.getItem('access_token') ? <Dashboard /> : <Navigate to="/login" />}></Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
