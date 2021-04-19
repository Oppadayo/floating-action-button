import React from 'react'
import { StyleSheet, Image, Text, SafeAreaView} from 'react-native'
import FloatButton from '../../components/FloatButton'

const Home = () => {
    return(
        <SafeAreaView style={styles.screen}>          
            <Image source={require('../../assets/images/hero.png')} resizeMode='center' />
            <FloatButton style={{bottom: 20}} />
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#231F20'
    }
})

export default Home