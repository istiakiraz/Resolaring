import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './router/router.jsx'
import { RouterProvider } from 'react-router'
import ReactLenis from "lenis/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.1,
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        }}
      >
   <RouterProvider router={router} />
   </ReactLenis>
  </StrictMode>,
)
