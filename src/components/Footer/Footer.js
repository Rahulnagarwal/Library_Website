import { footerData, footerSocialData } from '../../data/FooterData';
import { Row, Section } from '../../globalStyles';
import {
	FooterAddress,
	FooterColumn,
	FooterGrid, FooterLink, FooterLinkItems,
	FooterLinkTitle, FooterLogo, FooterRights,
	FooterSocialIcon,
	FooterWrapper, SocialIcon
} from './FooterStyles';

function Footer() {
	return (
		<Section padding="4rem 0 2rem 0">
			<FooterWrapper>
				<FooterGrid justify="space-between">
					<FooterColumn id="footerLogo">
						<FooterLogo to="/">
							<SocialIcon src="./assets/logo.png" />
							Nagarwal Library
						</FooterLogo>
						<FooterAddress>
							64, Jawahar colony, Ramgarh road, Street no. 4, Mahwa Dausa Rajasthan , 321608
						</FooterAddress>

						<Row align="center" margin="auto  0 0 0" gap="1rem">
							{footerSocialData.map((social, index) => (
								<FooterSocialIcon
									key={index}
									href="/"
									target="_blank"
									aria-label={social.name}
								>
									{social.icon}
								</FooterSocialIcon>
							))}
						</Row>
					</FooterColumn>
					{footerData.map((footerItem, index) => (
						<FooterLinkItems key={index}>
							<FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
							{footerItem.links.map((link, linkIndex) => (
								<FooterLink key={linkIndex} to="/">
									{link}
								</FooterLink>
							))}
						</FooterLinkItems>
					))}
				</FooterGrid>
				<FooterRights>Nagarwal © 2022</FooterRights>
			</FooterWrapper>
		</Section>
	);
}

export default Footer;
