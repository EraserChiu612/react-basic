import { NavBar, DatePicker } from 'antd-mobile'
import { useMemo, useState } from 'react'
import './index.scss'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import _ from 'lodash'

const Month = () => {
	// 按月數據分組
	const billList = useSelector(state => state.bill.billList)
	const monthGroup = useMemo(() => {
		// return 計算後之值
		return _.groupBy(billList, item => dayjs(item.date).format('YYYY-MM'))
	}, [billList])
	console.log(monthGroup)

	// 控制彈框顯示
	const [dateVisible, setDateVisible] = useState(false)

	//控制時間顯示 && 時間格式化
	const [currentDate, setCurrentDate] = useState(() => {
		return dayjs(new Date()).format('YYYY-MM')
	})

	const onConfirm = date => {
		setDateVisible(false)

		const formatDate = dayjs(date).format('YYYY-MM')
		setCurrentDate(formatDate)
	}

	return (
		<div className="monthlyBill">
			<NavBar className="nav" backArrow={false}>
				月度收支
			</NavBar>
			<div className="content">
				<div className="header">
					{/* 時間切換區 */}
					<div className="date" onClick={() => setDateVisible(true)}>
						<span className="text">{currentDate}月帳單</span>
						<span
							className={classNames('arrow', dateVisible && 'expand')}
						></span>
					</div>
					{/* 統計區域 */}
					<div className="twoLineOverview">
						<div className="item">
							<span className="money">{100}</span>
							<span className="type">支出</span>
						</div>
						<div className="item">
							<span className="money">{200}</span>
							<span className="type">收入</span>
						</div>
						<div className="item">
							<span className="money">{200}</span>
							<span className="type">結餘</span>
						</div>
					</div>
					{/* 時間選擇器 */}
					<DatePicker
						className="kaDate"
						title="記帳日期"
						precision="month"
						visible={dateVisible}
						onCancel={() => setDateVisible(false)}
						onConfirm={onConfirm}
						onClose={() => setDateVisible(false)}
						max={new Date()}
					/>
				</div>
			</div>
		</div>
	)
}

export default Month
