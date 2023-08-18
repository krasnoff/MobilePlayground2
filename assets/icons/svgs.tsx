import React from 'react';
import { G, Path } from 'react-native-svg';

// Each nameValuePair can be:
// * Name: <Svg />; or
// * Name: { svg: <Svg />, viewBox: '0 0 50 50' }

export default {
    Plus: {
        svg: <Path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z"/>,
        viewBox: '0 -960 960 960',
    }
}