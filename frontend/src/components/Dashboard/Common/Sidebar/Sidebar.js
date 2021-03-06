import {
	Collapse,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import DateRangeIcon from '@material-ui/icons/DateRange'
import DescriptionIcon from '@material-ui/icons/Description'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import PeopleIcon from '@material-ui/icons/People'
import PersonIcon from '@material-ui/icons/Person'
import RotateRightIcon from '@material-ui/icons/RotateRight'
import SchoolIcon from '@material-ui/icons/School'
import SpeedIcon from '@material-ui/icons/Speed'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import SimpleBarReact from 'simplebar-react'
import 'simplebar/src/simplebar.css'
import useStyles from './styles'
const Sidebar = () => {
	const classes = useStyles()
	const [open, setOpen] = useState(false)
	const [open2, setOpen2] = useState(false)
	const [open3, setOpen3] = useState(false)
	const user = useSelector((state) => state.auth.user)
	const handleClick = () => {
		setOpen(!open)
	}

	const handleClick2 = () => {
		setOpen2(!open2)
	}

	const handleClick3 = () => {
		setOpen3(!open3)
	}
	return (
		<div className={classes.sidebar}>
			<List
				component="nav"
				aria-labelledby="nested-list-subheader"
				className={classes.root}
			>
				<SimpleBarReact style={{ height: 'calc(100vh - 90px)' }}>
					<ListItem
						className={classes.listItem}
						button
						component={NavLink}
						to="/dashboard/overview"
						activeClassName={classes.activeLink}
					>
						<ListItemIcon className={classes.listIcon}>
							<SpeedIcon />
						</ListItemIcon>
						<ListItemText
							className={classes.listItemText}
							primary="Tổng quan"
						/>
					</ListItem>

					{user?.role === 'admin' && (
						<>
							<ListItem
								className={classes.listItem}
								button
								onClick={handleClick3}
							>
								<ListItemIcon className={classes.listIcon}>
									<PeopleIcon />
								</ListItemIcon>
								<ListItemText
									className={classes.listItemText}
									primary="Quản lý tài khoản"
								/>
								{open3 ? (
									<ExpandLessIcon className={classes.listIcon} />
								) : (
									<ExpandMoreIcon className={classes.listIcon} />
								)}
							</ListItem>
							<Collapse in={open3} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									<ListItem
										component={NavLink}
										to="/dashboard/student"
										activeClassName={classes.activeLink}
										button
										className={classes.nested}
									>
										<ListItemIcon className={classes.listIcon}>
											<PersonIcon />
										</ListItemIcon>
										<ListItemText
											className={classes.listItemText}
											primary="Học sinh"
										/>
									</ListItem>
									<ListItem
										component={NavLink}
										to="/dashboard/teacher"
										activeClassName={classes.activeLink}
										button
										className={classes.nested}
									>
										<ListItemIcon className={classes.listIcon}>
											<PersonIcon />
										</ListItemIcon>
										<ListItemText
											className={classes.listItemText}
											primary="Giáo viên"
										/>
									</ListItem>
								</List>
							</Collapse>
						</>
					)}

					{user?.role === 'admin' && (
						<>
							<ListItem
								className={classes.listItem}
								button
								onClick={handleClick}
							>
								<ListItemIcon className={classes.listIcon}>
									<AssignmentIndIcon />
								</ListItemIcon>
								<ListItemText
									className={classes.listItemText}
									primary="Quản lý đào tạo"
								/>
								{open ? (
									<ExpandLessIcon className={classes.listIcon} />
								) : (
									<ExpandMoreIcon className={classes.listIcon} />
								)}
							</ListItem>
							<Collapse in={open} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									<ListItem
										button
										className={classes.nested}
										component={NavLink}
										to="/dashboard/teacher-type"
										activeClassName={classes.activeLink}
									>
										<ListItemIcon className={classes.listIcon}>
											<SchoolIcon />
										</ListItemIcon>
										<ListItemText
											className={classes.listItemText}
											primary="Loại giáo viên"
										/>
									</ListItem>
									<ListItem
										button
										className={classes.nested}
										component={NavLink}
										to="/dashboard/class"
										activeClassName={classes.activeLink}
									>
										<ListItemIcon className={classes.listIcon}>
											<SchoolIcon />
										</ListItemIcon>
										<ListItemText
											className={classes.listItemText}
											primary="Lớp học"
										/>
									</ListItem>
									<ListItem
										button
										className={classes.nested}
										component={NavLink}
										to="/dashboard/subject"
										activeClassName={classes.activeLink}
									>
										<ListItemIcon className={classes.listIcon}>
											<SchoolIcon />
										</ListItemIcon>
										<ListItemText
											className={classes.listItemText}
											primary="Môn học"
										/>
									</ListItem>
									<ListItem button className={classes.nested}>
										<ListItemIcon className={classes.listIcon}>
											<SchoolIcon />
										</ListItemIcon>
										<ListItemText
											className={classes.listItemText}
											primary="Kế hoạch đào tào"
										/>
									</ListItem>
									<ListItem
										button
										className={classes.nested}
										component={NavLink}
										to="/dashboard/head-class-teacher"
										activeClassName={classes.activeLink}
									>
										<ListItemIcon className={classes.listIcon}>
											<SchoolIcon />
										</ListItemIcon>
										<ListItemText
											className={classes.listItemText}
											primary="Phân công chủ nhiệm"
										/>
									</ListItem>
								</List>
							</Collapse>
						</>
					)}

					<ListItem
						className={classes.listItem}
						button
						// component={NavLink}
						// to="/a"
						// activeClassName={classes.activeLink}
					>
						<ListItemIcon className={classes.listIcon}>
							<MenuBookIcon />
						</ListItemIcon>
						<ListItemText
							className={classes.listItemText}
							primary="Bài giảng"
						/>
					</ListItem>
					{/* <ListItem className={classes.listItem} button>
						<ListItemIcon className={classes.listIcon}>
							<FlipCameraAndroidIcon />
						</ListItemIcon>
						<ListItemText
							className={classes.listItemText}
							primary="Kế hoạch giảng dạy"
						/>
					</ListItem> */}

					{user?.role === 'student' && (
						<>
							<ListItem
								className={classes.listItem}
								button
								onClick={handleClick2}
							>
								<ListItemIcon className={classes.listIcon}>
									<DescriptionIcon />
								</ListItemIcon>
								<ListItemText
									className={classes.listItemText}
									primary="Khảo thí"
								/>
								{open2 ? (
									<ExpandLessIcon className={classes.listIcon} />
								) : (
									<ExpandMoreIcon className={classes.listIcon} />
								)}
							</ListItem>
							<Collapse in={open2} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									<ListItem
										button
										className={classes.nested}
										component={NavLink}
										to="/dashboard/exam"
										activeClassName={classes.activeLink}
									>
										<ListItemIcon className={classes.listIcon}>
											<RotateRightIcon />
										</ListItemIcon>
										<ListItemText
											className={classes.listItemText}
											primary="Kỳ thi"
										/>
									</ListItem>
									<ListItem
										button
										className={classes.nested}
										component={NavLink}
										to="/dashboard/learning-result"
										activeClassName={classes.activeLink}
									>
										<ListItemIcon className={classes.listIcon}>
											<RotateRightIcon />
										</ListItemIcon>
										<ListItemText
											className={classes.listItemText}
											primary="Kết quả học tập"
										/>
									</ListItem>
								</List>
							</Collapse>
						</>
					)}

					{user?.role !== 'student' && (
						<ListItem
							className={classes.listItem}
							button
							component={NavLink}
							to="/dashboard/exam"
							activeClassName={classes.activeLink}
						>
							<ListItemIcon className={classes.listIcon}>
								<DescriptionIcon />
							</ListItemIcon>
							<ListItemText
								className={classes.listItemText}
								primary={
									user?.role === 'admin' ? 'Tổ chức thi' : 'Chấm điểm thi'
								}
							/>
						</ListItem>
					)}

					<ListItem
						className={classes.listItem}
						button
						component={NavLink}
						to="/dashboard/timetable"
						activeClassName={classes.activeLink}
					>
						<ListItemIcon className={classes.listIcon}>
							<DateRangeIcon />
						</ListItemIcon>
						<ListItemText
							className={classes.listItemText}
							primary="Thời khóa biểu"
						/>
					</ListItem>
					<ListItem
						className={classes.listItem}
						button
						// component={NavLink}
						// to="/a"
						// activeClassName={classes.activeLink}
					>
						<ListItemIcon className={classes.listIcon}>
							<HelpOutlineIcon />
						</ListItemIcon>
						<ListItemText className={classes.listItemText} primary="Hỗ trợ" />
					</ListItem>
				</SimpleBarReact>
			</List>
		</div>
	)
}

export default Sidebar
