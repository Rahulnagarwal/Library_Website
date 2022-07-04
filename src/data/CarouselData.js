export const data = [
	{
		title: 'Thinking, Fast and Slow',
		description:
			'Our clients happily stay with our services for more several years now. See real reviews from our clients.',
		image: './assets/thinkingFast.webp',
		price: 'Price : ₹500'
	},
	{
		title: 'जीत आपकी',
		description: 'Our team consists of the best experts in the industry, learn about them',
		image: './assets/jeet.webp',
		price: 'Price : ₹400'
	},
	{
		title: 'Atomic Habits',
		description: 'Learn more about our security systems to make sure your data is always safe',
		image: './assets/images.jfif',
		price: 'Price : ₹800'
	},
	{
		title: 'युगद्रष्टा विवेकानन्द ',
		description: 'Find more about hardware and software used for your service',
		image: './assets/vivekanand.jpg',
		price: 'Price : ₹200'
	},
	{
		title: '21 Things Every Girl Should Know',
		description: 'We have provided services to top clients in tech industry',
		image: './assets/21.jfif',
		price: 'Price : ₹500'
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
