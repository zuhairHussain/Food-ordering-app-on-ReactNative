import React , {Component} from 'react';
import { Text, Image,StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, View, Textarea, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { FadeInView } from '../../components/common';

class Login extends Component{

    render(){
        return(
            <Container>
                <Content style={{padding : 20, flex : 1}}>
                    <Form>
                        <FadeInView delay="100">
                            <Item floatingLabel style={styles.item}>
                                <Label style={styles.fieldLabel}>Restaurant Name</Label>
                                <Input style={styles.field} />
                            </Item>
                        </FadeInView>
                        <FadeInView delay="150">
                            <Item floatingLabel style={styles.item}>
                                <Label style={styles.fieldLabel}>Location</Label>
                                <Input style={styles.field} />
                            </Item>
                        </FadeInView>
                        <FadeInView delay="200">
                            <Item floatingLabel style={styles.itemDes}>
                                <Label style={styles.fieldLabel}>Description</Label>
                                <Textarea style={{height : 100}}/>
                            </Item>
                        </FadeInView>
                    </Form>
                </Content>

                <FadeInView delay="250">
                    <Button block primary large style={{}} onPress= {() => {Actions.restaurantServes(); }}>
                        <Text style={styles.button}>Next</Text>
                    </Button>
                </FadeInView>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    logo: {
        flex : 1,
        alignItems : 'center'
    },
    field : {
        
    },
    fieldLabel : {
      
    },
    item : {
        marginBottom: 20,
        marginLeft : 0
    },
    itemDes : {
        height : 100,
        marginLeft : 0
    },
    button : {
        fontSize : 18,
        color : '#fff'
    },
    textarea : {
        height : 40
    }
  });

export default Login;