import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Books from './components/Books/Books'
import Main from './layout/Main'
import BookDetails from './components/BookDetails/BookDetails'
import Contact from './components/Contact/Contact'



function App() {

  const [dark, setDark] = useState(false)

  const handleDark = ()=>{
      
    document.body.classList.toggle('light-theme')
    document.body.classList.toggle('dark-theme')
      // if(!dark){
      //     document.body.classList.remove('light-theme')
      //     document.body.classList.add('dark-theme')
      // }else{
      //     document.body.classList.remove('dark-theme')
      //     document.body.classList.add('light-theme')
      // }

      setDark(!dark)
      
  }


const router = createBrowserRouter([
  {
    path:'/',
    element:<Main handleDark={handleDark} dark={dark}></Main>,
    children:[
      {
        path:'/',
        element:<Home dark={dark}></Home>
      },
      {
        path:'/home',
        element:<Home dark={dark}></Home>
      },
      {
        path:'/about',
        element:<About dark={dark}></About>
      },
      
      {
        path:'/books',
        loader:async()=>fetch('https://api.itbook.store/1.0/new'),
        element:<Books ></Books>
      },
      {
        path:'book/:bookID',
        loader:async ({params})=>fetch(`https://api.itbook.store/1.0/books/${params.bookID}`),
        element:<BookDetails dark={dark}></BookDetails>
      },
      {
        path:'/contact',
        element:<Contact dark={dark}></Contact>
      }
    ]
  },
  {
    path:'*', element:<ErrorPage></ErrorPage>
  }

])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  )
}

export default App
