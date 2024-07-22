import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 10px 40px;
	@media only screen and (max-width: 500px) {
		padding: 5px 20px;
	}
`;
const StyledLogoContainer = styled.div`
	font-size: 3rem;
	font-weight: 700;
	@media only screen and (max-width: 500px) {
		font-size: 2rem;
		font-weight: 700;
	}
`;
const Styledspan = styled.span`
	color: ${({ $color }) => $color};
	font-weight: ${({ $weight }) => $weight};
`;
const StyledNav = styled.nav`
	font-size: 24px;
	display: flex;
	gap: 50px;
	align-items: center;
	@media only screen and (max-width: 500px) {
		font-size: 1rem;
		gap: 20px;
	}
`;
const StyledHr = styled.hr`
	opacity: 0.2;
`;

export { StyledLogoContainer, Styledspan, StyledHeader, StyledNav, StyledHr };
