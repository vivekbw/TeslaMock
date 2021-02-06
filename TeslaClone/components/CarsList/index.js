import React from 'react';
import {View, Text, FlatList} from 'react-native';
import CarItem from "../CarItem";

import styles from './styles';
import cars from './cars';

const CarsList = (props) => {
    return (
      <View>
        <FlatList data = {cars} renderItem = {({item}) => }>

        </FlatList>
      </View>
    );
};

export default CarsList;