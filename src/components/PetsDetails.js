import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

import {
  Container,
  Content,
  ListItem,
  List,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

export default class PetDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {petDetails} = this.props.route.params;
    console.log('TCL: PetDetails -> render -> petDetails', petDetails);

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{alignItems: 'center', marginHorizontal: 40}}>
            <Image
              style={styles.productImg}
              source={{
                uri:
                  petDetails.photos[
                    petDetails.photos.length && petDetails.photos.length - 1
                  ].full,
              }}
            />
            <Text style={styles.name}>{petDetails.name}</Text>
          </View>
          <View style={styles.separator}></View>
          <Body>
            <Left>
              <Text note>Age:{petDetails.age}</Text>
              <Text note>Gender:{petDetails.gender}</Text>
              <Text note>Size:{petDetails.size}</Text>
              <Text note>Status:{petDetails.status}</Text>
              <Text note>Primary Color:{petDetails.colors.primary}</Text>
              <Text note>
                Secondary Color:
                {petDetails.colors.secondary && petDetails.colors.secondary}
              </Text>
            </Left>
          </Body>

          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity
              style={styles.shareButton}
              onPress={() => this.clickEventListener()}>
              <Text style={styles.shareButtonText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  productImg: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: 'bold',
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: '#696969',
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: '#778899',
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: 'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //   starContainer: {
  //     justifyContent: 'center',
  //     marginHorizontal: 30,
  //     flexDirection: 'row',
  //     marginTop: 20,
  //   },
  contentColors: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentSize: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: '#eeeeee',
    marginTop: 20,
    marginHorizontal: 30,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30,
  },
});
