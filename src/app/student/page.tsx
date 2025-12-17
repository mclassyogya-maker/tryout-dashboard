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
      questions: 25,
      passingGrade: 75,
      deadline: '2024-01-20',
      teacher: 'Pak Ahmad'
    },
    {
      id: 2,
      title: 'Quiz IPA Chapter 5',
      subject: 'IPA',
      duration: 45,
      questions: 15,
      passingGrade: 70,
      deadline: '2024-01-18',
      teacher: 'Bu Siti'
    }
  ])

  const [examHistory] = useState([
    {
      id: 1,
      title: 'Quiz Fisika Chapter 4',
      subject: 'Fisika',
      score: 85,
      maxScore: 100,
      status: 'passed',
      completedAt: '2024-01-10',
      timeSpent: 35,
      duration: 45,
      questions: 20,
      correctAnswers: 17,
      teacher: 'Pak Budi'
    },
    {
      id: 2,
      title: 'Try Out Kimia',
      subject: 'Kimia',
      score: 92,
      maxScore: 100,
      status: 'passed',
      completedAt: '2024-01-08',
      timeSpent: 52,
      duration: 60,
      questions: 30,
      correctAnswers: 22,
      teacher: 'Bu Diana'
    }
  ])

  const [studentStats] = useState({
    totalExams: 12,
    averageScore: 78.5,
    bestScore: 98,
    rank: 8,
    totalStudents: 45,
    passRate: 85
  })

  const getStatusColor = (status) => {
    switch(status) {
      case 'passed': return '#10b981'
      case 'failed': return '#ef4444'
      case 'remedial': return '#f59e0b'
      default: return '#6b7280'
    }
  }

  const getStatusText = (status) => {
    switch(status) {
      case 'passed': return 'Lulus'
      case 'failed': return 'Tidak Lulus'
      case 'remedial': return 'Remedial'
      default: return 'Draft'
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '2rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>Portal Siswa</h1>
              <p style={{ color: '#6b7280', margin: '0.5rem 0 0' }}>Akses ujian dan pantau progress belajarmu</p>
            </div>
            <button
              onClick={() => window.location.href = '/'}
              style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer', fontSize: '1rem' }}
            >
              Kembali ke Dashboard
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280' }}>Ujian Tersedia</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>{availableExams.length}</p>
                <p style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '0.25rem' }}>2 baru hari ini</p>
              </div>
              <div style={{ backgroundColor: '#dbeafe', padding: '0.75rem', borderRadius: '50%' }}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#3b82f6' }}>
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280' }}>Rata-rata Nilai</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>{studentStats.averageScore}</p>
                <p style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '0.25rem' }}>+3.5% improvement</p>
              </div>
              <div style={{ backgroundColor: '#d1fae5', padding: '0.75rem', borderRadius: '50%' }}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#10b981' }}>
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280' }}>Ranking Kelas</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>#{studentStats.rank}</p>
                <p style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '0.25rem' }}>+2 naik dari bulan lalu</p>
              </div>
              <div style={{ backgroundColor: '#fef3c7', padding: '0.75rem', borderRadius: '50%' }}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#f59e0b' }}>
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid #e5e7eb' }}>
            <button
              onClick={() => setActiveTab('available')}
              style={{
                padding: '0.75rem 1rem',
                backgroundColor: activeTab === 'available' ? '#3b82f6' : 'transparent',
                color: activeTab === 'available' ? 'white' : '#6b7280',
                border: 'none',
                borderRadius: '8px 8px 0 0',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              Ujian Tersedia ({availableExams.length})
            </button>
            <button
              onClick={() => setActiveTab('history')}
              style={{
                padding: '0.75rem 1rem',
                backgroundColor: activeTab === 'history' ? '#3b82f6' : 'transparent',
                color: activeTab === 'history' ? 'white' : '#6b7280',
                border: 'none',
                borderRadius: '8px 8px 0 0',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              Riwayat Ujian ({examHistory.length})
            </button>
          </div>

          {activeTab === 'available' && (
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1.5rem' }}>Ujian Tersedia</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1rem' }}>
                {availableExams.map((exam) => (
                  <div
                    key={exam.id}
                    style={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      padding: '1.5rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontWeight: '600', color: '#1f2937', margin: '0 0 0.5rem 0' }}>{exam.title}</h3>
                        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{exam.subject}</p>
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>
                      <div>⏱️ {exam.duration} menit</div>
                      <div>📝 {exam.questions} soal</div>
                      <div>🎯 KKM: {exam.passingGrade}%</div>
                      <div>👨‍🏫 {exam.teacher}</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.875rem', color: '#f59e0b', fontWeight: '500' }}>
                        ⏰ Deadline: {exam.deadline}
                      </span>
                      <button
                        onClick={() => window.location.href = '/exam'}
                        style={{
                          padding: '0.5rem 1rem',
                          backgroundColor: '#10b981',
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '0.875rem',
                          fontWeight: '500'
                        }}
                      >
                        Mulai
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1.5rem' }}>Riwayat Ujian</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1rem' }}>
                {examHistory.map((exam) => (
                  <div
                    key={exam.id}
                    style={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      padding: '1.5rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontWeight: '600', color: '#1f2937', margin: '0 0 0.5rem 0' }}>{exam.title}</h3>
                        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{exam.subject}</p>
                      </div>
                      <span style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: '500', backgroundColor: getStatusColor(exam.status), color: 'white', borderRadius: '9999px' }}>
                        {getStatusText(exam.status)}
                      </span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>
                      <div>📅 {exam.completedAt}</div>
                      <div>⏱️ {exam.timeSpent}/{exam.duration} menit</div>
                      <div>✅ {exam.correctAnswers}/{exam.questions} benar</div>
                      <div>👨‍🏫 {exam.teacher}</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Nilai:</span>
                        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>{exam.score}</span>
                        <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>/ {exam.maxScore}</span>
                      </div>
                      <button
                        style={{
                          padding: '0.5rem 1rem',
                          backgroundColor: '#3b82f6',
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '0.875rem',
                          fontWeight: '500'
                        }}
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
