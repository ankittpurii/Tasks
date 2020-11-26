import React from 'react'
import {
    Text, StyleSheet,
    View,

} from 'react-native'
import moment from 'moment';
import Config from '../../Utils/Config';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


/**
 * component of tasks list
 * @param {} props 
 */
export const TaskComp = (props) => {
    
    const getTaskCompletedValue = () => {
        return Math.round(parseInt(props.item?.hoursCompletedTillNow) / parseInt(props.item?.hoursAssigned) * 100)
    }

    const hoursCheck = () => {
        return props.item?.hoursCompletedTillNow > props.item?.hoursAssigned
    }

    return (
        <View style={[styles.taskListView, { backgroundColor: hoursCheck() ? Config.colors.lightRedColor : Config.colors.lightBgColor, }]}>
            <View syle={{
            }}>
                <Text>{props?.item?.title} {"\n"}{props?.item?.description}</Text>
                <Text style={{
                    marginTop: 20
                }}>{moment(props?.item?.created_at).format('h a')} - {moment(props?.item?.created_at).format("D dddd")}</Text>
            </View>
            <View style={styles.progressView}>
                <AnimatedCircularProgress
                    size={45}
                    width={22}
                    fill={getTaskCompletedValue()}
                    tintColor={hoursCheck() ? "red" : "#A9E25F"}
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="white" />
                <Text style={{
                    fontSize: 12,
                    marginTop: 18,
                    color: Config.colors.darkBlue
                }}>Mark Complete</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    taskListView: {
        marginVertical: 10,
        padding: 20,
        flexDirection: 'row'
    },
    progressView: {
        alignItems: 'flex-end',
        flex: 2
    }
});