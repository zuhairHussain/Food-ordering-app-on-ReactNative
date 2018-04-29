import React , {Component} from 'react';
import { Text, Image,StyleSheet, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, View, Icon, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { FadeInView } from '../../components/common';

class Login extends Component{
    constructor(){
        super()
        this.state = {
            buttonLoading : false
        }
        console.ignoredYellowBox = ['Warning:'];
    }

    login(){
        this.setState({buttonLoading : true })
        setTimeout(() => { 
            this.setState({buttonLoading : false })
            Actions.restaurantInfo()
         }, 3000)
    }
    render(){
        return(
            <Container>
                <Content style={{padding : 20}}>
                    <FadeInView delay="100">
                        <View style={styles.logo}>
                            <Image
                                source={require('../../assets/images/logo.png')}
                            />
                        </View>
                    </FadeInView>
                    
                    <Form>
                        <FadeInView delay="150">
                            <Item fixedLabel style={styles.mb20}>
                                <Label style={styles.fieldLabel}>Username</Label>
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
                            <View style={styles.forgot}>
                                <Text style={styles.forgotText}>Forgot Password?</Text>
                            </View>
                        </FadeInView>

                        <FadeInView delay="300">
                            <Button block primary large style={styles.mb20} onPress= {() => {this.login(); }}>
                                {this.state.buttonLoading ? <Spinner color='white'></Spinner> : <Text style={styles.button}>Login</Text>}
                            </Button>
                        </FadeInView>

                        <FadeInView delay="350">
                            <Button bordered block primary large onPress= {() => {Actions.Signup(); }}>
                                <Text  style={styles.buttonBorder}>Sign Up</Text>
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
    buttonBorder : {
        fontSize : 18,
    },
    forgot: {
        flex : 1,
        alignItems : 'center',
        marginBottom: 20
    },
    forgotText : {
        fontSize : 16,
    },
  });

export default Login;