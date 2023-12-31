import { useGlobalSearchParams } from "expo-router";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import caique from "../../assets/imgs/caique.jpg";

import Comentarios from "../../components/Comentario";
import About from "../../components/About";
import ArtigoPost from "../../components/ArtigoPost";

import { posts } from "../../data/postList";
import ListaPosts from "../../components/ListaPosts";

const { width, height } = Dimensions.get("screen");




export default function Post() {
  const {
    id,
    titulo,
    subTitulo,
    capa,
    autor,
    data,
    likes,
    categoria,
    texto,
    item,
  } = useGlobalSearchParams();

  const postId = parseInt(id, 10);
  const post = posts.find((post) => post.id === postId);


  if (!post) {
    console.log("Posts:", post);
    return <Text>Post não encontrado</Text>;
  }

  const comentarios = post.comentario;

  function postsSemelhantes(categoria) {
    return posts.filter((post) => post.categoria === categoria && post.id !== id);
  }
  
  function PostsSemelhantes({ categoria }) {
    const postsSimilares = postsSemelhantes(categoria);
  
    return (
      <View>
        {postsSimilares.map((post) => (
          <ListaPosts key={post.id} {...post} />
        ))}
      </View>
    );
  }

  

  return (
    <>
      <ScrollView style={styles.container}>
        <ArtigoPost
          titulo={titulo}
          subTitulo={subTitulo}
          capa={capa}
          autor={autor}
          data={data}
          likes={likes}
          texto={texto}
          categoria={categoria}
        />
        <View style={styles.outrosPosts}>
          <Text style={styles.h2}>posts recentes</Text>
          <PostsSemelhantes categoria={categoria} />

        </View>

        <View style={styles.comentarios}>
          <Text style={styles.h2}>comentarios</Text>
          {comentarios &&
            comentarios.map((item, index) => (
              <Comentarios
                key={index}
                nome={item.nome}
                comentario={item.texto}
                likes={item.likes}
              />
            ))}
        </View>

        <About
          foto={caique}
          nome="Caique Nerivan"
          sobre="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    width: width,
    backgroundColor: "#F6F6ED",
  },
  comentarios: {
    marginHorizontal: 20,
    paddingVertical: 20,
  },

  h2: {
    fontSize: 20,
    textTransform: "lowercase",
    color: "#5B4200",
    fontFamily: "Roboto_700Bold",
    paddingVertical: 10,
  },

  outrosPosts: {
    marginHorizontal: 20,
    paddingVertical: 20,
  },
});
