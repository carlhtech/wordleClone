import { useState, useEffect } from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import { colors, CLEAR, ENTER, colorsToEmoji } from '../../constants';
import Keyboard from '../Keyboard';
import * as Clipboard from 'expo-clipboard';
import words from '../../words';
import styles from './Game.styles';
import { copyArray, getDayOfTheYear } from '../../utils';

const NUMBER_OF_TRIES = 6;

const dayOfTheYear = getDayOfTheYear();

const Game = () => {
    const word = words[dayOfTheYear];
    const letters = word.split("");

    const [rows, setRows] = useState(new Array(NUMBER_OF_TRIES).fill(
        new Array(letters.length).fill('')
    ));

    const [curRow, setCurRow] = useState(0);
    const [curCol, setCurCol] = useState(0);
    const [gameState, setGameState] = useState('playing');

    useEffect(() => {
        if (curRow > 0) {
            checkGameState();
        }
    }, [curRow]);

    const checkGameState = () => {
        if (checkIfWon() && gameState != 'won') {
            Alert.alert("Wooo!", "You won", [{ text: 'Share', onPress: shareScore }]);
            setGameState('won');
        } else if (checkIfLost() && gameState != 'lost') {
            Alert.alert("Nah", "Try again tomorrow");
            setGameState('lost');
        }
    };

    const shareScore = () => {
        const textMap = rows.map(
            (row, i) => row.map(
                (cell, j) => colorsToEmoji[getCellBGColor(i, j)])
                .join("")
        )
            .filter(
                (row) => row).join("\n");

        const textToShare = `Wordle \n${textMap}`;
        Clipboard.setString(textToShare);
        Alert.alert('Copied successfully', 'Share your score on social media')
    };

    const checkIfWon = () => {
        const row = rows[curRow - 1];
        return row.every((letter, i) => letter == letters[i]);
    };

    const checkIfLost = () => {
        return !checkIfWon() && curRow == rows.length;
    };

    const onKeyPressed = (key) => {
        if (gameState != 'playing') {
            return;
        }

        const updateRows = copyArray(rows);

        if (key == CLEAR) {
            const prevCol = curCol - 1;
            if (prevCol >= 0) {
                updateRows[curRow][prevCol] = "";
                setRows(updateRows);
                setCurCol(prevCol);
            }
            return;
        }

        if (key == ENTER) {
            if (curCol == rows[0].length) {
                setCurRow(curRow + 1);
                setCurCol(0);
            }
            return;
        }

        if (curCol < rows[0].length) {
            updateRows[curRow][curCol] = key;
            setRows(updateRows);
            setCurCol(curCol + 1);
        }
    };

    const isCellActive = (row, col) => {
        return row == curRow && col == curCol;
    }

    const getCellBGColor = (row, col) => {
        const letter = rows[row][col];

        if (row >= curRow) {
            return colors.black;
        }
        if (letter == letters[col]) {
            return colors.primary;
        }
        if (letters.includes(letter)) {
            return colors.secondary;
        }
        return colors.darkgrey;
    }

    const getAllLettersWithColor = (color) => {
        return rows.flatMap((row, i) =>
            row.filter((cell, j) => getCellBGColor(i, j) == color));
    }

    return (
        <>
            <ScrollView style={styles.map}>
                {rows.map((row, i) => (
                    <View key={`row-${i}`} style={styles.row}>
                        {row.map((letter, j) => (
                            <View key={`cell-${i}-${j}`} style={[
                                styles.cell,
                                {
                                    borderColor: isCellActive(i, j)
                                        ? colors.lightgrey
                                        : colors.darkgrey,
                                    backgroundColor: getCellBGColor(i, j),
                                }
                            ]}>
                                <Text style={styles.cellText}>{letter.toUpperCase()}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </ScrollView>
            <Keyboard
                onKeyPressed={onKeyPressed}
                greenCaps={getAllLettersWithColor(colors.primary)}
                yellowCaps={getAllLettersWithColor(colors.secondary)}
                greyCaps={getAllLettersWithColor(colors.darkgrey)}
            />
        </>
    );
}

export default Game;