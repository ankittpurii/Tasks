import React, { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector } from 'react-redux';
import MyTasks from './TabScreens/MyTasks';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Loading } from '../reuse/Loading'
import Config from '../../Utils/Config';
import { TabBarLabel } from '../reuse/TabBarLabel';
import FabButton from '../reuse/FabButton'

const Tab = createMaterialTopTabNavigator();

const tabsArr = [Config.constants.MY_TASKS, Config.constants.ASSIGNED, Config.constants.COMPLETED]


/**
 * landing screen of the application
 */
const Dashboard = () => {

    const loadingStatus = useSelector(state => state.LoadingReducer.loadingStatus)

    return (
        <View style={{
            flex: 1,
        }}>
            <View style={styles.headerView}>
                <View style={styles.circleView}>
                    <Entypo
                        size={25}
                        name={"star"}
                        color="white"
                    />
                </View>
                <Text style={styles.countTextStyle}>0</Text>
                <View style={styles.worksTextView}>
                    <Text style={styles.worksText}>How it Works?</Text>
                </View>
                <View style={styles.iconsStyle}>
                    <FontAwesome
                        name={"bell-o"}
                        size={25}
                        style={{
                            marginEnd: 17
                        }}
                    />
                    <FontAwesome
                        name={"user-circle"}
                        size={25}
                    />
                </View>
            </View>
            <Tab.Navigator
            >
                {tabsArr.map((item) => {
                    return (
                        <Tab.Screen
                            name={item}
                            options={() => ({
                                tabBarLabel: ({ focused }) => {
                                    return (
                                        <TabBarLabel
                                            isFocused={focused}
                                            value={item}
                                        />
                                    );
                                }
                            })}
                        >
                            {() => (
                                <MyTasks
                                    name={item}
                                />
                            )}
                        </Tab.Screen>
                    );
                })}
            </Tab.Navigator>
            <FabButton style={{
                bottom: 80,
                right: 40
            }} />
            {loadingStatus && <Loading />}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    worksTextView: {
        backgroundColor: Config.colors.textBgColor,
        borderRadius: 13,
        paddingHorizontal: 10,
        paddingVertical: 5,

    },
    worksText: {
        fontSize: 13,
        color: Config.colors.normalBlue
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 15
    },
    circleView: {
        backgroundColor: "#A8E35F",
        height: 35,
        width: 35,
        borderRadius: 17.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    countTextStyle: {
        marginHorizontal: 15,
        fontSize: 17
    },
    iconsStyle: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row'
    }
})

export default Dashboard;
