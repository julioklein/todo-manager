import { useState } from 'react';
import { FlatList, Image, Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { Task } from '../../components/Task';

const Logo = require('../../../assets/Logo.png');
const Plus = require('../../../assets/plus.png');
const Clipboard = require('../../../assets/Clipboard.png');

export const Home = () => {
  const [tasks, setTasks] = useState<{
    title: string;
    done: boolean;
  }[]>([{
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
    done: false
  },
  {
    title: 'Integer urna interdum massa libero auctor neque turpis turpis sempere.',
    done: true
  },
  ]);
  const [taskName, setTaskName] = useState('');
  const [focused, setFocused] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);

  const handleAddTask = () => {
    if (tasks.find(task => task.title === taskName)) return;
    if (taskName) {
      setTasks([...tasks, {
        title: taskName,
        done: false
      }]);
      setTaskName('');
    }
  };

  const handleRemoveTask = (task: string) => {
    setTasks(tasks.filter(item => item.title !== task));
  };

  const handleToggleTask = (task: string) => {
    setTasks(tasks.map(item => {
      if (item.title === task) {
        return {
          ...item,
          done: !item.done
        }
      }
      return item;
    }));
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleButtonPressIn = () => {
    setButtonActive(true);
  };

  const handleButtonPressOut = () => {
    setButtonActive(false);
  };

  const completedTasks = tasks.filter(task => task.done);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} />
      </View>

      <Text style={styles.text}>Home Screen</Text>

      <View style={styles.inputContainer}>
        <TextInput
          value={taskName}
          onChangeText={setTaskName}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
          style={[styles.input, {
            borderColor: '#5E60CE',
            borderWidth: focused ? 1 : 0
          }]}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <Pressable
          onPress={handleAddTask}
          onPressIn={handleButtonPressIn}
          onPressOut={handleButtonPressOut}
          style={[styles.button, (buttonActive && styles.buttonActive)]}
        >
          <Image source={Plus} />
        </Pressable>
      </View>

      <View style={styles.taskProgress}>
        <View style={styles.overview}>
          <Text style={styles.created}>Criadas</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{tasks.length}</Text>
          </View>
        </View>

        <View style={styles.overview}>
          <Text style={styles.done}>Concluídas</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{completedTasks.length}</Text>
          </View>
        </View>
      </View>



      <FlatList
        data={tasks}
        contentContainerStyle={styles.taskList}
        keyExtractor={task => task.title}
        renderItem={({ item }) => {
          return (
            <Task
              task={item.title}
              done={item.done}
              onToggle={() => handleToggleTask(item.title)}
              onDelete={() => handleRemoveTask(item.title)}
            />
          )
        }}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Image source={Clipboard} />

            <Text style={styles.emptyTitle}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
}
