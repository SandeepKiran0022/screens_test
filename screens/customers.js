import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ListView, StyleSheet } from 'react-native';
import Toolbar from './toolbar';

import SideMenu from './sidemenu';
import { SearchBar } from 'react-native-elements'
import TabOne from './enrolments';
import TabTwo from './enrolments';
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
	 InputGroup,
		Footer, FooterTab,
		Tabs
} from 'native-base';
import { scale } from 'react-native-size-matters';

const datas = [
    { name: 'Cust', id: '222', active: true },
    { name: 'Cust', id: '222', active: true },
    { name: 'Bt', id: '222', active: false },
    { name: 'ABC', id: '222', active: true },
	 { name: 'Cust', id: '222', active: true },
    { name: 'Cust', id: '222', active: true },
    { name: 'BT', id: '222', active: false },
    { name: 'ABC', id: '222', active: true }
];

class Customers extends React.PureComponent {
    constructor(props) {
        super(props);
        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            basic        : true,
            listViewData : datas
        };
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
		<Text style={styles.container1}>Customers</Text>
		</Header>
                    <Content style={styles.container}>
                    <List
                        noBorder={true}
                        style={styles.list}
                        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={(data) => this.renderListItem(data)}
                        renderLeftHiddenRow={(data) => (
                            <Button style={styles.button} onPress={() => alert('Call')}>
                                <Icon active type='FontAwesome' name='phone' />
                            </Button>
                        )}
                        renderRightHiddenRow={(data, secId, rowId, rowMap) => (
                            <Button style={styles.button} danger onPress={() => alert('SMS')}>
                                <Icon active type='MaterialIcons' name='textsms' />
                            </Button>
                        )}
                        leftOpenValue={75}
                        rightOpenValue={-75}
                    />
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

    renderListItem(data) {
        return (
            <View style={styles.listItem}>
                <ListItem noBorder onPress={() => this.props.navigation.navigate('customer_details')}>
                    {data.active ? <View style={styles.activeView} /> : <View style={styles.inactiveView} />}
                    <Left style={{ paddingLeft: 4 }}>
                        <Thumbnail
                            source={{
                                uri :
                                    'https://www.louisvillewebgroup.com/sites/default/files/styles/team-member/public/avatar-circle-blue.png?itok=UmUsBb4f'
                            }}
                        />
                        <Body style={styles.body}>
                            <Text style={styles.nameText}>{data.name}</Text>
                            <Text style={styles.custId} note>
                                Cust ID: {data.id}
                            </Text>
                        </Body>
                    </Left>
					 <Right>
                    <Text style={styles.rightAmountText}>$ 1200</Text>
					<Text style={styles.rightAmountText1}>Due</Text>
					</Right>
                </ListItem>
            </View>
        );
    }
}

export default Customers;

const styles = StyleSheet.create({
	 rightAmountText         : {
        fontSize     : scale(13)
        
    },
	 rightAmountText1        : {
        fontSize     : scale(13),
        
		color:'crimson'
    },
    container    : {
        backgroundColor : 'white'
    },
	 container1    : {
        backgroundColor : 'white',
		  justifyContent  : 'center',
        alignItems      : 'center',
		fontSize:scale(22),
		color:'#333333'
    },
    activeView   : {
        position        : 'absolute',
        marginBottom    : 40,
        height          : 12,
        width           : 12,
        borderRadius    : 6,
        marginLeft      : 46,
        borderColor     : '#E9EBF1',
        borderWidth     : 2,
        alignSelf       : 'flex-start',
        marginTop       : 18,
        backgroundColor : 'lightgreen',
        justifyContent  : 'center',
        alignItems      : 'center',
        zIndex          : 1000
    },
    inactiveView : {
        position        : 'absolute',
        marginBottom    : 40,
        height          : 12,
        width           : 12,
        borderRadius    : 6,
        borderColor     : '#E9EBF1',
        borderWidth     : 2,
        marginLeft      : 46,
        alignSelf       : 'flex-start',
        marginTop       : 18,
        backgroundColor : 'red',
        justifyContent  : 'center',
        alignItems      : 'center',
        zIndex          : 1000
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
    button       : { padding: 4 },
    nameText     : {
        fontSize    : 24,
        paddingLeft : 4,
		color:'black'
    },
    custId       : {
        paddingLeft : 6
    },
    listItem     : {
        borderBottomColor : 'lightgrey',
        borderBottomWidth : 1,
        paddingBottom     : scale(4)
    },
    body         : {
        flex       : 1,
        alignItems : 'flex-start'
    }
});
