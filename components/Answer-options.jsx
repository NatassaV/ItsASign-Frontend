import { useState } from 'react';
import { Button, StyleSheet, Text, View, Touchable, TouchableOpacity, Image } from 'react-native';

import { Next } from "./Next-button"
import { PictureOptions } from './Picture-options';
import { LetterOptions } from './Letter-options';
import { Camera } from './Camera-test'

const Answer = ({ allQuestions, currentQuestionIndex, setCurrentQuestionIndex }) => {
    const [currentSelectedOption, setCurrentSelectedOption] = useState(null)
    const [correctOption, setCorrectOption] = useState(null)
    const [isOptionDisabled, setIsOptionDisabled] = useState(false)
    const [showNextButton, setShowNextButton] = useState(false)

    const isCorrect = (selectedOption) => {
        let correctOption = allQuestions[currentQuestionIndex]['correct_option']
        setCurrentSelectedOption(selectedOption)
        setCorrectOption(correctOption)
        setIsOptionDisabled(true)
        if (selectedOption === correctOption) {
          setShowNextButton(true)
        }
    }
    
    if (allQuestions[currentQuestionIndex]['question_type'] === 'picture') {
      return ( 
        <View>
          <PictureOptions isCorrect={isCorrect} />
          <Next allQuestions={allQuestions} currentQuestionIndex={currentQuestionIndex} setCurrentQuestionIndex={setCurrentQuestionIndex} setCurrentSelectedOption={setCurrentSelectedOption} setCorrectOption={setCorrectOption} setIsOptionDisabled={setIsOptionDisabled} showNextButton={showNextButton} setShowNextButton={setShowNextButton} />
        </View>
      )
    } else if (allQuestions[currentQuestionIndex]['question_type'] === 'text') {
      return ( 
        <View>
          <LetterOptions isCorrect={isCorrect} allQuestions={allQuestions} currentQuestionIndex={currentQuestionIndex} />
          <Next allQuestions={allQuestions} currentQuestionIndex={currentQuestionIndex} setCurrentQuestionIndex={setCurrentQuestionIndex} setCurrentSelectedOption={setCurrentSelectedOption} setCorrectOption={setCorrectOption} setIsOptionDisabled={setIsOptionDisabled} showNextButton={showNextButton} setShowNextButton={setShowNextButton} />
        </View>
      )
    } else if (allQuestions[currentQuestionIndex]['question_type'] === 'camera') {
      return ( 
        <View>
          <Camera />
          <Next allQuestions={allQuestions} currentQuestionIndex={currentQuestionIndex} setCurrentQuestionIndex={setCurrentQuestionIndex} setCurrentSelectedOption={setCurrentSelectedOption} setCorrectOption={setCorrectOption} setIsOptionDisabled={setIsOptionDisabled} showNextButton={showNextButton} setShowNextButton={setShowNextButton} />
        </View>
      )
    }
}

export { Answer }