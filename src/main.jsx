import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './components/HomePage'

/**
 * provider
 */

import { NextUIProvider } from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <HomePage/>
    </NextUIProvider>
  </React.StrictMode>,
)
