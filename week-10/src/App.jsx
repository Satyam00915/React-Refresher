import { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Layout } from "./Pages/Layout";

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/neet/class-11" element={<Class11Program />} />
            <Route path="/neet/class-12" element={<Class12Program />} />
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <div>Landing Page</div>
      <button
        onClick={() => {
          navigate("/neet/class-11");
        }}
      >
        Class 11 Program
      </button>
      <button
        onClick={() => {
          navigate("/neet/class-12");
        }}
      >
        Class 12 Program
      </button>
    </>
  );
}

function Class11Program() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);
  return (
    <>
      <div>NEET PROGRAM Class 11</div>
    </>
  );
}

function Class12Program() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);
  return (
    <>
      <div>NEET PROGRAM Class 12</div>
    </>
  );
}

function ErrorPage() {
  return (
    <>
      <div>Error Route not found</div>
    </>
  );
}
export default App;
