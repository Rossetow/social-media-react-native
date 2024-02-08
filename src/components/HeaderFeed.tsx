import { FC } from "react";
import { UserData } from "../../App";
import { View, Image } from "react-native";
import { Entypo } from '@expo/vector-icons';
import styled from "styled-components/native";
interface Props {
    user: UserData;
}

const ContainerHeaderFeed = styled.View`
    display: flex;
    flex-direction: row;
    background-color: #000009;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    margin-bottom: 1px;
`
const Avatar = styled.Image`
height: 5vh;
width:5vh;
border-radius: 100%
`

const HeaderFeed : FC<Props> = ({user}) =>{
    console.log(user)
   return(
    <ContainerHeaderFeed>
        <View>
            <Entypo name="menu" size={34} color="white" />        
        </View>
        <View>
            <Avatar source = {{uri: user.avatar || 'https://www.petz.com.br/blog/wp-content/uploads/2022/06/animais-selvagens-3.jpg'}}/>
        </View>
    </ContainerHeaderFeed>
   ) 
}

export default HeaderFeed