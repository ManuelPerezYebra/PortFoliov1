import { StyledContainer } from './TechnologyContainer.styles';

const TechnologyContainer = ({ src, text }) => {
	return (
		<StyledContainer>
			<img src={src} />

			<p>{text}</p>
		</StyledContainer>
	);
};

export default TechnologyContainer;
