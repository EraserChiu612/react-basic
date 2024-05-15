import { Outlet } from 'react-router-dom'
import { Button } from 'antd-mobile'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getBillList } from '@/store/modules/billStore'

const Layout = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getBillList())
	}, [dispatch])

	return (
		<div>
			<Outlet />
			我是Layout
			<Button color="primary">我是按鈕</Button>
			<div className="purple-theme">
				<Button color="primary">我是局部按鈕</Button>
			</div>
		</div>
	)
}

export default Layout
