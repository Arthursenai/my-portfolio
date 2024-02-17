import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';


export default function App() {
  
  const projects = [
    {
      name: "OctoPlay",
      description: "Projeto solicitado pelo curso do SENAI Valinhos, com o objetivo de criar uma biblioteca de jogos digitais.",
      tecnologys: "HTML, CSS, JavaScript, React, Node.js, Vercel.",
      image: require('./assets/images/octoplay.png'),
      link: "octoplay.vercel.app"
    },
    {
      name: "RoyaleOc",
      description: "Projeto de com o objetivo de criar um site completo sobre o jogo Clash Royale.",
      tecnologys: "HTML, CSS, JavaScript, React, Node.js, Netlify.",
      image: require('./assets/images/royaleoc.png'),
      link: "royaleoc.netlify.app"
    }
  ]

  // const _renderItem = ({ item, index }) => {
  //   return (
  //     <View>
  //       <Image source={item.image} style="w-full h-48 object-cover" />
  //       <Text className="font-bold text-lg">{item.name}</Text>
  //       <Text>{item.description}</Text>
  //       <Text>{item.tecnologys}</Text>
  //       <Text>{item.link}</Text>
  //     </View>
  //   );
  // };
  return (
    <View  className="bg-slate-200"> 
      <View>
      <Image className="rounded-full w-64 h-64 mx-auto pt-" source={require('./assets/images/icon.jpeg')} />

      <Text className="font-extrabold text-2xl mx-auto pt-7">Arthur Borges</Text>
      <Text className="text-lg mx-auto pt-2" >Estudante de Desenvolvimento de Sistemas no SENAI Valinhos{'\n'}Cursando o terceiro ano do Ensino Médio</Text>
       <ScrollView>
      <Text className="font-semibold text-2xl mx-auto pt-5">Sobre:</Text>
      <Text className="text-base mx-auto pt-2" >Desenvolvedor Full Stack com conhecimentos em front-end (HTML, CSS, JavaScript, React, React Native). Especializado na criação de interfaces intuitivas e eficiência na construção de softwares. Comprometido com as melhores práticas e atualizações constantes, estou pronto para contribuir significativamente em projetos desafiadores.</Text>
        <View className="pt-5">
          <Text className="font-bold text-xl text-center pt-2">Projetos:</Text>
       <ScrollView horizontal>
          {/* <Carousel
            ref={(c) => { this._carousel = c; }}
            data={projects}
            renderItem={_renderItem}
            sliderWidth={300}
            itemWidth={300}
          /> */}
          <View className="mx-auto">
            {
              projects.map((project, index) => {
                return (
                  <View key={index} className="w-80 h-80">
                    <Image source={project.image} className="w-80 h-64" />
                    <Text className="font-bold text-lg text-center">{project.name}</Text>
                    <Text className="text-center">{project.description}</Text>
                    <Text className="text-center">{project.tecnologys}</Text>
                    <Text className="text-center">{project.link}</Text>
                  </View>
                )
              })
            }
            </View>
            
              </ScrollView> 
        </View>
      <Text className="font-semibold text-2xl mx-auto pt-5">Contato:</Text>
      <Text className="text-base mx-auto pt-2">
        <Text className="font-bold">E-mail:</Text>
        <Image className="w-10 h-10" source={require('./assets/images/gmail.png')} />
        <Text>
          'janbgsart@gmail.com'
        </Text>
      </Text>
      <Text className="text-base mx-auto pt-2">
        <Text className="font-bold">Telefone:</Text>
        <Image className="w-10 h-10" source={require('./assets/images/whatsapp.png')} />
        <Text>
          '(19) 9 9713-7980'
        </Text>
      </Text>
      <Text className="text-base mx-auto pt-2">
        <Text className="font-bold">LinkedIn:</Text>
        <Image className="w-10 h-10" source={require('./assets/images/linkedin.png')} />
        <Text>
          'https://www.linkedin.com/in/arthur-borges-b3877a2b1/'
        </Text>
      </Text>
      </ScrollView>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
