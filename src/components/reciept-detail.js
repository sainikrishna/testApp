import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View, TextInput, StyleSheet, ScrollView, Picker} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class RecieptDetail extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            number:'',
            error:false,
            fruite:'mango'
        }
    }

    // static navigationOptions = ({ navigation }) => {
    //     const name = navigation.getParam('name', '');
    //     const date = navigation.getParam('date', '');
    //     return {
    //       title: name + ' / ' + date,
    //       headerRight: (
    //         <Icon name="plus" size={30} onPress={navigation.getParam('addName')} color="#208BF5" style={{padding:15}}/>
    //       ),
    //     }
    //   }

  render() {
    const name = this.props.navigation.getParam('name', '') || 'Rihan';
    const date = this.props.navigation.getParam('date', '') || 'Date';
    return (
        <ScrollView>
            <View style={{marginTop: 10}}>
                <View style={styles.container}>
                    <Text style={{fontSize:18}}>{name}</Text>
                    <Text style={{fontSize:18}}>{date}</Text>
                </View>
                <View>
                    <Text style={styles.table_title}>
                        Add Detail
                    </Text>
                    <View style={styles.detail_container}>
                        <Picker
                            selectedValue={this.state.fruite}
                            style={{ height: 20, width: 100 }}
                            mode='dropdown'
                            onValueChange={(itemValue, itemIndex) => this.setState({fruite: itemValue})}>
                            <Picker.Item label="Mango" value="mango" />
                            <Picker.Item label="Orange" value="orange" />
                            <Picker.Item label="Graps" value="graps" />
                        </Picker>
                        <TextInput
                            style={{height: 200}}
                            onChangeText={(name) => this.setState({name, error:false})}
                            value={this.state.name}
                            autoCorrect={false}
                            next='next'
                            style={styles.text_inputs}
                            // underlineColorAndroid='transparent'
                            // borderColor='grey'
                            // borderWidth= {1}
                        />
                        <TextInput  
                            // style={{height: 40}}
                            onChangeText={(number) => this.setState({number, error:false})}
                            value={this.state.number}
                            autoCorrect={false}
                            next='done'
                            keyboardType="numeric"
                            style={styles.text_inputs}
                            placeholder="Enter Nu"
                            // underlineColorAndroid='transparent'
                            // borderColor='grey'
                            // borderWidth= {1}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    inputs_container:{
        flex:1,
        justifyContent:'center',
        marginTop:-100,
    },

    container:{
        flex:1,
        marginHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between',
    },

    table_title:{
        fontSize:20,
        marginVertical:30,
        alignSelf:"center"
    },

    detail_container:{
        marginHorizontal: 5,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
    },

    text_inputs:{
        marginBottom:20,
       
        
    },
    action_buttons:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
    },

    add_button:{
        fontSize:15,
        backgroundColor:'green',
        // flex:2
        paddingVertical:10,
        paddingHorizontal:70,
        color:'white',
        borderRadius:4,
    },
    cancel_button:{
        // flex:1,
        backgroundColor:'grey',
        paddingVertical:10,
        paddingHorizontal:20,
        color:'white',
        borderRadius:4,
        fontSize:15,
    }
})
export default RecieptDetail;