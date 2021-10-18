/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IMAGEDATA from '../../../assets/data/ImageDataDummy';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { COLORS, FONTS, icons, images, SIZES } from '../../../constants';
import { animatedStyles, scrollInterpolator } from '../../../utils/animations';
import Icons from '../../../constants/Icons';
import CommonButton from '../../components/CommonGradientButton';
import ArenaImagesFlatlist from '../../components/flatlistItems/ArenaImagesFlatlist';

const SLIDER_WIDTH = Dimensions.get('window').width;
// const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.84);
const ITEM_WIDTH = SLIDER_WIDTH;

export default function ArenaDetailsScreen() {
    const navigation = useNavigation();
    const renderImageFlatlist = (item) => (
        <ArenaImagesFlatlist item={item} key={item.index}
        />
    );
    const [activeSlide, setActiveSlide] = useState(0);
    return (
        <View style={{flex: 1}}>
            <ScrollView
                // contentContainerStyle={{flexGrow: 1, }}
                showsVerticalScrollIndicator={false}
                style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', zIndex: 1000, padding: 16 }}>
                    <Image source={icons.backIcon} style={styles.backIconSize} />
                </TouchableOpacity>
                <Carousel
                    active
                    data={IMAGEDATA}
                    renderItem={renderImageFlatlist}
                    keyExtractor={(_item, index) => index.toString()}
                    horizontal={true}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    inactiveSlideShift={0}
                    scrollInterpolator={scrollInterpolator}
                    slideInterpolatedStyle={animatedStyles}
                    useScrollView={true}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={0.95}
                    onSnapToItem={(index) => setActiveSlide(index)}
                />
                <View style={styles.paginationContainer}>
                    <Pagination
                        dotsLength={IMAGEDATA.length}
                        activeDotIndex={activeSlide}
                        dotStyle={styles.dotStyle}
                        inactiveDotStyle={styles.inactiveDotStyle}
                        containerStyle={{ width: 30 }}
                    />
                </View>
                <View style={styles.detailsContainer}>
                    <View style={styles.mainDetailsContainer}>
                        <View style={styles.headerTopContainer}>
                            <Text style={styles.titleText}>
                                The Gallant Club
                            </Text>
                            <View style={styles.ratingContainer}>
                                <Text style={styles.ratingText}>
                                    4.9
                                </Text>
                                <Image source={images.star} style={styles.starSize} />
                            </View>
                        </View>
                        <View style={styles.locationContainer}>
                            <Text style={styles.addressText}>
                                Sector 46,
                                Guruguram, Haryana
                            </Text>
                            <TouchableOpacity style={styles.directionContainer}>
                                <Image source={icons.directionIcon} style={styles.directionIconSize} />
                                <Text style={styles.directionText}>
                                    Get Direction
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.bodyText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa quis suspendisse pretium et nec.{'\n'}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa quis suspendisse pretium et nec.
                            </Text>
                        </View>
                        <View style={styles.facilitiesContainer}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={styles.facilityItemContainer}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={icons.checkMark} style={styles.checkMarkSize} />
                                        <Text style={styles.facilityItemText}>
                                            Parking
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={icons.checkMark} style={styles.checkMarkSize} />
                                        <Text style={styles.facilityItemText}>
                                            Lockers
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={icons.checkMark} style={styles.checkMarkSize} />
                                        <Text style={styles.facilityItemText}>
                                            Washrooms
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.facilityItemContainer}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={icons.checkMark} style={styles.checkMarkSize} />
                                        <Text style={styles.facilityItemText}>
                                            Drinking Water
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={icons.checkMark} style={styles.checkMarkSize} />
                                        <Text style={styles.facilityItemText}>
                                            Changing Rooms
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={icons.checkMark} style={styles.checkMarkSize} />
                                        <Text style={styles.facilityItemText}>
                                            CCTV
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.availableActivitiesContainer}>
                            <Text style={styles.titleText}>
                                Available Activities
                            </Text>
                            <ScrollView horizontal style={styles.availableActivitiesItems}>
                                <View style={styles.activityContainer}>
                                    <View style={styles.activityBookedLeftContainer}>
                                        <Image source={Icons.footballIcon} style={styles.activityIconSize} />
                                        <Text style={styles.activityText}>
                                            Football
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.activityContainer}>
                                    <View style={styles.activityBookedLeftContainer}>
                                        <Image source={Icons.badmintonIcon} style={styles.activityIconSize} />
                                        <Text style={styles.activityText}>
                                            Badminton
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.activityContainer}>
                                    <View style={styles.activityBookedLeftContainer}>
                                        <Image source={Icons.ttIcon} style={styles.activityIconSize} />
                                        <Text style={styles.activityText}>
                                            TT
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.activityContainer}>
                                    <View style={styles.activityBookedLeftContainer}>
                                        <Image source={Icons.basketBallIcon} style={styles.activityIconSize} />
                                        <Text style={styles.activityText}>
                                            Basketball
                                        </Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>


            </ScrollView>


            <View style={styles.buttonContainer}>
                <CommonButton onPress={() => console.log('pressed')} children="Book Now" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    detailsContainer: {
        flex: 1,
        // justifyContent: 'space-between',
    },
    mainDetailsContainer: {
        flex: 1,
        paddingHorizontal: SIZES.padding6,
    },
    dotStyle: {
        width: 8,
        height: 8,
        borderRadius: 5,
        marginHorizontal: 2.5,
        backgroundColor: COLORS.white,
    },
    inactiveDotStyle: {
        width: 5,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 2.5,
        backgroundColor: COLORS.white,
    },
    paginationContainer: { zIndex: 1000, alignItems: 'center', marginTop: -50, height: 50 },
    backIconSize: {
        width: 21,
        height: 24,
        resizeMode: 'contain',
    },

    headerTopContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: SIZES.padding2,
        paddingBottom: 12,
    },
    titleText: {
        fontSize: SIZES.header,
        fontFamily: FONTS.satoshi900,
        color: COLORS.white,
    },
    ratingContainer: {
        backgroundColor: COLORS.themePink,
        flexDirection: 'row',
        alignItems: 'center',
        width: 52,
        height: 22,
        borderRadius: 15,
        justifyContent: 'center',
    },
    ratingText: {
        fontSize: SIZES.h4,
        fontFamily: FONTS.satoshi500,
        color: COLORS.white,
    },
    starSize: {
        width: 12,
        height: 12,
        resizeMode: 'contain',
        marginLeft: 3,
    },
    locationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addressText: { width: 175, fontSize: 16, fontFamily: FONTS.satoshi400, color: COLORS.white },
    directionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    directionIconSize: {
        width: 20,
        height: 18,
        resizeMode: 'contain',
        marginRight: 6,
    },
    directionText: {
        fontSize: 14, fontFamily: FONTS.satoshi700, color: COLORS.white,
    },
    descriptionContainer: {
        paddingTop: SIZES.padding2,
    },
    bodyText: {
        fontSize: 14,
        fontFamily: FONTS.satoshi400,
        color: COLORS.white,
        lineHeight: 20,
        paddingBottom: SIZES.padding2,
    },
    facilitiesContainer: {

    },
    facilityItemContainer: {
        paddingRight: SIZES.paddingExtraLarge
    },
    facilityItemText: {
        fontSize: 16,
        fontFamily: FONTS.satoshi400,
        color: COLORS.white,
    },
    checkMarkSize: {
        width: 14,
        height: 14,
        resizeMode: 'contain',
        marginRight: 8,
    },
    availableActivitiesContainer: {
        paddingTop: SIZES.padding2,
    },
    availableActivitiesItems: { paddingVertical: 20, flexDirection: 'row', },
    activityContainer: { paddingRight: 18 },
    activityBookedLeftContainer: {
        width: 69,
        height: 87,
        backgroundColor: '#444B65',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 6,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    activityIconSize: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    activityText: {
        fontSize: 10,
        color: COLORS.white,
        fontFamily: FONTS.satoshi500,
    },
    buttonContainer: {
        paddingBottom: SIZES.padding2,
        paddingHorizontal: SIZES.padding6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.background
    },
});
