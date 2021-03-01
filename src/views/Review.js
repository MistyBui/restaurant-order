import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, View, Text, Header, Left } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import { FoodContext } from '../context/FoodContext';
import { StatusBar } from 'react-native';

import CustomButton from '../components/CustomButton';
import ReviewListItem from '../components/ReviewListItem';


const Review = ({ navigation }) => {
  const { orders, resetOrder } = React.useContext(FoodContext);
  React.useEffect(() =>{
    orders;
  }, []);
  console.log(orders)
  return (
    <Container>
      <Header style={{ backgroundColor: '#FD6A02', marginTop: 25 }}>
        <Left>
          <Text style={styles.text}>Your orders</Text>
        </Left>
      </Header>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#FD6A02" translucent={true} />
      <View>
        {orders.map(item => <ReviewListItem single={item.single} key={orders.indexOf(item)}>{item.single}</ReviewListItem>)}
        <CustomButton
          title='Start again'
          style={{ marginTop: 10 }}
          onPress={() => {
            resetOrder();
            navigation.navigate('Home');
          }} />
      </View>
    </Container>
  )
}
export default Review;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold'
  }
})

