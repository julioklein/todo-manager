import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 64,
    width: '100%',
    marginBottom: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#262626',
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius: 8,
  },
  checkboxContainer: {
    marginRight: 16,
  },
  checkbox: {
    height: 17.45,
    width: 17.45,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#4EA8DE',
    borderRadius: 16,
  },
  checkboxActive: {
    borderColor: '#1E6F9F',
  },
  checked: {
    backgroundColor: '#5E60CE',
    borderColor: '#5E60CE',
  },
  checkedActive: {
    backgroundColor: '#8284FA',
    borderColor: '#8284FA',
  },
  task: {
    fontFamily: 'Inter-Regular',
    color: '#F2F2F2',
    textAlign: 'left',
    flex: 1,
  },
  taskDone: {
    textDecorationLine: 'line-through',
    color: '#808080',
  },
  buttonContainer: {
    borderRadius: 4,
  },
  buttonContainerActive: {
    backgroundColor: '#333333',
  },
  deleteButton: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});