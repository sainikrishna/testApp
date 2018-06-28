import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View, TextInput, StyleSheet, ScrollView, Picker} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Table, Row, Rows } from 'react-native-table-component';
import ExampleThree from './test'

class RecieptDetail extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            number:'',
            error:false,
            fruite:'mango',
            tableHead: ['No', 'Name', 'Weight', 'Rate', 'Karet', 'co(%)', 'Total'],
            tableData: [
                ['1', '2', '3', '4', '5', '4', '5'],
                ['a', 'b', 'c', 'd', 'e', '4', '5'],
                ['1', '2', '3', '456', '5', '4', '5'],
                ['a', 'b', 'c', 'd', 'e', '4', '5']
            ]
            
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
                    <View style={[styles.table_container, {paddingTop:0}]}>
                    <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff', padding:0}}>
                        <Row data={this.state.tableHead} flexArr={[2,3,3,2,3,2,3]} style={styles.head} textStyle={styles.text}/>
                        <Rows data={this.state.tableData} flexArr={[2,3,3,2,3,2,3]} textStyle={styles.text}/>
                    </Table>
                </View>
                    <View style={styles.detail_container}>
                        <View style={styles.add_items}>
                            <View style={styles.form_container}>
                                <View style={styles.form_field}>
                                    <Text>Name: </Text>
                                    <Picker
                                        selectedValue={this.state.fruite}
                                        style={{ height: 20, width: 120 }}
                                        mode='dropdown'
                                        onValueChange={(itemValue, itemIndex) => this.setState({fruite: itemValue})}>
                                        <Picker.Item label="Mango" value="mango" />
                                        <Picker.Item label="Orange" value="orange" />
                                        <Picker.Item label="Graps" value="graps" />
                                    </Picker>
                                </View>
                                
                                <View style={[styles.form_field, {justifyContent:'flex-end'}]}>
                                    <Text>No: </Text>
                                    <TextInput 
                                        onChangeText = {(name) => this.setState({name, error:false})}
                                        autoCorrect = {false}
                                        style={{width:50}}
                                    />
                                </View>
                                <View style={styles.form_field}>
                                    <Text>Weight: </Text>
                                    <TextInput 
                                        onChangeText = {(name) => this.setState({name, error:false})}
                                        autoCorrect = {false}
                                        style={{width:50}}
                                    />
                                </View>
                                <View style={styles.form_field}>
                                    <Text>Rate: </Text>
                                    <TextInput 
                                        onChangeText = {(name) => this.setState({name, error:false})}
                                        autoCorrect = {false}
                                        style={{width:50}}
                                    />
                                </View>
                                <View style={styles.form_field}>
                                    <Text>Comission: </Text>
                                    <TextInput 
                                        onChangeText = {(name) => this.setState({name, error:false})}
                                        autoCorrect = {false}
                                        style={{width:50}}
                                    />
                                </View>
                                <View style={styles.form_field}>
                                    <Text>Karet: </Text>
                                    <TextInput 
                                        onChangeText = {(name) => this.setState({name, error:false})}
                                        autoCorrect = {false}
                                        style={{width:50}}
                                    />
                                </View>
                            </View>
                            <View style={styles.action_buttons}>
                                <TouchableOpacity style={styles.reset_button}>
                                    <Text style={{color:'white'}}>Reset</Text>                 
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.add_button}>
                                    <Text style={{color:'white'}}>Add</Text>                 
                                </TouchableOpacity>
                            </View>
                        </View>
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
        paddingTop:0,
    },

    container:{
        flex:1,
        marginHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 15, 
    },

    add_items:{
        width:'100%', 
        backgroundColor:'white',
        marginTop:20, 
        paddingHorizontal:10,
    },

    table_title:{
        fontSize:20,
        marginVertical:30,
        alignSelf:"center"
    },

    detail_container:{
        paddingHorizontal: 5,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    form_container:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        width:'100%', 
        flexWrap:'wrap',
    },

    form_field:{
        flexDirection:'row', 
        // justifyContent:'', 
        alignItems:'center',
    },

    action_buttons:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginVertical:15,
    },

    add_button:{
        backgroundColor:'green',
        paddingVertical:8,
        paddingHorizontal:50,
        borderRadius:4,
    },
    reset_button:{
        backgroundColor:'grey',
        paddingVertical:8,
        paddingHorizontal:20,
        borderRadius:4,
        marginRight:10,
    },
    table_container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', padding:0 },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6, textAlign:'center' }
})
export default RecieptDetail;