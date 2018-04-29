import React , {Component} from 'react';
import { Text, Image,StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, View,Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { FadeInView } from '../../components/common';

class Login extends Component{

    render(){
        return(
            <Container>
                <Content style={{padding : 20}}>
                <Form>
                    <FadeInView delay="100">
                        <Item fixedLabel style={styles.mb20}>
                            <Label style={styles.fieldLabel}>Name</Label>
                            <Input style={styles.field} />
                        </Item>
                    </FadeInView>
                    <FadeInView delay="150">
                        <Item fixedLabel style={styles.mb20}>
                            <Label style={styles.fieldLabel}>Email</Label>
                            <Input style={styles.field} />
                        </Item>
                    </FadeInView>
                    <FadeInView delay="200">
                        <Item fixedLabel style={styles.mb20}>
                            <Label style={styles.fieldLabel}>Password</Label>
                            <Input style={styles.field} secureTextEntry/>
                        </Item>
                    </FadeInView>
                    <FadeInView delay="250">
                        <Button block primary large style={styles.mb20} onPress= {() => {Actions.Signup(); }}>
                            <Text style={styles.button}>Register A Free Account</Text>
                        </Button>
                    </FadeInView>
                    <FadeInView delay="250">
                        <View style={styles.orSep}>
                            <Text style={styles.orSepText}> OR </Text>
                        </View>
                        <Button block primary large iconLeft style={styles.fbBtn}>
                            <Icon name='logo-facebook' style={{flex : 1 ,fontSize : 30  }} />
                            <Text style={styles.fbBtnText}>Sign Up With Facebook</Text>
                        </Button>
                    </FadeInView>
                    <FadeInView delay="300">
                        <Button block primary large iconLeft style={styles.gBtn}>
                            <Icon name='logo-google' style={{flex : 1 ,fontSize : 30  }} />
                            <Text style={styles.gBtnText}>Sign Up With Google</Text>
                        </Button>
                    </FadeInView>
                </Form>
                </Content>
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
    mb20 : {
        marginBottom: 20
    },
    button : {
        fontSize : 18,
        color : '#fff'
    },
    fbBtn : {
        backgroundColor : '#3b5998',
    },
    fbBtnText : {
        flex : 10,
        fontSize : 18,
        alignItems : 'center',
        textAlign : 'center',
        borderLeftWidth : 1,
        borderLeftColor : '#fff',
        marginLeft : 10,
        color : '#fff' 
    },
    gBtn : {
        backgroundColor : '#df4b37',
        marginTop : 20
    },
    gBtnText : {
        flex : 10,
        fontSize : 18,
        alignItems : 'center',
        textAlign : 'center',
        borderLeftWidth : 1,
        borderLeftColor : '#fff',
        marginLeft : 10,
        color : '#fff' 
    },
    orSep : {
        flex : 1,
        marginBottom : 20
    },
    orSepText : {
        textAlign : 'center',
        fontSize : 18
    }
  });

export default Login;