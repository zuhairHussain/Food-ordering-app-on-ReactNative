import React , {Component} from 'react';
import { Text, Image,StyleSheet } from 'react-native';
import { Container, Content, Button, View, Right, Left, Radio, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { FadeInView } from '../../components/common';

class foodIs extends Component{

    constructor(props) {
        super(props);
        this.state = {
            mild: true,
            medium : false,
            hot : false
        };
    }

    render(){
        return(
            <Container>
                <Content style={{flex : 1}}>
                    <FadeInView delay="100">
                        <ListItem button={true} onPress={()=>{ this.setState({ 
                                mild: true,
                                medium : false,
                                hot : false
                            }) 
                        }}>
                            <Left>
                                <Text style={styles.optext}>Mild</Text>
                            </Left>
                            <Right>
                                <Radio selected={this.state.mild} />
                            </Right>
                        </ListItem>
                    </FadeInView>
                    <FadeInView delay="150">
                        <ListItem button={true} onPress={()=>{ this.setState({ 
                                mild: false,
                                medium : true,
                                hot : false
                            }) 
                        }}>
                            <Left>
                                <Text style={styles.optext}>Medium</Text>
                            </Left>
                            <Right>
                                <Radio selected={this.state.medium} />
                            </Right>
                        </ListItem>
                    </FadeInView>
                    <FadeInView delay="200">
                        <ListItem button={true} onPress={()=>{ this.setState({ 
                                mild: false,
                                medium : false,
                                hot : true
                            }) 
                        }}>
                            <Left>
                                <Text style={styles.optext}>Hot</Text>
                            </Left>
                            <Right>
                                <Radio selected={this.state.hot} />
                            </Right>
                        </ListItem>
                    </FadeInView>
                </Content>
                <FadeInView delay="250">
                    <Button block primary large style={{}} onPress= {() => {Actions.home(); }}>
                        <Text style={styles.button}>Finish</Text>
                    </Button>
                </FadeInView>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    button : {
        fontSize : 18,
        color : '#fff'
    },
    optext : {
        fontSize : 20
    }
});

export default foodIs;