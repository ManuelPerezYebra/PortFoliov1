import { ButtonContainer } from './rrssButton.styles';

export const RrssButton = ({ iconSrc, text, href }) => {
	return (
		<a href={href} style={{ textDecoration: 'none' }}>
			<ButtonContainer>
				{iconSrc && <img src={iconSrc} alt={text} />}
				<p>{text}</p>
			</ButtonContainer>
		</a>
	);
};
