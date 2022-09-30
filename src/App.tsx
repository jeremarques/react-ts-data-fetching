import { Route, Routes } from "react-router-dom";
import { Repo } from "./Pages/Repo";
import { Repos } from "./Pages/Repos";

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Repos />} />
      <Route path='/repos/*' element={<Repo />} />
    </Routes>
  )
}