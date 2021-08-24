import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Header(props) {
    const onSendBackToApp = () => {
        props.onChangeProduct("iphone");
    };

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderWidth: 2,
                borderColor: "green",
                marginBottom: 10
            }}
        >
            <Text>{props.titleName} - Free ship</Text>
            <TouchableOpacity onPress={onSendBackToApp}>
                <Text>Tim Kiếm</Text>
            </TouchableOpacity>
        </View>
    );
}
