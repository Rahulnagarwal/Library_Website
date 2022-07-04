import { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { data, sliderSettings } from '../../data/CarouselData';
import { Heading, Row, Section, TextWrapper } from '../../globalStyles';
import {
	ButtonContainer, CardButton, CarouselImage, ImageWrapper, ReviewSlider
} from './CarouselStyles';

const Carousel = () => {
	const [sliderRef, setSliderRef] = useState(null);

	return (
		<Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
			<Row justify="space-between" margin="1rem" wrap="wrap">
				<Heading width="auto" inverse>
					Books we provide for reading
				</Heading>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
						<FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>

			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{data.map((el, index) => (
					<ImageWrapper key={index}>
						<CarouselImage src={el.image} />
						<TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
							{el.title}
						</TextWrapper>
						<TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
							{el.description}
						</TextWrapper>
						<CardButton>{el.price}</CardButton>
					</ImageWrapper>
				))}
			</ReviewSlider>
		</Section>
	);
};

export default Carousel;
