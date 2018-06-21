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
		<Text style={styles.container1}>Enrolments</Text>
		</Header>
                <Content style={styles.abc}>
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
                        <Thumbnail
                            source={{
                                uri :
                                    'https://www.louisvillewebgroup.com/sites/default/files/styles/team-member/public/avatar-circle-blue.png?itok=UmUsBb4f'
                            }}
							/>
							<Body style={styles.body}>
                    <Text style={styles.listItemNameText}>Customer</Text>
                    <Text note style={styles.listItemPlanText}>
							Monthly Coaching
                    </Text>
                    <Text note style={styles.listItemNextBillingText}>
                        Next Billing on :01/03/2018
                    </Text>
					</Body>
                </Left>

                <Right>
                    <Text style={styles.rightAmountText}>$ 4000</Text>

                    {paystatus === 1 ? (
                        <Text note style={styles.payStatusActive}>
                            Active
                        </Text>
                    ) : null}
                    {paystatus === 2 ? (
                        <Text note style={styles.payStatusEnded}>
                            Ended
                        </Text>
                    ) : null}
                    {paystatus === 3 ? (
                        <Text note style={styles.payStatusFuture}>
                            Future
                        </Text>
                    ) : null}
                </Right>
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
	 container1    : {
        backgroundColor : 'white',
		  justifyContent  : 'center',
        alignItems      : 'center',
		fontSize:scale(22),
		color:'#333333'
    },
	    iconStyle                 : {
        textAlign         : 'center',
        textAlignVertical : 'center',
        alignSelf         : 'center',
		color:'grey'
    },
    listItemLeft            : {},
    listItemNameText        : {
		paddingLeft: 4,
        fontSize : scale(18),
		color:'black'
    },
    listItemPlanText        : { paddingLeft: 4, fontSize: scale(10),color:'grey'},
    listItemNextBillingText : { fontSize: 12, paddingLeft: 4, fontSize: scale(10),color:'grey' },
    rightAmountText         : {
        fontSize     : scale(18),
        marginBottom : scale(8)
    },
    payStatusActive         : { color: 'darkgreen', fontSize: scale(11) },
    payStatusEnded          : { color: 'darkorange', fontSize: scale(11) },
    payStatusFuture         : { color: 'darkblue', fontSize: scale(11) },
	abc:{
		backgroundColor:'white'
	},
	body         : {
        flex       : 1,
        alignItems : 'flex-start'
    }
});
