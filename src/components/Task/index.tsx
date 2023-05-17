import { useState } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const Trash = require('../../../assets/trash.png');
const TrashActive = require('../../../assets/trash-active.png');
const Check = require('../../../assets/check.png');

type TaskProps = {
  task: string;
  done: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

export const Task = ({ task, done, onToggle, onDelete }: TaskProps) => {
  const [taskActive, setTaskActive] = useState(false);
  const [trashActive, setTrashActive] = useState(false);

  const handleTaskPressIn = () => {
    setTaskActive(true);
  };

  const handleTaskPressOut = () => {
    setTaskActive(false);
  };

  const handleTrashPressIn = () => {
    setTrashActive(true);
  };

  const handleTrashPressOut = () => {
    setTrashActive(false);
  };

  return (
    <View style={styles.container} >
      <View style={styles.checkboxContainer}>
        <Pressable
          onPress={onToggle}
          onPressIn={handleTaskPressIn}
          onPressOut={handleTaskPressOut}
          style={[
            styles.checkbox,
            (taskActive && styles.checkboxActive),
            (done && styles.checked),
            (done && taskActive && styles.checkedActive)
          ]}>
          {done && <Image source={Check} />}
        </Pressable>
      </View>

      <Text style={[styles.task, (done && styles.taskDone)]}>
        {task}
      </Text>

      <View style={[styles.buttonContainer, (trashActive && styles.buttonContainerActive)]}>
        <Pressable
          onPress={onDelete}
          onPressIn={handleTrashPressIn}
          onPressOut={handleTrashPressOut}
          style={styles.deleteButton}>
          {trashActive ?
            <Image source={TrashActive} />
            :
            <Image source={Trash} />
          }
        </Pressable>
      </View>
    </View>
  )
}