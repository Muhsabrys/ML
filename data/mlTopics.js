export const mlTopics = [
  {
    id: '1',
    title: 'Introduction to Machine Learning',
    description: 'Learn the fundamentals of ML, types of learning, and basic concepts.',
    icon: '🤖',
    content: `# Introduction to Machine Learning

Machine Learning is a subset of Artificial Intelligence that enables systems to learn and improve from experience without being explicitly programmed.

## Types of Machine Learning:

### 1. Supervised Learning
- Learning from labeled data
- Examples: Classification, Regression
- Use cases: Email spam detection, Price prediction

### 2. Unsupervised Learning
- Learning from unlabeled data
- Examples: Clustering, Dimensionality Reduction
- Use cases: Customer segmentation, Anomaly detection

### 3. Reinforcement Learning
- Learning through trial and error
- Agent learns to make decisions
- Use cases: Game playing, Robotics

## Key Concepts:
- **Training Data**: Data used to train the model
- **Features**: Input variables used for prediction
- **Labels**: Output or target variable
- **Model**: Mathematical representation of the pattern`,
    quiz: [
      {
        question: 'What is Machine Learning?',
        options: [
          'A type of computer hardware',
          'Systems that learn from experience without explicit programming',
          'A programming language',
          'A database system'
        ],
        correctAnswer: 1
      },
      {
        question: 'Which type of ML uses labeled data?',
        options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'None of these'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: '2',
    title: 'Linear Regression',
    description: 'Understanding linear relationships between variables and prediction.',
    icon: '📈',
    content: `# Linear Regression

Linear Regression is a fundamental supervised learning algorithm used to predict a continuous target variable.

## Simple Linear Regression:
y = mx + b

Where:
- y: Dependent variable (target)
- x: Independent variable (feature)
- m: Slope
- b: Y-intercept

## Multiple Linear Regression:
y = b₀ + b₁x₁ + b₂x₂ + ... + bₙxₙ

## Key Concepts:

### Cost Function (Mean Squared Error):
MSE = (1/n) Σ(yᵢ - ŷᵢ)²

### Gradient Descent:
- Optimization algorithm
- Minimizes the cost function
- Updates weights iteratively

## Applications:
- House price prediction
- Sales forecasting
- Risk assessment
- Trend analysis`,
    quiz: [
      {
        question: 'What does linear regression predict?',
        options: ['Categories', 'Continuous values', 'Clusters', 'Features'],
        correctAnswer: 1
      },
      {
        question: 'What is the cost function commonly used in linear regression?',
        options: ['Cross Entropy', 'Mean Squared Error', 'Hinge Loss', 'Log Loss'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: '3',
    title: 'Logistic Regression',
    description: 'Classification algorithm for binary and multi-class problems.',
    icon: '🎯',
    content: `# Logistic Regression

Despite its name, Logistic Regression is a classification algorithm used for predicting binary outcomes.

## Sigmoid Function:
σ(z) = 1 / (1 + e⁻ᶻ)

Output range: [0, 1]

## Decision Boundary:
- If σ(z) ≥ 0.5: Class 1
- If σ(z) < 0.5: Class 0

## Cost Function:
Log Loss (Binary Cross-Entropy)

## Applications:
- Email spam detection
- Disease diagnosis
- Customer churn prediction
- Credit card fraud detection

## Advantages:
- Simple and efficient
- Probabilistic interpretation
- Works well for linearly separable data

## Limitations:
- Assumes linear decision boundary
- Not suitable for complex non-linear problems`,
    quiz: [
      {
        question: 'What is the output range of the sigmoid function?',
        options: ['[-1, 1]', '[0, 1]', '[0, ∞]', '[-∞, ∞]'],
        correctAnswer: 1
      },
      {
        question: 'Logistic regression is used for:',
        options: ['Regression', 'Classification', 'Clustering', 'Dimensionality Reduction'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: '4',
    title: 'Neural Networks',
    description: 'Deep learning fundamentals and artificial neural networks.',
    icon: '🧠',
    content: `# Neural Networks

Neural Networks are computing systems inspired by biological neural networks in the human brain.

## Architecture:

### 1. Input Layer
- Receives input features
- One neuron per feature

### 2. Hidden Layers
- Process and transform data
- Deep networks have multiple hidden layers

### 3. Output Layer
- Produces final prediction
- Number of neurons = number of classes (classification)

## Components:

### Neurons (Nodes):
- Receive inputs
- Apply weights and bias
- Pass through activation function

### Weights and Biases:
- Weights: Connection strengths
- Bias: Threshold adjustment

### Activation Functions:
- **ReLU**: f(x) = max(0, x)
- **Sigmoid**: f(x) = 1/(1 + e⁻ˣ)
- **Tanh**: f(x) = (eˣ - e⁻ˣ)/(eˣ + e⁻ˣ)

## Training Process:

1. **Forward Propagation**: Calculate predictions
2. **Loss Calculation**: Measure error
3. **Backpropagation**: Calculate gradients
4. **Weight Update**: Adjust weights using optimizer

## Applications:
- Image recognition
- Natural language processing
- Speech recognition
- Game playing`,
    quiz: [
      {
        question: 'What does ReLU activation function do?',
        options: [
          'Returns max(0, x)',
          'Returns sigmoid of x',
          'Returns x squared',
          'Returns log of x'
        ],
        correctAnswer: 0
      },
      {
        question: 'What is backpropagation used for?',
        options: [
          'Making predictions',
          'Calculating gradients for weight updates',
          'Adding more layers',
          'Removing neurons'
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: '5',
    title: 'Decision Trees',
    description: 'Tree-based models for classification and regression.',
    icon: '🌳',
    content: `# Decision Trees

Decision Trees are versatile supervised learning algorithms that can perform both classification and regression tasks.

## How it Works:

1. **Root Node**: Start with entire dataset
2. **Split**: Divide data based on feature values
3. **Internal Nodes**: Represent decision points
4. **Leaf Nodes**: Final predictions

## Splitting Criteria:

### Classification:
- **Gini Impurity**: Measures probability of incorrect classification
- **Entropy**: Measures information gain

### Regression:
- **Variance Reduction**: Minimize variance in child nodes

## Advantages:
✓ Easy to understand and interpret
✓ Requires little data preparation
✓ Handles both numerical and categorical data
✓ Can capture non-linear relationships

## Disadvantages:
✗ Prone to overfitting
✗ Unstable (small data changes affect tree)
✗ Biased toward dominant classes

## Ensemble Methods:
- **Random Forest**: Multiple decision trees
- **Gradient Boosting**: Sequential tree building
- **XGBoost**: Optimized gradient boosting

## Applications:
- Customer segmentation
- Medical diagnosis
- Credit risk assessment
- Feature selection`,
    quiz: [
      {
        question: 'What is a leaf node in a decision tree?',
        options: [
          'The starting point',
          'A decision point',
          'Final prediction/outcome',
          'A feature'
        ],
        correctAnswer: 2
      },
      {
        question: 'What is Gini Impurity used for?',
        options: [
          'Measuring tree height',
          'Measuring probability of incorrect classification',
          'Counting leaves',
          'Selecting features'
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: '6',
    title: 'K-Means Clustering',
    description: 'Unsupervised learning algorithm for grouping similar data points.',
    icon: '🎨',
    content: `# K-Means Clustering

K-Means is an unsupervised learning algorithm that groups similar data points into K clusters.

## Algorithm Steps:

1. **Initialize**: Randomly select K centroids
2. **Assignment**: Assign each point to nearest centroid
3. **Update**: Recalculate centroid positions
4. **Repeat**: Steps 2-3 until convergence

## Distance Metric:
Euclidean Distance: √[(x₁-x₂)² + (y₁-y₂)²]

## Choosing K:

### Elbow Method:
- Plot K vs. Within-Cluster Sum of Squares (WCSS)
- Look for "elbow" point
- Balance between simplicity and accuracy

### Silhouette Score:
- Measures cluster quality
- Range: [-1, 1]
- Higher is better

## Advantages:
✓ Simple and fast
✓ Scales well to large datasets
✓ Guaranteed to converge

## Limitations:
✗ Need to specify K beforehand
✗ Sensitive to initial centroids
✗ Assumes spherical clusters
✗ Sensitive to outliers

## Applications:
- Customer segmentation
- Image compression
- Document clustering
- Anomaly detection
- Market research`,
    quiz: [
      {
        question: 'What does K represent in K-Means?',
        options: [
          'Number of features',
          'Number of clusters',
          'Number of iterations',
          'Number of data points'
        ],
        correctAnswer: 1
      },
      {
        question: 'K-Means is what type of learning?',
        options: ['Supervised', 'Unsupervised', 'Reinforcement', 'Semi-supervised'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: '7',
    title: 'Support Vector Machines',
    description: 'Powerful classification algorithm using hyperplanes.',
    icon: '⚡',
    content: `# Support Vector Machines (SVM)

SVM is a powerful supervised learning algorithm used for classification and regression tasks.

## Core Concept:

Find the optimal hyperplane that best separates different classes with maximum margin.

## Key Components:

### Hyperplane:
- Decision boundary
- n-1 dimensions in n-dimensional space

### Support Vectors:
- Data points closest to hyperplane
- Critical for defining the margin
- Only these points affect the hyperplane

### Margin:
- Distance between hyperplane and nearest points
- Goal: Maximize this margin

## Kernel Trick:

Transform data to higher dimensions for non-linear separation:

### Common Kernels:
- **Linear**: K(x,y) = x·y
- **Polynomial**: K(x,y) = (x·y + c)ᵈ
- **RBF (Gaussian)**: K(x,y) = exp(-γ||x-y||²)
- **Sigmoid**: K(x,y) = tanh(αx·y + c)

## Advantages:
✓ Effective in high-dimensional spaces
✓ Memory efficient (uses support vectors only)
✓ Versatile (different kernel functions)
✓ Works well with clear margin of separation

## Limitations:
✗ Slow for large datasets
✗ Sensitive to feature scaling
✗ Difficult to interpret
✗ Choosing right kernel is crucial

## Applications:
- Text classification
- Image recognition
- Bioinformatics
- Handwriting recognition`,
    quiz: [
      {
        question: 'What does SVM try to maximize?',
        options: ['Accuracy', 'Margin', 'Speed', 'Features'],
        correctAnswer: 1
      },
      {
        question: 'What are support vectors?',
        options: [
          'All data points',
          'Points closest to the hyperplane',
          'Outliers',
          'Features'
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: '8',
    title: 'Model Evaluation',
    description: 'Metrics and techniques to evaluate ML model performance.',
    icon: '📊',
    content: `# Model Evaluation

Evaluating model performance is crucial for understanding how well your model generalizes to unseen data.

## Classification Metrics:

### Confusion Matrix:
|              | Predicted Positive | Predicted Negative |
|--------------|-------------------|-------------------|
| Actual Positive | True Positive (TP) | False Negative (FN) |
| Actual Negative | False Positive (FP) | True Negative (TN) |

### Accuracy:
Accuracy = (TP + TN) / (TP + TN + FP + FN)

### Precision:
Precision = TP / (TP + FP)
- Of all predicted positive, how many are actually positive?

### Recall (Sensitivity):
Recall = TP / (TP + FN)
- Of all actual positive, how many did we predict correctly?

### F1-Score:
F1 = 2 × (Precision × Recall) / (Precision + Recall)
- Harmonic mean of precision and recall

### ROC-AUC:
- Receiver Operating Characteristic curve
- Area Under Curve
- Measures true positive rate vs false positive rate

## Regression Metrics:

### Mean Absolute Error (MAE):
MAE = (1/n) Σ|yᵢ - ŷᵢ|

### Mean Squared Error (MSE):
MSE = (1/n) Σ(yᵢ - ŷᵢ)²

### Root Mean Squared Error (RMSE):
RMSE = √MSE

### R² Score:
- Coefficient of determination
- Range: [0, 1]
- Higher is better

## Cross-Validation:

### K-Fold CV:
1. Split data into K folds
2. Train on K-1 folds
3. Test on remaining fold
4. Repeat K times
5. Average results

## Overfitting vs Underfitting:

### Overfitting:
- High training accuracy, low test accuracy
- Model too complex
- Solutions: Regularization, more data, early stopping

### Underfitting:
- Low training and test accuracy
- Model too simple
- Solutions: More features, complex model, less regularization`,
    quiz: [
      {
        question: 'What does precision measure?',
        options: [
          'Total correct predictions',
          'Of predicted positive, how many are actually positive',
          'Of actual positive, how many predicted correctly',
          'Overall accuracy'
        ],
        correctAnswer: 1
      },
      {
        question: 'What indicates overfitting?',
        options: [
          'Low training and test accuracy',
          'High training accuracy, low test accuracy',
          'High training and test accuracy',
          'Low training accuracy, high test accuracy'
        ],
        correctAnswer: 1
      }
    ]
  }
];
