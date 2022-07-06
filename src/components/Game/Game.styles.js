import { StyleSheet } from 'react-native';
import { colors } from '../../constants';



export default StyleSheet.create({
    map: {
        alignSelf: "stretch",
        marginVertical: 70,
    },
    row: {
        alignSelf: "stretch",
        flexDirection: "row",
        justifyContent: "center",
    },
    cell: {
        //borderWidth: 3,
        borderColor: colors.darkgrey,
        flex: 1,
        aspectRatio: 1,
        margin: 3,
        maxWidth: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
    cellText: {
        color: "white",
        //fontWeight: "bold",
        fontSize: 28,
    }
});