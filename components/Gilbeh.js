import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const styles = StyleSheet.create({
    View: {
        backgroundColor: 'greenyellow',
        alignItems: 'center',
        margin: 15,
        padding: 5,
    },
    Text: {
        color: 'black',
    }
});

export default function Gilbeh({props}) {
    const [state, setState] = useState({
        text: "My name is gilbeeeeeh.",
        textShow: true,
    });

    const buttonPress = () => {
        if(state.textShow) {
            setState({
                text: 'hidden.',
                textShow: false,
            });
        }
        else {
            setState({
                text: 'My name is gilbeeeeeh',
                textShow: true,
            });
        }
    }

    return(
        <View style={styles.View}>
            <Text style={styles.Text}>My name is {state.text} and my age is {props.age}. {props.bio}</Text>
            <Button title={(state.textShow) ? 'Hide' : 'Show'} onPress={buttonPress} />
        </View>
    );
}
