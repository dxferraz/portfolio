import React from 'react'
import { styled } from 'styled-components'
import Icon from '../icon/Icon'
import Colors from '../../constants/colors/Colors'
import Subtitle from '../subtitle/Subtitle'
import SmallText from '../text-small/SmallText'

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  padding: 20px 20px;
  background-color: white;
  border-radius: 20px;
  transition: 500ms;
  &:hover {
      transform: scale(1.1);
  }
`

const SkillsRow = styled.tr`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

const IconContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
`

const Content = styled.div`
    color: ${Colors.dark_grey};
    margin: 0;
`

function Skills() {
    return (
        <SkillsSection>
            {/* fazer uma tabela com duas linhas e tres colunas */}
            <SkillsRow>
                <td>
                    <SkillContainer>
                        <IconContainer><Icon name="Flutter" /></IconContainer>
                        <Content>
                            <Subtitle>Flutter</Subtitle>
                            <SmallText>
                                Framework de desenvolvimento de aplicativos móveis
                            </SmallText>
                        </Content>
                    </SkillContainer>
                </td>
                <td>
                    <SkillContainer>
                        <IconContainer><Icon name="Flutter" /></IconContainer>
                        <Content>
                            <Subtitle>Flutter</Subtitle>
                            <SmallText>
                                Framework de desenvolvimento de aplicativos móveis
                            </SmallText>
                        </Content>
                    </SkillContainer>
                </td>
                <td>
                    <SkillContainer>
                        <IconContainer><Icon name="Flutter" /></IconContainer>
                        <Content>
                            <Subtitle>Flutter</Subtitle>
                            <SmallText>
                                Framework de desenvolvimento de aplicativos móveis
                            </SmallText>
                        </Content>
                    </SkillContainer>
                </td>
            </SkillsRow>
            <SkillsRow>
                <td>
                    <SkillContainer>
                        <IconContainer><Icon name="Flutter" /></IconContainer>
                        <Content>
                            <Subtitle>Flutter</Subtitle>
                            <SmallText>
                                Framework de desenvolvimento de aplicativos móveis
                            </SmallText>
                        </Content>
                    </SkillContainer>
                </td>
                <td>
                    <SkillContainer>
                        <IconContainer><Icon name="Flutter" /></IconContainer>
                        <Content>
                            <Subtitle>Flutter</Subtitle>
                            <SmallText>
                                Framework de desenvolvimento de aplicativos móveis
                            </SmallText>
                        </Content>
                    </SkillContainer>
                </td>
                <td>
                    <SkillContainer>
                        <IconContainer><Icon name="Flutter" /></IconContainer>
                        <Content>
                            <Subtitle>Flutter</Subtitle>
                            <SmallText>
                                Framework de desenvolvimento de aplicativos móveis
                            </SmallText>
                        </Content>
                    </SkillContainer>
                </td>
            </SkillsRow>
        </SkillsSection>
    )
}

export default Skills