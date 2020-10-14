import { View, Text, StyleSheet, Button } from 'react-native';

export default StyleSheet.create({
container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    lightText: {
    fontSize: 20,
    color: "white",
    marginBottom: 10
    },
    darkText: {
    fontSize: 20,
    color: "black",
    marginBottom: 10,
},
getBg: (index => {
    return {
        backgroundColor: bgs[index]
    }
})
});

const bgs = [
    "#EC0B43",
    "#EC0B43",
    "#2C1530",
    "#7AE7C7",
    "#D6FFB7",
    "#FFF689",
    "#264653",
    "#2A9D8F",
    "#E9C46A",
    "#F4A261",
    "#E76F51"
]