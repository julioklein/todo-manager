import { useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { Task } from '../../components/Task';

const Logo = require('../../../assets/Logo.png');
const Plus = require('../../../assets/plus.png');
const Clipboard = require('../../../assets/Clipboard.png');

export const Home = () => {
  const [focused, setFocused] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);

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

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} />
      </View>

      <Text style={styles.text}>Home Screen</Text>

      <View style={styles.inputContainer}>
        <TextInput
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
            <Text style={styles.badgeText}>0</Text>
          </View>
        </View>

        <View style={styles.overview}>
          <Text style={styles.done}>Concluídas</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>0</Text>
          </View>
        </View>
      </View>

      <View style={styles.emptyContainer}>
        <Image source={Clipboard} />

        <Text style={styles.emptyTitle}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.emptyText}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>

      <View style={styles.taskList}>
        <Task
          task='Integer urna interdum massa libero auctor neque turpis turpis semper.'
          done={false}
        />

        <Task
          task='Integer urna interdum massa libero auctor neque turpis turpis semper.'
          done={true}
        />
      </View>
    </View>
  );
}
