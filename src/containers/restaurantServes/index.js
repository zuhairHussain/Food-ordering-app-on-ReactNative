import React , {Component} from 'react';
import { Text, Image,StyleSheet } from 'react-native';
import { Container, Content, Button, View, Right, Left, Radio, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { FadeInView } from '../../components/common';

class restaurantServes extends Component{

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
                <Content style={{flex : 1}}>
                    <FadeInView delay="100">
                        <ListItem button={true} onPress={()=>{ this.setState({ halal: !this.state.halal }) }}>
                            <Left>
                                <Text style={styles.optext}>Halal</Text>
                            </Left>
                            <Right>
                                <Radio selected={this.state.halal} />
                            </Right>
                        </ListItem>
                    </FadeInView>
                    <FadeInView delay="150">
                        <ListItem button={true} onPress={()=>{ this.setState({ kosher: !this.state.kosher }) }}>
                            <Left>
                                <Text style={styles.optext}>Kosher</Text>
                            </Left>
                            <Right>
                                <Radio selected={this.state.kosher} />
                            </Right>
                        </ListItem>
                    </FadeInView>
                    <FadeInView delay="200">
                        <ListItem button={true} onPress={()=>{ this.setState({ vegetarian: !this.state.vegetarian }) }}>
                            <Left>
                                <Text style={styles.optext}>Vegetarian</Text>
                            </Left>
                            <Right>
                                <Radio selected={this.state.vegetarian} />
                            </Right>
                        </ListItem>
                    </FadeInView>
                </Content>
                <FadeInView delay="250">
                    <Button block primary large style={{}} onPress= {() => {Actions.aboutSelf(); }}>
                        <Text style={styles.button}>Next</Text>
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

export default restaurantServes;