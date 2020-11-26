import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'


/**Loading Component */
export const Loading = (props) => {
    return (
        <View style={styles.mainConatainer}>
            <View style={styles.container} />
            <ActivityIndicator color={"black"} size="large" />
        </View>
    )
}

export const styles = StyleSheet.create({
    mainConatainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "100%",
    },
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'black',
        opacity: 0.3,
    }
})