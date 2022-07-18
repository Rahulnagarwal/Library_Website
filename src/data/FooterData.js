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
		title: 'Motivational',
		links: [{ name: "Sandeep Maheshawari", link: "https://www.youtube.com/c/SandeepSeminars" },
		{ name: "Dr. Vivek Bindra", link: "https://www.youtube.com/c/MrVivekBindra" },
		{ name: "Sadguru", link: "https://www.youtube.com/c/sadhguru" },
		{ name: "Sonu Sharma", link: "https://www.youtube.com/c/SONUSHARMAMotivation" },],
	},
	{
		title: 'Educational',
		links: [{ name: "Unacademy", link: "https://www.youtube.com/c/UnacademyLiveSSCExams" },
		{ name: "Adda247", link: "https://www.youtube.com/c/Adda247live" },
		{ name: "Khan Sir", link: "https://www.youtube.com/channel/UCatL-c6pmnjzEOHSyjn-sHA" },
		{ name: "Drishti", link: "https://www.youtube.com/c/DrishtiIASvideos" }],
	},
	{
		title: 'Books',
		links: [{ name: "Seeken", link: "https://www.youtube.com/c/SeeKen" },
		{ name: "Indian booktuber", link: "https://www.youtube.com/c/IndianBooktuber" },
		{ name: "Kisan Chotaliya", link: "https://www.youtube.com/c/KishanChotaliya" },
		{ name: "Helly", link: "https://www.youtube.com/c/HellyLove" },],
	},
];
