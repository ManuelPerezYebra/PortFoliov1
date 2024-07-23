import { StyledHr, Styledspan } from '../Header/header.styles';
import { RrssButton } from '../rrssButton/RrssButton';
import TechnologyContainer from '../technologiesContainer/TechnologyContainer';
import {
	AboutMainContainer,
	AboutMeContainer,
	InfoContainer,
	ProfileImageContainerDesktop,
	ProfileImageContainerMobile,
	RRSSNav,
	StyledH2,
	StyledP,
	TechnologiesContainer
} from './mainContainer.styles';

export const MainContainer = () => {
	return (
		<>
			<InfoContainer>
				<ProfileImageContainerDesktop>
					<img src='/Profile-img-2.png' alt='' />
				</ProfileImageContainerDesktop>
				<StyledP $color='#11FFB5' $size='34px' $weight='700'>
					✌️ Hola!, Soy-
				</StyledP>
				<StyledH2
					$color='white'
					$size='133px'
					$weight='900'
					$mt='10px'
					$mb='10px'
				>
					Manuel Pérez
				</StyledH2>
				<StyledH2 $color='white' $size='34px' $weight='400' $mt='0px' $mb='0px'>
					Full Stack Web Developer,
				</StyledH2>
				<StyledH2
					$color='#8E9094'
					$size='34px'
					$weight='300'
					$mt='0px'
					$mb='60px'
				>
					Máster realizado en Trazos, Madrid. <br /> Diseñador UI UX con figma
				</StyledH2>
				<StyledP $color='#8E9094' $size='22px' $weight='400'>
					🚀 Especializado en Forntend (ReactJS)
				</StyledP>
				<StyledP $color='#8E9094' $size='22px' $weight='400'>
					⚡️ Experiencia en Figma y Adobe Photoshop
				</StyledP>
			</InfoContainer>
			<RRSSNav>
				<RrssButton
					iconSrc='/github-mark.svg'
					text='Github'
					href='https://github.com/ManuelPerezYebra'
				/>
				<RrssButton
					iconSrc='/icons8-linkedin.svg'
					text='Linkedin'
					href='https://www.linkedin.com/in/manuel-perez-yebra'
				/>
				<RrssButton
					iconSrc='/icons8-email-64.png'
					text='Email'
					href="mailto:'manuelperezyebra@gmail.com'"
				/>
			</RRSSNav>

			<StyledHr />

			<h2>⚡️ Sobre Mi</h2>
			<AboutMainContainer>
				<AboutMeContainer>
					<ProfileImageContainerMobile>
						<img src='/Profile-img-2.png' alt='' />
					</ProfileImageContainerMobile>
					<p>
						Desde mi infancia, la{' '}
						<Styledspan $color='#11FFB5' $weight='400'>
							tecnología
						</Styledspan>{' '}
						ha sido mi principal fuente de inspiración y motivación.
						Actualmente, como{' '}
						<Styledspan $color='#11FFB5' $weight='400'>
							{' '}
							desarrollador web
						</Styledspan>
						, encuentro un profundo sentido de satisfacción en la creación de
						soluciones digitales innovadoras. Mi compromiso con el{' '}
						<Styledspan $color='#11FFB5' $weight='400'>
							aprendizaje continuo
						</Styledspan>{' '}
						y mi pasión por la{' '}
						<Styledspan $color='#11FFB5' $weight='400'>
							excelencia
						</Styledspan>{' '}
						me impulsan a seguir avanzando en mi carrera. Estoy ansioso por
						abrazar nuevos{' '}
						<Styledspan $color='#11FFB5' $weight='400'>
							desafios
						</Styledspan>{' '}
						y contribuir al avance de la industria tecnológica con determinación
						y profesionalismo.
					</p>
				</AboutMeContainer>
				<TechnologiesContainer>
					<TechnologyContainer
						src='
					https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg'
						text='HTML'
					/>
					<TechnologyContainer
						src='
					https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg'
						text='CSS3'
					/>
					<TechnologyContainer
						src='
					https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg'
						text='JavaScript'
					/>
					<TechnologyContainer
						src='
					https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
						text='ReactJs'
					/>
					<TechnologyContainer
						src='
					https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg'
						text='NodeJs'
					/>
					<TechnologyContainer
						src='
					https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'
						text='MongoDB'
					/>
					<TechnologyContainer
						src='
					https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg'
						text='Firebase'
					/>
					<TechnologyContainer
						src='
					https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
						text='Git'
					/>
					<TechnologyContainer
						src='
						https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'
						text='Figma'
					/>
				</TechnologiesContainer>
			</AboutMainContainer>
		</>
	);
};
