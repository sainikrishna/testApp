import * as React from "react"
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  FlatList,
  ToastAndroid,
  ScrollView
} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker'
import { ImageDetail } from './data'

const Dimens = Dimensions.get("window")

export class WorkDates extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name', ''),
      headerRight: (
        <Icon name="plus" size={30} onPress={navigation.getParam('openDatePicker')} color="#208BF5" style={{padding:15}}/>
      ),
    }
  }

  constructor(props) {
    super(props);
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } 
    var today = yyyy+'-'+mm+'-'+dd;
    this.state = {
      Dates: [],
      currentDate:today,
    };
  }

  componentDidMount(){
    this.props.navigation.setParams({openDatePicker: this.openDatePicker})
  }

  openDatePicker = () => {
    this.datePicker.onPressDate()
  }

  onDateSelect = (date) =>{
    const { Dates } = this.state;
    const isDuplicate = Dates.find(function(element){
      return element.date === date;
    })
    
    if(isDuplicate === undefined){
      Dates.push({date})
      this.setState({Dates})
    }else{
      ToastAndroid.showWithGravity(
        'This date already exist',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }
  }
    
  render() {
    const { Dates, currentDate } = this.state;
    const name = this.props.navigation.getParam('name', '');
    return (
      <ImageBackground
          style={{ width: Dimens.width, height: Dimens.height-70}}
          source={require('../../images/background-home.jpg')}
        >
        <ScrollView>
          <View style={styles.container}>
          {Dates.length ?
            <FlatList
              data={Dates}
              keyExtractorr={(item, index) => index}
              renderItem={({ item }) => <DateList {...this.props} name={name} dates={item} />}
              refreshing={this.state.refresh}
              onRefresh={this.onRefreshList}
            />: <Text>Date not availble</Text>}
            <DatePicker
              ref={(picker) => { this.datePicker = picker; }}
              style={{width: 200}}
              date={currentDate}
              mode="date"
              format="YYYY-MM-DD"
              minDate="2018-01-01"
              maxDate={currentDate}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              androidMode="spinner"
              hideText={true}
              showIcon={false}
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                }
              }}
              onDateChange={this.onDateSelect}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

class DateList extends React.Component {

  openAadtiaList = () => {
    this.props.navigation.navigate("aadtia", {
      name: this.props.name,
      date: this.props.dates.date,
    })
  }
  render() {
    const { date } = this.props.dates
    return (
      <TouchableOpacity onPress={this.openAadtiaList}>
        <View style={ROW_CONTAINER}>
            <Text style={TITLE}>
              {date}
            </Text>
           
        </View>
      </TouchableOpacity>
    )
  }
}
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(0,0,0,0)'
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
      }
    });

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
      width:Dimens.height
    }
    
    const TITLE = {
      paddingLeft: 10,
      paddingTop: 5,
      fontSize: 16,
      fontWeight: "bold",
      color: "#545454",
    }
    

export default WorkDates;
