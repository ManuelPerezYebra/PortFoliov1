import styled from 'styled-components';

const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	background: #141414;
	border-radius: 5px;
	cursor: pointer;
	text-decoration: none;
	color: white;
	width: 120px;
	text-align: center;
	justify-content: center;

	img {
		width: 24px;
		height: 24px;
		margin-right: 8px;
	}

	&:hover {
		background: #ddd;
	}
`;
export { ButtonContainer };
