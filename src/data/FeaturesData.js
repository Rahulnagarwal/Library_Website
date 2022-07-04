
import { BiRupee, BiWifi } from 'react-icons/bi';
import { FcBusinesswoman, FcCalendar, FcPlus } from 'react-icons/fc';
import { IoIosBook } from 'react-icons/io';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Specifically for girls',
		description: 'We offer the best safe and secure environments for girls.',
		icon: iconStyle(FcBusinesswoman),
		imgClass: 'one',
	},
	{
		name: 'Unlimited WIFI',
		description: 'Our library has FAST and FREE internet to help in studies.',
		icon: iconStyle(BiWifi),
		imgClass: 'two',
	},
	{
		name: 'Books',
		description: 'International Bestseller and inspirational books are FREE to read.',
		icon: iconStyle(IoIosBook),
		imgClass: 'three',
	},
	{
		name: '12/7 Open',
		description: 'Our team is available at all times in case you need us.',
		icon: iconStyle(FcCalendar),
		imgClass: 'four',
	},
	{
		name: 'Price',
		description: 'We offer the affordable price.',
		icon: iconStyle(BiRupee),
		imgClass: 'five',
	},
	{
		name: 'Others',
		description:
			'All time electricity, RO Water, Bhaskar and The Hindu(digitally).',
		icon: iconStyle(FcPlus),
		imgClass: 'six',
	},
];
