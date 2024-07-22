// Header.js
import {
	StyledHeader,
	StyledHr,
	StyledLogoContainer,
	StyledNav,
	Styledspan
} from './header.styles';

export const Header = () => {
	return (
		<>
			<StyledHeader>
				<StyledLogoContainer>
					<Styledspan $color='#8F9094'>{'{'}</Styledspan>M
					<Styledspan $color='#8F9094'>{'}'}</Styledspan>
				</StyledLogoContainer>
				<StyledNav>
					<a href=''>Home</a>
					<a href=''>Projects</a>
					<a href=''>Contact</a>
				</StyledNav>
			</StyledHeader>
			<StyledHr />
		</>
	);
};
