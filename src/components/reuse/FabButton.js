import React from 'react'
import {
    Text,
    StyleSheet,
    View
} from 'react-native'
import Config from '../../Utils/Config';

/**
 * Fab Button
 * @param {} props 
 */
export default FabButton = (props) => {
    return (
        <View style={[styles.fabButtonView, props?.style]}>
            <Text style={{
                color: 'white',
                fontSize: 20,
            }}>+</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    fabButtonView: {
        backgroundColor: Config.colors.darkBlue,
        height: 60,
        width: 60,
        position: 'absolute',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'

    }
});