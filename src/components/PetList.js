import React, {Component} from 'react';
import PetsService from '../services/PetsService';
import {View, Image, ActivityIndicator, TouchableOpacity} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  Content,
  ListItem,
  List,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

export default class PetList extends Component {
  state = {
    petsData: [],
  };

  componentDidMount() {
    console.log('TCL: PET_LIST -> componentDidMount -> componentDidMount');
    PetsService.getAuthToken()
      .then(response => {
        AsyncStorage.setItem('TOKEN', response.data.access_token);
        this.props.getPets();
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  _onPressButton(pet) {
    this.props.navigation.navigate('Details', {petDetails: pet});
  }

  render() {
    console.log('TCL: render -> this.props', this.props);
    let {petsInfo : {animals}, isLoading} = this.props;
    console.log('TCL: render -> isLoading', isLoading);
    return (
      <Container>
        <Content style={{padding: 10}}>
          {animals &&
            animals.length &&
            animals.map((pet, index) => {
              return (
                <TouchableOpacity onPress={() => this._onPressButton(pet)}>
                  <Card key={index.toString()}>
                    <CardItem>
                      <Left>
                        {/* <Thumbnail source={{uri: 'Image URL'}} /> */}
                        <Body>
                          <Text style={{fontSize: 25, color: '#1a237e'}}>
                            {pet.name}
                          </Text>
                          {/* <Text note>Age:{pet.age}</Text>
                          <Text note>Gender:{pet.gender}</Text>
                          <Text note>Size:{pet.size}</Text> */}
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Image
                        source={{
                          uri:
                            (pet.photos.length &&
                              pet.photos[
                                pet.photos.length && pet.photos.length - 1
                              ].full) ||
                            'https://dapp.dblog.org/img/default.jpg',
                        }}
                        style={{
                          height: 200,
                          width: null,
                          flex: 1,
                          resizeMode: 'cover',
                        }}
                      />
                    </CardItem>
                    <CardItem>
                      <Text>{pet.description}</Text>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              );
            })}
        </Content>
      </Container>
    );
  }
}
