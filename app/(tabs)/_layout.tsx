import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Text } from '@react-navigation/elements'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, View } from 'react-native'

const TabIcon = ({ focused, icon, title }: any) => {

    if (focused) {
        return (
        <ImageBackground
            source={images.highlight}
            className='flex flex-row w-full flex-1 min-w-[90px] min-h-14 mt-[10px] justify-center items-center rounded-full overflow-hidden'
        >
            <Image source={icon} tintColor="#151312" className='size-5' />
            <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>
        </ImageBackground>
    )
    } else {
        return (
            <View>
                <Image 
                    source={icon} 
                    tintColor="#A8B5DB" 
                    className='size-5'
                />
            </View>
        )
    }
    
}

const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                tabBarStyle: {
                    backgroundColor: '#0f0D23',
                    borderRadius: 50,
                    marginHorizontal: 10,
                    marginBottom: 30,
                    height: 49,
                    position: 'absolute',
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: '#0f0D23'
                }
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.home}
                            title="Home"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='save'
                options={{
                    title: 'Save',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.save}
                            title="Save"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.search}
                            title="Search"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.person}
                            title="Profile"
                        />
                    )
                }}
            />
        </Tabs>
    )
}

export default _layout