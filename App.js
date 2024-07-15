import {StyleSheet, View, FlatList, Button} from 'react-native';
import {useState} from 'react';
import GoalItem from './Components/GoalItem';
import GoalInput from "./Components/GoalInput";
import {StatusBar} from 'expo-status-bar'
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalsVisible,setModalsVisible]= useState(false);
  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  function startAddGoalHandler() {
    setModalsVisible(true);
  }
  function endAddGoalHandler() {
    setModalsVisible(false);
  }
  
  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals,{text: enteredGoalText, id: Math.random().toString()}]);
    endAddGoalHandler();
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#a065ec" onPress={startAddGoalHandler}/>
      {modalsVisible &&
      <GoalInput
        onAddGoal={addGoalHandler}
        visible ={modalsVisible}
        onCancel={endAddGoalHandler}
      />}
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} 
          renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text}
                           onDeleteItem={deleteGoalHandler}
                           id={itemData.item.id}
          />;
        }}
        keyExtractor={(item,index) => item.id}          
          alwaysBounceVertical={false}>
        </FlatList>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
 
  goalsContainer: {
    flex: 4,
    
  }
});
