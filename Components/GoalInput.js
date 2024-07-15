import {View, StyleSheet, TextInput, Button, Modal, Image} from 'react-native';
import {useState} from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function AddGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
 console.log('GoalInput.js rendered');
  return (
    <Modal visible={props.visible} animationType='slide'>
    <View style={styles.inputContainer}>
      <Image source={require('../assets/images/goal.png')} style={styles.image} />
      <TextInput
        style={styles.TextInput}
        placeholder='Your cours gol!'
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title='Cancel' color='#f31282' onPress={props.onCancel} />
        </View>
        <View style={styles.button}>
          <Button title='Add Goal' onPress={AddGoalHandler} color="#b180f0"/>
        </View>
      </View>
    </View>
    </Modal>
      );
}
export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'

  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '120438',
    borderRadius: 6,
    width: '100%',
    padding: 16
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button:{
    width: '30%',
    marginHorizontal: 8
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
    
  }
  
  
});