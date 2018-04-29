import React , {Component} from 'react';
import { Text, Image,StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, View, Textarea } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { FadeInView } from '../../components/common';

class aboutSelf extends Component{

    constructor(props) {
        super(props);
        this.state = {
            halal: true,
            kosher : false,
            vegetarian : false
        };
    }

    render(){
        return(
            <Container>
                <Content style={{padding : 20, flex : 1}}>
                <Form style={{marginBottom : 40}}>
                    <FadeInView delay="100">
                        <Item floatingLabel style={styles.item}>
                            <Label style={styles.fieldLabel}>First Name</Label>
                            <Input style={styles.field} />
                        </Item>
                    </FadeInView>
                    <FadeInView delay="150">
                        <Item floatingLabel style={styles.item}>
                            <Label style={styles.fieldLabel}>Last Name</Label>
                            <Input style={styles.field} />
                        </Item>
                    </FadeInView>
                    <FadeInView delay="200">
                        <Item floatingLabel style={styles.item}>
                            <Label style={styles.fieldLabel}>Email</Label>
                            <Input style={styles.field} />
                        </Item>
                    </FadeInView>
                    <FadeInView delay="250">
                        <Item floatingLabel style={styles.item}>
                            <Label style={styles.fieldLabel}>Phone</Label>
                            <Input style={styles.field} />
                        </Item>
                    </FadeInView>
                </Form>
                </Content>
                <FadeInView delay="300">
                    <Button block primary large style={{}} onPress= {() => {Actions.home(); }}>
                        <Text style={styles.button}>Finish</Text>
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

export default aboutSelf;