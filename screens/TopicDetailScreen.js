import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function TopicDetailScreen({ route, navigation }) {
  const { topic } = route.params;
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.icon}>{topic.icon}</Text>
          <Text style={styles.title}>{topic.title}</Text>
          <Text style={styles.description}>{topic.description}</Text>
        </View>

        {!showQuiz ? (
          <View style={styles.contentContainer}>
            <Text style={styles.content}>{topic.content}</Text>
            <TouchableOpacity
              style={styles.quizButton}
              onPress={() => setShowQuiz(true)}
            >
              <Text style={styles.quizButtonText}>
                📝 Take Quiz ({topic.quiz.length} questions)
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.quizContainer}>
            <QuizSection topic={topic} onBack={() => setShowQuiz(false)} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function QuizSection({ topic, onBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestion < topic.quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    topic.quiz.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = ((score / topic.quiz.length) * 100).toFixed(0);

    return (
      <View style={styles.resultsContainer}>
        <Text style={styles.resultsTitle}>Quiz Complete! 🎉</Text>
        <View style={styles.scoreCircle}>
          <Text style={styles.scorePercentage}>{percentage}%</Text>
          <Text style={styles.scoreText}>
            {score} out of {topic.quiz.length}
          </Text>
        </View>
        <View style={styles.resultsDetails}>
          {topic.quiz.map((q, index) => {
            const isCorrect = selectedAnswers[index] === q.correctAnswer;
            return (
              <View key={index} style={styles.resultItem}>
                <Text style={isCorrect ? styles.correct : styles.incorrect}>
                  {isCorrect ? '✓' : '✗'}
                </Text>
                <Text style={styles.resultQuestion}>{q.question}</Text>
              </View>
            );
          })}
        </View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            setShowResults(false);
            setCurrentQuestion(0);
            setSelectedAnswers({});
            onBack();
          }}
        >
          <Text style={styles.backButtonText}>Back to Content</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const question = topic.quiz[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQuestion];

  return (
    <View style={styles.quizContent}>
      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${((currentQuestion + 1) / topic.quiz.length) * 100}%`,
            },
          ]}
        />
      </View>
      <Text style={styles.questionNumber}>
        Question {currentQuestion + 1} of {topic.quiz.length}
      </Text>
      <Text style={styles.question}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              selectedAnswer === index && styles.selectedOption,
            ]}
            onPress={() => handleAnswerSelect(currentQuestion, index)}
          >
            <View
              style={[
                styles.optionCircle,
                selectedAnswer === index && styles.selectedCircle,
              ]}
            >
              {selectedAnswer === index && <View style={styles.innerCircle} />}
            </View>
            <Text
              style={[
                styles.optionText,
                selectedAnswer === index && styles.selectedOptionText,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.navigationButtons}>
        <TouchableOpacity
          style={[
            styles.navButton,
            currentQuestion === 0 && styles.disabledButton,
          ]}
          onPress={handlePrevious}
          disabled={currentQuestion === 0}
        >
          <Text
            style={[
              styles.navButtonText,
              currentQuestion === 0 && styles.disabledText,
            ]}
          >
            Previous
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navButton,
            styles.nextButton,
            selectedAnswer === undefined && styles.disabledButton,
          ]}
          onPress={handleNext}
          disabled={selectedAnswer === undefined}
        >
          <Text
            style={[
              styles.navButtonText,
              styles.nextButtonText,
              selectedAnswer === undefined && styles.disabledText,
            ]}
          >
            {currentQuestion === topic.quiz.length - 1 ? 'Finish' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.exitQuiz} onPress={onBack}>
        <Text style={styles.exitQuizText}>Exit Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  icon: {
    fontSize: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  contentContainer: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 15,
    borderRadius: 12,
  },
  content: {
    fontSize: 15,
    lineHeight: 24,
    color: '#333',
  },
  quizButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  quizButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  quizContainer: {
    flex: 1,
  },
  quizContent: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 15,
    borderRadius: 12,
    minHeight: 400,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
    marginBottom: 20,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 3,
  },
  questionNumber: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  question: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 25,
    lineHeight: 26,
  },
  optionsContainer: {
    marginBottom: 30,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 12,
  },
  selectedOption: {
    borderColor: '#4CAF50',
    backgroundColor: '#f1f8f4',
  },
  optionCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ccc',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCircle: {
    borderColor: '#4CAF50',
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
  },
  optionText: {
    flex: 1,
    fontSize: 15,
    color: '#333',
  },
  selectedOptionText: {
    color: '#2e7d32',
    fontWeight: '500',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  navButton: {
    flex: 1,
    padding: 14,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#4CAF50',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  nextButton: {
    backgroundColor: '#4CAF50',
  },
  disabledButton: {
    borderColor: '#ccc',
    backgroundColor: '#f5f5f5',
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4CAF50',
  },
  nextButtonText: {
    color: '#fff',
  },
  disabledText: {
    color: '#999',
  },
  exitQuiz: {
    marginTop: 15,
    alignItems: 'center',
  },
  exitQuizText: {
    color: '#999',
    fontSize: 14,
  },
  resultsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  resultsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  scoreCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  scorePercentage: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  scoreText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  resultsDetails: {
    width: '100%',
    marginBottom: 20,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  correct: {
    fontSize: 20,
    color: '#4CAF50',
    marginRight: 10,
    fontWeight: 'bold',
  },
  incorrect: {
    fontSize: 20,
    color: '#f44336',
    marginRight: 10,
    fontWeight: 'bold',
  },
  resultQuestion: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  backButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
