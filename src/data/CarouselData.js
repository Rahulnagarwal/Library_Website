export const data = [
	{
		title: 'Thinking, Fast and Slow',
		description:
			'Intelligence is not only the ability to reason; it is also the ability to find relevant material in memory and to deploy attention when needed.',
		image: './assets/thinkingFast.webp',
		price: 'Price : ₹500'
	},
	{
		title: 'जीत आपकी',
		description: 'मुझे यकीन है कि जीत हासिल करनें वालों के मन में भी टालमटोल करनें कि इच्छा जरूर पैदा हुई होगी, पर उन्होंने उसे अपनें ऊपर कभी हावी होने नहीं दिया |',
		image: './assets/jeet.webp',
		price: 'Price : ₹400'
	},
	{
		title: 'Atomic Habits',
		description: 'If you can get 1% better each day for one year, you’ll end up 37 times better by the time you’re done.',
		image: './assets/images.jfif',
		price: 'Price : ₹800'
	},
	{
		title: 'युगद्रष्टा विवेकानन्द ',
		description: 'We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.',
		image: './assets/vivekanand.jpg',
		price: 'Price : ₹200'
	},
	{
		title: '21 Things Every Girl Should Know',
		description: "A daughter is a mother's gender partner, a part of herself that resembles her the most.",
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
