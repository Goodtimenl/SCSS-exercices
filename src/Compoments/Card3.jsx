import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: white;
  border-radius: 8px;
  width: 300px; 
  height: 300px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 1rem;
`;

const IconContainer = styled.div`
display: flex;
flex-diretion: row;
justify-content:space-around;
align-items: center;
background-color: white;
width: 100%;
`;

const Artificial = styled.p`
font-size: 1rem;
background-color: rgb(112, 112, 255);
padding: 1rem;
border-radius: 50%;
Width : 15px;
margin-bottom: 1rem;
`;

const IconPoint = styled.div`
background: url('/public/point.png') no-repeat center center;
background-size: cover;
background-position: center;
background-size: contain; 
Width : 30px;
height: 30px;
`;

const RestContainer = styled.div`
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
margin-left: 20px;
border-radius: 40px;
`;


const EnabledBadge = styled.div`
  background-color: #34c759;
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 1rem;
  top: 10px;
  left: 10px;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  margin: 0.5rem 0;
  background-color: white;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  background-color: white;
`;

const Card3 = () => {
	return (
		<CardContainer>
			<IconContainer>
				<Artificial>AI</Artificial>
				<IconPoint></IconPoint>
			</IconContainer>
			<RestContainer>
				<EnabledBadge>HABILITADO</EnabledBadge>
				<Title>Valores predeterminados en formulario</Title>
				<Subtitle>Formulario de campos con valores predeterminados</Subtitle>
			</RestContainer>
		</CardContainer>
	);
};

export default Card3;