// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   Button
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { connect } from 'react-redux';
// import { loadData, counterDecrement } from '../redux/actions/CounterAction'

// const mapStateToProps = state =>{
//   return ({count: state.counterReducer.count});
// }
// const mapDispatchToProps = (dispatch) => {  
//   return {
//       loadData: () => {
//           return dispatch(loadData())
//       },
//       decrement: () => {
//         return dispatch(counterDecrement())
//     }
//   }
// };

// class HomeScreen extends Component {
//     static navigationOptions = {
//         title: 'Rihan',
//         headerRight: (
//             <Icon name="plus" size={30} onPress={() => alert('Add')} color="#208BF5" style={{padding:15}}/>
//           ),
//       };

//   render() {
//     return (
//       <View style={styles.container}>
//       <Icon name="rocket" size={30} color="#900" />
//       <View style={styles.container}>
//       <Button
//           onPress={this.props.loadData}
//           title="Increase Count"
//           color="#841584"
//           accessibilityLabel="Increase Count"
//       />

//       <Text>{this.props.count}</Text>

//       <Button
//           onPress={this.props.decrement}
//           title="Decrease Count"
//           color="#841584"
//           accessibilityLabel="Decrease Count"
//       />
//   </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });


// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(HomeScreen)

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

export class WorkDates extends React.Component {
      static navigationOptions = {
        title: 'Rihan',
        headerRight: (
            <Icon name="plus" size={30} onPress={() => alert('Add')} color="#208BF5" style={{padding:15}}/>
          ),
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

    return (
      <ImageBackground
        style={{ width: Dimens.width, height: Dimens.height}}
        source={require('../../images/background-home2.jpg')}
      >
        <View>
          <FlatList
            data={ImageDetail[1].allFood}
            keyExtractorr={(item, index) => index}
            renderItem={({ item }) => <NameList {...this.props} foodItem={item} />}
            refreshing={this.state.refresh}
            onRefresh={this.onRefreshList}
          />
        </View>
      </ImageBackground>
    )
  }
}

 class NameList extends React.Component {
  openWorkDates = () => {
    this.props.navigation.navigate("dates", {
      id: this.props.foodItem.cid,
      name: this.props.foodItem.name,
    })
  }
  render() {
    const { image, name, description, prize } = this.props.foodItem
    return (
      <TouchableOpacity onPress={this.openWorkDates}>
        <View style={ROW_CONTAINER}>
            <Text style={TITLE} numberOfLines={2} ellipsizeMode={"tail"}>
              {name}
            </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default WorkDates;
