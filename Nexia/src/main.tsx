import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Auth0Provider } from "@auth0/auth0-react"
import { BrowserRouter } from "react-router-dom"
import App from "./App.jsx"



createRoot(document.getElementById("root")!).render(
  <StrictMode>

  <BrowserRouter>
  
    <Auth0Provider
      domain="dev-70724a7.us.auth0.com"
      clientId="aFsrJsCqfWhIiWoTeqQPaSrEfFoR6jA7"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >

      <App />

    </Auth0Provider>

  </BrowserRouter>


  </StrictMode>
)
