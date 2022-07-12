import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
		link: 'https://www.linkedin.com/in/rahul231/'
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
		link: 'https://www.linkedin.com/in/rahul231/'
	},
	// {
	// 	name: 'YouTube',
	// 	icon: iconStyle(FaYoutube),
	// },
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
		link: 'https://twitter.com/RahulNagarwal14'
	},
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
		link: 'https://www.linkedin.com/in/rahul231/'
	},
];

export const footerData = [
	{
		title: 'Main',
		links: ['Blog', 'FAQs', 'Support', 'About us'],
	},
	{
		title: 'Product',
		links: ['Login', 'Personal', 'Business', 'Team'],
	},
	{
		title: 'Press',
		links: ['Logos', 'Events', 'Stories', 'Office'],
	},
	{
		title: 'Legal',
		links: ['GDPR', 'Privacy Policy', 'Terms of Service', 'Disclaimer'],
	},
];
