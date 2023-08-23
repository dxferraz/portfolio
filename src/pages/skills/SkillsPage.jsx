import React from 'react'
import { styled } from 'styled-components'
import Colors from '../../constants/colors/Colors'
import Title from '../../components/title/Title'
import MediumText from '../../components/text-medium/MediumText'
import AnimatedPage from '../../animations/transitions/PageTransition'

const SkillsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
`

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 500px;
  gap: 20px;
`

// excess height to improve interactive area / accessibility
const height = "16px";
const thumbHeight = 16;
const trackHeight = "16px";

// colours
const upperColor = "black";
const lowerColor = "blue";
const thumbColor = "red";
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;

const Range = styled.input.attrs({type: "range"})`
  -webkit-appearance: none;
  appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 12px;
  border-radius: 40px;
  background: ${(props) =>
    `linear-gradient(to right, #ff9800 0%, #ff9800 ${props.value}%, #fff ${props.value}%, #fff 100%);`};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
    
  }

  ::-moz-range-thumb {
    width: 24px;
    height: 24px;
    -moz-appearance: none;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }
`

function SkillsPage() {
  var skills = [
    {
      name: 'HTML',
      level: 20,
    },
    {
      name: 'CSS',
      level: 30,
    },
    {
      name: 'Javascript',
      level: 40,
    },
    {
      name: 'Git',
      level: 50,
    },
    {
      name: 'NPM',
      level: 60,
    },
    {
      name: 'React',
      level: 70,
    },
    {
      name: 'Tailwind',
      level: 80,
    },
    {
      name: 'Vite',
      level: 90,
    },
    {
      name: 'GraphQL',
      level: 100,
    }
  ];
  return (
    <AnimatedPage>
      <SkillsPageContainer>
        <div>
          <Title>Habilidades em Destaque</Title>
          <MediumText>Bem-vindo à seção de Habilidades em Destaque! Aqui você pode ver algumas das coisas que sou capaz de fazer. Vamos dar uma olhada nas minhas habilidades:</MediumText>
          <SkillsContainer>
            <h3>HTML</h3>
            <Range type="range" min="0" max="100" value={skills.find(item => item.name === 'HTML').level}  />
            <br />
            <h1>CSS</h1>
            <Range type="range" min="0" max="100" value={skills.find(item => item.name === 'CSS').level} draggable="false" />
            <br />
            <h1>Javascript</h1>
            <Range type="range" min="0" max="100" value={skills.find(item => item.name === 'Javascript').level} draggable="false" />
            <br />
            <h1>Git</h1>
            <Range type="range" min="0" max="100" value={skills.find(item => item.name === 'Git').level} draggable="false" />
            <br />
            <h1>NPM</h1>
            <Range type="range" min="0" max="100" value={skills.find(item => item.name === 'NPM').level} draggable="false" />
            <br />
            <h1>React</h1>
            <Range type="range" min="0" max="100" value={skills.find(item => item.name === 'React').level} draggable="false" />
            <br />
            <h1>Tailwind</h1>
            <Range type="range" min="0" max="100" value={skills.find(item => item.name === 'Tailwind').level} draggable="false" />
            <br />
            <h1>Vite</h1>
            <Range type="range" min="0" max="100" value={skills.find(item => item.name === 'Vite').level} draggable="false" />
            <br />
            <h1>GraphQL</h1>
            <Range type="range" min="0" max="100" value={skills.find(item => item.name === 'GraphQL').level} draggable="false" />
            <br />
          </SkillsContainer>
        </div>
      </SkillsPageContainer>
    </AnimatedPage>
  )
}

export default SkillsPage