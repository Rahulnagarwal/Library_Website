import React from 'react';
import { Content } from '../components/Content/Content';
import { heroThree } from '../data/HeroData';

function SignUp() {
	return (
		<>
			<Content {...heroThree} />
			{/* <Form /> */}
		</>
	);
}

export default SignUp;
