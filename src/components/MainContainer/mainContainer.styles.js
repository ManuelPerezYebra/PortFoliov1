import styled from 'styled-components';

const InfoContainer = styled.div`
	position: relative;
	p {
		color: ${({ $color }) => $color};
	}
	margin-bottom: 40px;
	margin-top: 120px;
	@media only screen and (max-width: 500px) {
		margin-bottom: 20px;
		margin-top: 10px;
		padding: 5px;
	}
`;
const StyledP = styled.p`
	color: ${({ $color }) => $color};
	font-size: ${({ $size }) => $size};
	font-weight: ${({ $weight }) => $weight};
	margin: 5px;
	@media only screen and (max-width: 500px) {
		font-size: ${({ $size }) => `calc(${$size} / 1.2)`};
	}
`;
const StyledH2 = styled.h2`
	color: ${({ $color }) => $color};
	font-size: ${({ $size }) => $size};
	font-weight: ${({ $weight }) => $weight};
	margin-top: ${({ $mt }) => $mt};
	margin-bottom: ${({ $mb }) => $mb};
	@media only screen and (max-width: 500px) {
		font-size: ${({ $size }) => `calc(${$size} / 2.3)`};
		margin-top: ${({ $mt }) => `calc(${$mt} / 2)`};
		margin-bottom: ${({ $mb }) => `calc(${$mb} / 2)`};
	}
`;
const RRSSNav = styled.nav`
	display: flex;
	gap: 10px;
	z-index: 2;
	@media only screen and (max-width: 500px) {
		margin-top: 20px;
		justify-content: center;
	}
`;
const ProfileImageContainerDesktop = styled.div`
	position: absolute;
	right: -70px;
	background-color: transparent;
	top: 0px;
	z-index: 1;

	img {
		width: 600px;
		background-color: transparent;
	}
	@media only screen and (max-width: 500px) {
		display: none;
	}
`;

export {
	InfoContainer,
	StyledP,
	StyledH2,
	RRSSNav,
	ProfileImageContainerDesktop
};
