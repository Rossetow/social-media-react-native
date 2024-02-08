import { FC } from "react";
import { View } from "react-native";
import Header  from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { PostData, dataUser } from "../../App";
import styled from "styled-components/native";

interface Props {
  posts: PostData|null
}

const Container = styled.View`
background-color: #000009;
align-items: center;
justify-content: center;
max-height: 100vh;
width: 100vw;
self-align: center;
padding: 10px;
`;

const PostContainer = styled.View`
margin: 20px 20px;
width: 100%;
height: 40vh;
background-color: #464F51;
align-items: center;
padding: 15px;
border-radius: 19px;
`

const Feed: FC<Props> = ({
    posts
}) => {
    if(!posts){
        return
    }
    return(
        <Container>
            <PostContainer>
                <Header
                avatar={posts.avatar!}
                username={posts.username!}
                />

                <Content
                title={posts.title!}
                image={posts.image!}
                />

                <Footer
                post={posts}
                />
            </PostContainer>
        </Container>
    )
}

export default Feed