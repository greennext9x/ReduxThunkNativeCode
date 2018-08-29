import React,{Component} from 'react'
import {View,StyleSheet,Text} from 'react-native'
import {CircleSnail} from 'react-native-progress';
import {connect} from 'react-redux';
import * as actions from './actions';
import _ from 'lodash';
import ButtonComp from "./components/ButtonComp";

class Main extends Component{
    fetchUser = () => this.props.fetchUserApi();
    cancelRequest = () => this.props.cancelRequestApi();
    render(){
        console.log(this.props);
        return(
            <View style={{
                flex: 1,
                width: '100%',
                justifyContent:'center'
            }}>
                {this.props.loading && <View style={styles.userInfo}>
                    <CircleSnail size={50}
                                 spinDuration={1000}
                                 color={['#00bcd4']}/>
                </View>}

                <View style={styles.userInfo}>
                    {_.isEmpty(this.props.userInfo) ?
                        <View>
                            <Text>* Please click GET USER INFO button to fetch data</Text>
                            <Text>* Click Increase button to add more 30 times</Text>
                        </View> :
                        <View style={styles.textBlock}>
                            <Text style={styles.textUserInfo}>
                                {`Name: ${this.props.userInfo.name}`}
                            </Text>
                            <Text style={styles.textUserInfo}>
                                {`Position: ${this.props.userInfo.position}`}
                            </Text>
                            <Text style={styles.textUserInfo}>
                                {`Email: ${this.props.userInfo.email}`}
                            </Text>
                        </View>
                    }
                </View>

                <View style={{flex: 1}}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width: '50%'}}>
                                <ButtonComp
                                    title="Get User Info"
                                    bgColor="#00bcd4"
                                    onPress={this.fetchUser}/>
                            </View>
                            <View style={{width: '50%'}}>
                                <ButtonComp
                                    title="Cancel request"
                                    bgColor="#9E9E9E"
                                    onPress={this.cancelRequest}/>
                            </View>

                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.userInfo,
    loading: state.loading
});

export default connect(mapStateToProps,actions)(Main)
const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: 'red'
    },
    userInfo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    textBlock: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: "center"
    },
    textUserInfo: {
        fontSize: 16,
        marginVertical: 4
    },
    btnStyle: {
        width: 100,
        height: 40,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: "red",
        backgroundColor: "#15c"
    },
});


