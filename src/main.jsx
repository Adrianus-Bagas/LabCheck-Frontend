import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PageHandling from './components/PageHandling';
import { Provider } from 'react-redux';
import store from './store/store';
import { createRoot } from "react-dom/client";
import App from './pages/App';


// const router = createBrowserRouter([
//   { path: "/", element: <LoginPage/>},
//   { path: "login", element: <LoginPage/>},
//   { path: "admin", element: <PageHandling role={"admin"}/>, children },
//   { path: "customer", element: <PageHandling role={"customer"}/> }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <RouterProvider router={router}/>
//   </Provider>
// )

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
