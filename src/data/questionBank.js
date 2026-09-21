// 100 Deterministic Practice Questions across 10 Worlds (10 Questions per World)
// World 1: Percent means per hundred      World 6: Fair score face-off
// World 2: Fractions to percents           World 7: Percent of a quantity
// World 3: Decimals to percents            World 8: Different wholes duel
// World 4: Which is greater?               World 9: Discount duel
// World 5: The percent ladder              World 10: Percent showdown
export const staticQuestionBank = {
  "1": [
    {
      "id": "w1_q1",
      "worldId": 1,
      "difficulty": "Easy",
      "fact": "percent_grid",
      "prompt": "A grid has 100 squares. 35 squares are shaded. What percent of the grid is shaded?",
      "diagram": {
        "type": "grid",
        "shaded": 35
      },
      "options": [
        "65%",
        "45%",
        "35%",
        "25%"
      ],
      "correctAnswer": "35%",
      "hint": "Percent means out of 100. Count the shaded squares out of the 100 squares.",
      "explanation": "35 squares are shaded out of 100, so that is 35 out of 100 = 35%."
    },
    {
      "id": "w1_q2",
      "worldId": 1,
      "difficulty": "Easy",
      "fact": "percent_grid",
      "prompt": "What percent of this 100-square grid is shaded?",
      "diagram": {
        "type": "grid",
        "shaded": 62
      },
      "options": [
        "62%",
        "38%",
        "72%",
        "52%"
      ],
      "correctAnswer": "62%",
      "hint": "Percent means out of 100. Count the shaded squares out of the 100 squares.",
      "explanation": "62 squares are shaded out of 100, so that is 62 out of 100 = 62%."
    },
    {
      "id": "w1_q3",
      "worldId": 1,
      "difficulty": "Easy",
      "fact": "percent_grid",
      "prompt": "Only 8 squares out of 100 are shaded. What percent is shaded?",
      "diagram": {
        "type": "grid",
        "shaded": 8
      },
      "options": [
        "92%",
        "18%",
        "13%",
        "8%"
      ],
      "correctAnswer": "8%",
      "hint": "Percent means out of 100. Count the shaded squares out of the 100 squares.",
      "explanation": "8 squares are shaded out of 100, so that is 8 out of 100 = 8%."
    },
    {
      "id": "w1_q4",
      "worldId": 1,
      "difficulty": "Easy",
      "fact": "percent_grid",
      "prompt": "In this grid, 47 of the 100 squares are shaded. What percent is NOT shaded?",
      "diagram": {
        "type": "grid",
        "shaded": 47
      },
      "options": [
        "47%",
        "53%",
        "63%",
        "43%"
      ],
      "correctAnswer": "53%",
      "hint": "The whole grid is 100%. Subtract the shaded percent from 100%.",
      "explanation": "The shaded part is 47%, so the unshaded part is 100% − 47% = 53%."
    },
    {
      "id": "w1_q5",
      "worldId": 1,
      "difficulty": "Easy",
      "fact": "percent_grid",
      "prompt": "What percent of the grid is shaded?",
      "diagram": {
        "type": "grid",
        "shaded": 80
      },
      "options": [
        "20%",
        "80%",
        "90%",
        "70%"
      ],
      "correctAnswer": "80%",
      "hint": "Percent means out of 100. Count the shaded squares out of the 100 squares.",
      "explanation": "80 squares are shaded out of 100, so that is 80 out of 100 = 80%."
    },
    {
      "id": "w1_q6",
      "worldId": 1,
      "difficulty": "Easy",
      "fact": "percent_grid",
      "prompt": "23 out of 100 squares are shaded. Write this as a percent.",
      "diagram": {
        "type": "grid",
        "shaded": 23
      },
      "options": [
        "77%",
        "33%",
        "13%",
        "23%"
      ],
      "correctAnswer": "23%",
      "hint": "Percent means out of 100. Count the shaded squares out of the 100 squares.",
      "explanation": "23 squares are shaded out of 100, so that is 23 out of 100 = 23%."
    },
    {
      "id": "w1_q7",
      "worldId": 1,
      "difficulty": "Easy",
      "fact": "percent_grid",
      "prompt": "91 of the 100 squares are shaded. What percent of the squares are NOT shaded?",
      "diagram": {
        "type": "grid",
        "shaded": 91
      },
      "options": [
        "9%",
        "91%",
        "19%",
        "14%"
      ],
      "correctAnswer": "9%",
      "hint": "The whole grid is 100%. Subtract the shaded percent from 100%.",
      "explanation": "The shaded part is 91%, so the unshaded part is 100% − 91% = 9%."
    },
    {
      "id": "w1_q8",
      "worldId": 1,
      "difficulty": "Easy",
      "fact": "percent_words",
      "prompt": "Out of 100 students, 64 walk to school. What percent of the students walk?",
      "diagram": {
        "type": "grid",
        "shaded": 64
      },
      "options": [
        "36%",
        "74%",
        "64%",
        "54%"
      ],
      "correctAnswer": "64%",
      "hint": "Percent means out of 100. Count the shaded squares out of the 100 squares.",
      "explanation": "64 out of 100 students means 64%."
    },
    {
      "id": "w1_q9",
      "worldId": 1,
      "difficulty": "Easy",
      "fact": "percent_grid",
      "prompt": "What percent of the 100-square grid is shaded?",
      "diagram": {
        "type": "grid",
        "shaded": 15
      },
      "options": [
        "85%",
        "25%",
        "5%",
        "15%"
      ],
      "correctAnswer": "15%",
      "hint": "Percent means out of 100. Count the shaded squares out of the 100 squares.",
      "explanation": "15 squares are shaded out of 100, so that is 15 out of 100 = 15%."
    },
    {
      "id": "w1_q10",
      "worldId": 1,
      "difficulty": "Easy",
      "fact": "percent_grid",
      "prompt": "A grid has 70 of its 100 squares shaded. What percent is shaded?",
      "diagram": {
        "type": "grid",
        "shaded": 70
      },
      "options": [
        "30%",
        "70%",
        "80%",
        "60%"
      ],
      "correctAnswer": "70%",
      "hint": "Percent means out of 100. Count the shaded squares out of the 100 squares.",
      "explanation": "70 squares are shaded out of 100, so that is 70 out of 100 = 70%."
    }
  ],
  "2": [
    {
      "id": "w2_q1",
      "worldId": 2,
      "difficulty": "Easy-Med",
      "fact": "fraction_to_percent",
      "prompt": "Write the fraction 3/4 as a percent.",
      "diagram": {
        "type": "convert",
        "from": "3/4",
        "to": "?%"
      },
      "options": [
        "75%",
        "3%",
        "4%",
        "25%"
      ],
      "correctAnswer": "75%",
      "hint": "Make the bottom number 100. Multiply the top and bottom by 25.",
      "explanation": "3/4 = 75/100 = 75%."
    },
    {
      "id": "w2_q2",
      "worldId": 2,
      "difficulty": "Easy-Med",
      "fact": "fraction_to_percent",
      "prompt": "A recipe uses 2/5 of a bag of flour. What percent of the bag is that?",
      "diagram": {
        "type": "convert",
        "from": "2/5",
        "to": "?%"
      },
      "options": [
        "2%",
        "5%",
        "40%",
        "60%"
      ],
      "correctAnswer": "40%",
      "hint": "Make the bottom number 100. Multiply the top and bottom by 20.",
      "explanation": "2/5 = 40/100 = 40%."
    },
    {
      "id": "w2_q3",
      "worldId": 2,
      "difficulty": "Easy-Med",
      "fact": "fraction_to_percent",
      "prompt": "Write 7/10 as a percent.",
      "diagram": {
        "type": "convert",
        "from": "7/10",
        "to": "?%"
      },
      "options": [
        "7%",
        "10%",
        "70%",
        "30%"
      ],
      "correctAnswer": "70%",
      "hint": "Make the bottom number 100. Multiply the top and bottom by 10.",
      "explanation": "7/10 = 70/100 = 70%."
    },
    {
      "id": "w2_q4",
      "worldId": 2,
      "difficulty": "Easy-Med",
      "fact": "fraction_to_percent",
      "prompt": "Robo finished 9/20 of a race. What percent of the race is that?",
      "diagram": {
        "type": "convert",
        "from": "9/20",
        "to": "?%"
      },
      "options": [
        "9%",
        "45%",
        "20%",
        "55%"
      ],
      "correctAnswer": "45%",
      "hint": "Make the bottom number 100. Multiply the top and bottom by 5.",
      "explanation": "9/20 = 45/100 = 45%."
    },
    {
      "id": "w2_q5",
      "worldId": 2,
      "difficulty": "Easy-Med",
      "fact": "fraction_to_percent",
      "prompt": "Write the fraction 13/25 as a percent.",
      "diagram": {
        "type": "convert",
        "from": "13/25",
        "to": "?%"
      },
      "options": [
        "13%",
        "25%",
        "48%",
        "52%"
      ],
      "correctAnswer": "52%",
      "hint": "Make the bottom number 100. Multiply the top and bottom by 4.",
      "explanation": "13/25 = 52/100 = 52%."
    },
    {
      "id": "w2_q6",
      "worldId": 2,
      "difficulty": "Easy-Med",
      "fact": "fraction_to_percent",
      "prompt": "17/50 of the class plays chess. What percent of the class is that?",
      "diagram": {
        "type": "convert",
        "from": "17/50",
        "to": "?%"
      },
      "options": [
        "34%",
        "17%",
        "50%",
        "66%"
      ],
      "correctAnswer": "34%",
      "hint": "Make the bottom number 100. Multiply the top and bottom by 2.",
      "explanation": "17/50 = 34/100 = 34%."
    },
    {
      "id": "w2_q7",
      "worldId": 2,
      "difficulty": "Easy-Med",
      "fact": "fraction_to_percent",
      "prompt": "Write 3/20 as a percent.",
      "diagram": {
        "type": "convert",
        "from": "3/20",
        "to": "?%"
      },
      "options": [
        "3%",
        "20%",
        "15%",
        "85%"
      ],
      "correctAnswer": "15%",
      "hint": "Make the bottom number 100. Multiply the top and bottom by 5.",
      "explanation": "3/20 = 15/100 = 15%."
    },
    {
      "id": "w2_q8",
      "worldId": 2,
      "difficulty": "Easy-Med",
      "fact": "fraction_to_percent",
      "prompt": "A phone battery is 21/25 full. What percent full is it?",
      "diagram": {
        "type": "convert",
        "from": "21/25",
        "to": "?%"
      },
      "options": [
        "84%",
        "21%",
        "25%",
        "16%"
      ],
      "correctAnswer": "84%",
      "hint": "Make the bottom number 100. Multiply the top and bottom by 4.",
      "explanation": "21/25 = 84/100 = 84%."
    },
    {
      "id": "w2_q9",
      "worldId": 2,
      "difficulty": "Easy-Med",
      "fact": "fraction_to_percent",
      "prompt": "Write 4/5 as a percent.",
      "diagram": {
        "type": "convert",
        "from": "4/5",
        "to": "?%"
      },
      "options": [
        "4%",
        "5%",
        "20%",
        "80%"
      ],
      "correctAnswer": "80%",
      "hint": "Make the bottom number 100. Multiply the top and bottom by 20.",
      "explanation": "4/5 = 80/100 = 80%."
    },
    {
      "id": "w2_q10",
      "worldId": 2,
      "difficulty": "Easy-Med",
      "fact": "fraction_to_percent",
      "prompt": "Alex read 11/20 of a book. What percent of the book has Alex read?",
      "diagram": {
        "type": "convert",
        "from": "11/20",
        "to": "?%"
      },
      "options": [
        "11%",
        "55%",
        "20%",
        "45%"
      ],
      "correctAnswer": "55%",
      "hint": "Make the bottom number 100. Multiply the top and bottom by 5.",
      "explanation": "11/20 = 55/100 = 55%."
    }
  ],
  "3": [
    {
      "id": "w3_q1",
      "worldId": 3,
      "difficulty": "Easy-Med",
      "fact": "decimal_to_percent",
      "prompt": "Write the decimal 0.35 as a percent.",
      "diagram": {
        "type": "convert",
        "from": "0.35",
        "to": "?%"
      },
      "options": [
        "3.5%",
        "35%",
        "350%",
        "0.35%"
      ],
      "correctAnswer": "35%",
      "hint": "To change a decimal to a percent, multiply by 100. That moves the decimal point two places to the right.",
      "explanation": "0.35 × 100 = 35%."
    },
    {
      "id": "w3_q2",
      "worldId": 3,
      "difficulty": "Easy-Med",
      "fact": "percent_to_decimal",
      "prompt": "Write 72% as a decimal.",
      "diagram": {
        "type": "convert",
        "from": "72%",
        "to": "?"
      },
      "options": [
        "7.2",
        "72",
        "0.072",
        "0.72"
      ],
      "correctAnswer": "0.72",
      "hint": "To change a percent to a decimal, divide by 100. That moves the decimal point two places to the left.",
      "explanation": "72% = 72 ÷ 100 = 0.72."
    },
    {
      "id": "w3_q3",
      "worldId": 3,
      "difficulty": "Easy-Med",
      "fact": "decimal_to_percent",
      "prompt": "Write the decimal 0.07 as a percent.",
      "diagram": {
        "type": "convert",
        "from": "0.07",
        "to": "?%"
      },
      "options": [
        "7%",
        "0.7%",
        "70%",
        "0.07%"
      ],
      "correctAnswer": "7%",
      "hint": "To change a decimal to a percent, multiply by 100. That moves the decimal point two places to the right.",
      "explanation": "0.07 × 100 = 7%."
    },
    {
      "id": "w3_q4",
      "worldId": 3,
      "difficulty": "Easy-Med",
      "fact": "decimal_to_percent",
      "prompt": "Write the decimal 0.6 as a percent.",
      "diagram": {
        "type": "convert",
        "from": "0.6",
        "to": "?%"
      },
      "options": [
        "6%",
        "600%",
        "60%",
        "0.6%"
      ],
      "correctAnswer": "60%",
      "hint": "To change a decimal to a percent, multiply by 100. That moves the decimal point two places to the right.",
      "explanation": "0.6 × 100 = 60%."
    },
    {
      "id": "w3_q5",
      "worldId": 3,
      "difficulty": "Easy-Med",
      "fact": "percent_to_decimal",
      "prompt": "Write 4% as a decimal.",
      "diagram": {
        "type": "convert",
        "from": "4%",
        "to": "?"
      },
      "options": [
        "0.4",
        "4",
        "0.004",
        "0.04"
      ],
      "correctAnswer": "0.04",
      "hint": "To change a percent to a decimal, divide by 100. That moves the decimal point two places to the left.",
      "explanation": "4% = 4 ÷ 100 = 0.04."
    },
    {
      "id": "w3_q6",
      "worldId": 3,
      "difficulty": "Medium",
      "fact": "decimal_to_percent",
      "prompt": "Robo grew a plant to 1.2 times its old height. Write 1.2 as a percent.",
      "diagram": {
        "type": "convert",
        "from": "1.2",
        "to": "?%"
      },
      "options": [
        "12%",
        "120%",
        "1200%",
        "1.2%"
      ],
      "correctAnswer": "120%",
      "hint": "To change a decimal to a percent, multiply by 100. That moves the decimal point two places to the right.",
      "explanation": "1.2 × 100 = 120%."
    },
    {
      "id": "w3_q7",
      "worldId": 3,
      "difficulty": "Easy-Med",
      "fact": "percent_to_decimal",
      "prompt": "Write 45% as a decimal.",
      "diagram": {
        "type": "convert",
        "from": "45%",
        "to": "?"
      },
      "options": [
        "0.45",
        "4.5",
        "45",
        "0.045"
      ],
      "correctAnswer": "0.45",
      "hint": "To change a percent to a decimal, divide by 100. That moves the decimal point two places to the left.",
      "explanation": "45% = 45 ÷ 100 = 0.45."
    },
    {
      "id": "w3_q8",
      "worldId": 3,
      "difficulty": "Easy-Med",
      "fact": "decimal_to_percent",
      "prompt": "Write the decimal 0.9 as a percent.",
      "diagram": {
        "type": "convert",
        "from": "0.9",
        "to": "?%"
      },
      "options": [
        "9%",
        "900%",
        "90%",
        "0.9%"
      ],
      "correctAnswer": "90%",
      "hint": "To change a decimal to a percent, multiply by 100. That moves the decimal point two places to the right.",
      "explanation": "0.9 × 100 = 90%."
    },
    {
      "id": "w3_q9",
      "worldId": 3,
      "difficulty": "Medium",
      "fact": "percent_to_decimal",
      "prompt": "Write 150% as a decimal.",
      "diagram": {
        "type": "convert",
        "from": "150%",
        "to": "?"
      },
      "options": [
        "15",
        "150",
        "1.5",
        "0.15"
      ],
      "correctAnswer": "1.5",
      "hint": "To change a percent to a decimal, divide by 100. That moves the decimal point two places to the left.",
      "explanation": "150% = 150 ÷ 100 = 1.5."
    },
    {
      "id": "w3_q10",
      "worldId": 3,
      "difficulty": "Easy-Med",
      "fact": "decimal_to_percent",
      "prompt": "Write the decimal 0.08 as a percent.",
      "diagram": {
        "type": "convert",
        "from": "0.08",
        "to": "?%"
      },
      "options": [
        "0.8%",
        "8%",
        "80%",
        "0.08%"
      ],
      "correctAnswer": "8%",
      "hint": "To change a decimal to a percent, multiply by 100. That moves the decimal point two places to the right.",
      "explanation": "0.08 × 100 = 8%."
    }
  ],
  "4": [
    {
      "id": "w4_q1",
      "worldId": 4,
      "difficulty": "Medium",
      "fact": "compare_two",
      "prompt": "Which is greater: 3/5 or 65%?",
      "diagram": {
        "type": "cards",
        "items": [
          {
            "text": "3/5"
          },
          {
            "text": "65%"
          }
        ]
      },
      "options": [
        "3/5",
        "They are equal",
        "Not enough information",
        "65%"
      ],
      "correctAnswer": "65%",
      "hint": "Change both values to percents first. For example, 3/5 = 60%.",
      "explanation": "3/5 = 60% and 65%, so 65% is greater."
    },
    {
      "id": "w4_q2",
      "worldId": 4,
      "difficulty": "Medium",
      "fact": "compare_two",
      "prompt": "Which is smaller: 0.42 or 40%?",
      "diagram": {
        "type": "cards",
        "items": [
          {
            "text": "0.42"
          },
          {
            "text": "40%"
          }
        ]
      },
      "options": [
        "40%",
        "0.42",
        "They are equal",
        "Not enough information"
      ],
      "correctAnswer": "40%",
      "hint": "Change both values to percents first. For example, 0.42 = 42%.",
      "explanation": "0.42 = 42% and 40%, so 40% is smaller."
    },
    {
      "id": "w4_q3",
      "worldId": 4,
      "difficulty": "Medium",
      "fact": "compare_two",
      "prompt": "Which is greater: 7/20 or 0.4?",
      "diagram": {
        "type": "cards",
        "items": [
          {
            "text": "7/20"
          },
          {
            "text": "0.4"
          }
        ]
      },
      "options": [
        "7/20",
        "They are equal",
        "0.4",
        "Not enough information"
      ],
      "correctAnswer": "0.4",
      "hint": "Change both values to percents first. For example, 7/20 = 35%.",
      "explanation": "7/20 = 35% and 0.4 = 40%, so 0.4 is greater."
    },
    {
      "id": "w4_q4",
      "worldId": 4,
      "difficulty": "Medium",
      "fact": "compare_two",
      "prompt": "Which is greater: 9/20 or 45%?",
      "diagram": {
        "type": "cards",
        "items": [
          {
            "text": "9/20"
          },
          {
            "text": "45%"
          }
        ]
      },
      "options": [
        "They are equal",
        "9/20",
        "45%",
        "Not enough information"
      ],
      "correctAnswer": "They are equal",
      "hint": "Change both values to percents first. For example, 9/20 = 45%.",
      "explanation": "9/20 = 45% and 45%, so they are equal."
    },
    {
      "id": "w4_q5",
      "worldId": 4,
      "difficulty": "Medium",
      "fact": "compare_two",
      "prompt": "Which is greater: 5/8 or 0.6?",
      "diagram": {
        "type": "cards",
        "items": [
          {
            "text": "5/8"
          },
          {
            "text": "0.6"
          }
        ]
      },
      "options": [
        "0.6",
        "They are equal",
        "Not enough information",
        "5/8"
      ],
      "correctAnswer": "5/8",
      "hint": "Change both values to percents first. For example, 5/8 = 62.5%.",
      "explanation": "5/8 = 62.5% and 0.6 = 60%, so 5/8 is greater."
    },
    {
      "id": "w4_q6",
      "worldId": 4,
      "difficulty": "Medium",
      "fact": "compare_two",
      "prompt": "Which is smaller: 0.3 or 3/8?",
      "diagram": {
        "type": "cards",
        "items": [
          {
            "text": "0.3"
          },
          {
            "text": "3/8"
          }
        ]
      },
      "options": [
        "3/8",
        "0.3",
        "They are equal",
        "Not enough information"
      ],
      "correctAnswer": "0.3",
      "hint": "Change both values to percents first. For example, 0.3 = 30%.",
      "explanation": "0.3 = 30% and 3/8 = 37.5%, so 0.3 is smaller."
    },
    {
      "id": "w4_q7",
      "worldId": 4,
      "difficulty": "Medium",
      "fact": "compare_two",
      "prompt": "Which is greater: 0.7 or 3/4?",
      "diagram": {
        "type": "cards",
        "items": [
          {
            "text": "0.7"
          },
          {
            "text": "3/4"
          }
        ]
      },
      "options": [
        "0.7",
        "3/4",
        "They are equal",
        "Not enough information"
      ],
      "correctAnswer": "3/4",
      "hint": "Change both values to percents first. For example, 0.7 = 70%.",
      "explanation": "0.7 = 70% and 3/4 = 75%, so 3/4 is greater."
    },
    {
      "id": "w4_q8",
      "worldId": 4,
      "difficulty": "Medium",
      "fact": "compare_two",
      "prompt": "Which is smaller: 58% or 0.6?",
      "diagram": {
        "type": "cards",
        "items": [
          {
            "text": "58%"
          },
          {
            "text": "0.6"
          }
        ]
      },
      "options": [
        "0.6",
        "They are equal",
        "Not enough information",
        "58%"
      ],
      "correctAnswer": "58%",
      "hint": "Change both values to percents first. For example, 0.6 = 60%.",
      "explanation": "58% and 0.6 = 60%, so 58% is smaller."
    },
    {
      "id": "w4_q9",
      "worldId": 4,
      "difficulty": "Med-Hard",
      "fact": "compare_two",
      "prompt": "Which is greater: 2/3 or 65%?",
      "diagram": {
        "type": "cards",
        "items": [
          {
            "text": "2/3"
          },
          {
            "text": "65%"
          }
        ]
      },
      "options": [
        "2/3",
        "65%",
        "They are equal",
        "Not enough information"
      ],
      "correctAnswer": "2/3",
      "hint": "Change both values to percents first. For example, 2/3 = about 66.7%.",
      "explanation": "2/3 = about 66.7% and 65%, so 2/3 is greater."
    },
    {
      "id": "w4_q10",
      "worldId": 4,
      "difficulty": "Medium",
      "fact": "compare_two",
      "prompt": "Which is greater: 13/25 or 0.5?",
      "diagram": {
        "type": "cards",
        "items": [
          {
            "text": "13/25"
          },
          {
            "text": "0.5"
          }
        ]
      },
      "options": [
        "0.5",
        "They are equal",
        "13/25",
        "Not enough information"
      ],
      "correctAnswer": "13/25",
      "hint": "Change both values to percents first. For example, 13/25 = 52%.",
      "explanation": "13/25 = 52% and 0.5 = 50%, so 13/25 is greater."
    }
  ],
  "5": [
    {
      "id": "w5_q1",
      "worldId": 5,
      "difficulty": "Medium",
      "fact": "order_values",
      "prompt": "Which value is the greatest?",
      "diagram": {
        "type": "cards",
        "items": [
          {
            "text": "2/5"
          },
          {
            "text": "0.45"
          },
          {
            "text": "38%"
          },
          {
            "text": "7/20"
          }
        ]
      },
      "options": [
        "2/5",
        "38%",
        "7/20",
        "0.45"
      ],
      "correctAnswer": "0.45",
      "hint": "Change every value into a percent, then line them up from smallest to largest.",
      "explanation": "As percents: 2/5 = 40%, 0.45 = 45%, 38%, 7/20 = 35%. So the greatest is 0.45."
    },
    {
      "id": "w5_q2",
      "worldId": 5,
      "difficulty": "Medium",
      "fact": "order_values",
      "prompt": "Which value is the smallest?",
      "diagram": {
        "type": "cards",
        "items": [
          {
            "text": "0.6"
          },
          {
            "text": "7/10"
          },
          {
            "text": "66%"
          },
          {
            "text": "3/4"
          }
        ]
      },
      "options": [
        "7/10",
        "0.6",
        "66%",
        "3/4"
      ],
      "correctAnswer": "0.6",
      "hint": "Change every value into a percent, then line them up from smallest to largest.",
      "explanation": "As percents: 0.6 = 60%, 7/10 = 70%, 66%, 3/4 = 75%. So the smallest is 0.6."
    },
    {
      "id": "w5_q3",
      "worldId": 5,
      "difficulty": "Medium",
      "fact": "order_values",
      "prompt": "Which value is the second greatest?",
      "diagram": {
        "type": "cards",
        "items": [
          {
            "text": "3/4"
          },
          {
            "text": "70%"
          },
          {
            "text": "0.72"
          },
          {
            "text": "4/5"
          }
        ]
      },
      "options": [
        "3/4",
        "70%",
        "0.72",
        "4/5"
      ],
      "correctAnswer": "3/4",
      "hint": "Change every value into a percent, then line them up from smallest to largest.",
      "explanation": "As percents: 3/4 = 75%, 70%, 0.72 = 72%, 4/5 = 80%. So the second greatest is 3/4."
    },
    {
      "id": "w5_q4",
      "worldId": 5,
      "difficulty": "Medium",
      "fact": "order_values",
      "prompt": "Which value is the greatest?",
      "diagram": {
        "type": "cards",
        "items": [
          {
            "text": "1/2"
          },
          {
            "text": "0.48"
          },
          {
            "text": "51%"
          },
          {
            "text": "9/20"
          }
        ]
      },
      "options": [
        "1/2",
        "0.48",
        "51%",
        "9/20"
      ],
      "correctAnswer": "51%",
      "hint": "Change every value into a percent, then line them up from smallest to largest.",
      "explanation": "As percents: 1/2 = 50%, 0.48 = 48%, 51%, 9/20 = 45%. So the greatest is 51%."
    },
    {
      "id": "w5_q5",
      "worldId": 5,
      "difficulty": "Medium",
      "fact": "order_values",
      "prompt": "Which value is the smallest?",
      "diagram": {
        "type": "cards",
        "items": [
          {
            "text": "0.09"
          },
          {
            "text": "8%"
          },
          {
            "text": "1/10"
          },
          {
            "text": "0.12"
          }
        ]
      },
      "options": [
        "0.09",
        "1/10",
        "8%",
        "0.12"
      ],
      "correctAnswer": "8%",
      "hint": "Change every value into a percent, then line them up from smallest to largest.",
      "explanation": "As percents: 0.09 = 9%, 8%, 1/10 = 10%, 0.12 = 12%. So the smallest is 8%."
    },
    {
      "id": "w5_q6",
      "worldId": 5,
      "difficulty": "Medium",
      "fact": "order_values",
      "prompt": "Which value is the second smallest?",
      "diagram": {
        "type": "cards",
        "items": [
          {
            "text": "3/8"
          },
          {
            "text": "0.41"
          },
          {
            "text": "35%"
          },
          {
            "text": "36%"
          }
        ]
      },
      "options": [
        "3/8",
        "36%",
        "0.41",
        "35%"
      ],
      "correctAnswer": "36%",
      "hint": "Change every value into a percent, then line them up from smallest to largest.",
      "explanation": "As percents: 3/8 = 37.5%, 0.41 = 41%, 35%, 36%. So the second smallest is 36%."
    },
    {
      "id": "w5_q7",
      "worldId": 5,
      "difficulty": "Medium",
      "fact": "order_values",
      "prompt": "Which value is the greatest?",
      "diagram": {
        "type": "cards",
        "items": [
          {
            "text": "1.15"
          },
          {
            "text": "110%"
          },
          {
            "text": "5/4"
          },
          {
            "text": "1.05"
          }
        ]
      },
      "options": [
        "1.15",
        "110%",
        "1.05",
        "5/4"
      ],
      "correctAnswer": "5/4",
      "hint": "Change every value into a percent, then line them up from smallest to largest.",
      "explanation": "As percents: 1.15 = 115%, 110%, 5/4 = 125%, 1.05 = 105%. So the greatest is 5/4."
    },
    {
      "id": "w5_q8",
      "worldId": 5,
      "difficulty": "Medium",
      "fact": "order_values",
      "prompt": "Which value is the second greatest?",
      "diagram": {
        "type": "cards",
        "items": [
          {
            "text": "0.55"
          },
          {
            "text": "3/5"
          },
          {
            "text": "56%"
          },
          {
            "text": "0.58"
          }
        ]
      },
      "options": [
        "0.58",
        "0.55",
        "3/5",
        "56%"
      ],
      "correctAnswer": "0.58",
      "hint": "Change every value into a percent, then line them up from smallest to largest.",
      "explanation": "As percents: 0.55 = 55%, 3/5 = 60%, 56%, 0.58 = 58%. So the second greatest is 0.58."
    },
    {
      "id": "w5_q9",
      "worldId": 5,
      "difficulty": "Medium",
      "fact": "order_values",
      "prompt": "Which value is the smallest?",
      "diagram": {
        "type": "cards",
        "items": [
          {
            "text": "7/8"
          },
          {
            "text": "0.85"
          },
          {
            "text": "88%"
          },
          {
            "text": "0.9"
          }
        ]
      },
      "options": [
        "7/8",
        "88%",
        "0.85",
        "0.9"
      ],
      "correctAnswer": "0.85",
      "hint": "Change every value into a percent, then line them up from smallest to largest.",
      "explanation": "As percents: 7/8 = 87.5%, 0.85 = 85%, 88%, 0.9 = 90%. So the smallest is 0.85."
    },
    {
      "id": "w5_q10",
      "worldId": 5,
      "difficulty": "Medium",
      "fact": "order_values",
      "prompt": "Which value is the second smallest?",
      "diagram": {
        "type": "cards",
        "items": [
          {
            "text": "0.2"
          },
          {
            "text": "1/4"
          },
          {
            "text": "22%"
          },
          {
            "text": "3/20"
          }
        ]
      },
      "options": [
        "0.2",
        "1/4",
        "22%",
        "3/20"
      ],
      "correctAnswer": "0.2",
      "hint": "Change every value into a percent, then line them up from smallest to largest.",
      "explanation": "As percents: 0.2 = 20%, 1/4 = 25%, 22%, 3/20 = 15%. So the second smallest is 0.2."
    }
  ],
  "6": [
    {
      "id": "w6_q1",
      "worldId": 6,
      "difficulty": "Med-Hard",
      "fact": "score_compare",
      "prompt": "Robo scored 18 out of 20 in Quiz A. Alex scored 40 out of 50 in Quiz B. Who did better?",
      "diagram": {
        "type": "scores",
        "items": [
          {
            "name": "Robo",
            "part": 18,
            "whole": 20
          },
          {
            "name": "Alex",
            "part": 40,
            "whole": 50
          }
        ]
      },
      "options": [
        "Alex",
        "Both are equal",
        "Not enough information",
        "Robo"
      ],
      "correctAnswer": "Robo",
      "hint": "The totals are different, so turn each score into a percent: divide the score by the total, then multiply by 100.",
      "explanation": "18/20 = 90% and 40/50 = 80%. Robo did better."
    },
    {
      "id": "w6_q2",
      "worldId": 6,
      "difficulty": "Med-Hard",
      "fact": "score_compare",
      "prompt": "Ravi made 33 of 40 free throws. Mia made 21 of 25 free throws. Who has the better shooting record?",
      "diagram": {
        "type": "scores",
        "items": [
          {
            "name": "Ravi",
            "part": 33,
            "whole": 40
          },
          {
            "name": "Mia",
            "part": 21,
            "whole": 25
          }
        ]
      },
      "options": [
        "Ravi",
        "Mia",
        "Both are equal",
        "Not enough information"
      ],
      "correctAnswer": "Mia",
      "hint": "The totals are different, so turn each score into a percent: divide the score by the total, then multiply by 100.",
      "explanation": "33/40 = 82.5% and 21/25 = 84%. Mia did better."
    },
    {
      "id": "w6_q3",
      "worldId": 6,
      "difficulty": "Med-Hard",
      "fact": "score_compare",
      "prompt": "Team Red won 9 of 12 games. Team Blue won 32 of 40 games. Which team has the better winning record?",
      "diagram": {
        "type": "scores",
        "items": [
          {
            "name": "Team Red",
            "part": 9,
            "whole": 12
          },
          {
            "name": "Team Blue",
            "part": 32,
            "whole": 40
          }
        ]
      },
      "options": [
        "Team Red",
        "Team Blue",
        "Both are equal",
        "Not enough information"
      ],
      "correctAnswer": "Team Blue",
      "hint": "The totals are different, so turn each score into a percent: divide the score by the total, then multiply by 100.",
      "explanation": "9/12 = 75% and 32/40 = 80%. Team Blue did better."
    },
    {
      "id": "w6_q4",
      "worldId": 6,
      "difficulty": "Med-Hard",
      "fact": "score_compare",
      "prompt": "Leo solved 44 of 50 puzzles. Zara solved 27 of 30 puzzles. Who solved the greater percent?",
      "diagram": {
        "type": "scores",
        "items": [
          {
            "name": "Leo",
            "part": 44,
            "whole": 50
          },
          {
            "name": "Zara",
            "part": 27,
            "whole": 30
          }
        ]
      },
      "options": [
        "Leo",
        "Both are equal",
        "Not enough information",
        "Zara"
      ],
      "correctAnswer": "Zara",
      "hint": "The totals are different, so turn each score into a percent: divide the score by the total, then multiply by 100.",
      "explanation": "44/50 = 88% and 27/30 = 90%. Zara did better."
    },
    {
      "id": "w6_q5",
      "worldId": 6,
      "difficulty": "Med-Hard",
      "fact": "score_compare",
      "prompt": "Nina got 15 out of 25 in a maths test. Omar got 21 out of 35 in a science test. Who did better?",
      "diagram": {
        "type": "scores",
        "items": [
          {
            "name": "Nina",
            "part": 15,
            "whole": 25
          },
          {
            "name": "Omar",
            "part": 21,
            "whole": 35
          }
        ]
      },
      "options": [
        "Both are equal",
        "Nina",
        "Omar",
        "Not enough information"
      ],
      "correctAnswer": "Both are equal",
      "hint": "The totals are different, so turn each score into a percent: divide the score by the total, then multiply by 100.",
      "explanation": "15/25 = 60% and 21/35 = 60%. The scores are equal."
    },
    {
      "id": "w6_q6",
      "worldId": 6,
      "difficulty": "Med-Hard",
      "fact": "score_compare",
      "prompt": "Batch 1 had 13 good loaves out of 20. Batch 2 had 32 good loaves out of 50. Which batch had the higher success rate?",
      "diagram": {
        "type": "scores",
        "items": [
          {
            "name": "Batch 1",
            "part": 13,
            "whole": 20
          },
          {
            "name": "Batch 2",
            "part": 32,
            "whole": 50
          }
        ]
      },
      "options": [
        "Batch 2",
        "Both are equal",
        "Batch 1",
        "Not enough information"
      ],
      "correctAnswer": "Batch 1",
      "hint": "The totals are different, so turn each score into a percent: divide the score by the total, then multiply by 100.",
      "explanation": "13/20 = 65% and 32/50 = 64%. Batch 1 did better."
    },
    {
      "id": "w6_q7",
      "worldId": 6,
      "difficulty": "Med-Hard",
      "fact": "score_compare",
      "prompt": "Lena scored 13 out of 25 in a reading test. Kai scored 22 out of 40 in a spelling test. Who did better?",
      "diagram": {
        "type": "scores",
        "items": [
          {
            "name": "Lena",
            "part": 13,
            "whole": 25
          },
          {
            "name": "Kai",
            "part": 22,
            "whole": 40
          }
        ]
      },
      "options": [
        "Lena",
        "Both are equal",
        "Not enough information",
        "Kai"
      ],
      "correctAnswer": "Kai",
      "hint": "The totals are different, so turn each score into a percent: divide the score by the total, then multiply by 100.",
      "explanation": "13/25 = 52% and 22/40 = 55%. Kai did better."
    },
    {
      "id": "w6_q8",
      "worldId": 6,
      "difficulty": "Med-Hard",
      "fact": "score_percent",
      "prompt": "Ava got 36 out of 40 in a science quiz. What percent did Ava score?",
      "diagram": {
        "type": "scores",
        "items": [
          {
            "name": "Ava",
            "part": 36,
            "whole": 40
          }
        ]
      },
      "options": [
        "36%",
        "90%",
        "4%",
        "100%"
      ],
      "correctAnswer": "90%",
      "hint": "Divide the score by the total, then multiply by 100.",
      "explanation": "36/40 = 90%."
    },
    {
      "id": "w6_q9",
      "worldId": 6,
      "difficulty": "Med-Hard",
      "fact": "score_compare",
      "prompt": "Ben got 17 out of 20 on Quiz 1 and 21 out of 25 on Quiz 2. Which quiz did Ben do better on?",
      "diagram": {
        "type": "scores",
        "items": [
          {
            "name": "Quiz 1",
            "part": 17,
            "whole": 20
          },
          {
            "name": "Quiz 2",
            "part": 21,
            "whole": 25
          }
        ]
      },
      "options": [
        "Quiz 1",
        "Quiz 2",
        "Both are equal",
        "Not enough information"
      ],
      "correctAnswer": "Quiz 1",
      "hint": "The totals are different, so turn each score into a percent: divide the score by the total, then multiply by 100.",
      "explanation": "17/20 = 85% and 21/25 = 84%. Quiz 1 did better."
    },
    {
      "id": "w6_q10",
      "worldId": 6,
      "difficulty": "Med-Hard",
      "fact": "score_compare",
      "prompt": "Sam hit 14 of 16 targets. Tia hit 22 of 25 targets. Who was more accurate?",
      "diagram": {
        "type": "scores",
        "items": [
          {
            "name": "Sam",
            "part": 14,
            "whole": 16
          },
          {
            "name": "Tia",
            "part": 22,
            "whole": 25
          }
        ]
      },
      "options": [
        "Sam",
        "Both are equal",
        "Tia",
        "Not enough information"
      ],
      "correctAnswer": "Tia",
      "hint": "The totals are different, so turn each score into a percent: divide the score by the total, then multiply by 100.",
      "explanation": "14/16 = 87.5% and 22/25 = 88%. Tia did better."
    }
  ],
  "7": [
    {
      "id": "w7_q1",
      "worldId": 7,
      "difficulty": "Med-Hard",
      "fact": "percent_of",
      "prompt": "What is 10% of 250?",
      "diagram": {
        "type": "bars",
        "items": [
          {
            "label": "10% of 250",
            "percent": 10,
            "text": "10%"
          }
        ],
        "caption": "Whole = 250"
      },
      "options": [
        "225",
        "50",
        "25",
        "12.5"
      ],
      "correctAnswer": "25",
      "hint": "Ten percent means one tenth. Divide 250 by 10.",
      "explanation": "10% of 250 = 10/100 × 250 = 25."
    },
    {
      "id": "w7_q2",
      "worldId": 7,
      "difficulty": "Med-Hard",
      "fact": "percent_of",
      "prompt": "What is 25% of 80?",
      "diagram": {
        "type": "bars",
        "items": [
          {
            "label": "25% of 80",
            "percent": 25,
            "text": "25%"
          }
        ],
        "caption": "Whole = 80"
      },
      "options": [
        "60",
        "20",
        "40",
        "10"
      ],
      "correctAnswer": "20",
      "hint": "Twenty five percent is one quarter. Divide 80 by 4.",
      "explanation": "25% of 80 = 25/100 × 80 = 20."
    },
    {
      "id": "w7_q3",
      "worldId": 7,
      "difficulty": "Med-Hard",
      "fact": "percent_of",
      "prompt": "A jar has 64 marbles. 50% of them are blue. How many are blue?",
      "diagram": {
        "type": "bars",
        "items": [
          {
            "label": "50% of 64",
            "percent": 50,
            "text": "50%"
          }
        ],
        "caption": "Whole = 64"
      },
      "options": [
        "64",
        "16",
        "50",
        "32"
      ],
      "correctAnswer": "32",
      "hint": "Fifty percent is one half. Divide 64 by 2.",
      "explanation": "50% of 64 = 50/100 × 64 = 32."
    },
    {
      "id": "w7_q4",
      "worldId": 7,
      "difficulty": "Med-Hard",
      "fact": "percent_of",
      "prompt": "What is 20% of 150?",
      "diagram": {
        "type": "bars",
        "items": [
          {
            "label": "20% of 150",
            "percent": 20,
            "text": "20%"
          }
        ],
        "caption": "Whole = 150"
      },
      "options": [
        "30",
        "120",
        "60",
        "15"
      ],
      "correctAnswer": "30",
      "hint": "Find 10% first by dividing 150 by 10, then scale up to 20%.",
      "explanation": "20% of 150 = 20/100 × 150 = 30."
    },
    {
      "id": "w7_q5",
      "worldId": 7,
      "difficulty": "Med-Hard",
      "fact": "percent_of",
      "prompt": "A school has 200 students. 5% are absent today. How many are absent?",
      "diagram": {
        "type": "bars",
        "items": [
          {
            "label": "5% of 200",
            "percent": 5,
            "text": "5%"
          }
        ],
        "caption": "Whole = 200"
      },
      "options": [
        "190",
        "20",
        "10",
        "5"
      ],
      "correctAnswer": "10",
      "hint": "Find 10% first (20), then halve it to get 5%.",
      "explanation": "5% of 200 = 5/100 × 200 = 10."
    },
    {
      "id": "w7_q6",
      "worldId": 7,
      "difficulty": "Med-Hard",
      "fact": "percent_of",
      "prompt": "What is 75% of 60?",
      "diagram": {
        "type": "bars",
        "items": [
          {
            "label": "75% of 60",
            "percent": 75,
            "text": "75%"
          }
        ],
        "caption": "Whole = 60"
      },
      "options": [
        "45",
        "15",
        "90",
        "22.5"
      ],
      "correctAnswer": "45",
      "hint": "Seventy five percent is three quarters. Find one quarter of 60, then multiply by 3.",
      "explanation": "75% of 60 = 75/100 × 60 = 45."
    },
    {
      "id": "w7_q7",
      "worldId": 7,
      "difficulty": "Med-Hard",
      "fact": "percent_of",
      "prompt": "What is 30% of 90?",
      "diagram": {
        "type": "bars",
        "items": [
          {
            "label": "30% of 90",
            "percent": 30,
            "text": "30%"
          }
        ],
        "caption": "Whole = 90"
      },
      "options": [
        "63",
        "54",
        "13.5",
        "27"
      ],
      "correctAnswer": "27",
      "hint": "Find 10% of 90, then multiply by 3.",
      "explanation": "30% of 90 = 30/100 × 90 = 27."
    },
    {
      "id": "w7_q8",
      "worldId": 7,
      "difficulty": "Med-Hard",
      "fact": "percent_of",
      "prompt": "A team played 40 matches and won 15% of them. How many matches did they win?",
      "diagram": {
        "type": "bars",
        "items": [
          {
            "label": "15% of 40",
            "percent": 15,
            "text": "15%"
          }
        ],
        "caption": "Whole = 40"
      },
      "options": [
        "34",
        "6",
        "12",
        "3"
      ],
      "correctAnswer": "6",
      "hint": "Find 10% (4) and 5% (2), then add them.",
      "explanation": "15% of 40 = 15/100 × 40 = 6."
    },
    {
      "id": "w7_q9",
      "worldId": 7,
      "difficulty": "Med-Hard",
      "fact": "percent_of",
      "prompt": "What is 60% of 45?",
      "diagram": {
        "type": "bars",
        "items": [
          {
            "label": "60% of 45",
            "percent": 60,
            "text": "60%"
          }
        ],
        "caption": "Whole = 45"
      },
      "options": [
        "18",
        "27",
        "54",
        "13.5"
      ],
      "correctAnswer": "27",
      "hint": "Find 10% first by dividing 45 by 10, then scale up to 60%.",
      "explanation": "60% of 45 = 60/100 × 45 = 27."
    },
    {
      "id": "w7_q10",
      "worldId": 7,
      "difficulty": "Hard",
      "fact": "percent_of",
      "prompt": "A jacket costs $120. The tax is 35% of that price. How much is the tax?",
      "diagram": {
        "type": "bars",
        "items": [
          {
            "label": "35% of 120",
            "percent": 35,
            "text": "35%"
          }
        ],
        "caption": "Whole = 120"
      },
      "options": [
        "78",
        "84",
        "21",
        "42"
      ],
      "correctAnswer": "42",
      "hint": "Find 10% (12), then 30% and 5%, and add them.",
      "explanation": "35% of 120 = 35/100 × 120 = 42."
    }
  ],
  "8": [
    {
      "id": "w8_q1",
      "worldId": 8,
      "difficulty": "Hard",
      "fact": "different_wholes",
      "prompt": "Which is more: 50% of 20 or 30% of 80?",
      "diagram": {
        "type": "wholes",
        "items": [
          {
            "label": "50% of 20",
            "percent": 50,
            "whole": 20
          },
          {
            "label": "30% of 80",
            "percent": 30,
            "whole": 80
          }
        ]
      },
      "options": [
        "30% of 80",
        "50% of 20",
        "They are equal",
        "Not enough information"
      ],
      "correctAnswer": "30% of 80",
      "hint": "The wholes are different, so a bigger percent may not mean a bigger amount. Find each amount first.",
      "explanation": "50% of 20 = 10 and 30% of 80 = 24. The greater amount is 30% of 80."
    },
    {
      "id": "w8_q2",
      "worldId": 8,
      "difficulty": "Hard",
      "fact": "different_wholes",
      "prompt": "School A has 400 students and 30% walk. School B has 250 students and 44% walk. Which school has more walkers?",
      "diagram": {
        "type": "wholes",
        "items": [
          {
            "label": "School A",
            "percent": 30,
            "whole": 400
          },
          {
            "label": "School B",
            "percent": 44,
            "whole": 250
          }
        ]
      },
      "options": [
        "School B",
        "They are equal",
        "School A",
        "Not enough information"
      ],
      "correctAnswer": "School A",
      "hint": "The wholes are different, so a bigger percent may not mean a bigger amount. Find each amount first.",
      "explanation": "30% of 400 = 120 and 44% of 250 = 110. The greater amount is School A."
    },
    {
      "id": "w8_q3",
      "worldId": 8,
      "difficulty": "Hard",
      "fact": "different_wholes",
      "prompt": "Which is more: 60% of 50 or 45% of 80?",
      "diagram": {
        "type": "wholes",
        "items": [
          {
            "label": "60% of 50",
            "percent": 60,
            "whole": 50
          },
          {
            "label": "45% of 80",
            "percent": 45,
            "whole": 80
          }
        ]
      },
      "options": [
        "60% of 50",
        "They are equal",
        "Not enough information",
        "45% of 80"
      ],
      "correctAnswer": "45% of 80",
      "hint": "The wholes are different, so a bigger percent may not mean a bigger amount. Find each amount first.",
      "explanation": "60% of 50 = 30 and 45% of 80 = 36. The greater amount is 45% of 80."
    },
    {
      "id": "w8_q4",
      "worldId": 8,
      "difficulty": "Hard",
      "fact": "different_wholes",
      "prompt": "Tank 1 holds 80 litres and is 75% full. Tank 2 holds 120 litres and is 55% full. Which tank has more water?",
      "diagram": {
        "type": "wholes",
        "items": [
          {
            "label": "Tank 1",
            "percent": 75,
            "whole": 80
          },
          {
            "label": "Tank 2",
            "percent": 55,
            "whole": 120
          }
        ]
      },
      "options": [
        "Tank 1",
        "Tank 2",
        "They are equal",
        "Not enough information"
      ],
      "correctAnswer": "Tank 2",
      "hint": "The wholes are different, so a bigger percent may not mean a bigger amount. Find each amount first.",
      "explanation": "75% of 80 = 60 L and 55% of 120 = 66 L. The greater amount is Tank 2."
    },
    {
      "id": "w8_q5",
      "worldId": 8,
      "difficulty": "Hard",
      "fact": "different_wholes",
      "prompt": "Which is more: 20% of 300 or 35% of 160?",
      "diagram": {
        "type": "wholes",
        "items": [
          {
            "label": "20% of 300",
            "percent": 20,
            "whole": 300
          },
          {
            "label": "35% of 160",
            "percent": 35,
            "whole": 160
          }
        ]
      },
      "options": [
        "20% of 300",
        "35% of 160",
        "They are equal",
        "Not enough information"
      ],
      "correctAnswer": "20% of 300",
      "hint": "The wholes are different, so a bigger percent may not mean a bigger amount. Find each amount first.",
      "explanation": "20% of 300 = 60 and 35% of 160 = 56. The greater amount is 20% of 300."
    },
    {
      "id": "w8_q6",
      "worldId": 8,
      "difficulty": "Hard",
      "fact": "different_wholes",
      "prompt": "Class 7A has 40 students and 65% are girls. Class 7B has 32 students and 75% are girls. Which class has more girls?",
      "diagram": {
        "type": "wholes",
        "items": [
          {
            "label": "Class 7A",
            "percent": 65,
            "whole": 40
          },
          {
            "label": "Class 7B",
            "percent": 75,
            "whole": 32
          }
        ]
      },
      "options": [
        "Class 7B",
        "They are equal",
        "Class 7A",
        "Not enough information"
      ],
      "correctAnswer": "Class 7A",
      "hint": "The wholes are different, so a bigger percent may not mean a bigger amount. Find each amount first.",
      "explanation": "65% of 40 = 26 and 75% of 32 = 24. The greater amount is Class 7A."
    },
    {
      "id": "w8_q7",
      "worldId": 8,
      "difficulty": "Hard",
      "fact": "different_wholes",
      "prompt": "Battery A holds 3000 units of charge and is 40% full. Battery B holds 4500 units and is 30% full. Which battery has more charge left?",
      "diagram": {
        "type": "wholes",
        "items": [
          {
            "label": "Battery A",
            "percent": 40,
            "whole": 3000
          },
          {
            "label": "Battery B",
            "percent": 30,
            "whole": 4500
          }
        ]
      },
      "options": [
        "Battery A",
        "They are equal",
        "Battery B",
        "Not enough information"
      ],
      "correctAnswer": "Battery B",
      "hint": "The wholes are different, so a bigger percent may not mean a bigger amount. Find each amount first.",
      "explanation": "40% of 3000 = 1200 units and 30% of 4500 = 1350 units. The greater amount is Battery B."
    },
    {
      "id": "w8_q8",
      "worldId": 8,
      "difficulty": "Hard",
      "fact": "different_wholes",
      "prompt": "Which is more: 12% of 500 or 15% of 350?",
      "diagram": {
        "type": "wholes",
        "items": [
          {
            "label": "12% of 500",
            "percent": 12,
            "whole": 500
          },
          {
            "label": "15% of 350",
            "percent": 15,
            "whole": 350
          }
        ]
      },
      "options": [
        "15% of 350",
        "12% of 500",
        "They are equal",
        "Not enough information"
      ],
      "correctAnswer": "12% of 500",
      "hint": "The wholes are different, so a bigger percent may not mean a bigger amount. Find each amount first.",
      "explanation": "12% of 500 = 60 and 15% of 350 = 52.5. The greater amount is 12% of 500."
    },
    {
      "id": "w8_q9",
      "worldId": 8,
      "difficulty": "Hard",
      "fact": "different_wholes",
      "prompt": "Farm P plants corn on 35% of its 200 acres. Farm Q plants corn on 50% of its 120 acres. Which farm has more corn land?",
      "diagram": {
        "type": "wholes",
        "items": [
          {
            "label": "Farm P",
            "percent": 35,
            "whole": 200
          },
          {
            "label": "Farm Q",
            "percent": 50,
            "whole": 120
          }
        ]
      },
      "options": [
        "Farm Q",
        "They are equal",
        "Not enough information",
        "Farm P"
      ],
      "correctAnswer": "Farm P",
      "hint": "The wholes are different, so a bigger percent may not mean a bigger amount. Find each amount first.",
      "explanation": "35% of 200 = 70 acres and 50% of 120 = 60 acres. The greater amount is Farm P."
    },
    {
      "id": "w8_q10",
      "worldId": 8,
      "difficulty": "Hard",
      "fact": "different_wholes",
      "prompt": "Which is more: 8% of 900 or 15% of 500?",
      "diagram": {
        "type": "wholes",
        "items": [
          {
            "label": "8% of 900",
            "percent": 8,
            "whole": 900
          },
          {
            "label": "15% of 500",
            "percent": 15,
            "whole": 500
          }
        ]
      },
      "options": [
        "15% of 500",
        "8% of 900",
        "They are equal",
        "Not enough information"
      ],
      "correctAnswer": "15% of 500",
      "hint": "The wholes are different, so a bigger percent may not mean a bigger amount. Find each amount first.",
      "explanation": "8% of 900 = 72 and 15% of 500 = 75. The greater amount is 15% of 500."
    }
  ],
  "9": [
    {
      "id": "w9_q1",
      "worldId": 9,
      "difficulty": "Hard",
      "fact": "discount_compare",
      "prompt": "Shop A gives 25% off a $60 pair of sneakers. Shop B gives 10% off a $200 backpack. Which shop saves you more money?",
      "diagram": {
        "type": "tags",
        "items": [
          {
            "label": "Shop A",
            "item": "Sneakers",
            "price": 60,
            "off": 25
          },
          {
            "label": "Shop B",
            "item": "Backpack",
            "price": 200,
            "off": 10
          }
        ]
      },
      "options": [
        "Shop A",
        "Same saving",
        "Shop B",
        "Not enough information"
      ],
      "correctAnswer": "Shop B",
      "hint": "A bigger percent off is not always a bigger saving. Find how many dollars each shop saves you.",
      "explanation": "Shop A saves 25% of $60 = $15. Shop B saves 10% of $200 = $20. Shop B saves more."
    },
    {
      "id": "w9_q2",
      "worldId": 9,
      "difficulty": "Hard",
      "fact": "discount_compare",
      "prompt": "Shop A gives 30% off $90 headphones. Shop B gives 50% off a $50 speaker. Which shop saves you more money?",
      "diagram": {
        "type": "tags",
        "items": [
          {
            "label": "Shop A",
            "item": "Headphones",
            "price": 90,
            "off": 30
          },
          {
            "label": "Shop B",
            "item": "Speaker",
            "price": 50,
            "off": 50
          }
        ]
      },
      "options": [
        "Shop A",
        "Shop B",
        "Same saving",
        "Not enough information"
      ],
      "correctAnswer": "Shop A",
      "hint": "A bigger percent off is not always a bigger saving. Find how many dollars each shop saves you.",
      "explanation": "Shop A saves 30% of $90 = $27. Shop B saves 50% of $50 = $25. Shop A saves more."
    },
    {
      "id": "w9_q3",
      "worldId": 9,
      "difficulty": "Hard",
      "fact": "discount_compare",
      "prompt": "Shop A gives 10% off a $200 jacket. Shop B gives 25% off an $80 board game. Which shop saves you more money?",
      "diagram": {
        "type": "tags",
        "items": [
          {
            "label": "Shop A",
            "item": "Jacket",
            "price": 200,
            "off": 10
          },
          {
            "label": "Shop B",
            "item": "Board game",
            "price": 80,
            "off": 25
          }
        ]
      },
      "options": [
        "Shop A",
        "Shop B",
        "Not enough information",
        "Same saving"
      ],
      "correctAnswer": "Same saving",
      "hint": "A bigger percent off is not always a bigger saving. Find how many dollars each shop saves you.",
      "explanation": "Shop A saves 10% of $200 = $20. Shop B saves 25% of $80 = $20. The savings are the same."
    },
    {
      "id": "w9_q4",
      "worldId": 9,
      "difficulty": "Hard",
      "fact": "discount_compare",
      "prompt": "Shop A gives 15% off a $150 lamp. Shop B gives 40% off a $70 book set. Which shop saves you more money?",
      "diagram": {
        "type": "tags",
        "items": [
          {
            "label": "Shop A",
            "item": "Lamp",
            "price": 150,
            "off": 15
          },
          {
            "label": "Shop B",
            "item": "Book set",
            "price": 70,
            "off": 40
          }
        ]
      },
      "options": [
        "Shop A",
        "Shop B",
        "Same saving",
        "Not enough information"
      ],
      "correctAnswer": "Shop B",
      "hint": "A bigger percent off is not always a bigger saving. Find how many dollars each shop saves you.",
      "explanation": "Shop A saves 15% of $150 = $22.50. Shop B saves 40% of $70 = $28. Shop B saves more."
    },
    {
      "id": "w9_q5",
      "worldId": 9,
      "difficulty": "Hard",
      "fact": "discount_compare",
      "prompt": "Shop A gives 40% off an $80 helmet. Shop B gives 10% off a $300 bike. Which shop saves you more money?",
      "diagram": {
        "type": "tags",
        "items": [
          {
            "label": "Shop A",
            "item": "Helmet",
            "price": 80,
            "off": 40
          },
          {
            "label": "Shop B",
            "item": "Bike",
            "price": 300,
            "off": 10
          }
        ]
      },
      "options": [
        "Shop B",
        "Shop A",
        "Same saving",
        "Not enough information"
      ],
      "correctAnswer": "Shop A",
      "hint": "A bigger percent off is not always a bigger saving. Find how many dollars each shop saves you.",
      "explanation": "Shop A saves 40% of $80 = $32. Shop B saves 10% of $300 = $30. Shop A saves more."
    },
    {
      "id": "w9_q6",
      "worldId": 9,
      "difficulty": "Hard",
      "fact": "sale_price",
      "prompt": "A video game costs $80. It is on sale for 25% off. What is the sale price?",
      "diagram": {
        "type": "tags",
        "items": [
          {
            "label": "Sale",
            "item": "Game",
            "price": 80,
            "off": 25
          }
        ]
      },
      "options": [
        "$20",
        "$55",
        "$100",
        "$60"
      ],
      "correctAnswer": "$60",
      "hint": "First find 25% of $80. Then subtract that saving from the price.",
      "explanation": "25% of $80 = $20. Sale price = $80 − $20 = $60."
    },
    {
      "id": "w9_q7",
      "worldId": 9,
      "difficulty": "Hard",
      "fact": "sale_price",
      "prompt": "A bike helmet costs $120 and is 15% off. What is the sale price?",
      "diagram": {
        "type": "tags",
        "items": [
          {
            "label": "Sale",
            "item": "Helmet",
            "price": 120,
            "off": 15
          }
        ]
      },
      "options": [
        "$102",
        "$18",
        "$105",
        "$138"
      ],
      "correctAnswer": "$102",
      "hint": "First find 15% of $120. Then subtract that saving from the price.",
      "explanation": "15% of $120 = $18. Sale price = $120 − $18 = $102."
    },
    {
      "id": "w9_q8",
      "worldId": 9,
      "difficulty": "Hard",
      "fact": "sale_price_compare",
      "prompt": "Shop A sells a $50 item at 20% off. Shop B sells a $45 item at 10% off. Which shop has the lower sale price?",
      "diagram": {
        "type": "tags",
        "items": [
          {
            "label": "Shop A",
            "item": "Item",
            "price": 50,
            "off": 20
          },
          {
            "label": "Shop B",
            "item": "Item",
            "price": 45,
            "off": 10
          }
        ]
      },
      "options": [
        "Shop B",
        "Same price",
        "Shop A",
        "Not enough information"
      ],
      "correctAnswer": "Shop A",
      "hint": "Find the sale price of each item: price minus saving. The lower sale price is the better deal.",
      "explanation": "Shop A: $50 − $10 = $40. Shop B: $45 − $4.50 = $40.50. Shop A is cheaper."
    },
    {
      "id": "w9_q9",
      "worldId": 9,
      "difficulty": "Hard",
      "fact": "sale_price_compare",
      "prompt": "Shop A sells a $200 scooter at 30% off. Shop B sells a $150 scooter at 10% off. Which shop has the lower sale price?",
      "diagram": {
        "type": "tags",
        "items": [
          {
            "label": "Shop A",
            "item": "Scooter",
            "price": 200,
            "off": 30
          },
          {
            "label": "Shop B",
            "item": "Scooter",
            "price": 150,
            "off": 10
          }
        ]
      },
      "options": [
        "Shop A",
        "Same price",
        "Not enough information",
        "Shop B"
      ],
      "correctAnswer": "Shop B",
      "hint": "Find the sale price of each item: price minus saving. The lower sale price is the better deal.",
      "explanation": "Shop A: $200 − $60 = $140. Shop B: $150 − $15 = $135. Shop B is cheaper."
    },
    {
      "id": "w9_q10",
      "worldId": 9,
      "difficulty": "Hard",
      "fact": "discount_compare",
      "prompt": "Shop A gives 30% off a $75 coat. Shop B gives 25% off an $80 coat. Which shop saves you more money?",
      "diagram": {
        "type": "tags",
        "items": [
          {
            "label": "Shop A",
            "item": "Coat",
            "price": 75,
            "off": 30
          },
          {
            "label": "Shop B",
            "item": "Coat",
            "price": 80,
            "off": 25
          }
        ]
      },
      "options": [
        "Shop B",
        "Shop A",
        "Same saving",
        "Not enough information"
      ],
      "correctAnswer": "Shop A",
      "hint": "A bigger percent off is not always a bigger saving. Find how many dollars each shop saves you.",
      "explanation": "Shop A saves 30% of $75 = $22.50. Shop B saves 25% of $80 = $20. Shop A saves more."
    }
  ],
  "10": [
    {
      "id": "w10_q1",
      "worldId": 10,
      "difficulty": "Hard",
      "fact": "percentage_points",
      "prompt": "A candidate had 48% of the votes last year and 55% this year. By how many percentage points did the vote share rise?",
      "diagram": {
        "type": "change",
        "from": 48,
        "to": 55,
        "unit": "%"
      },
      "options": [
        "7 percentage points",
        "7%",
        "55 percentage points",
        "15 percentage points"
      ],
      "correctAnswer": "7 percentage points",
      "hint": "Both values are percents, so just subtract them. The gap is measured in percentage points.",
      "explanation": "55% − 48% = 7 percentage points."
    },
    {
      "id": "w10_q2",
      "worldId": 10,
      "difficulty": "Hard",
      "fact": "percent_change",
      "prompt": "A game costs $40. Next month it costs $50. What is the percent increase in price?",
      "diagram": {
        "type": "change",
        "from": 40,
        "to": 50,
        "unit": "$"
      },
      "options": [
        "20%",
        "10%",
        "25%",
        "30%"
      ],
      "correctAnswer": "25%",
      "hint": "Percent change = change ÷ ORIGINAL value × 100. Divide by the starting value, not the new one.",
      "explanation": "Change = 10. 10 ÷ 40 × 100 = 25% increase."
    },
    {
      "id": "w10_q3",
      "worldId": 10,
      "difficulty": "Hard",
      "fact": "percent_change",
      "prompt": "A phone case costs $50. It goes on sale for $40. What is the percent decrease in price?",
      "diagram": {
        "type": "change",
        "from": 50,
        "to": 40,
        "unit": "$"
      },
      "options": [
        "25%",
        "10%",
        "20%",
        "40%"
      ],
      "correctAnswer": "20%",
      "hint": "Percent change = change ÷ ORIGINAL value × 100. Divide by the starting value, not the new one.",
      "explanation": "Change = 10. 10 ÷ 50 × 100 = 20% decrease."
    },
    {
      "id": "w10_q4",
      "worldId": 10,
      "difficulty": "Hard",
      "fact": "percentage_points",
      "prompt": "Class attendance was 80% on Monday and 92% on Friday. By how many percentage points did it rise?",
      "diagram": {
        "type": "change",
        "from": 80,
        "to": 92,
        "unit": "%"
      },
      "options": [
        "12%",
        "12 percentage points",
        "92 percentage points",
        "15 percentage points"
      ],
      "correctAnswer": "12 percentage points",
      "hint": "Both values are percents, so just subtract them. The gap is measured in percentage points.",
      "explanation": "92% − 80% = 12 percentage points."
    },
    {
      "id": "w10_q5",
      "worldId": 10,
      "difficulty": "Hard",
      "fact": "multi_step",
      "prompt": "Store A raises the price of a $40 toy by 10%. Store B raises the price of a $30 toy by 15%. Which store raises its price by more dollars?",
      "diagram": {
        "type": "wholes",
        "items": [
          {
            "label": "Store A",
            "percent": 10,
            "whole": 40
          },
          {
            "label": "Store B",
            "percent": 15,
            "whole": 30
          }
        ]
      },
      "options": [
        "Store A",
        "They are equal",
        "Not enough information",
        "Store B"
      ],
      "correctAnswer": "Store B",
      "hint": "Find 10% of 40 and 15% of 30 in dollars, then compare the two amounts.",
      "explanation": "10% of 40 = $4 and 15% of 30 = $4.50. Store B raises the price by more dollars."
    },
    {
      "id": "w10_q6",
      "worldId": 10,
      "difficulty": "Hard",
      "fact": "percent_change",
      "prompt": "A concert had 200 tickets sold on day one and 250 on day two. What is the percent increase?",
      "diagram": {
        "type": "change",
        "from": 200,
        "to": 250,
        "unit": ""
      },
      "options": [
        "25%",
        "20%",
        "50%",
        "30%"
      ],
      "correctAnswer": "25%",
      "hint": "Percent change = change ÷ ORIGINAL value × 100. Divide by the starting value, not the new one.",
      "explanation": "Change = 50. 50 ÷ 200 × 100 = 25% increase."
    },
    {
      "id": "w10_q7",
      "worldId": 10,
      "difficulty": "Hard",
      "fact": "compare_change",
      "prompt": "Sam's savings grew from $80 to $100. Ella's grew from $150 to $180. Whose savings grew by the greater percent?",
      "diagram": {
        "type": "scores",
        "items": [
          {
            "name": "Sam",
            "part": 100,
            "whole": 80,
            "label": "80 → 100"
          },
          {
            "name": "Ella",
            "part": 180,
            "whole": 150,
            "label": "150 → 180"
          }
        ],
        "mode": "change"
      },
      "options": [
        "Ella",
        "They grew the same",
        "Sam",
        "Not enough information"
      ],
      "correctAnswer": "Sam",
      "hint": "Work out the percent increase for each person: increase ÷ starting amount × 100.",
      "explanation": "Sam: 20 ÷ 80 = 25%. Ella: 30 ÷ 150 = 20%. Sam grew by the greater percent."
    },
    {
      "id": "w10_q8",
      "worldId": 10,
      "difficulty": "Hard",
      "fact": "percent_change",
      "prompt": "A town had 500 people. Now it has 450 people. What is the percent decrease?",
      "diagram": {
        "type": "change",
        "from": 500,
        "to": 450,
        "unit": ""
      },
      "options": [
        "10%",
        "11.11%",
        "50%",
        "15%"
      ],
      "correctAnswer": "10%",
      "hint": "Percent change = change ÷ ORIGINAL value × 100. Divide by the starting value, not the new one.",
      "explanation": "Change = 50. 50 ÷ 500 × 100 = 10% decrease."
    },
    {
      "id": "w10_q9",
      "worldId": 10,
      "difficulty": "Hard",
      "fact": "points_vs_percent",
      "prompt": "Support for a school plan rose from 40% to 50%. Which statement is correct?",
      "diagram": {
        "type": "change",
        "from": 40,
        "to": 50,
        "unit": "%"
      },
      "options": [
        "10 percentage points, a 10% increase",
        "25 percentage points, a 10% increase",
        "10 percentage points, a 20% increase",
        "10 percentage points, a 25% increase"
      ],
      "correctAnswer": "10 percentage points, a 25% increase",
      "hint": "Subtract to get percentage points. For percent increase, divide that gap by the starting 40%.",
      "explanation": "50% − 40% = 10 percentage points. 10 ÷ 40 × 100 = 25%, so it is a 25% increase."
    },
    {
      "id": "w10_q10",
      "worldId": 10,
      "difficulty": "Hard",
      "fact": "compare_change",
      "prompt": "Battery A dropped from 80% to 60%. Battery B dropped from 50% to 40%. Which battery lost the greater percent of its OWN starting charge?",
      "diagram": {
        "type": "scores",
        "items": [
          {
            "name": "Battery A",
            "part": 60,
            "whole": 80,
            "label": "80% → 60%"
          },
          {
            "name": "Battery B",
            "part": 40,
            "whole": 50,
            "label": "50% → 40%"
          }
        ],
        "mode": "change"
      },
      "options": [
        "Battery B",
        "Battery A",
        "They lost the same",
        "Not enough information"
      ],
      "correctAnswer": "Battery A",
      "hint": "Find each drop as a percent of its own starting charge: drop ÷ start × 100.",
      "explanation": "Battery A: 20 ÷ 80 = 25%. Battery B: 10 ÷ 50 = 20%. Battery A lost the greater percent of its own charge."
    }
  ]
};

export function buildWorldSession(worldId, sessionSize = 10) {
  const worldQuestions = staticQuestionBank[worldId] || staticQuestionBank[1];
  return [...worldQuestions].slice(0, sessionSize);
}

export function generateQuestionForWorld(worldId) {
  const worldQuestions = staticQuestionBank[worldId] || staticQuestionBank[1];
  return worldQuestions[0];
}

export default staticQuestionBank;
