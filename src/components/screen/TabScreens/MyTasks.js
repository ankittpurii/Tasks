import React, { useEffect } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../../actions/TasksActions';
import Config from '../../../Utils/Config';
import { TaskComp } from '../../reuse/TaskComp';

/**
 * mytasks listed the list of tasks with progress bar
 * @param {} props 
 */
const MyTasks = (props) => {

    const checkMyTasksScreen = props.name == Config.constants.MY_TASKS
    const tasks = useSelector((state) => state.TasksReducer.tasks);
    const dispatch = useDispatch()

    useEffect(() => {
        checkMyTasksScreen && dispatch(getTasks())
    }, [])

    if (checkMyTasksScreen)
        return <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={tasks}
                renderItem={({ item }) => {
                    return <TaskComp
                        item={item}
                    />
                }}
            />
        </SafeAreaView>
    else return <View style={
        styles.containerView
    }>
        <Text>No data available</Text>
    </View>
}

const styles = StyleSheet.create({
    containerView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white'
    }
})

export default MyTasks;
