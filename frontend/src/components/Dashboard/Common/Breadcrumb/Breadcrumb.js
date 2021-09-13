import { Breadcrumbs } from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import React from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './styles'

const Breadcrumb = ({ title, links }) => {
	const classes = useStyles()
	return (
		<div className={classes.container}>
			<Breadcrumbs
				aria-label="breadcrumb"
				separator={<NavigateNextIcon fontSize="small" />}
				className={classes.link}
			>
				{links.map((link) => {
					return (
						<Link to={link.path} className={classes.link}>
							{link.title}
						</Link>
					)
				})}
			</Breadcrumbs>
		</div>
	)
}

export default Breadcrumb
