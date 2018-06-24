import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View, TextInput, StyleSheet, ScrollView} from 'react-native';

class AddNameForm extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            number:'',
            error:false,
        }
    }

    onAddName = () => {
       const { name, number } = this.state;
       if(name.length && number.length){
           this.props.onAddName(name, number);
       }else{
           this.setState({error:true})
       }
    }

  render() {
    return (
        <ScrollView>
            <View style={{marginTop: 22}}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.modalVisible}
                    animationType = 'fade'
                    onRequestClose={this.props.onCloseForm}
                >
                <View style={styles.container}>
                    <Text style={styles.heading}>Add a new name</Text>
                    <View style={styles.inputs_container}>
                        <TextInput
                            style={{height: 40}}
                            onChangeText={(name) => this.setState({name, error:false})}
                            value={this.state.name}
                            autoCorrect={false}
                            next='next'
                            placeholder="Enter name"
                            style={styles.text_inputs}
                        />
                        <TextInput  
                            style={{height: 40}}
                            onChangeText={(number) => this.setState({number, error:false})}
                            value={this.state.number}
                            autoCorrect={false}
                            next='done'
                            placeholder="Enter mobile number"
                            keyboardType="numeric"
                            style={styles.text_inputs}
                        />
                        {this.state.error && <Text style={{color:'red'}}>Please fill both input</Text>}
                        <View style={styles.action_buttons}>
                            <TouchableOpacity onPress={this.props.onCloseForm}>
                                <Text style={styles.cancel_button}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.onAddName}>
                                <Text style={styles.add_button}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                </Modal>
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
    },

    heading:{
        fontSize:25,
        paddingVertical:20,
    },

    text_inputs:{
        marginBottom:20
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
export default AddNameForm;