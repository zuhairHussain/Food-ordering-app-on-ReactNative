import React, { Component } from 'react';
import { Actions} from 'react-native-router-flux'
import { View, Button, Text, Content, List, ListItem , Body, Right, Left, Icon,Card, CardItem, Thumbnail } from 'native-base';

export default class ScreenList extends Component {
  render() {
    return (
            <Content style={{flex : 1}}>
                <Card style={{marginTop: 0, marginRight : 0,marginLeft : 0}}>
                    <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/images/profile.jpeg')} />
                        <Body>
                            <Text>John Doe</Text>
                            <Text note>john.doe@gmail.com</Text>
                        </Body>
                    </Left>
                    </CardItem>
                </Card>
                <List>
                    <ListItem icon button={true} onPress= {() => {Actions.foodIs(); }}>
                        <Left>
                            <Icon name="home" />
                        </Left>
                        <Body>
                            <Text>Dashboard</Text>
                        </Body>
                    </ListItem>

                    <ListItem icon button={true} onPress= {() => {Actions.foodIs(); }}>
                        <Left>
                            <Icon name="person" />
                        </Left>
                        <Body>
                            <Text>Profile</Text>
                        </Body>
                    </ListItem>

                    <ListItem icon button={true} onPress= {() => {Actions.foodIs(); }}>
                        <Left>
                            <Icon name="paper" />
                        </Left>
                        <Body>
                            <Text>Orders</Text>
                        </Body>
                    </ListItem>

                    <ListItem icon button={true} onPress= {() => {Actions.foodIs(); }}>
                        <Left>
                            <Icon name="settings" />
                        </Left>
                        <Body>
                            <Text>Settings</Text>
                        </Body>
                    </ListItem>

                </List>
            </Content>
    )
  }
}