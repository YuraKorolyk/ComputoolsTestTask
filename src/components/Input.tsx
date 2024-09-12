import React, {Dispatch, FC, SetStateAction} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface InputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
  error?: string;
  isSecret?: boolean;
  rightComponent?: React.ReactNode;
}

const Input: FC<InputProps> = ({
  value,
  setValue,
  placeholder,
  error,
  isSecret = false,
  rightComponent,
}) => {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={isSecret}
      />
      {rightComponent && <View style={styles.btn}>{rightComponent}</View>}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 16,
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    color: '#000',
    marginBottom: 3,
  },
  btn: {
    position: 'absolute',
    right: 10,
    top: 14,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
  },
});
export default Input;
