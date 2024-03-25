import React from "react";
import { useThemeContext } from "../../ContextApi/ThemeContext";
import styled, { keyframes } from "styled-components";
import Color from "../../Theme/Color";

const FeaturesSection = () => {
  const { darkMode } = useThemeContext();

  const featureData = [
    {
      title: "College",
      description: "Discover the best colleges for you.",
      image: "../src/assets/icons/college.png",
    },
    {
      title: "Exams",
      description: "Be ready before your exams.",
      image: "../src/assets/icons/exam.png",
    },
    {
      title: "News",
      description: "Stay updated with the latest news.",
      image: "../src/assets/icons/news.png",
    },
    {
      title: "Internships",
      description: "Find exciting internship opportunities.",
      image: "../src/assets/images/onlinePresentation.png",
    },
  ];

  const slideInLeft = keyframes`
    from {
      opacity: 0;
      transform: translateX(-50px); /* Move left 50px from the initial position */
    }
    to {
      opacity: 1;
      transform: translateX(0); /* Move back to the original position */
    }
  `;

  const slideInRight = keyframes`
    from {
      opacity: 0;
      transform: translateX(50px); /* Move right 50px from the initial position */
    }
    to {
      opacity: 1;
      transform: translateX(0); /* Move back to the original position */
    }
  `;

  const Container = styled.section`
    padding: 2rem 0;
    text-align: center;
  `;

  const CenteredContainer = styled.div`
    max-width: 1250px;
    margin: 0 auto;
  `;

  const FeatureCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    margin: 1rem;
    background-color: ${darkMode ? Color.dark.card : Color.light.card}; // Adjust card color based on darkMode
    color: ${darkMode ? Color.dark.text : Color.light.text}; // Adjust text color based on darkMode
    border-radius: 0.75rem;
    border: 1px solid ${darkMode ? Color.dark.card2 : Color.light.card2}; // Add border
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    animation: ${slideInLeft} 1s ease forwards; /* Define the animation */
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }

    &:nth-child(odd) {
      animation: ${slideInRight} 1s ease forwards; /* Define the animation for odd cards */
    }
  `;

  const FeatureImage = styled.img`
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 1rem;
  `;

  const FeatureTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  `;

  const FeatureDescription = styled.p`
    font-size: 1rem;
  `;

  return (
    <Container>
      <CenteredContainer>
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureData.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureImage src={feature.image} alt={feature.title} />
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </div>
      </CenteredContainer>
    </Container>
  );
};

export default FeaturesSection;
