import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, DrawerLayoutAndroid, Dimensions,Image,Picker } from 'react-native';
import Toolbar from './toolbar';

import SideMenu from './sidemenu';
import { Icon,Button,Footer,Content,FooterTab,Container,Header} from 'native-base';
import { scale } from 'react-native-size-matters';
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings([''])

class Trainers extends Component {
    constructor(props) {
        super(props);
        this.openDrawer = this.openDrawer.bind(this);
    }

    openDrawer() {
        this.drawer.openDrawer();
    }

    render() {
       
        return (
		<Container>
		<Header style={styles.container1}>
		<Text style={styles.container1}>Plans</Text>
		</Header>
                <Content style={styles.abc}>
            <View
                style={{
                    flex          : 1,
                    height        : Dimensions.get('screen').height,
                    flexDirection : 'column',
					color:'white'
                }}>
                <View style={styles.container_1}>
                    <TouchableOpacity
                        style={styles.touchableOpacityContainer}
                        >
                              <Image
                                source={{
                                    uri :
                                        'https://thumb.ibb.co/jzznXo/es.png'
                                }}
                                style={styles.image}
                            />
							<Text style={[ styles.title_text1]}>Bahu Acad</Text>
							
                    <Icon type='FontAwesome' name='location-arrow' style={styles.phoneIcon}>
					<Text style={styles.T}> Pallavaram</Text>
					</Icon>			
					<Icon type='FontAwesome' name='birthday-cake' style={styles.phoneIcon}>
					<Text style={styles.T}> 2/100</Text>
					</Icon>
					<Icon type='FontAwesome' name='birthday-cake' style={styles.phoneIcon}>
					<Text style={styles.T}> 07 Feb - 10 Apr 2018</Text>
					</Icon>
					<Icon type='FontAwesome' name='phone' style={styles.phoneIcon}>
					<Text style={styles.T}> 12:00 PM to 03:00 PM</Text>
					</Icon>
					
					<Icon type='FontAwesome' name='envelope' style={styles.phoneIcon}>
					<Text style={styles.T}> 1200 -Every Month</Text>
					</Icon>
                    </TouchableOpacity>
                   <TouchableOpacity
                        style={styles.touchableOpacityContainer}
                        >
						 <Image
                                source={{
                                    uri :
                                        'https://thumb.ibb.co/jzznXo/es.png'
                                }}
                                style={styles.image}
                            />
							<Text style={[ styles.title_text1]}>Bahu Acad</Text>
					<Icon type='FontAwesome' name='location-arrow' style={styles.phoneIcon}>
					<Text style={styles.T}> Pallavaram</Text>
					</Icon>			
					<Icon type='FontAwesome' name='birthday-cake' style={styles.phoneIcon}>
					<Text style={styles.T}> 2/100</Text>
					</Icon>
					<Icon type='FontAwesome' name='birthday-cake' style={styles.phoneIcon}>
					<Text style={styles.T}> 07 Feb - 10 Apr 2018</Text>
					</Icon>
					<Icon type='FontAwesome' name='phone' style={styles.phoneIcon}>
					<Text style={styles.T}> 12:00 PM to 03:00 PM</Text>
					</Icon>
					
					<Icon type='FontAwesome' name='envelope' style={styles.phoneIcon}>
					<Text style={styles.T}> 1200 -Every Month</Text>
					</Icon>
                    </TouchableOpacity>
                </View>

                <View style={styles.container_2}>
                   <TouchableOpacity
                        style={styles.touchableOpacityContainer}
                        >
                               <Image
                                source={{
                                    uri :
                                        'https://thumb.ibb.co/jzznXo/es.png'
                                }}
                                style={styles.image}
                            />
							<Text style={[ styles.title_text1]}>Bahu Acad</Text>
							
                   <Icon type='FontAwesome' name='location-arrow' style={styles.phoneIcon}>
					<Text style={styles.T}> Pallavaram</Text>
					</Icon>			
					<Icon type='FontAwesome' name='birthday-cake' style={styles.phoneIcon}>
					<Text style={styles.T}> 2/100</Text>
					</Icon>
					<Icon type='FontAwesome' name='birthday-cake' style={styles.phoneIcon}>
					<Text style={styles.T}> 07 Feb - 10 Apr 2018</Text>
					</Icon>
					<Icon type='FontAwesome' name='phone' style={styles.phoneIcon}>
					<Text style={styles.T}> 12:00 PM to 03:00 PM</Text>
					</Icon>
					
					<Icon type='FontAwesome' name='envelope' style={styles.phoneIcon}>
					<Text style={styles.T}> 1200 -Every Month</Text>
					</Icon>
					
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.touchableOpacityContainer}
                        >
						 <Image
                                source={{
                                    uri :
                                        'https://thumb.ibb.co/jzznXo/es.png'
                                }}
                                style={styles.image}
                            />
							<Text style={[ styles.title_text1]}>Bahu Acad</Text>
							
                    <Icon type='FontAwesome' name='location-arrow' style={styles.phoneIcon}>
					<Text style={styles.T}> Pallavaram</Text>
					</Icon>			
					<Icon type='FontAwesome' name='birthday-cake' style={styles.phoneIcon}>
					<Text style={styles.T}> 2/100</Text>
					</Icon>
					<Icon type='FontAwesome' name='birthday-cake' style={styles.phoneIcon}>
					<Text style={styles.T}> 07 Feb - 10 Apr 2018</Text>
					</Icon>
					<Icon type='FontAwesome' name='phone' style={styles.phoneIcon}>
					<Text style={styles.T}> 12:00 PM to 03:00 PM</Text>
					</Icon>
					
					<Icon type='FontAwesome' name='envelope' style={styles.phoneIcon}>
					<Text style={styles.T}> 1200 -Every Month</Text>
					</Icon>
                    </TouchableOpacity>
                </View>
            </View>
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

export default Trainers;

const styles = StyleSheet.create({
    container_1               : {
        flex          : 0,
        flexDirection : 'row',
        
        padding       : scale(8)
    },
    container_2               : {
        flex          : 1,
        flexDirection : 'row',
        padding       : scale(8)
    },
    title_text                : {
        fontSize          : scale(10),
		color:'grey',
		padding:scale(5),
        textAlign         : 'left'
    },
	 title_text1               : {
        fontSize          : scale(18),
        justifyContent    : 'center',
        alignSelf         : 'center',
        textAlign         : 'center',
        textAlignVertical : 'center',
		color:'black',
		padding:scale(5)
    },
	 container1    : {
        backgroundColor : 'white',
		  justifyContent  : 'center',
        alignItems      : 'center',
		fontSize:scale(22),
		color:'#333333'
    },
    touchableOpacityContainer : {
        height         : 200,
        width          : 170,
        flex           : 1,
        borderRadius   : scale(3),
        borderColor    : 'black',
        borderWidth    : 1,
        marginTop      : scale(35),
        marginRight    : scale(25),
        marginLeft     : scale(15)
    },
    iconStyle                 : {
        textAlign         : 'center',
        textAlignVertical : 'center',
        alignSelf         : 'center',
		color:'grey'
    },
    iconContainer             : {
        width           : scale(62),
        height          : scale(62),
        justifyContent  : 'center',
        alignItems      : 'center',
        borderRadius    : scale(40)
    },
	  phoneIcon                 : {
        fontSize : scale(10),
        color    : 'grey',
		textAlign:'left',
		padding: scale(5),
		
    },
	image              : { width: 30, height: 30, marginTop: 8,justifyContent : 'center',
        textAlignVertical : 'center',
        alignSelf         : 'center'
        },
	T:{
		color:'grey',
		textAlign:'left',
		fontSize:scale(9),	
	},
	abc:
	{
	backgroundColor:'white'	
	}
});
