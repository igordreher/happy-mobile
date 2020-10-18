import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import OrphanagesMap from './pages/OrphanagesMap'
import OrphanageDetails from './pages/OrphanageDetails'
import SetPosition from './pages/CreateOrphanage/SetPosition'
import OrphanageData from './pages/CreateOrphanage/OrphanageData'

import Header from './components/Header'

const { Navigator, Screen } = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle:{backgroundColor: '#f2f3f5'}}}>
                <Screen
                    name='OrphanagesMap'
                    component={OrphanagesMap}
                />

                <Screen
                    name='OrphanageDetails'
                    component={OrphanageDetails}
                    options={{
                        headerShown: true,
                        header: () => <Header showCancel={false} title={'Orfanato'} />
                    }}
                />

                <Screen
                    name='SetPosition'
                    component={SetPosition}
                    options={{
                        headerShown: true,
                        header: () => <Header title={'Selecione a posição do orfanato'} />
                    }}
                />
                <Screen
                    name='OrphanageData'
                    component={OrphanageData}
                    options={{
                        headerShown: true,
                        header: () => <Header title={'Preencha o formulário'} />
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}