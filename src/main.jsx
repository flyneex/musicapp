import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AudioProvider from './context/AudioContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ChakraProvider>
			<AudioProvider>
				<App />
			</AudioProvider>
		</ChakraProvider>
	</React.StrictMode>
)
