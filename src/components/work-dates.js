import * as React from "react"
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
  ImageBackground,
  Dimensions
} from "react-native"
import { ImageDetail } from './data'
import Icon from 'react-native-vector-icons/FontAwesome';

const Dimens = Dimensions.get("window")

const ROW_CONTAINER = {
  flexDirection: "row",
  backgroundColor: "#FFF",
  padding: 20,
  marginRight: 10,
  marginLeft: 10,
  marginTop: 10,
  borderRadius: 4,
  shadowOffset: { width: 1, height: 1 },
  shadowColor: "#CCC",
  shadowOpacity: 1.0,
  shadowRadius: 1,
}

const TITLE = {
  paddingLeft: 10,
  paddingTop: 5,
  fontSize: 16,
  fontWeight: "bold",
  color: "#545454",
}

export class HomeScreen extends React.Component {

      static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('name', ''),
          headerRight: (
            <Icon name="plus" size={30} onPress={() => alert('Add')} color="#208BF5" style={{padding:15}}/>
          ),
        };
      };

  state = {
    refresh: false,
  }

  _keyExtractor = (item, index) => item.cid

  onRefreshList = () => {
    this.setState({ refresh: true })
    setInterval(() => {
      if (this.state.refresh) {
        this.setState({ refresh: false })
      }
    }, 2000)
  }

  render() {
      const name = this.props.navigation.getParam('name', '');

    return (
      <ImageBackground
        style={{ width: Dimens.width, height: Dimens.height}}
        source={require('../../images/background-home.jpg')}
      >
        <View>
          <Text>{name}</Text>
        </View>
      </ImageBackground>
    )
  }
}

export default HomeScreen;
