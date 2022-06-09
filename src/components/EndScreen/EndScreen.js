//TODO

import { View, Text } from 'react-native';
import React from 'react';

const EndScreen = ({ won = false }) => {
    return (
        <View>
            <Text style={{ fontSize: 30, color: "white" }}>{won ? "Congrats" : "Try again tomorrow"}</Text>
        </View>
    );
};

export default EndScreen;