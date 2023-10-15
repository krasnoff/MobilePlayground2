import React from 'react';
import { Path } from 'react-native-svg';

// Each nameValuePair can be:
// * Name: <Svg />; or
// * Name: { svg: <Svg />, viewBox: '0 0 50 50' }

export default {
    Plus: {
        svg: <Path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z"/>,
        viewBox: '0 -960 960 960',
    },
    Menu: {
        svg: <Path d="M120,720L120,640L840,640L840,720L120,720ZM120,520L120,440L840,440L840,520L120,520ZM120,320L120,240L840,240L840,320L120,320Z"/>,
        viewBox: '0 0 960 960',
    }
}