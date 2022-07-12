import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { ButtonWrapper, HeroSection, HeroText, HeroVideo } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" autoPlay muted loop="true" />
			<Container>
				<MainHeading>Come with yourself, go with a NEW self</MainHeading>
				<HeroText>
					We provide the best and quite environment for study.
				</HeroText>
				<ButtonWrapper>
					<Link to="contact">
						<Button>Get Started</Button>
					</Link>
					{/* <HeroButton>Find More</HeroButton> */}
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
