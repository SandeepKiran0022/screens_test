import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import Toolbar from './toolbar';
import {
    Container,
    Button,
    Header,
    Content,
    Card,
    CardItem,
    Icon,
    Body,
    Item,
    Input,
    Left,
    Right,
    Thumbnail,
    List,
    ListItem,
	Footer, FooterTab
} from 'native-base';
import { scale, moderateScale } from 'react-native-size-matters';

import SideMenu from './sidemenu';

class Enrolments extends Component {
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
       
        return (
      <Container>
		<Header style={styles.container1}>
		<Text style={styles.container1}>Timesheet</Text>
		</Header>
                <Content style={{backgroundColor:'white'}}>
                    <List style={styles.listStyle}>
                        {this.renderListItem(1)}
                        {this.renderListItem(2)}
                        {this.renderListItem(1)}
                        {this.renderListItem(3)}
                        {this.renderListItem(1)}
                        {this.renderListItem(2)}
                        {this.renderListItem(1)}
                        {this.renderListItem(3)}
                        {this.renderListItem(1)}
                    </List>
                </Content>
                {this.props.hideFooter?null:(
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
                </Footer>)}
            </Container>
        );
		
    }
	    navigate(screen_name) {
        this.props.navigation.navigate(screen_name);
    }

    renderListItem(paystatus) {
        return (
            <ListItem>
                <Left style={styles.listItemLeft}>
                    <Text style={styles.listItemNameText}>Kilgore Trout</Text>
                    <Text note style={styles.listItemPlanText}>
                        Check in        Check out 
                    </Text>
                    <Text note style={styles.listItemNextBillingText}>
                        09:00 AM       11:00 AM
                    </Text> 
                </Left>

                <View style={styles.listItemR}>
                    <Text style={styles.rightAmountText}>Venue: Bahu Academy</Text>
					<Text style={styles.listItemNextBillingText}>
                        Date: 02/12/2017
                    </Text> 
                </View>
            </ListItem>
        );
    }
}

export default Enrolments;

const styles = StyleSheet.create({
    list                    : {
        width : Dimensions.get('screen').width - scale(8)
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
    listItemLeft            : { flexDirection: 'column' },
    listItemNameText        : {
        fontSize : scale(18),
		color:'black'
    },
	 container1    : {
        backgroundColor : 'white',
		  justifyContent  : 'center',
        alignItems      : 'center',
		fontSize:scale(22),
		color:'#333333'
    },
	listItemR:
	{
		justifyContent    : 'center',
        alignSelf         : 'center',
        textAlign         : 'center',
		
	},
    listItemPlanText        : { paddingTop: 4, fontSize: scale(10),color:'black' },
    listItemNextBillingText : { fontSize: 8, paddingTop: 4, fontSize: scale(10),color:'grey' },
    rightAmountText         : {
        fontSize     : scale(8),
        paddingTop: 4,
		color:'black'
		
    },
    payStatusActive         : { color: 'darkgreen', fontSize: scale(11) },
    payStatusEnded          : { color: 'darkorange', fontSize: scale(11) },
    payStatusFuture         : { color: 'darkblue', fontSize: scale(11) }
});
