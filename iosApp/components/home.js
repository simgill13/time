import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {StyleSheet,Linking,View,Text,Image,Button,Platform} from 'react-native';
import { AnimatedSVGPath } from 'react-native-svg-animations';
import { LinearGradient } from 'expo';
import stylesHome from '../css/cssHome'
import backgroundImage  from '../../assets/test.png'



class Home extends Component{

  static navigationOptions = {
    // used to hide the header
    header: null,
    // title:'title'
    
  }

  constructor(props){
    super(props)
    this.state ={
      test:'name',
      navigate:props.navigation,
    }

    this.isPlatformIOS = this.isPlatformIOS.bind(this)
    
  }


  isPlatformIOS(e){
    console.log('hi')
  }
 

  render(){
    if(Platform.OS === 'ios'){
      return (
        <LinearGradient
        colors={["#F68200", "#fca233"]}
        locations={[0, 1]}
        style={{ flex: 1 }}
      >
      <Image
            style={stylesHome.deviceImage}
            
            source={require("../../assets/fill1.png")}
          />
        <View style={stylesHome.component}>
          <Text style={stylesHome.headerText}>{'Time'}</Text>

          

          
        
         
        </View>
      </LinearGradient>
      );

    }else{
      return (
        <View>
        <Text style={stylesHome.middleText}>
           Currently building the Ios side, android is not done. Launch this app in ios.
         </Text>
       </View>

      )
     
    }
    
  }
}




const mapStateToProps = ({first}) => ({
  test:first.test, 
});




export default connect(mapStateToProps)(Home);












