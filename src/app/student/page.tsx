'use client'

import { useState } from 'react'

export default function StudentPage() {
  const [activeTab, setActiveTab] = useState('available')
  const [availableExams] = useState([
    {
      id: 1,
      title: 'Try Out Matematika Kelas XII',
      subject: 'Matematika',
      duration: 90,
      difficulty: 'Sedang',
      questions: 25,
      deadline: '2024-01-20T23:59:59',
      category: 'Mandatory'
    },
    {
      id: 2,
      title: 'Quiz IPA Chapter 5',
      subject: 'IPA',
      duration: 45,
      difficulty: 'Mudah',
      questions: 15,
      deadline: '2024-01-18T15:00:00',
      category: 'Quiz'
    },
    {
      id: 3,
      title: 'Ujian Bahasa Inggris Midterm',
      subject: 'Bahasa Inggris',
      duration: 120,
      difficulty: 'Sulit',
      questions: 40,
      deadline: '2024-01-25T10:00:00',
      category: 'Midterm'
    }
  ])

  const [examHistory] = useState([
    {
      id: 1,
      title: 'Quiz Fisika Chapter 4',
      subject: 'Fisika',
      score: 85,
      maxScore: 100,
      status: 'completed',
      completedAt: '2024-01-10T14:30:00',
      duration: 35,
      timeSpent: 28,
      questions: 20,
      correctAnswers: 17,
      passingGrade: 70,
      teacher: 'Pak Budi'
    },
    {
      id: 2,
      title: 'Try Out Kimia',
      subject: 'Kimia',
      score: 72,
      maxScore: 100,
      status: 'completed',
      completedAt: '2024-01-08T09:15:00',
      duration: 60,
      timeSpent: 52,
      questions: 30,
      correctAnswers: 22,
      passingGrade: 75,
      teacher: 'Bu Diana'
    },
    {
      id: 3,
      title: 'Ujian Matematika Remedial',
      subject: 'Matematika',
      score: 68,
      maxScore: 100,
      status: 'remedial',
      completedAt: '2024-01-05T11:00:00',
      duration: 90,
      timeSpent: 88,
      questions: 25,
      correctAnswers: 15,
      passingGrade: 70,
      teacher: 'Pak Ahmad'
    }
  ])

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Mudah': return '#10b981'
      case 'Sedang': return '#f59e0b'
      case 'Sulit': return '#ef4444'
      default: return '#6b7280'
    }
  }

  const getStatusBadge = (status) => {
    switch(status) {
      case 'completed': return { backgroundColor: '#10b981', color: 'white', text: 'Lulus' }
      case 'remedial': return { backgroundColor: '#f59e0b', color: 'white', text: 'Remedial' }
      case 'in_progress': return { backgroundColor: '#3b82f6', color: 'white', text: 'Sedang Dikerjakan' }
      default: return { backgroundColor: '#6b7280', color: 'white', text: 'Draft' }
    }
  }

  const getTimeRemaining
