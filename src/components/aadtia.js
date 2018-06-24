import * as React from "react"
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet
} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';


const Dimens = Dimensions.get("window")

class AadtiaList extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const name = navigation.getParam('name', '');
        const date = navigation.getParam('date', '');
        return {
          title: name + ' / ' + date,
          headerRight: (
            <Icon name="plus" size={30} onPress={navigation.getParam('openDatePicker')} color="#208BF5" style={{padding:15}}/>
          ),
        }
      }

  render() {

    return (
      <ImageBackground
        style={{ width: Dimens.width, height: Dimens.height}}
        source={require('../../images/background-home2.jpg')}
      >
        <View style={styles.container}>
         <Text>Krishna</Text>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        flex:1,
    }
})
export default AadtiaList;
