import React, { useEffect, useState } from 'react';
import { Text, View } from "react-native";

let props: any;

function SamplePage(props: any): JSX.Element {
    const [propsStr, setPropsStr] = useState<string>();

    useEffect(() => {
        setPropsStr(JSON.stringify(props));
    }, []);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sample Page</Text>
        <Text>{propsStr}</Text>
      </View>
    );
}

export default SamplePage;