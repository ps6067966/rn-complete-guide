import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalInput = (props) => {


    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({  
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1,
      },
    })

export default GoalInput;