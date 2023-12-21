import React from 'react';
import styled from 'styled-components';
import '../Css/Card1.css'
import Stars from './Stars';

const StyledCard = styled.div`
background: white;
border-radius: 4px;
margin-left: 1rem;
width: 350px;
box-shadow: 0 2px 5px rgba(0,0,0,0.1);
display: flex;
flex-direction: column;
`;

const CardImage = styled.div`
background: url('/public/legendary-duck-epic-744447428.png') no-repeat center center;
background-size: cover;
height: 200px; 
width: 100%;
margin-bottom: 20px;
`;

const Title = styled.h2`
background-color: white;
font-size: 1.5em;
margin-bottom: 5px;
padding-left: 10px;
`;

const RatingContainer = styled.div`
padding-left: 10px;
height: 20px;
background-color: white;
display: flex;
align-items: center;
margin-bottom: 10px;
`;

// const Stars = styled.div`
// background-color: white;
// color: #ffd700; 
// `;

const RatingValue = styled.span`
background-color: white;
font-size: 0.8em;
padding-left: 10px;
color: #999;
margin-left: 5px;
`;

const SecondaryText = styled.h4`
background-color: white;
font-size: 1.2em;
font-weight: light;
color: black;
margin-bottom: 3px;
padding-left: 10px;
`;

const StyleBar = styled.div`
background-color: white;
display:flex;
align-items: center;
justify-content:center;
`;

const Bar = styled.hr`
border: 0;
width: 90%;
height: 1px;
background-color: lightgrey; 
margin: 0.5em 0;
`;

const Subtitle = styled.p`
background-color: white;
font-size: 1em;
color: #333;
margin-bottom: 3px;
padding-left: 10px;
width: 95%;
`;

const ActionGroup = styled.div`
background-color: white;
display: flex;
justify-content: space-between;
margin-top: 2px;
padding: 20px;
`;

const ActionSubtitle = styled.h3`
background-color: white;
padding-left: 10px;
margin-bottom:0px;
`;

const ActionButton = styled.button`
background: lightgrey;
border: 1px solid #ccc;
padding: 5px 15px;
cursor: pointer;
border-radius: 15px;
`;

const ActionGroup2 = styled.div`
background: white;
padding: 5px 10px;
cursor: pointer;
margin-bottom: 2rem;
`;


const ItemButton = styled.button`
color:purple;
font-size: 1rem;
font-weight:bold;
background-color:white;
border: 0px solid white;
padding: 5px 10px;
cursor: pointer;
`;



// Composant Card
const Card1 = ({ title, secondaryText, subtitle }) => {
	return (
		<StyledCard>
			<CardImage />
			<Title>Title</Title>
			<RatingContainer>
				<Stars> <Stars /> </Stars>
				<RatingValue>4.5 (413)</RatingValue>
			</RatingContainer>
			<SecondaryText>Secondary text</SecondaryText>
			<Subtitle>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, architecto?</Subtitle>
			<StyleBar>
				<Bar />
			</StyleBar>
			<ActionSubtitle>Subtitle</ActionSubtitle>
			<ActionGroup>
				<ActionButton>Item 1</ActionButton>
				<ActionButton>Item 2</ActionButton>
				<ActionButton>Item 3</ActionButton>
				<ActionButton>Item 4</ActionButton>
			</ActionGroup>
			<ActionGroup2>
				<ItemButton>ACTION 1</ItemButton>
			</ActionGroup2>
		</StyledCard>
	);
};

export default Card1;