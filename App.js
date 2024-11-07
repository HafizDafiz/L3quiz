import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function App() {
    const questions = [
        {
            id: 1,
            image: require('./img/giraffe.jpg'), // Replace with actual image path
            options: [
                { label: 'Giraffe', value: 'giraffe' },
                { label: 'Lion', value: 'lion' },
                { label: 'Leopard', value: 'leopard' }
            ],
            correctAnswer: 'giraffe'
        },
        {
            id: 2,
            image: require('./img/elephant.jpg'), // Replace with actual image path
            options: [
                { label: 'Elephant', value: 'elephant' },
                { label: 'Rhino', value: 'rhino' },
                { label: 'Hippo', value: 'hippo' }
            ],
            correctAnswer: 'elephant'
        },
        {
            id: 3,
            image: require('./img/kingfisher.jpg'), // Replace with actual image path
            options: [
                { label: 'Hummingbird', value: 'hummingbird' },
                { label: 'Pigeon', value: 'pigeon' },
                { label: 'Kingfisher', value: 'kingfisher' }
            ],
            correctAnswer: 'kingfisher'
        },
        {
            id: 4,
            image: require('./img/bee.jpg'), // Replace with actual image path
            options: [
                { label: 'Ant', value: 'ant' },
                { label: 'Bee', value: 'bee' },
                { label: 'Butterfly', value: 'butterfly' }
            ],
            correctAnswer: 'bee'
        },
        {
            id: 5,
            image: require('./img/deer.jpg'), // Replace with actual image path
            options: [
                { label: 'Boar', value: 'boar' },
                { label: 'Bear', value: 'bear' },
                { label: 'Deer', value: 'deer' }
            ],
            correctAnswer: 'deer'
        }
    ];

    const [answers, setAnswers] = useState({});

    const handleSelect = (value, questionId) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: value
        }));
    };

    const handleSubmit = () => {
        let correctCount = 0;
        questions.forEach((question) => {
            if (answers[question.id] === question.correctAnswer) {
                correctCount++;
            }
        });
        Alert.alert(`Quiz Result`, `You got ${correctCount} out of ${questions.length} correct!`);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.quizboxparent}>
                <View style={styles.container}>
                        <Text style={[styles.titlebox]}>Animal Quiz</Text>
                    {questions.map((question) => (
                        <View key={question.id} style={[styles.questionContainer, styles.quizboxchild]}>
                            <Image source={question.image} style={styles.image} />
                            <Text style={styles.questionText}>What animal is this?</Text>
                            <RNPickerSelect
                                onValueChange={(value) => handleSelect(value, question.id)}
                                items={question.options}
                                placeholder={{ label: "Select an animal", value: null }}
                                style={{ inputAndroid: styles.picker }}
                            />
                        </View>
                    ))}
                    <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Submit Answers</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
    },
    quizboxparent: {
        flex: 1,
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        borderWidth: 5,
    },
    container: {
        width: '100%', // Ensures container takes full width of the screen
        alignItems: 'center',
        padding: 20,
    },
    questionContainer: {
        marginBottom: 30,
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 200,
        marginBottom: 10,
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    picker: {
        fontSize: 16,
        color: 'black',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ccc',
        backgroundColor: '#f0f0f0',
        width: 300,
        textAlign: 'center'
    },
    submitButton: {
        marginTop: 20,
        backgroundColor: '#2196F3',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    quizboxchild: {
        width: '100%', // Ensures each question takes full width
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
    },
    titlebox: {
        flex: 1,
        backgroundColor: 'blue',
        fontSize: 28,
        fontWeight: "bold",
        textAlign: 'center'
    },
});


