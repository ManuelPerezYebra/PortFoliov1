import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	box-shadow: 0px 0px 16px 0px rgba(250, 250, 250, 0.05);
	gap: 20px;
	width: 180px;
	height: 80px;
	border-radius: 10px;
	padding: 5px;
	align-items: center;
	transition: 0.5s ease all;
	transform: scale(1);

	img {
		max-width: 50px;
	}
	&:hover {
		transition: 0.5s ease all;
		transform: scale(1.1);
	}
`;

export { StyledContainer };
