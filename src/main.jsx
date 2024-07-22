import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About.jsx'
import Contact from "./components/Contact/Contact.jsx"
import Home from './components/Home.jsx'
import Github from './components/Github/Github.jsx'

// const router = createBrowserRouter([{
//   path: "/",
//   element: <Layout></Layout>,
//   children: [
//     {
//       path:"",
//       element: <Home/>
//     },
//     {
// path: "about",
// element: <About></About>
//     },
//     {
//       path: "contact",
//       element: <Contact></Contact>
//           }
//   ]
// },

// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} /> {/* Default route for '/' */}
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='github' element={<Github></Github>}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
