import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView,Button, Image, TouchableOpacity } from 'react-native'
import React, { useState,useContext } from 'react'
import { Colors, Fonts, Sizes,images } from '../constants/styles';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import SvgIcon from '../assets/i.png';
import { TextInput } from 'react-native-paper';

import DateTimePicker from '@react-native-community/datetimepicker';


const AddExpensesScreen = ({ navigation }) => {

    const [date, setDate] = useState(new Date(Date.now()));
    const [isPickerShow, setIsPickerShow] = useState(false);

      
    const showPicker = () => {
        setIsPickerShow(true);
      };
    
      const onChange = (event, value) => {
        setDate(value);
        if (Platform.OS === 'android') {
          setIsPickerShow(false);
        }
      };
    const [state, setState] = useState({
        Title: '',
        Amount: '',
       
    })

    const { Title, Amount,  } = state;
    const [message,setMessage] =useState('');

    const updateState = (data) => setState((state) => ({ ...state, ...data }));

    
    const handleSigup =()=>{
        handleMessage(null);
console.log(date);
        if(Title==''||Amount==''||Salary==''||DueDate=='')
        handleMessage('fill in the fields');

        else{
        handleMessage(null);
       }
    }
    const handleMessage =(message)=>{
        setMessage(message);
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1,marginBottom:50 }}>
                {backArrow()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {header()}
                    {TitleField()}
                    {AmountField()}
                    {DueDateField()}
                    {Messageinfo()}
                    {signupButton()}
                </ScrollView>
            </View>
        </SafeAreaView>
    )

    
    function Messageinfo() {
        return (
            <TouchableOpacity
                activeOpacity={0.99}
                style={{
                margin:Sizes.fixPadding}}
            >
                <Text style={{ ...Fonts.grayColor14SemiBold,alignItems:'center' }}>
                    {message}
                </Text>
            </TouchableOpacity>
        )
    }
   

    

    

    function signupButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.99}
                onPress={() => handleSigup()}
                style={styles.buttonStyle}
            >
                <Text style={{ ...Fonts.whiteColor16Bold }}>
                Add Expenses
 
                </Text>
            </TouchableOpacity>
        )
    }

 

   
    function DueDateField() {
        return (
            <View style={{...styles.textFieldWrapStyle,flex:1,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
               <TextInput
                 label='Due Date'
                 mode='outline'
                 placeholder='Due Date'
                    value={date.toUTCString()}
                    style={{ ...Fonts.blackColor14Regular ,backgroundColor: Colors.whiteColor,}}
                    selectionColor={Colors.primaryColor}
                    placeholderTextColor={Colors.DARK_FIVE}
                    editable={false}
                />

{!isPickerShow && (
            <TouchableOpacity
                    activeOpacity={0.99}
                    onPress={showPicker}
                    style={{ flexDirection:'row' , alignItems: 'center' }}
                >
<MaterialIcons name="date-range" size={24} color={Colors.primaryColor} />
</TouchableOpacity>
)}
<View>
      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'default' : 'default'}
          onChange={onChange}
          style={styles.datePicker}
        />
      )}
     
            </View>
            </View>
        )}
    
   

        

    function TitleField() {
        return (
            <View style={styles.textFieldWrapStyle}>
                <TextInput
                 label='Title'
                 mode='outline'
                 placeholder='Title'
                    value={Title}
                    onChangeText={(text) => updateState({ Title: text })}
                    style={{ ...Fonts.blackColor14Regular ,backgroundColor: Colors.whiteColor,}}
                    selectionColor={Colors.primaryColor}
                    placeholderTextColor={Colors.DARK_FIVE}
                />
            </View>
        )
    }
    function AmountField() {
        return (
            <View style={styles.textFieldWrapStyle}>
                <TextInput
                 label='Amount'
                 mode='outline'
                 placeholder='Amount'
                 
                    value={Amount}
                    onChangeText={(text) => updateState({ Amount: text })}
                    style={{ ...Fonts.blackColor16Bold,            backgroundColor: Colors.whiteColor,
                    }}
                    selectionColor={Colors.primaryColor}
                    placeholderTextColor={Colors.DARK_FIVE}
                />
            </View>
        )
    }


    function header() {
        return (
            <View style={styles.loginIcon}>
                <Image
                    source={SvgIcon}
                    style={{ width: 300.0, height: 300.0 }}
                />            
                <Text style={styles.headerWrapStyle}>
                Add Expenses
                </Text>
                </View>
              
        )
    }

    function backArrow() {
        return (
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'
            ,padding:20,marginBottom:20,alignItems:'center'}}>

<MaterialIcons
                name={"arrow-back"}
                size={30}
                color={Colors.primaryColor}
                style={{ margin: Sizes.fixPadding * 3.0, alignSelf: 'flex-start' }}
                onPress={() => navigation.pop()}
            />
<Ionicons name="person-circle-outline" size={30} color={Colors.primaryColor} />                   

            </View>
            
        )
    }
}

export default AddExpensesScreen;

const styles = StyleSheet.create({
    loginIcon: {
        alignSelf: 'center',
        paddingHorizontal:20,
        marginTop:-20,
      },
    headerWrapStyle: {
        marginBottom: Sizes.fixPadding * 2.0,
        textAlign: 'center',
        ...Fonts.primaryColor24SemiBold
    },
    textFieldWrapStyle: {
        borderColor: Colors.grayColor,
        borderRadius: Sizes.fixPadding - 2.0,
        padding: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 2.0,
    },
    btnContainer: {
        paddingHorizontal:10,
        backgroundColor:Colors.primary4
      },
      // This only works on iOS
      datePicker: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        bottom:-10,
      },

    buttonStyle: {
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.fixPadding*2,
        paddingVertical: Sizes.fixPadding + 5.0,
        marginHorizontal: Sizes.fixPadding * 3.0,
        marginTop: Sizes.fixPadding * 3.5,
        marginBottom: Sizes.fixPadding * 2.0,
    },
    passwordFieldStyle: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 0.0,
    },
    socialMediaIconWrapStyle: {
        width: 60.0,
        height: 45.0,
        borderRadius: 20.0,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Sizes.fixPadding - 5.0,
        elevation: 3.0,
    },
    
    alreadyAccountTextStyle: {
        textAlign: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding,
        ...Fonts.grayColor16Regular
    },
    orText: {
        fontSize: 15,
        lineHeight: 15 * 1.4,
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.POPPINS_BOLD,
        marginLeft: 5,
        alignSelf: 'center',
      },
      facebookButton: {
        backgroundColor: Colors.FABEBOOK_BLUE,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 8,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      googleButton: {
        backgroundColor: Colors.GOOGLE_BLUE,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      },
      signinButtonLogo: {
        height: 40,
        width: 40,
      },
      signinButtonLogoContainer: {
        width: 20.0,
        height: 10.0,
        borderRadius: 20.0,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Sizes.fixPadding - 5.0,
        elevation: 3.0,
      },
      socialButtonsContainer: {
        width: 40.0,
        height: 20.0,
        borderRadius: 20.0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:Colors.DEFAULT_WHITE
      },
      socialSigninButtonText: {
        color: Colors.DEFAULT_WHITE,
        fontSize: 16,
        lineHeight: 13 * 1.4,
        fontFamily:Fonts.POPPINS_MEDIUM,
        padding: 2,
        right: 15,

      },
})