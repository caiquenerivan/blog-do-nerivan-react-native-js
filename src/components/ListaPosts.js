import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function ListaPosts({ ...item }) {
  return (
    <View>
      <Link
        href={{
          pathname: `/post/${item.id}`,
          params: {
            id: item.id,
            titulo: item.titulo,
            subTitulo: item.subTitulo,
            capa: item.capa,
            texto:item.texto,
            categoria: item.categoria,
            data: item.data,
            likes: item.likes,
            autor: item.autor,
            textoComentario: item.comentario.texto,
            likesComentario: item.comentario.likes,
            comentario: item.comentario.texto,

          },
        }}
        asChild
      >
        <Pressable style={styles.post}>
          <Image source={item.capa} style={styles.imagem} />
          <View style={styles.textosPost}>
            <Text
              adjustsFontSizeToFit
              numberOfLines={2}
              style={styles.tituloPost}
            >
              {item.titulo}
            </Text>
            <Text numberOfLines={2} style={styles.subTituloPost}>
              {item.subTitulo}
            </Text>
            <Text numberOfLines={1} style={styles.autorPost}>
              Por {item.autor}
            </Text>
            <Text numberOfLines={2} style={styles.dataPost}>
              Postado em {item.data}
            </Text>
          </View>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    height: 160,
    paddingVertical: 20,
    borderBottomColor: "#636363",
    borderBottomWidth: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imagem: {
    height: "100%",
    width: "45%",
    resizeMode: "cover",
  },
  textosPost: {
    width: "50%",
    paddingLeft: 2,
    justifyContent: "center",
  },
  tituloPost: {
    fontSize: 16,
    fontFamily: "OpenSans_600SemiBold",
    color: "#636363",
    textTransform: "uppercase",
    paddingBottom: 6,
  },
  subTituloPost: {
    fontSize: 14,
    fontFamily: "Roboto_400Regular",
    color: "#636363",
    textTransform: "uppercase",
    paddingBottom: 6,
  },
  autorPost: {
    fontSize: 10,
    fontFamily: "Roboto_300Light",
    color: "#636363",
    paddingBottom: 6,
  },
  dataPost: {
    fontSize: 12,
    fontFamily: "Roboto_300Light",
    color: "#636363",
    textTransform: "uppercase",
  },
});
