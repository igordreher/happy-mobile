import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import OrphanagesMap from './pages/OrphanagesMap'
import OrphanageDetails from './pages/OrphanageDetails'
import SetPosition from './pages/CreateOrphanage/SetPosition'
import OrphanageData from './pages/CreateOrphanage/OrphanageData'

const { Navigator, Screen } = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen
                    name='OrphanagesMap'
                    component={OrphanagesMap}
                />

                <Screen
                    name='OrphanageDetails'
                    component={OrphanageDetails}
                />

                <Screen
                    name='SetPosition'
                    component={SetPosition}
                />
                <Screen
                    name='OrphanageData'
                    component={OrphanageData}
                />
            </Navigator>
        </NavigationContainer>
    )
}