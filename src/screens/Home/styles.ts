import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: 'Inter-Regular',
  },
  logoContainer: {
    width: '100%',
    marginTop: 24,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 54,
    paddingHorizontal: 16,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    backgroundColor: '#262626',
    color: '#F2F2F2',
    borderRadius: 6,
  },
  button: {
    width: 52,
    height: 52,
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
  },
  buttonActive: {
    backgroundColor: '#4EA8DE',
  },
  taskProgress: {
    width: '100%',
    marginTop: 32,
    marginBottom: 21,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStartColor: '#fff',
  },
  overview: {
    flexDirection: 'row',
  },
  created: {
    color: '#4EA8DE',
    fontFamily: 'Inter-Bold',
  },
  done: {
    color: '#8284FA',
    fontFamily: 'Inter-Bold',
  },
  badge: {
    height: 19,
    width: 25,
    marginLeft: 8,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
  },
  badgeText: {
    color: '#D9D9D9',
    fontFamily: 'Inter-Bold',
    fontSize: 12,
  },
  emptyContainer: {
    marginHorizontal: 24,
    paddingHorizontal: 20,
    paddingVertical: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#333333',
  },
  emptyTitle: {
    marginTop: 16,
    fontFamily: 'Inter-Bold',
    color: '#808080',
    textAlign: 'center',
  },
  emptyText: {
    fontFamily: 'Inter-Regular',
    color: '#808080',
    textAlign: 'center',
  },
  taskList: {
    flex: 1,
    paddingHorizontal: 24,
  },
});