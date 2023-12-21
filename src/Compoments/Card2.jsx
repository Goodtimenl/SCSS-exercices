import React from 'react';
import styled from 'styled-components';
import Stars from './Stars';

const CardContainer = styled.div`
background-color: white;
border-radius: 8px;
overflow: hidden;
margin: 1rem;
width: 100%;
height: 300px;
max-width: 500px;
border-radius: 10px;
box-shadow: 0 2px 5px rgba(0,0,0,0.1);
display: column;
flex-direction: row; 
align-items: center; 
`;

const InfoContainer = styled.div`
background-color: white;
display:flex;
flex-direction: row;
`;

const AlbumArt = styled.div`
margin-top: 0;
margin-left: 0;
background: url('/public/legendary-duck-epic-744447428.png') no-repeat center center;
background-size: cover;
height: 180px;
width: 180px;
`;

const InfoChildContainer = styled.div`
background-color: white;
width: 70%;
height: 180px;
border-bottom: 1px solid lightgrey;
margin-right: 0px;
`;


const AlbumTitle = styled.h2`
margin-left: 20px;
font-size: 2rem;
font-weight: light;
margin- left: 20px;;
background-color: white;
`;

const AlbumDetails = styled.p`
margin-left: 20px;
font-size: 1.5rem;
color: #666;
background-color: white;
`;



const RatingContainer = styled.div`
background-color: white;
display:flex;
flex-direction: row;
justify-content: space-around;
align-items:center;
width: 90%;
height: 120px;
`;

const RateAlbumButton = styled.button`
background-color: white;
border: none;
color: lightgrey;
cursor: pointer;
padding: 0.5rem 0;
font-size: 1.5rem;
`;

const StarsWrapper = styled.div`
display:flex;
justify-content: center;
background-color: white;
`;


// Make sure to pass the necessary props if you want to make it dynamic
const Card2 = () => {
	return (
		<CardContainer>
			<InfoContainer>
				<AlbumArt />
				<InfoChildContainer>
					<AlbumTitle>Coincoing</AlbumTitle>
					<AlbumDetails>Ducky under Water(2016)</AlbumDetails>
				</InfoChildContainer>
			</InfoContainer>
			<RatingContainer>
				<RateAlbumButton>Rate this album</RateAlbumButton>
				<StarsWrapper>
					<Stars count={5} />
				</StarsWrapper>
			</RatingContainer>
		</CardContainer>
	);
};

export default Card2;