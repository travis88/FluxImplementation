import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import * as actions from './src/actions';
import { Provider, connect } from 'react-redux';
import store from './src/store';
import Counter from './src/Counter';

const mapStateToProps = state => ({
    count: state.count
});

const CounterContainer = connect(
    mapStateToProps,
    actions
) (Counter);

const Countly = () => (
    <Provider store={store}>
        <CounterContainer />
    </Provider>
);

AppRegistry.registerComponent('Countly', () => Countly);