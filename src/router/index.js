import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/pages/Layout'
import New from '@/pages/New'
import Month from '@/pages/Month'
import Year from '@/pages/Year'

//導入訂製主題文件
import '@/theme.css'
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: 'month',
				element: <Month />,
			},
			{
				path: 'year',
				element: <Year />,
			},
		],
	},

	{
		path: '/new',
		element: <New />,
	},
])

export default router
