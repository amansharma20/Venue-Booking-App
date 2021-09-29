import React, { useState } from 'react';
import {
    Text,
    View,
    StatusBar,
    StyleSheet,
    Image,
    TextInput,
    Modal,
    ScrollView
} from 'react-native';
import Images from '../../../constants/Images';
import { Responsive } from '../../../constants/Layout';
import { COLORS, FONTS, SIZES } from '../../../constants/Theme';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/core';
import * as yup from 'yup';
import CommonButton from '../../components/CommonGradientButton';
import { icons, images } from '../../../constants';

export default function PersonalDetails() {
    const navigation = useNavigation();

    const schema = yup.object().shape({
        firstName: yup.string().required('First Name' + ' ' + 'is required'),
        lastName: yup.string().required('Last Name' + ' ' + 'is required'),
        email: yup.string().required('Email' + ' ' + 'is required'),
        dob: yup.number().required('Date of Birth' + ' ' + 'is required'),
    });

    const personalDetails = data => {
        // CommonLoading.show();
        const personalDetailsData = {
            FirstName: data.firstName,
            LastName: data.lastName,
            Email: data.email,
            DOB: data.dob,
        };
        console.log(personalDetailsData);
        // navigation.navigate('Home', {
        //     personalDetailsData
        // });
        setShowSuccessModal(true);
        setTimeout(function () {
            navigation.navigate('Home', {
                personalDetailsData
            });
          }, 1000);
    };

    const [showSuccessModal, setShowSuccessModal] = useState(false);


    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 40 }}
            // style={styles.container}
            >
                <StatusBar hidden={false} backgroundColor={COLORS.background} barStyle={'light-content'} />

                <View style={styles.body}>

                    <View style={{ alignItems: 'center', paddingTop: SIZES.padding2 }}>
                        <Image source={Images.gallantLogo} style={styles.logoImage} />
                        <View style={styles.textContainer}>
                            <Text style={styles.logoText}>
                                Let’s play sports at
                            </Text>
                            <Text style={[styles.logoText, { fontFamily: FONTS.satoshi700 }]}>
                                Premium Arenas
                            </Text>
                        </View>

                    </View>

                    <View style={styles.headerMain}>
                        <Text style={styles.headerText}>
                            Personal Details
                        </Text>
                        <Text style={[styles.headerText, { fontFamily: FONTS.satoshi400, textAlign: 'center', fontSize: SIZES.h2 }]}>
                            Tell us bit more about yourself
                        </Text>
                    </View>

                    <View style={styles.loginContainer}>

                        <Formik
                            validationSchema={schema}
                            initialValues={{
                                firstName: 'Aman',
                                lastName: 'Sharma',
                                email: 'amanacts20@gmail.com',
                                dob: '2000',
                            }}
                            onSubmit={values => personalDetails(values)}
                        >
                            {({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                values,
                                errors,
                                touched,
                            }) => (
                                <>
                                    <View style={{ paddingHorizontal: SIZES.paddingExtraLarge }}>
                                        <View>
                                            <Text style={styles.textInputTitleFirstName}>
                                                First Name
                                            </Text>
                                        </View>
                                        <View style={styles.checkMarkContainer}>
                                            <TextInput
                                                name="firstName"
                                                style={styles.textInput}
                                                onChangeText={handleChange('firstName')}
                                                onBlur={handleBlur('firstName')}
                                                value={values.firstName}
                                                keyboardType='default'
                                                maxLength={20}
                                            />
                                            {!errors.firstName && touched.firstName && (
                                                <Image source={icons.tick} style={styles.checkMarkIcon} />
                                            )}
                                        </View>
                                        {errors.firstName && touched.firstName && (
                                            <View style={styles.errorContainer}>
                                                <Text style={styles.error}>{errors.firstName}</Text>
                                            </View>
                                        )}

                                        <View style={styles.textInputTitleContainer}>
                                            <Text style={styles.textInputTitle}>
                                                Last Name
                                            </Text>
                                        </View>
                                        <View style={styles.checkMarkContainer}>
                                            <TextInput
                                                name="lastName"
                                                style={styles.textInput}
                                                onChangeText={handleChange('lastName')}
                                                onBlur={handleBlur('lastName')}
                                                value={values.lastName}
                                                keyboardType='default'
                                                maxLength={20}
                                            />
                                            {!errors.lastName && touched.lastName && (
                                                <Image source={icons.tick} style={styles.checkMarkIcon} />
                                            )}
                                        </View>
                                        {errors.lastName && touched.lastName && (
                                            <View style={styles.errorContainer}>
                                                <Text style={styles.error}>{errors.lastName}</Text>
                                            </View>
                                        )}

                                        <View style={styles.textInputTitleContainer}>
                                            <Text style={styles.textInputTitle}>
                                                Email
                                            </Text>
                                        </View>
                                        <View style={styles.checkMarkContainer}>
                                            <TextInput
                                                name="email"
                                                style={styles.textInput}
                                                onChangeText={handleChange('email')}
                                                onBlur={handleBlur('email')}
                                                value={values.email}
                                                keyboardType='default'
                                                maxLength={20}
                                            />
                                            {!errors.email && touched.email && (
                                                <Image source={icons.tick} style={styles.checkMarkIcon} />
                                            )}
                                        </View>
                                        {errors.email && touched.email && (
                                            <View style={styles.errorContainer}>
                                                <Text style={styles.error}>{errors.email}</Text>
                                            </View>

                                        )}

                                        <View style={styles.textInputTitleContainer}>
                                            <Text style={styles.textInputTitle}>
                                                Date of Birth
                                            </Text>
                                        </View>
                                        <View style={styles.checkMarkContainer}>
                                            <TextInput
                                                name="dob"
                                                style={styles.textInput}
                                                onChangeText={handleChange('dob')}
                                                onBlur={handleBlur('dob')}
                                                value={values.dob}
                                                keyboardType='default'
                                                maxLength={20}
                                            />
                                            {!errors.dob && touched.dob && (
                                                <Image source={icons.tick} style={styles.checkMarkIcon} />
                                            )}
                                        </View>
                                        {errors.dob && touched.dob && (
                                            <View style={styles.errorContainer}>
                                                <Text style={styles.error}>{errors.dob}</Text>
                                            </View>
                                        )}
                                    </View>

                                    <View style={{ marginTop: 60, paddingHorizontal: 34 }}>
                                        <CommonButton
                                            onPress={handleSubmit}
                                            children="Confirm" />
                                    </View>


                                </>
                            )}
                        </Formik>
                    </View>
                </View>
                {showSuccessModal && (
                    <Modal
                        animationType="fade"
                        transparent={true}
                        showModal={showSuccessModal}
                        backgroundColor="black"
                        onRequestClose={() => setShowSuccessModal(false)}
                        statusBarTranslucent
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalBody}>
                                <View>
                                    <Image source={Images.success} style={styles.modalImage} />
                                </View>
                                <View style={{paddingVertical: 20}}>
                                    <Text style={styles.successText}>
                                        Success!
                                    </Text>
                                </View>
                                <View>
                                    <Text style={styles.successSubText}>
                                        Your account has been created
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </Modal>
                )}
            </ScrollView>
        </View>


    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    body: {
        flex: 1,
        // padding: SIZES.paddingExtraLarge,
        // paddingTop: SIZES.paddingExtraLarge,
        backgroundColor: COLORS.background,
    },
    headerMain: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 24,
    },
    logoImage: {
        width: Responsive.width(136),
        height: Responsive.height(146),
    },
    textContainer: {
        flexDirection: 'row',
        paddingTop: SIZES.padding1,
    },
    logoText: {
        fontFamily: FONTS.satoshi400,
        color: '#FFFFFF',
        marginRight: 3,
        fontSize: Responsive.font(SIZES.h2),
    },
    loginContainer: {
        // backgroundColor: 'red'
    },
    headerText: {
        fontSize: SIZES.header,
        fontFamily: FONTS.satoshi900,
        color: COLORS.white,
    },
    textInputTitleContainer: {
        marginTop: 12
    },
    textInput: {
        marginTop: SIZES.h1,
        color: COLORS.white,
        fontSize: SIZES.h2,
        height: Responsive.height(50),
        fontFamily: FONTS.satoshi400,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.white,
    },
    checkMarkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 10,
        marginBottom: 10,
    },
    checkMarkIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginLeft: -28,
        tintColor: '#FFFFFF',
        marginTop: 30
    },
    error: {
        // padding: 4,
        color: '#cc0000',
        marginBottom: -24,
    },
    errorContainer: {
        marginTop: 18,
    },
    textInputTitle: {
        color: COLORS.white,
        fontFamily: FONTS.satoshi700,
        fontSize: SIZES.h3,
        paddingTop: SIZES.padding2,
    },
    textInputTitleFirstName: {
        color: COLORS.white,
        fontFamily: FONTS.satoshi700,
        fontSize: SIZES.h3,
        // paddingTop: SIZES.padding2,
    },
    termsTextContainer: {
        // flexDirection: 'row',
        paddingTop: SIZES.h3,
    },
    termsText: {
        color: COLORS.white,
        textAlign: 'center',
        fontSize: 12,
        fontFamily: FONTS.satoshi400,
    },
    successText: {
        color: COLORS.white,
        fontFamily: FONTS.satoshi900,
        fontSize: SIZES.largeTitle,
    },
    successSubText: {
        color: COLORS.white,
        fontFamily: FONTS.satoshi500,
        fontSize: SIZES.h2,
    },
    modalBody: {
        backgroundColor: COLORS.background,
        alignItems: 'center',
        paddingHorizontal: 26,
        paddingVertical: 50,
        borderRadius: 15,
        justifyContent: 'space-between',
        elevation: 5
    },
    modalContainer: {
        backgroundColor: COLORS.modalBackground,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
});