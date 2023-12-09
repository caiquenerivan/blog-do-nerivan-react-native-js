import {
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

import bboy from "../assets/imgs/bboy.jpg";
import rapper from "../assets/imgs/rapper.jpg";
import pac from "../assets/imgs/pac.jpg";
import circulo from "../assets/imgs/circulo.jpg";
import coracaoVazio from "../assets/imgs/coracao.png";
import coracaoCheio from "../assets/imgs/coracaoCheio.png";

const { width, height } = Dimensions.get("screen");

export default function ArtigoPost({
  titulo,
  subTitulo,
  capa,
  autor,
  data,
  likes,
}) {
  const [qtdLikes, setQtdLikes] = useState(likes-1+1);
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
      <ImageBackground
        source={pac}
        resizeMode="stretch"
        style={styles.bgTitulo}
      >
        <View style={styles.child}>
          <Text numberOfLines={2} style={styles.titulo}>
            {titulo}
          </Text>
          <Text style={styles.subTitulo}>{subTitulo}</Text>
        </View>
      </ImageBackground>
      <View style={styles.infosSection}>
        <View style={styles.infoAdicionais}>
          <Text style={styles.data}>{data}</Text>
          <Image source={circulo} style={styles.circulo} />
          <Text style={styles.autor}>{autor}</Text>
        </View>
        <View
          style={[styles.separador, styles.infoAdicionais, styles.horizontal]}
        >
          <View style={[styles.redesSociais, styles.horizontal]}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://www.instagram.com/craquenerivan");
              }}
            >
              <FontAwesome name="instagram" style={styles.iconesSociais} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://twitter.com/craquenerivan");
              }}
            >
              <FontAwesome name="twitter" style={styles.iconesSociais} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://www.linkedin.com/in/caiquenerivan");
              }}
            >
              <FontAwesome name="linkedin" style={styles.iconesSociais} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              liked={Liked}
              onPress={Liked ? onUnLikePress : onLikePress}
              style={[styles.curtirPost, styles.horizontal]}
            >
              <Text>{qtdLikes}</Text>
              <Image source={desenho} style={styles.coracao} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.artigo}>
        <Text style={styles.h2}>historia</Text>
        <Text style={styles.paragrafo}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.
        </Text>
        <Text style={styles.paragrafo}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Text>
        <Image source={bboy} style={styles.imagemArtigo} />
        <Text style={styles.h2}>grandes nomes</Text>
        <Text style={styles.paragrafo}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Text>
        <Text style={styles.h2}>rap, trap e suas variações</Text>
        <Text style={styles.paragrafo}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Text>
        <Text style={styles.paragrafo}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Text>
        <Text style={styles.paragrafo}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Text>
        <Image source={rapper} style={styles.imagemArtigo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: "row",
  },
  bgTitulo: {
    margin: 0,
    width: width,
    height: height * 0.3,
  },
  child: {
    backgroundColor: "#00000080",
    height: "100%",
    paddingHorizontal: 30,
    justifyContent: "flex-end",
    paddingBottom: 30,
  },
  titulo: {
    fontSize: 32,
    fontFamily: "Roboto_700Bold",
    color: "#F3F2F2",
    textTransform: "uppercase",
    width: "60%",
  },
  subTitulo: {
    fontSize: 20,
    fontFamily: "Roboto_300Light",
    color: "#F3F2F2",
    textTransform: "uppercase",
    width: "80%",
  },

  infoAdicionais: {
    flexDirection: "row",
    marginVertical: 5,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  separador: {
    justifyContent: "space-between",
  },
  infosSection: {
    minHeight: 40,
    marginHorizontal: 20,
    borderBottomColor: "#696969",
    borderBottomWidth: 0.5,
  },
  data: {
    color: "#636363",
    fontSize: 12,
    fontFamily: "Roboto_700Bold",
    paddingRight: 5,
  },
  autor: {
    color: "#636363",
    fontSize: 12,
    fontFamily: "Roboto_700Bold",
    paddingLeft: 5,
  },
  circulo: {
    height: 5,
    width: 5,
  },
  iconesSociais: {
    fontSize: 20,
    marginRight: 20,
    marginVertical: 6,
    color: "#636363",
  },
  artigo: {
    marginHorizontal: 20,
    paddingVertical: 20,
    borderBottomColor: "#696969",
    borderBottomWidth: 0.5,
  },
  h2: {
    fontSize: 20,
    textTransform: "lowercase",
    color: "#5B4200",
    fontFamily: "Roboto_700Bold",
    paddingVertical: 10,
  },
  paragrafo: {
    paddingVertical: 10,
    fontFamily: "Roboto_400Regular",
    color: "#000",
    fontSize: 15,
  },
  imagemArtigo: {
    width: "100%",
    minHeight: 300,
    height: "auto",
    marginVertical: 10,
    resizeMode: "contain",
  },
  coracao: {
    height: 15,
    width: 15,
    marginHorizontal: 10,
  },
  curtirPost:{
    alignItems:"center",
  }
});
