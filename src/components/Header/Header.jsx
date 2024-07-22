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
					<a href=''>Inicio</a>
					<a href=''>Proyectos</a>
					<a href=''>Contacto</a>
				</StyledNav>
			</StyledHeader>
			<StyledHr />
		</>
	);
};
