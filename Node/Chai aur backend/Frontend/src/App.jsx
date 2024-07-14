import "./App.css";
import axios from "axios";
import Compo from "./Compo";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);
  return (
    <>
      <h1>Hello</h1>
      <h1>hello</h1>
      {console.log(data)}
      {data.map((data) => (
        <>
          <h1>{data.title}</h1>
          <h4>{data.description}</h4>
        </>
      ))}
    </>
  );
}

export default App;
