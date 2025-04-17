import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {Colors} from '@/utils/Colors'

const Button = ({
    title, 
    type, 
    onPress
}: {
    title: string; 
    type: "top" | "right" | "number";
    onPress: () => void
}) => {
  return (
    <TouchableOpacity 
    style={[
        styles.button, 
        {
            backgroundColor: 
                type == 'top' 
                    ? Colors.gray 
                    : type == 'right' 
                    ? Colors.gray 
                    : Colors.gray,
        },
    ]} 
    onPress={onPress}
    >
        <Text
        style={{
          fontSize: 34,
          color: type == "number" ? Colors.black : Colors.white,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        height: 70,
        width: 70,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.gray
    },
});