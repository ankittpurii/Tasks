import React from 'react'
import {
    Text, StyleSheet, TextStyle, Platform
} from 'react-native'
import Config from '../../Utils/Config';


export const TabBarLabel = (props) => {
    return <Text
        adjustsFontSizeToFit
        style={{
            ...styles.tabBarLabelStyle,
            color: props.isFocused ? 'black' : Config.colors.lightGrey,
            ...props.style
        }}>
        {props.value}
    </Text>
}

const styles = StyleSheet.create({
    tabBarLabelStyle: {
        textAlign: 'center',
        fontSize: 16,
        textTransform: 'capitalize',
        paddingBottom: 5,
        fontWeight: 'bold'
    }
});