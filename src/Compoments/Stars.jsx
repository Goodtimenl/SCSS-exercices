import React, { useState } from 'react';
import styled from 'styled-components';

const StarContainer = styled.div`
  cursor: pointer;
  display: flex;
  
`;

const Star = styled.span`
  font-size: 1.5rem;
  color: ${({ filled }) => (filled ? '#ffd700' : '#ccc')};
  background-color: white;
`;

const Stars = () => {
	const [rating, setRating] = useState(0);

	const handleStarClick = (index) => {
		if (index === 1 || index === rating + 1) {
			setRating(index);
		}
	};

	return (
		<StarContainer>
			{[1, 2, 3, 4, 5].map((index) => (
				<Star
					key={index}
					filled={index <= rating}
					onClick={() => handleStarClick(index)}
				>
					{index <= rating ? '★' : '☆'}
				</Star>
			))}
		</StarContainer>
	);
};

export default Stars;