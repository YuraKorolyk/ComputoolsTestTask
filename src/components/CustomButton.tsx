import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface CustomButtonProps {
  onPress: () => void;
  text: string;
}
const CustomButton: FC<CustomButtonProps> = ({onPress, text}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.7}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'pink',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
export default CustomButton;
