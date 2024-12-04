import { Dynasty } from '../types/timeline';

export const dynasties: Dynasty[] = [
  {
    name: "Qin Dynasty",
    period: {
      start: -221,
      end: -206
    },
    capital: ["Xianyang"],
    notableEvents: [
      {
        date: -221,
        title: "Unification of China",
        description: "Qin Shi Huang unified China for the first time in history",
        category: "political",
        importance: 1
      },
      {
        date: -214,
        title: "Great Wall Construction",
        description: "Beginning of the Great Wall of China construction",
        category: "architectural",
        importance: 1
      }
    ],
    achievements: [
      {
        title: "Standardization of Writing",
        description: "Implementation of a unified writing system",
        category: "literature",
        impact: "Enabled efficient communication across the empire"
      },
      {
        title: "Terracotta Army",
        description: "Creation of the Terracotta Warriors",
        category: "art",
        impact: "Demonstrated advanced sculpture techniques and military organization"
      }
    ],
    emperors: [
      {
        name: "Qin Shi Huang",
        reignPeriod: {
          start: -221,
          end: -210
        },
        significance: "First Emperor of unified China",
        achievements: [
          "Standardized writing, weights, and measures",
          "Initiated Great Wall construction",
          "Created centralized bureaucracy"
        ]
      }
    ]
  }
];