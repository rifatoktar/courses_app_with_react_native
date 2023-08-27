import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import About from "./tabview_widgets/about";
import Review from "./tabview_widgets/review";
import Discussion from "./tabview_widgets/discussion";
import Notes from "./tabview_widgets/notes";

const Tab = createMaterialTopTabNavigator();

export default function DetailTabView() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarScrollEnabled: true, tabBarIndicatorStyle: {
                    backgroundColor: "#5AE4A7",
                    height: 3,
                    borderRadius: 10,
                }
            }}
            sceneContainerStyle={{ backgroundColor: "#E7E5E5", elevation: 0 }}
            style={{backgroundColor: '#E7E5E5', elevation: 0}}
        >
            <Tab.Screen name={'About'} component={About} />
            <Tab.Screen name={'Review'} component={Review} />
            <Tab.Screen name={'Discussion'} component={Discussion} />
            <Tab.Screen name={'Notes'} component={Notes} />
        </Tab.Navigator>
    );
}
