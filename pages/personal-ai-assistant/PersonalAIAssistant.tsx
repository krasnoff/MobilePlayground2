import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Voice from '../../voice-master';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24
  },
  headingText: {
    alignSelf: 'center',
    marginVertical: 26,
    fontWeight: 'bold',
    fontSize: 26,
  },
  textInputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    height: 300,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 16,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.4,
    marginBottom: 10,
  },

  bottoms: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: 100,
    borderWidth: 0
  },

  speak: {
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 8,
  },
  stop: {
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 8,
  },
  clear: {
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    with: '50%',
    justifyContent: 'space-evenly',
    marginTop: 24,
  },
});

function PersonalAIAssistant(): JSX.Element {
    const [result, setResult] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [voiceAvailable, setVoiceAvailable] = useState<1 | 0>(0);

    const speechStartHandler = (e: any) => {
      console.log('speechStart successful', e);
    };
    const speechEndHandler = (e: any) => {
      setLoading(false);
      console.log('stop handler', e);
    };
    const speechResultsHandler = (e: any) => {
      const text = e.value[0];
      setResult(text);
    };
    const startRecording = async () => {
      setLoading(true);
      try {
        await Voice.start('he-IL');
      } catch (error) {
        console.log('error', error);
      }
    };
    const stopRecording = async () => {
      try {
        await Voice.stop();
        setLoading(false);
      } catch (error) {
        console.log('error', error);
      }
    };
    const clear = () => {
      setResult('');
    };
    useEffect(() => {
      Voice.isAvailable().then((res: 1 | 0) => {
        if (res) {
          Voice.onSpeechStart = speechStartHandler;
          Voice.onSpeechEnd = speechEndHandler;
          Voice.onSpeechResults = speechResultsHandler;
        }
        setVoiceAvailable(res);
      });
      return () => {
        Voice.destroy().then(Voice.removeAllListeners);
      };

      
    }, []);

    return (
      <View style={styles.container}>
        <SafeAreaView style={{
            flex: 1,
            borderWidth: 0,
            maxHeight: 400
          }}>
          <Text style={styles.headingText}>Voice to Text Recognition</Text>
          <View style={styles.textInputStyle}>
            <Text>{result}</Text>
          </View>
        </SafeAreaView>
        <View><Text>&nbsp;</Text></View>
        {voiceAvailable ?
        (<View style={styles.bottoms}>
            {isLoading ? (
                <ActivityIndicator size="large" color="black" />
              ) : (
                <TouchableOpacity onPress={startRecording} style={styles.speak}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Speak</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity style={styles.stop} onPress={stopRecording}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Stop</Text>
              </TouchableOpacity>
        </View>) : null }
      </View>
    );
}

export default PersonalAIAssistant;