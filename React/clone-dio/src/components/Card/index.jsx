import React from 'react'
import {CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo,  UserPicture} from './styles'
import { FiThumbsUp } from 'react-icons/fi'
import profileImage from '../../assets/profile-pic.png'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://media.licdn.com/dms/image/v2/D4D16AQFNBl9G3r4ZsQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1722608104167?e=1733961600&v=beta&t=JP_oi3THLCPoulaknWuOaNgNb2YHDEGD-i-gUhYxkks'/>
        <Content>
            <UserInfo>
                <UserPicture src={profileImage}/>
                <div>
                    <h4>Jose Vinicio</h4>
                    <p>Há 1h</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Poke Fav com HTML,CSS e JS</h4>
                <p>Projeto feito para aplicar o aprendizado sobre API... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }
