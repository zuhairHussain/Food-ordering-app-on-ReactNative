import React , {Component} from 'react';
import {  Image,StyleSheet,TouchableOpacity } from 'react-native';
import { 
    Container, 
    Button, 
    View, 
    Card, 
    CardItem,  
    Header, 
    Content, 
    Thumbnail, 
    Text,  
    Icon, 
    Left, 
    Body, 
    Right,
    ActionSheet
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { FadeInView } from '../../components/common';

var BUTTONS = ["Edit", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 1;
var CANCEL_INDEX = 2;



class home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            halal: true,
            kosher : false,
            vegetarian : false
        };
    }

    render(){
        let data = [
            {
                img : 'food.jpg',
                name : 'Chicken Steak',
                details : 'Chicken fried steak',
                price : '$10'
            },
            {
                img : 'food.jpg',
                name : 'Chicken Steak',
                details : 'Chicken fried steak',
                price : '$10'
            }
        ]
        return(
            
                <Container>
                
                    <Content style={{padding : 20, flex : 1}}>
                    <FadeInView delay="100">
                    {
                        data.map(d => {
                            
                            <TouchableOpacity style={styles.mb20} onPress={() =>
                                ActionSheet.show(
                                {
                                    options: BUTTONS,
                                    cancelButtonIndex: CANCEL_INDEX,
                                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                    title: "Chicken Steak"
                                },
                                buttonIndex => {
                                    this.setState({ clicked: BUTTONS[buttonIndex] });
                                }
                                )}>
                                <Card>
                                    <CardItem cardBody>
                                        <Image source={require('../../assets/images/food.jpg')} style={{height: 200, width: null, flex: 1}}/>
                                    </CardItem>
                                    <CardItem>
                                        <Left>
                                            <Body>
                                                <Text>{ d.name }</Text>
                                                <Text note>{ d.details }</Text>
                                            </Body>
                                        </Left>
                                        <Right>
                                            <Text>{ d.price }</Text>
                                        </Right>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>
                        })
                    }
                    <TouchableOpacity style={styles.mb20} onPress={() =>
                        ActionSheet.show(
                        {
                            options: BUTTONS,
                            cancelButtonIndex: CANCEL_INDEX,
                            destructiveButtonIndex: DESTRUCTIVE_INDEX,
                            title: "Chicken Steak"
                        },
                        buttonIndex => {
                            this.setState({ clicked: BUTTONS[buttonIndex] });
                        }
                        )}>
                        <Card>
                            <CardItem cardBody>
                                <Image source={require('../../assets/images/food.jpg')} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Body>
                                        <Text>Chicken Steak</Text>
                                        <Text note>Chicken fried steak</Text>
                                    </Body>
                                </Left>
                                <Right>
                                    <Text>$10</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>


                        <TouchableOpacity style={styles.mb20} onPress={() =>
                            ActionSheet.show(
                            {
                                options: BUTTONS,
                                cancelButtonIndex: CANCEL_INDEX,
                                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                title: "Chicken Steak"
                            },
                            buttonIndex => {
                                this.setState({ clicked: BUTTONS[buttonIndex] });
                            }
                            )}>
                        <Card>
                            <CardItem cardBody>
                                <Image source={require('../../assets/images/food2.jpg')} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Body>
                                        <Text>BBQ</Text>
                                        <Text note>Chicken fried steak</Text>
                                    </Body>
                                </Left>
                                <Right>
                                    <Text>$6</Text>
                                </Right>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.mb20} onPress={() =>
                        ActionSheet.show(
                        {
                            options: BUTTONS,
                            cancelButtonIndex: CANCEL_INDEX,
                            destructiveButtonIndex: DESTRUCTIVE_INDEX,
                            title: "Chicken Steak"
                        },
                        buttonIndex => {
                            this.setState({ clicked: BUTTONS[buttonIndex] });
                        }
                        )}>
                    <Card style={styles.mb20}>
                        <CardItem cardBody>
                            <Image source={require('../../assets/images/food3.jpg')} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Veggie Lasagna</Text>
                                    <Text note>Chicken fried steak</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Text>$18</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </TouchableOpacity>
                </FadeInView>
                </Content>
                
            </Container>
        
        )
    }
}
const styles = StyleSheet.create({
    mb20 : {
        marginBottom: 20
    },
    button : {
        fontSize : 18,
        color : '#fff'
    },

});

export default home;