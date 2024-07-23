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
const ProfileImageContainerMobile = styled.div`
	display: none;
	position: relative;
	margin-top: 20px;

	img {
		width: 600px;
		background-color: transparent;
	}
	@media only screen and (max-width: 500px) {
		display: flex;
		justify-content: center;
		margin: 0;
		padding: 0;

		border-radius: 50%;
		img {
			width: 250px;
			background-color: transparent;
			z-index: 2;
		}
		&::after {
			position: absolute;
			content: '';
			background-color: #141414;
			width: 250px;
			height: 250px;
			border-radius: 20%;
			box-shadow: 0px 0px 24px 8px rgba(255, 255, 255, 0.12);
		}
	}
`;
const AboutMeContainer = styled.div`
	width: 50%;
	text-align: justify;
	font-size: 18px;
	line-height: 1.8;

	@media only screen and (max-width: 500px) {
		width: 100%;
		h2 {
			text-align: center;
		}
		text-align: justify;
		padding: 20px;
		p {
			margin-top: 20px;
			font-weight: 200;
		}
	}
`;
const AboutMainContainer = styled.div`
	display: flex;
	gap: 20px;
	@media only screen and (max-width: 500px) {
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
	}
`;
const TechnologiesContainer = styled.div`
	display: flex;
	gap: 5px;
	width: 50%;
	flex-wrap: wrap;
	@media only screen and (max-width: 500px) {
		width: 100%;
		justify-content: center;
	}
`;
const ProyectContainer = styled.div`
	margin-bottom: 30px;
	@media only screen and (max-width: 500px) {
		text-align: center;
	}
`;
const ProyectContainerInfo = styled.div`
	display: flex;
	margin-bottom: 30px;
	gap: 40px;
	align-items: center;
	img {
		border-radius: 10px;
		margin-top: 10px;
		max-width: 50%;
	}
	@media only screen and (max-width: 500px) {
		flex-direction: column;
		text-align: center;
		justify-content: center;
		gap: 0;
		padding: 10px;
		p {
			text-align: justify;
		}
		img {
			max-width: 400px;
		}
	}
`;
const StyledButton = styled.button`
	background-color: #11ffb5;
	margin-top: 30px;
	padding: 10px;
	border-radius: 10px;
	color: black;
	border: none;
	font-size: 18px;
	a {
		background-color: transparent;
	}
	@media only screen and (max-width: 500px) {
		display: none;
	}
`;
const StyledButtonMobile = styled.button`
	background-color: #11ffb5;
	display: none;
	margin-top: 30px;
	padding: 10px;
	border-radius: 10px;
	color: black;
	border: none;
	font-size: 18px;
	a {
		background-color: transparent;
	}
	@media only screen and (max-width: 500px) {
		display: block;
		text-align: center;
	}
`;

export {
	InfoContainer,
	StyledP,
	StyledH2,
	RRSSNav,
	ProfileImageContainerDesktop,
	ProfileImageContainerMobile,
	AboutMeContainer,
	AboutMainContainer,
	TechnologiesContainer,
	ProyectContainer,
	ProyectContainerInfo,
	StyledButton,
	StyledButtonMobile
};
