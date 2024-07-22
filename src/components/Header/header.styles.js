import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 10px 40px;
`;
const StyledLogoContainer = styled.div`
	font-size: 3rem;
	font-weight: 700;
`;
const Styledspan = styled.span`
	color: ${({ $color }) => $color};
`;
const StyledNav = styled.nav`
	font-size: 24px;
	display: flex;
	gap: 50px;
	align-items: center;
`;
const StyledHr = styled.hr`
	opacity: 0.2;
`;

export { StyledLogoContainer, Styledspan, StyledHeader, StyledNav, StyledHr };
