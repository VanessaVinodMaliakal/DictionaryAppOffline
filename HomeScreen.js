import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import dictionary from '../database.js'

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      isSearchPressed: false,
      word: '',
      lexicalCategory: '',
      examples: [],
      definition: '',
    };
  }
  getWord = (text) => {
     var text = text.toLowerCase();
   try{
    var word = dictionary[text]['word']
    var definition = dictionary[text]['definition']
    var lexicalCategory = dictionary[text]['lexicalCategory']
    this.setState({
               word: word,
               definition: definition,
               lexicalCategory: lexicalCategory,
             });
  }
    catch(err){
      this.setState({
          word: 'Word does not exist in the database',
          definition: '',
        });}
    }
  render() {
    return (
      <View>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => {
            this.setState({
              text: text,
              isSearchPressed: false,
              word: '',
              lexicalCategory: '',
              examples: [],
              definition: '',
            });
          }}
          placeholder='Search word'></TextInput>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            this.setState({
              isSearchPressed: true,
            });
            this.getWord(this.state.text);
          }}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <Text style={styles.displayText}>Word : </Text><Text>{this.state.word}</Text>
        <Text style={styles.displayText}>Definition : </Text><Text>{this.state.definition}</Text>
        <Text style={styles.displayText}>Lexical Category :</Text><Text>{this.state.lexicalCategory}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 50,
    borderColor: 'black',
    borderWidth: 2.5,
    marginTop: -200,
  },
  buttonStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 500,
    backgroundColor: '#B2D649',
    marginTop: 30,
  },
  buttonText:{ 
    fontWeight: 'bold', 
  },
  displayText:{ 
    fontSize: 20, 
    color: '#45690C',
    fontWeight: 'bold', 
    marginTop: 15
  },
});
