import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { Provider } from 'react-redux'
import store from './store'
import { ConfigProvider } from 'antd-mobile'
import zhTW from 'antd-mobile/es/locales/zh-TW'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<ConfigProvider locale={zhTW}>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</ConfigProvider>
)
