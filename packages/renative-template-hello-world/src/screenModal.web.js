import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'renative';
    import Theme from './theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.color1,
        height: '100vh',
        position: 'absolute',
        zIndex: 100,
        top: 0,
        width: '100%',
    },
    containerIn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: 50,
        alignItems: 'flex-end',
        paddingRight: 40,
        paddingTop: 20
    },
    textH2: {
        fontFamily: 'TimeBurner',
        fontSize: 20,
        marginHorizontal: 20,
        color: Theme.color4,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const ScreenMyPage = (props) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Icon
                iconFont="ionicons"
                iconName="md-close-circle"
                className="focusable"
                iconColor={Theme.color3}
                style={{ width: 40, height: 40, marginLeft: 10 }}
                onPress={() => {

                    // pretend like we saved a record to the DB here
                    // and then we navigate imperatively
                    props.navigate("/", { replace: false })
                }}
            />
        </View>
        <View style={styles.containerIn}>
            <Text style={styles.textH2}>
                        This is my Modal!
            </Text>
        </View>
    </View>
);

export default ScreenMyPage;