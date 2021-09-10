import {
	Collapse,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PeopleIcon from "@material-ui/icons/People";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import SchoolIcon from "@material-ui/icons/School";
import SpeedIcon from "@material-ui/icons/Speed";
import { makeStyles } from "@material-ui/styles";
import React from "react";
const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: 290,
		height: "calc(100vh - 90px)",
		backgroundColor: theme.palette.secondary.main,
	},
	listIcon: {
		color: theme.palette.primary.contrastText,
	},
	listItemText: {
		color: theme.palette.primary.contrastText,
		textTransform: "uppercase",
	},
	nested: {
		paddingLeft: theme.spacing(5),
		color: theme.palette.primary.contrastText,
	},
}));

const Sidebar = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [open2, setOpen2] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
		setOpen2(false);
	};

	const handleClick2 = () => {
		setOpen2(!open2);
		setOpen(false);
	};
	return (
		<div>
			<List
				component="nav"
				aria-labelledby="nested-list-subheader"
				className={classes.root}
			>
				<ListItem button>
					<ListItemIcon className={classes.listIcon}>
						<SpeedIcon />
					</ListItemIcon>
					<ListItemText className={classes.listItemText} primary="Tổng quan" />
				</ListItem>

				<ListItem button>
					<ListItemIcon className={classes.listIcon}>
						<PersonIcon />
					</ListItemIcon>
					<ListItemText
						className={classes.listItemText}
						primary="Quản lý tài khoản"
					/>
				</ListItem>

				<ListItem button onClick={handleClick}>
					<ListItemIcon className={classes.listIcon}>
						<PeopleIcon />
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

				<ListItem button onClick={handleClick2}>
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

				<ListItem button>
					<ListItemIcon className={classes.listIcon}>
						<EqualizerIcon />
					</ListItemIcon>
					<ListItemText
						className={classes.listItemText}
						primary="Báo cáo thống kê"
					/>
				</ListItem>
				<ListItem button>
					<ListItemIcon className={classes.listIcon}>
						<MenuBookIcon />
					</ListItemIcon>
					<ListItemText
						className={classes.listItemText}
						primary="Thời khóa biểu"
					/>
				</ListItem>
				<ListItem button>
					<ListItemIcon className={classes.listIcon}>
						<HelpOutlineIcon />
					</ListItemIcon>
					<ListItemText className={classes.listItemText} primary="Hỗ trợ" />
				</ListItem>
			</List>
		</div>
	);
};

export default Sidebar;
