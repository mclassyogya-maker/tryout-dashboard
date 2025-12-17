'use client'

import { useState } from 'react'

export default function ResultsPage() {
  const [selectedExam, setSelectedExam] = useState(null)

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
      teacher: 'Pak Ahmad'
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
      teacher: 'Pak Budi'
    }
  ])

  const getStatusColor = (status) => {
    switch(status) {
      case 'passed': return '#10b981'
      case 'failed': return '#ef4444'
      default: return '#6b7280'
    }
  }

  const getStatusText = (status) => {
    switch(status) {
      case 'passed': return 'Lulus'
      case 'failed': return 'Tidak Lulus'
      default: return 'Draft'
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '2rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>Hasil Ujian</h1>
              <p style={{ color: '#6b7280', margin: '0.5rem 0 0' }}>Lihat hasil dan analisis ujian</p>
            </div>
            <button
              onClick={() => window.location.href = '/'}
              style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer', fontSize: '1rem' }}
            >
              Kembali ke Dashboard
            </button>
          </div>
        </div>

        <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1.5rem' }}>Riwayat Ujian ({examResults.length})</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1rem' }}>
            {examResults.map((result) => (
              <div
                key={result.id}
                style={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontWeight: '600', color: '#1f2937', margin: '0 0 0.5rem 0' }}>{result.title}</h3>
                    <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{result.subject}</p>
                  </div>
                  <span style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: '500', backgroundColor: getStatusColor(result.status), color: 'white', borderRadius: '9999px' }}>
                    {getStatusText(result.status)}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: '#6b7280', marginTop: '1rem' }}>
                  <span>Selesai: {new Date(result.completedAt).toLocaleDateString('id-ID')}</span>
                  <span>•</span>
                  <span>Waktu: {result.timeSpent}/{result.duration} menit</span>
                  <span>•</span>
                  <span>Guru: {result.teacher}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
