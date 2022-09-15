import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaVk } from 'react-icons/fa'
import classes from './Footer.module.scss'

const Footer = () => {
	return (
		<footer >
			<p style={{ textAlign: 'center', marginBottom: '15px', color: 'grey' }}>
				Copyright &copy; 2022 Marat, Inc. All rights reserved.
				<span>
					<a
						href='https://github.com/Maratik555'
						target='_blank'
						rel='noreferrer'
					>
						<AiFillGithub className={classes.footer} />
					</a>
				</span>
				<span>
					<a href='https://vk.com/marat_99999' target='_blank' rel='noreferrer'>
						<FaVk className={classes.footer} />
					</a>
				</span>
			</p>
		</footer>
	)
}

export default Footer
