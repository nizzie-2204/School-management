import { Typography } from '@material-ui/core'
import { Breadcrumbs } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './styles'

const Breadcrumb = ({ title, links }) => {
	const classes = useStyles()
	return (
		<div className={classes.container}>
			<Typography className={classes.title}>
				{links[links.length - 1].title}
			</Typography>
			<Breadcrumbs aria-label="breadcrumb" className={classes.link}>
				{links.map((link, index) => {
					return (
						<Link key={index} to={link.path} className={classes.link}>
							{link.title}
						</Link>
					)
				})}
			</Breadcrumbs>
		</div>
	)
}

export default Breadcrumb
