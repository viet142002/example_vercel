import { 
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
