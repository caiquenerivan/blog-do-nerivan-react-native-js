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

import bboy from "../assets/imgs/bboy.jpg";
import rapper from "../assets/imgs/rapper.jpg";
import pac from "../assets/imgs/pac.jpg";
import circulo from "../assets/imgs/circulo.jpg";
import instagram from "../assets/imgs/instagram.png";
import twitter from "../assets/imgs/twitter.png";
import linkedin from "../assets/imgs/linkedin.png";

const { width, height } = Dimensions.get("screen");


export default function ArtigoPost() {
  return (
    <View>
      <ImageBackground
        source={pac}
        resizeMode="stretch"
        style={styles.bgTitulo}
      >
        <View style={styles.child}>
          <Text numberOfLines={2} style={styles.titulo}>
            50 anos de hip-hop
          </Text>
          <Text style={styles.subTitulo}>
            a origem do estilo mais influente da atualidade
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.infosSection}>
        <View style={styles.infoAdicionais}>
          <Text style={styles.data}>04 Outubro 2023</Text>
          <Image source={circulo} style={styles.circulo} />
          <Text style={styles.autor}>Caique Nerivan</Text>
        </View>
        <View style={styles.infoAdicionais}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.instagram.com/craquenerivan");
            }}
          >
            <Image source={instagram} style={styles.iconesSociais} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://twitter.com/craquenerivan");
            }}
          >
            <Image source={twitter} style={styles.iconesSociais} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.linkedin.com/in/caiquenerivan");
            }}
          >
            <Image source={linkedin} style={styles.iconesSociais} />
          </TouchableOpacity>
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
  infosSection: {
    minHeight: 40,
    marginHorizontal: 20,
    borderBottomColor: "#000000",
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
    height: 20,
    width: 20,
    marginRight: 20,
    marginVertical: 6,
  },
  artigo: {
    marginHorizontal: 20,
    paddingVertical: 20,
    borderBottomColor: "#000000",
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
});
