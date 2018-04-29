import React , {Component} from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Spinner } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';

class Login extends Component{
    onEmailChange(data){
        this.props.emailChanged(data);
    }
    onPassChange(data){
        this.props.passwordChanged(data)
    }
    onButtonPress(){
        const {email, password} = this.props;
        this.props.loginUser({email, password})
    }
    renderButton(){
        if(this.props.loading){
            return <Spinner size="large"/>
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        )
    }

    render(){
        return(
            <Container style={{padding: 20}}>
                <Content>
                <Form>
                    <Item floatingLabel>
                    <Label>Username</Label>
                    <Input />
                    </Item>
                    <Item floatingLabel last>
                    <Label>Password</Label>
                    <Input />
                    </Item>
                    <Button block primary>
                        <Text>Login</Text>
                    </Button>
                    
                    <Button bordered block primary>
                        <Text>Sign Up</Text>
                    </Button>
                </Form>
                </Content>
            </Container>
        )
    }
}

const styles = {
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
};

const mapStateToProps = state => {
    return {
        email : state.auth.email,
        password : state.auth.password,
        error : state.auth.error,
        loading : state.auth.loading,
    }
}
export default connect(mapStateToProps, actions)(Login);