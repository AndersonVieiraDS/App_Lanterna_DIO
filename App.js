import react from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking

} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/101853264?v=4';
const urlToMyGithub = 'https://github.com/AndersonVieiraDS'

const App = () => {
const handlePressGoToGithub = async ()=>{
console.log('Verificando link');
const res = await Linking.canOpenURL(urlToMyGithub);

if(res){

console.log('Link aprovado');
console.log('Abrindo link...');

await Linking.openURL(urlToMyGithub);
}

  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
<View style={style.content}>
   <Image accessibilityLabel="Anderson com fundo amarelo" style={style.avatar} source={{uri: imageProfileGithub}}
   />
   <Text accessibilityLabel="Nome: Anderson Vieira" style={[style.defaultText, style.name, {color: 'yellow'}]}>Anderson Vieira</Text> 
   <Text accessibilityLabel="Nickname: AndersonVieiraDS" style={[style.defaultText, style.nickname]}>AndersonVieiraDS</Text>
   <Text accessibilityLabel="Descrição: Anderson Vieira" style={[style.defaultText, style.descripition]}>Formado em Eletrotécnica, estudante de Engenharia de produção e Análise e desenvolvimento de sistemas.
   </Text>
  <Pressable onPress={handlePressGoToGithub}>
  <View style={style.button}>
  <Text style={[style.defaultText, style.textButton]}>
    Open in Github
  </Text>
  </View>
  </Pressable>
  </View>
  </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1, // Expandir para a tela inteira
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar:{
    height: 300,
    width: 300,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 25,
  },
  nickname:  {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  descripition: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
});
