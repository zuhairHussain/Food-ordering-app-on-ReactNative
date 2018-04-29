import React, { Component } from 'react';
import { 
  Stack,
  Scene,
  Drawer,
  Router,
  Actions,
  ActionConst
} from 'react-native-router-flux';
import {
    Login,
    Signup,
    restaurantInfo,
    restaurantServes,
    aboutSelf,
    addDishes,
    foodIs,
    home
} from '../containers';
import styles from "./styles";
import ScreenList from "./ScreenList";



export default class AppNavigator extends Component {
  render() {
    return (
      <Router hideNavBar= "true" tintColor='white'>
        <Scene key="root" navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} sceneStyle={styles.routerScene}>
          <Drawer
            drawer
            hideNavBar
            key="home"
            title="Home"
            type={ActionConst.RESET}
            drawerImage={require('../assets/images/menu.png')}
            contentComponent={ScreenList}
          >
            <Scene hideNavBar>
              <Stack key="root">
                <Scene
                  key="_home"
                  title="Home"
                  component={home}
                  rightButtonImage={require('../assets/images/add.png')}
                  onRight={() => Actions.addDishes()}
                />
              </Stack>
            </Scene>
          </Drawer>
        
          <Scene key="Login" component={Login} title="Login" hideNavBar initial={true}/>
          <Scene key="Signup" component={Signup} title="Signup" />
          <Scene key="restaurantInfo" component={restaurantInfo} title="Restaurant Info" left={()=> null }/>
          <Scene key="restaurantServes" component={restaurantServes} title="This Restaurant Serves" />
          <Scene key="aboutSelf" component={aboutSelf} title="Personal Info" />
          <Scene key="addDishes" component={addDishes} title="Add Dish" hideNavBar/>
          <Scene key="foodIs" component={foodIs} title="This Food Is"/>          
          
        </Scene>
      </Router>
    )
  }
}