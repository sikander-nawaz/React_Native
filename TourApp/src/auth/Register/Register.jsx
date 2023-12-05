import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Tutorial = props => {
  return (
    <View>
      {/* Contianer 1 */}
      <View style={{backgroundColor: '#ffffff'}}>
        <View
          style={{
            backgroundColor: '#4f5898',
            padding: 50,
            borderBottomLeftRadius: 60,
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: '700', fontSize: 28, color: '#fff'}}>
              Jado's Tour App
            </Text>
            <Text style={{fontWeight: '300', fontSize: 15, color: '#fff'}}>
              Create New Account
            </Text>
          </View>
        </View>
      </View>

      {/* Container 2 */}
      <View style={{backgroundColor: '#4f5898'}}>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: '#fff',
            paddingHorizontal: 30,
            borderTopRightRadius: 60,
          }}>
          <View style={styles.spacing_big}></View>

          <View style={styles.label}>
            <Text style={styles.label}>Username</Text>
          </View>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={'username'}
          />

          <View style={styles.spacing}></View>

          <View style={styles.label}>
            <Text style={styles.label}>Password</Text>
          </View>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            value={'password'}
          />

          <View style={styles.spacing}></View>

          <TouchableOpacity>
            <View
              style={{
                margin: 10,
                backgroundColor: '#4f5898',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
                paddingVertical: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                }}>
                Login{' '}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Tutorial;

const styles = StyleSheet.create({
  spacing: {
    margin: 10,
  },
  spacing_big: {
    margin: 30,
  },
  label: {
    // justifyContent: 'center',
    // alignItems: 'center',\
    fontWeight: '300',
    paddingLeft: 5,
    fontSize: 17,
    color: '#999',
  },
  input: {
    height: 40,
    margin: 5,
    borderRadius: 100,
    backgroundColor: '#e7e7e7',
    padding: 10,
  },
  imagecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 7,
    elevation: 5,
    marginTop: 100,

    // alignItems:'center',
    // justifyContent:'center'
  },
});