import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import coracaoVazio from "../assets/imgs/coracao.png";
import coracaoCheio from "../assets/imgs/coracaoCheio.png";

export default function Comentarios(props) {
  const [qtdLikes, setQtdLikes] = useState(props.likes);
  const [Liked, SetLiked] = useState(false);
  const [desenho, SetDesenho] = useState(coracaoVazio);


  const onLikePress = async () => {
    setQtdLikes(qtdLikes+1);
    SetLiked(true);
    SetDesenho(coracaoCheio);
  };
  
  const onUnLikePress = async () => {
    setQtdLikes(qtdLikes-1);
    SetLiked(false);
    SetDesenho(coracaoVazio);
  };


  return (
    <View>
      <Text style={styles.autorComentario}>{props.nome}</Text>
      <Text style={styles.textoComentario}>{props.comentario}</Text>
      <View style={styles.likes}>
        <Text style={styles.likesComentarios}>{qtdLikes}</Text>
        <TouchableOpacity liked={Liked} onPress={Liked ? onUnLikePress : onLikePress}>
          <Image source={desenho} style={styles.coracao} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  autorComentario: {
    fontFamily: "Roboto_700Bold",
    textTransform: "uppercase",
    paddingVertical: 6,
    color: "#636363",
  },
  textoComentario: {
    fontFamily: "Roboto_400Regular",
    color: "#636363",
    textAlign: "justify",
  },
  likesComentarios: {
    fontFamily: "Roboto_400Regular",
    paddingVertical: 6,
    color: "#636363",
  },
  likes: {
    flexDirection: "row",
    alignItems: "center",
  },
  coracao: {
    height: 15,
    width: 15,
    marginHorizontal: 10,
  },
});