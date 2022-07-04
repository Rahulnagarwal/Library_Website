import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import { pricingData } from '../../data/PricingData';
import { Button, Heading, TextWrapper } from '../../globalStyles';
import {
	PricingCard, PricingCardCost, PricingCardFeature, PricingCardFeatures, PricingCardInfo,
	PricingCardPlan, PricingCardText, PricingContainer, PricingSection,
	PricingWrapper
} from './PricingStyles';

function Pricing() {
	return (
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
			<PricingSection id="pricing">
				<PricingWrapper>
					<Heading>Pick Your Best Option</Heading>

					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
						Read the way you like it.
					</TextWrapper>
					<PricingContainer>
						{pricingData.map((card, index) => (
							<PricingCard key={index}>
								<PricingCardInfo>
									<PricingCardPlan>{card.title}</PricingCardPlan>
									<PricingCardCost>{card.price}</PricingCardCost>
									<PricingCardText>{card.description}</PricingCardText>
									<PricingCardFeatures>
										{card.features.map((feature, index) => (
											<PricingCardFeature key={index}>
												{feature}
											</PricingCardFeature>
										))}
									</PricingCardFeatures>
									<div style={{ marginLeft: "12%" }}>
										<Link to="/">
											<Button>Get Started</Button>
										</Link>
									</div>
									{/* <a href="tel:+91-8618962720">555-555-1212</a> */}
								</PricingCardInfo>
							</PricingCard>
						))}
					</PricingContainer>
				</PricingWrapper>
			</PricingSection>
		</IconContext.Provider>
	);
}
export default Pricing;
