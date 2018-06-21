import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, DrawerLayoutAndroid,Image,ScrollView } from 'react-native';
import Toolbar from './toolbar';

import SideMenu from './sidemenu';
import { scale } from 'react-native-size-matters';
import Main from './main';
import { Content,Footer,FooterTab,Button,Icon,Container,Header} from 'native-base';
import ProgressCircle from 'react-native-progress-circle';
import { Dimensions } from 'react-native'

class Home extends Component {
	constructor(props) {
		super(props);
		this.openDrawer = this.openDrawer.bind(this);
		this.closeDrawer = this.closeDrawer.bind(this);
	}

	openDrawer() {
		this.drawer.openDrawer();
	}

	closeDrawer() {
		this.drawer.closeDrawer();
	}

	render() {
		var { navigate } = this.props.navigation;
		
		return (
			<Container>
		<Header style={styles.container1}>
		<Text style={styles.container1}>Dashboard</Text>
		</Header>
				<Content style={{backgroundColor:'white'}}>
					<Main
						navigation={this.props.navigation}
						openDrawer={this.openDrawer}
						closeDrawer={this.closeDrawer}
					/>
			   <ScrollView>
	               <Text style={{padding:10,fontSize:16,color:'black'}}>Players</Text>
				<View style={{flexDirection:'row'}}>
					<View style={{backgroundColor:'goldenrod',borderRadius:8,width:100,height:70,margin:10,padding:10}}>
                    <Text style={{color: '#ffffff',justifyContent:'center', textAlign : 'center',textAlignVertical : 'center',alignSelf: 'center'}}>25</Text>
	                <Text style={{color: '#ffffff',justifyContent:'center',textAlign : 'center',textAlignVertical : 'center',alignSelf: 'center'}}>Active User</Text>
                    </View>
					<View style={{backgroundColor:'crimson',borderRadius:8,width:100,height:70,margin:10,padding:10}}>
                    <Text style={{color: '#ffffff',justifyContent:'center',textAlign : 'center',textAlignVertical : 'center',alignSelf: 'center'}}>05</Text>
	                <Text style={{color: '#ffffff',justifyContent:'center',textAlign : 'center',textAlignVertical : 'center',alignSelf: 'center'}}>Inactive User</Text>
                    </View>
					<View style={{backgroundColor:'dodgerblue',borderRadius:8,width:100,height:70,margin:10,padding:10}}>
                    <Text style={{color: '#ffffff',justifyContent:'center',textAlign : 'center',textAlignVertical : 'center',alignSelf: 'center'}}>13</Text>
	                <Text style={{color: '#ffffff',justifyContent:'center',textAlign : 'center',textAlignVertical : 'center',alignSelf: 'center'}}>New User</Text>
                    </View>
			    </View>
				<View style={{flexDirection:'row'}}>
				<Text style={{padding:10,fontSize:16,color:'black'}}>Monthly Occuring Revenue</Text>
				    <Text>  </Text>
				    <View style={{backgroundColor:'crimson',borderRadius:5,width:100,height:30,margin:10}}>
                    <Text style={{color: '#ffffff',justifyContent:'center', textAlign : 'center',textAlignVertical : 'center',alignSelf: 'center'}}>Rs.20,000</Text>
	                
                    </View>
				</View>
		<View style={{flexDirection:'row'}}>
		    <View style={{padding:10}}>
				<Text style={{padding:10,fontSize:10,color:'black',textAlign : 'center',textAlignVertical : 'center',alignSelf: 'center'}}>Rs.2500</Text>
				<ProgressCircle
            percent={30}
            radius={35}
            borderWidth={8}
            color="crimson"
            shadowColor="#999"
            bgColor="#fff"
            >
            <Text style={{ fontSize: 18 }}>{'May'}</Text>
            </ProgressCircle>
			</View>
			<View style={{padding:10}}>
				<Text style={{padding:10,fontSize:10,color:'black',textAlign : 'center',textAlignVertical : 'center',alignSelf: 'center'}}>Rs.2500</Text>
				<ProgressCircle
            percent={30}
            radius={35}
            borderWidth={8}
            color="crimson"
            shadowColor="#999"
            bgColor="#fff"
            >
            <Text style={{ fontSize: 18 }}>{'May'}</Text>
            </ProgressCircle>
			</View>
			<View style={{padding:10}}> 
				<Text style={{padding:10,fontSize:10,color:'black',textAlign : 'center',textAlignVertical : 'center',alignSelf: 'center'}}>Rs.2500</Text>
				<ProgressCircle
            percent={30}
            radius={35}
            borderWidth={8}
            color="crimson"
            shadowColor="#999"
            bgColor="#fff"
            >
            <Text style={{ fontSize: 18 }}>{'May'}</Text>
            </ProgressCircle>
			</View>
			<View style={{padding:10}}>
				<Text style={{padding:10,fontSize:10,color:'black',textAlign : 'center',textAlignVertical : 'center',alignSelf: 'center'}}>Rs.2500</Text>
				<ProgressCircle
            percent={30}
            radius={35}
            borderWidth={8}
            color="crimson"
            shadowColor="#999"
            bgColor="#fff"
            >
            <Text style={{ fontSize: 18 }}>{'May'}</Text>
            </ProgressCircle>
			</View>
		</View>
				</ScrollView>
				</Content>
				 
				  <Footer style={{left: 0,right: 0,bottom: 0,height: 56,backgroundColor:'white'}}>
                    <FooterTab style={{left: 0,right: 0,bottom: 0,height: 56,backgroundColor:'white'}}>
                        <Button 
						  onPress={() => this.navigate('home')}
						  >
                            <Icon name='ios-apps-outline' style={styles.iconStyle}/>
							<Text style={styles.title_text}>Dashboard</Text>
                        </Button>
                        <Button  onPress={() => this.navigate('customers')}>
                            <Icon name='ios-camera-outline' style={styles.iconStyle}/>
							<Text style={styles.title_text}>Customers</Text>
                        </Button>
                        <Button  onPress={() => this.navigate('invoices')}>
                            <Icon name='ios-contact-outline' style={styles.iconStyle} />
							<Text style={styles.title_text}>Invoice</Text>
                        </Button>
						    <Button  onPress={() => this.navigate('timesheet')}>
                            <Icon name='ios-compass' style={styles.iconStyle}/>
							<Text style={styles.title_text}>Timesheet</Text>
                        </Button>
						 <Button onPress={() => this.navigate('sidemenu')}>
                            <Icon name='more' style={styles.iconStyle}/>
							<Text style={styles.title_text}>More</Text>
                        </Button>		
                    </FooterTab>
                </Footer>
				
				
			</Container>
		);
	}

	navigate(screen_name) {
		this.props.navigation.navigate(screen_name);
	}
}

export default Home;

const styles = StyleSheet.create({
	 container1    : {
        backgroundColor : 'white',
		  justifyContent  : 'center',
        alignItems      : 'center',
		fontSize:scale(22),
		color:'#333333'
    },
	container_1               : {
		flex          : 1,
		flexDirection : 'row',
		marginTop     : 74,
		alignItems    : 'center'
	},
	container_2               : {
		flex          : 1,
		flexDirection : 'row'
	},
	touchableOpacityContainer : {
		height         : 150,
		flex           : 1,
		justifyContent : 'center',
		borderRadius   : 5,
		borderColor    : 'black',
		borderWidth    : 1,
		margin         : 8
	},
	  title_text                : {
        justifyContent    : 'center',
        alignSelf         : 'center',
        textAlign         : 'center',
        textAlignVertical : 'center',
		color:'grey',
		fontSize:scale(10)
    },
	    iconStyle                 : {
        textAlign         : 'center',
        textAlignVertical : 'center',
        alignSelf         : 'center',
		color:'grey'
    },
	    image                   : {
        width      : 600,
        height     : 600,
        flex       : 1,
        alignSelf  : 'center',
        resizeMode : 'contain'
    },  
	MainContainer: {
 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 
  },
 
	
  TextComponentStyle: {
 
    borderRadius: 5,
 
    // Set border width.
    borderWidth: 2,
 
    // Set border Hex Color Code Here.
    borderColor: '#FF5722',
 
    // Setting up Text Font Color.
    color: '#fff',
 
    // Setting Up Background Color of Text component.
    backgroundColor : '#CDDC39',
    
    // Adding padding on Text component.
    padding : 2,
 
    fontSize: 20,
 
    textAlign: 'center',
 
    margin: 10
  }
});
