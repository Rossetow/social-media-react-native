import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import  Header  from './src/components/Header';
import Footer from './src/components/Footer'
import Feed from './src/screens/Feed'
import HeaderFeed from './src/components/HeaderFeed';

export interface UserData {
  id: string;
  username: string | null;
  avatar: string | null;
}

let idUser: number = 0

export const dataUser: UserData[] = [
  {
    id: (++idUser).toString(),
    username: 'Inter',
    avatar: 'https://imgs.search.brave.com/IhORH-oB4J_HExRA6gPM7zsMv8VbrJAOGt5Cpa6cki8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGV0aW1lcy5jb20v/dGltZXMvaW50ZXJu/YWNpb25hbC9sb2dv/LWludGVybmFjaW9u/YWwtNDA5Ni5wbmc',
  },
  {
    id: (++idUser).toString(),
    username: 'Microsoft',
    avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEX////yUCJ/ugAApO//uQDxOgBytADyShT2j3v/+/T/tAAAnO74+/R7uACpz3T0+f50wPTxMgD1hW//rgDwHABnrwDxQwD4s6ejzGgAle0Amu5ovPNVGgEPAAABAklEQVR4nO3biQnCQBRF0bhkceKWxGjU/vsUHKzgMyDh3AIenAJeVUmSJEmSJEmSJEmSJEmSpH/tVocaxu/KcW5CzQWF9SZU22Vhsw3VEBISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhKuSDi0oe4/4SlUSeHYxXpk4XIOtRQUSlL5LtHyzCFYQeGzD/V6Z+CUQk0Fhf0u1jUL0z5UIiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRckXD97zxJkiRJkiRJkiRJkiRJkhTrA29gzkcc3y0uAAAAAElFTkSuQmCC',
  },
  {
    id: (++idUser).toString(),
    username: 'Eletronic Arts',
    avatar: 'https://avatars.akamai.steamstatic.com/618cc2a46fad78ed1259df505c2de5bb4d806532_full.jpg',
  },
  {
    id: (++idUser).toString(),
    username: 'Random',
    avatar: 'https://source.unsplash.com/random',
  }

]

export interface PostData {
  idPost: string;
  username?: string | null;
  title?: string | null;
  avatar?: string | null;
  image?: string | null;
  likes: number | undefined;
  retweet: number | undefined;
  comments: number | undefined;
}

let idPost: number = 0;

export const dataPost: PostData[] = [
  {
    idPost: (++idPost).toString(),
    username: 'Inter',
    title: `Maior do Sul`,
    avatar: 'https://imgs.search.brave.com/IhORH-oB4J_HExRA6gPM7zsMv8VbrJAOGt5Cpa6cki8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGV0aW1lcy5jb20v/dGltZXMvaW50ZXJu/YWNpb25hbC9sb2dv/LWludGVybmFjaW9u/YWwtNDA5Ni5wbmc',
    image: `https://imgs.search.brave.com/0p47PAQix5lDQ23ZkjXcZ-SoelrPfjGSmPVpxoLCFqs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bXVuZG9wb3NpdGl2/by5jb20uYnIvd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMTIv/My1qb2dhZG9yZXMt/ZG8taW50ZXJuYWNp/b25hbC1xdWUtZXN0/YW8tbmEtbWlyYS1k/ZS1vdXRyb3MtY2x1/YmVzLWRhLXNlcmll/LWEtMS5qcGc`,
    likes:157,
    retweet: 24,
    comments: 8,

  }, {
    idPost: (++idPost).toString(),
    username: 'Microsoft',
    title: `Exemplo de Microsoft`,
    avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEX////yUCJ/ugAApO//uQDxOgBytADyShT2j3v/+/T/tAAAnO74+/R7uACpz3T0+f50wPTxMgD1hW//rgDwHABnrwDxQwD4s6ejzGgAle0Amu5ovPNVGgEPAAABAklEQVR4nO3biQnCQBRF0bhkceKWxGjU/vsUHKzgMyDh3AIenAJeVUmSJEmSJEmSJEmSJEmSpH/tVocaxu/KcW5CzQWF9SZU22Vhsw3VEBISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhKuSDi0oe4/4SlUSeHYxXpk4XIOtRQUSlL5LtHyzCFYQeGzD/V6Z+CUQk0Fhf0u1jUL0z5UIiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRckXD97zxJkiRJkiRJkiRJkiRJkhTrA29gzkcc3y0uAAAAAElFTkSuQmCC',
    image: `https://99prod.s3.amazonaws.com/uploads/b5a3b4af-f9e8-40db-9e5e-576791aa5307/microsoft.png`,
    likes:6,
    retweet: 9,
    comments: 100,

  },
  {
  idPost: (++idPost).toString(),
  username: 'Electronic Arts',
  title: `EA FC 24`,
  avatar: 'https://avatars.akamai.steamstatic.com/618cc2a46fad78ed1259df505c2de5bb4d806532_full.jpg',
  image: `https://flowgames.gg/wp-content/uploads/2023/07/F0SxUnrX0AEpvjR-1044x587.jpg`,
  likes:1,
  retweet: 4,
  comments: 0,
  },
   {
  idPost: (++idPost).toString(),
  username: 'Random',
  title: `Aleatorio`,
  avatar: 'https://source.unsplash.com/random',
  image: `https://source.unsplash.com/random`,
  likes:5,
  retweet: 10,
  comments: 6,
  }
]


export default function App(){
  return(
    <View>
      <View>
        <HeaderFeed
          user = {dataUser[0]}
        />
      </View>
      <FlatList
      data={dataPost}
      renderItem={({ item }) => (
        <Feed
        posts={item}
        />
      )}
      keyExtractor={(item) => item.idPost}/>
    </View>
  )
}


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <Footer/>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
