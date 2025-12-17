'use client'

import { useState } from 'react'

export default function ResultsPage() {
  const [selectedExam, setSelectedExam] = useState(null)
  const [viewMode, setViewMode] = useState('overview')

  const [examResults] = useState([
    {
      id: 1,
      title: 'Try Out Matematika Kelas XII',
      subject: 'Matematika',
      completedAt: '2024-01-15T14:30:00',
      timeSpent: 78,
      duration: 90,
      score: 85,
      maxScore: 100,
      status: 'passed',
      rank: 5,
      totalParticipants: 45,
      averageScore: 72.5,
      highestScore: 98,
      teacher: 'Pak Ahmad',
      categoryBreakdown: [
        { category: 'Aljabar', correct: 8, total: 10, percentage: 80 },
        { category: 'Geometri', correct: 6, total: 8, percentage: 75 },
        { category: 'Trigonometri', correct: 4, total: 4, percentage: 100 },
        { category: 'Statistika', correct: 3, total: 3, percentage: 100 }
      ]
    },
    {
      id: 2,
      title: 'Quiz Fisika Chapter 4',
      subject: 'Fisika',
      completedAt: '2024-01-10T14:30:00',
      timeSpent: 35,
      duration: 45,
      score: 92,
      maxScore: 100,
      status: 'passed',
      rank: 3,
      totalParticipants: 30,
      averageScore: 78.2,
      highestScore: 98,
      teacher: 'Pak Budi',
      categoryBreakdown: [
        { category: 'Mekanika', correct: 7, total: 8, percentage: 87.5 },
        { category: 'Energi', correct: 5, total: 6, percentage: 83.3 },
        { category: 'Listrik dan Momentum', correct: 4, total: 4, percentage: 100 }
      ]
    }
  ])

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
      case 'remedial': return 'Perlu Remedial'
      default: return 'Draft'
    }
  }

  const getGradeColor = (score, maxScore) => {
    const percentage = (score / maxScore) * 100
    if (percentage >= 90) return '#10b981'
    if (percentage >= 80) return '#10b981'
    if (percentage >= 70) return '#10b981'
    if (percentage >= 60) return '#f59e0b'
    return '#ef4444'
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '2rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>Hasil Ujian</h1>
              <p style={{ color: '#6b7280', margin: '0.5rem 0 0' }}>Lihat hasil dan analisis ujian</p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer' }}>
                <span style={{ marginRight: '0.5rem' }}>📊</span>
                Unduh
              </button>
              <button style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer' }}>
                <span style={{ marginRight: '0.5rem' }}>📤</span>
                Bagikan
              </button>
            </div>
          </div>
        </div>

        {/* Results List */}
        <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937' }}>Riwayat Ujian ({examResults.length})</h2>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => setViewMode('overview')}
                style={{ padding: '0.75rem 1rem', borderBottom: viewMode === 'overview' ? '2px solid #3b82f6' : 'none', backgroundColor: 'transparent', color: viewMode === 'overview' ? '#3b82f6' : '#6b7280', cursor: 'pointer' }}
              >
                Ringkasan
              </button>
              <button
                onClick={() => setViewMode('analysis')}
                style={{ padding: '0.75rem 1rem', borderBottom: viewMode === 'analysis' ? '2px solid #3b82f6' : 'none', backgroundColor: 'transparent', color: viewMode === 'analysis' ? '#3b82f6' : '#6b7280', cursor: 'pointer' }}
              >
                Analisis
              </button>
            </div>
          </div>

          {viewMode === 'overview' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1rem' }}>
              {examResults.map((result) => (
                <div key={result.id} style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem', transition: 'all 0.2s', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontWeight: '600', color: '#1f2937', margin: 0, marginBottom: '0.5rem' }}>{result.title}</h3>
                      <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{result.subject}</p>
                      <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
                        <span>Selesai: {new Date(result.completedAt).toLocaleDateString('id-ID')}</span>
                        <span>•</span>
                        <span>Waktu: {result.timeSpent}/{result.duration} menit</span>
                        <span>•</span>
                        <span>Guru: {result.teacher}</span>
                      </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: getGradeColor(result.score, result.maxScore) }}>{result.score}</span>
                        <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>/ {result.maxScore}</span>
                      </div>
                      <div style={{ ...getStatusBadge(result.status), padding: '0.25rem 0.75rem', fontSize: '0.75rem', borderRadius: '9999px', marginTop: '0.5rem' }}>
                        {getStatusText(result.status)}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
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

          {viewMode === 'analysis' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              {/* Selected Exam Detail */}
              {selectedExam && (
                <div style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
                    {selectedExam.title}
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>Status</p>
                      <div style={{ ...getStatusBadge(selectedExam.status), padding: '0.25rem 0.75rem', fontSize: '0.875rem', borderRadius: '9999px' }}>
                        {getStatusText(selectedExam.status)}
                      </div>
                    </div>
                    <div>
                      <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>Nilai</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: getGradeColor(selectedExam.score, selectedExam.maxScore) }}>{selectedExam.score}</span>
                        <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>/ {selectedExam.maxScore}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>Waktu</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>{selectedExam.timeSpent}</span>
                        <span style={{ fontSize: '0.875rem', color: '#6b7280' }} menit</span>
                      </div>
                    </div>
                    <div>
                      <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>Peringkat</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>#{selectedExam.rank}</span>
                        <span style={{ fontSize: '0.875rem', color: '#6b7280' }}> dari {selectedExam.totalParticipants}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>Rata-rata Kelas</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>{selectedExam.averageScore}</span>
                      </div>
                    </div>
                    <div>
                      <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>Tertinggi</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>{selectedExam.highestScore}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Category Breakdown */}
              {selectedExam && (
                <div style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>Analisis per Kategori</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {selectedExam.categoryBreakdown.map((category) => (
                      <div key={category.category} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '1rem', fontWeight: '500', color: '#374151' }}>{category.category}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <div style={{ width: '100px', backgroundColor: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{ width: `${category.percentage}%`, backgroundColor: '#10b981', height: '8px', borderRadius: '4px' }}></div>
                          </div>
                          <span style={{ fontSize: '0.875rem', color: '#6b7280', marginLeft: '0.5rem' }}>
                            {category.correct}/{category.total} ({category.percentage}%)
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Exam Selection */}
        {!selectedExam && viewMode === 'overview' && (
          <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '2rem', marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>Pilih Ujian untuk Analisis</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
              {examResults.map((exam) => (
                <div
                  key={exam.id}
                  onClick={() => setSelectedExam(exam)}
                  style={{
                    backgroundColor: selectedExam?.id === exam.id ? '#dbeafe' : 'white',
                    border: selectedExam?.id === exam.id ? '2px solid #3b82f6' : '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>{exam.title}</h4>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{exam.subject}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: getGradeColor(exam.score, exam.maxScore) }}>{exam.score}</span>
                    <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>/ {exam.maxScore}</span>
                    <div style={{ ...getStatusBadge(exam.status), padding: '0.25rem 0.75rem', fontSize: '0.75rem', borderRadius: '9999px' }}>
                      {getStatusText(exam.status)}
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
