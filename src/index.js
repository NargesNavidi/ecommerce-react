import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <Auth0Provider
    domain='dev-wi7qra6j.us.auth0.com'
    clientId='MO5kMaAxiOeRSbhJJXsmsjrZ3RK0goqa'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </Auth0Provider>,
  document.getElementById('root')
)
