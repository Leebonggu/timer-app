import React from 'react';
import propTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Button = ({ iconName, onPress}) => {
  return (
    <TouchableOpacity onPressOut={onPress}>
      <FontAwesome name={iconName} size={80} color="white"/>
    </TouchableOpacity>
  );
};

export default Button;