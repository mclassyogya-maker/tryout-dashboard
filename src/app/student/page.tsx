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

  const getTimeRemaining = (deadline) => {
    const now = new Date()
    const deadlineDate = new Date(deadline)
    const diff = deadlineDate - now
    
    if (diff <= 0) return 'Telah berakhir'
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    
    if (days > 0) return `${days} hari lagi`
    if (hours > 0) return `${hours} jam lagi`
    return 'Kurang dari 1 jam'
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '2rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>Portal Siswa</h1>
              <p style={{ color: '#6b7280', margin: '0.5rem 0 0' }}>Akses ujian dan pantau progress belajar</p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button style={{ backgroundColor: '#10b981', color: 'white', padding: '0.75rem 1rem', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
                Lihat Ujian Aktif
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '1.5rem', borderLeft: '4px solid #10b981' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', margin: 0 }}>Ujian Tersedia</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>5</p>
                <p style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '0.25rem' }}>2 baru hari ini</p>
              </div>
              <div style={{ backgroundColor: '#10b981', color: 'white', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>📝</span>
              </div>
            </div>
          </div>
          
          <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '1.5rem', borderLeft: '4px solid #3b82f6' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', margin: 0 }}>Rata-rata Nilai</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>82.3</p>
                <p style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '0.25rem' }}>+3.5% improvement</p>
              </div>
              <div style={{ backgroundColor: '#3b82f6', color: 'white', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>📊</span>
              </div>
            </div>
          </div>
          
          <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '1.5rem', borderLeft: '4px solid #8b5cf6' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', margin: 0 }}>Ujian Selesai</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>12</p>
                <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>Total semester ini</p>
              </div>
              <div style={{ backgroundColor: '#8b5cf6', color: 'white', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>✅</span>
              </div>
            </div>
          </div>
          
          <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '1.5rem', borderLeft: '4px solid #f59e0b' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', margin: 0 }}>Ranking Kelas</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>#8</p>
                <p style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '0.25rem' }}>+2 naik dari bulan lalu</p>
              </div>
              <div style={{ backgroundColor: '#f59e0b', color: 'white', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>🏆</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', borderBottom: '1px solid #e5e7eb', marginBottom: '1rem' }}>
            <button
              onClick={() => setActiveTab('available')}
              style={{ padding: '0.75rem 1rem', borderBottom: activeTab === 'available' ? '2px solid #3b82f6' : 'none', backgroundColor: 'transparent', color: activeTab === 'available' ? '#3b82f6' : '#6b7280', cursor: 'pointer' }}
            >
              Ujian Tersedia
            </button>
            <button
              onClick={() => setActiveTab('history')}
              style={{ padding: '0.75rem 1rem', borderBottom: activeTab === 'history' ? '2px solid #3b82f6' : 'none', backgroundColor: 'transparent', color: activeTab === 'history' ? '#3b82f6' : '#6b7280', cursor: 'pointer' }}
            >
              Riwayat Ujian
            </button>
          </div>

          {activeTab === 'available' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
              {availableExams.map((exam) => (
                <div key={exam.id} style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem', transition: 'all 0.2s' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontWeight: '600', color: '#1f2937', margin: 0, marginBottom: '0.5rem' }}>{exam.title}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                        <span style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: '500', backgroundColor: getDifficultyColor(exam.difficulty), color: 'white', borderRadius: '9999px' }}>
                          {exam.difficulty}
                        </span>
                        <span style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: '500', backgroundColor: '#dbeafe', color: '#1e40af', borderRadius: '9999px' }}>
                          {exam.category}
                        </span>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
                        <span>{exam.subject}</span>
                        <span>•</span>
                        <span>{exam.duration} menit</span>
                        <span>•</span>
                        <span>{exam.questions} soal</span>
                      </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: '#f59e0b', fontWeight: '500' }}>
                      {getTimeRemaining(exam.deadline)}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      style={{ backgroundColor: '#10b981', color: 'white', padding: '0.75rem 1rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.875rem' }}
                    >
                      Mulai
                    </button>
                    <button
                      style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer', fontSize: '0.875rem' }}
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
            </div>
          )}

          {activeTab === 'history' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
              {examHistory.map((exam) => (
                <div key={exam.id} style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem', transition: 'all 0.2s' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontWeight: '600', color: '#1f2937', margin: 0, marginBottom: '0.5rem' }}>{exam.title}</h3>
                      <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{exam.subject}</p>
                      <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
                        <span>Selesai: {new Date(exam.completedAt).toLocaleDateString('id-ID')}</span>
                        <span>•</span>
                        <span>Waktu: {exam.timeSpent}/{exam.duration} menit</span>
                        <span>•</span>
                        <span>Benar: {exam.correctAnswers}/{exam.questions}</span>
                      </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>{exam.score}</span>
                        <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>/ {exam.maxScore}</span>
                      </div>
                      <div style={{ ...getStatusBadge(exam.status), padding: '0.25rem 0.75rem', fontSize: '0.75rem', borderRadius: '9999px', marginTop: '0.5rem' }}>
                        {getStatusBadge(exam.status).text}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer', fontSize: '0.875rem' }}
                      >
                        Detail
                      </button>
                      {exam.status === 'remedial' && (
                        <button
                          style={{ backgroundColor: '#f59e0b', color: 'white', padding: '0.5rem 0.75rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.875rem' }}
                        >
                          Remedial
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
