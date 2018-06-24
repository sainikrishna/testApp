import * as React from "react"
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { ImageDetail } from './data'
import AddNameForm from './add-name'

const Dimens = Dimensions.get("window")

class AadtiaList extends React.Component {
  constructor(){
    super();
    this.state={
      openForm:false,
    }
  }
  static navigationOptions = ({ navigation }) => {
      const name = navigation.getParam('name', '');
      const date = navigation.getParam('date', '');
      return {
        title: name + ' / ' + date,
        headerRight: (
          <Icon name="plus" size={30} onPress={navigation.getParam('addName')} color="#208BF5" style={{padding:15}}/>
        ),
      }
    }

    // state={
    //   openForm:false
    // }

    componentDidMount(){
      this.props.navigation.setParams({addName: this.openForm})
    }
  
    openForm = () => {
      this.setState({openForm:true})
    }
  
    onAddName = (name, number) => {
      ImageDetail.unshift({name, number})
      this.setState({openForm:false})
  
    }

  render() {
    const name = this.props.navigation.getParam('name', '');
    const date = this.props.navigation.getParam('date', '');
    return (
      <ImageBackground
        style={{ width: Dimens.width, height: Dimens.height-70}}
        source={require('../../images/background-home2.jpg')}
      >
        <ScrollView>
          <View>
            <FlatList
              data={ImageDetail}
              keyExtractorr={(item, index) => index}
              renderItem={({ item }) => <NameList name={name} date={date} {...this.props} names={item} />}
            />
          </View>
        </ScrollView>
        <AddNameForm onAddName={this.onAddName} modalVisible = {this.state.openForm} onCloseForm = {() => this.setState({openForm:false})}/>
      </ImageBackground>
    )
  }
}

class NameList extends React.Component {
  openWorkDates = () => {
    this.props.navigation.navigate("reciept_detail", {
      name: this.props.name,
      date: this.props.date,
    })
  }
  render() {
    const { name } = this.props.names
    return (
      <TouchableOpacity onPress={this.openWorkDates}>
        <View style={styles.row_container}>
            <Text style={styles.title}>
              {name}
            </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        flex:1,
    },
    row_container:{
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
    },
    title:{
      paddingLeft: 10,
      paddingTop: 5,
      fontSize: 16,
      fontWeight: "bold",
      color: "#545454",
    }
})
export default AadtiaList;
