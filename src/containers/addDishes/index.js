import React , {Component} from 'react';
import { Text, Image,StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, View, Textarea, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { FadeInView } from '../../components/common';

class addDishes extends Component{

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <Container>
                <FadeInView delay="100">
                    <TouchableOpacity style={{height: 100, backgroundColor : '#444', alignItems:'center', justifyContent:'center'}} onPress={()=>{ Alert.alert('Image Uploaded') }}>
                        <Text style={{ color: '#fff', fontSize : 20, }}>Add Image</Text>
                    </TouchableOpacity>
                </FadeInView>
                <Content style={{padding : 20, flex : 1}}>
                <Form style={{marginBottom : 40}}>
                    <FadeInView delay="150">
                        <Item floatingLabel style={styles.item}>
                            <Label style={styles.fieldLabel}>Name</Label>
                            <Input style={styles.field} />
                        </Item>
                    </FadeInView>
                    <FadeInView delay="200">
                        <Item floatingLabel style={styles.item}>
                            <Label style={styles.fieldLabel}>Ingredients</Label>
                            <Input style={styles.field} />
                        </Item>
                    </FadeInView>
                    <FadeInView delay="250">
                        <Item floatingLabel style={styles.item}>
                            <Label style={styles.fieldLabel}>Price</Label>
                            <Input style={styles.field} />
                        </Item>
                    </FadeInView>
                    <FadeInView delay="300">
                        <Item floatingLabel style={styles.itemDes}>
                            <Label style={styles.fieldLabel}>Description</Label>
                            <Textarea style={{height : 100}}/>
                        </Item>
                    </FadeInView>
                </Form>
                </Content>
                <FadeInView delay="350">
                    <Button block primary large style={{}} onPress= {() => {Actions.foodIs(); }}>
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

export default addDishes;