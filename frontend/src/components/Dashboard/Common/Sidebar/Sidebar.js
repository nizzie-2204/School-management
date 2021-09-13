import {
	Collapse,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import GroupWorkIcon from '@material-ui/icons/GroupWork'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import PeopleIcon from '@material-ui/icons/People'
import PersonIcon from '@material-ui/icons/Person'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import SchoolIcon from '@material-ui/icons/School'
import SpeedIcon from '@material-ui/icons/Speed'
import React from 'react'
import useStyles from './styles'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
	const classes = useStyles()
	const [open, setOpen] = React.useState(false)
	const [open2, setOpen2] = React.useState(false)
	const [open3, setOpen3] = React.useState(false)

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
				<ListItem
					className={classes.listItem}
					button
					component={NavLink}
					to="/overview"
					activeClassName={classes.activeLink}
				>
					<ListItemIcon className={classes.listIcon}>
						<SpeedIcon />
					</ListItemIcon>
					<ListItemText className={classes.listItemText} primary="Tổng quan" />
				</ListItem>

				<ListItem
					className={classes.listItem}
					button
					onClick={handleClick3}
					component={NavLink}
					to="/"
					activeClassName={classes.activeLink}
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
							to="/accounts/student"
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
							to="/accounts/teacher"
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

				<ListItem
					className={classes.listItem}
					button
					onClick={handleClick}
					component={NavLink}
					to="/a"
					activeClassName={classes.activeLink}
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
						<ListItem button className={classes.nested}>
							<ListItemIcon className={classes.listIcon}>
								<SchoolIcon />
							</ListItemIcon>
							<ListItemText
								className={classes.listItemText}
								primary="Kế hoạch đào tào"
							/>
						</ListItem>
						<ListItem button className={classes.nested}>
							<ListItemIcon className={classes.listIcon}>
								<SchoolIcon />
							</ListItemIcon>
							<ListItemText
								className={classes.listItemText}
								primary="Phân công giảng dạy"
							/>
						</ListItem>
						<ListItem button className={classes.nested}>
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

				<ListItem
					className={classes.listItem}
					button
					onClick={handleClick2}
					component={NavLink}
					to="/a"
					activeClassName={classes.activeLink}
				>
					<ListItemIcon className={classes.listIcon}>
						<GroupWorkIcon />
					</ListItemIcon>
					<ListItemText className={classes.listItemText} primary="Khảo thí" />
					{open2 ? (
						<ExpandLessIcon className={classes.listIcon} />
					) : (
						<ExpandMoreIcon className={classes.listIcon} />
					)}
				</ListItem>
				<Collapse in={open2} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<ListItemIcon className={classes.listIcon}>
								<QuestionAnswerIcon />
							</ListItemIcon>
							<ListItemText
								className={classes.listItemText}
								primary="Tổ chức kỳ thi"
							/>
						</ListItem>
						<ListItem button className={classes.nested}>
							<ListItemIcon className={classes.listIcon}>
								<QuestionAnswerIcon />
							</ListItemIcon>
							<ListItemText
								className={classes.listItemText}
								primary="Kết quả học tập"
							/>
						</ListItem>
					</List>
				</Collapse>

				<ListItem
					className={classes.listItem}
					button
					component={NavLink}
					to="/a"
					activeClassName={classes.activeLink}
				>
					<ListItemIcon className={classes.listIcon}>
						<EqualizerIcon />
					</ListItemIcon>
					<ListItemText
						className={classes.listItemText}
						primary="Báo cáo thống kê"
					/>
				</ListItem>
				<ListItem
					className={classes.listItem}
					button
					component={NavLink}
					to="/a"
					activeClassName={classes.activeLink}
				>
					<ListItemIcon className={classes.listIcon}>
						<MenuBookIcon />
					</ListItemIcon>
					<ListItemText
						className={classes.listItemText}
						primary="Thời khóa biểu"
					/>
				</ListItem>
				<ListItem
					className={classes.listItem}
					button
					component={NavLink}
					to="/a"
					activeClassName={classes.activeLink}
				>
					<ListItemIcon className={classes.listIcon}>
						<HelpOutlineIcon />
					</ListItemIcon>
					<ListItemText className={classes.listItemText} primary="Hỗ trợ" />
				</ListItem>
			</List>
		</div>
	)
}

export default Sidebar
