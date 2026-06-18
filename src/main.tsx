//import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
//import { App } from "./App.tsx";
import { MainPage } from "./MainPage.tsx";

const rootEl = document.getElementById("root");
const reactRoot = createRoot(rootEl!);
// reactRoot.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
reactRoot.render(<MainPage />);
