'use client'

import { useState } from 'react'

export default function ExamsPage() {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [exams, setExams] = useState([
    {
      id: 1,
      title: 'Try Out Matematika Kelas XII',
      description: 'Persiapan Ujian Nasional Matematika',
      duration: 90,
      passingGrade: 75,
      questions: 25,
      status: 'draft',
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      title: 'Quiz IPA Chapter 5',
      description: 'Quiz materi Sistem Tata Surya',
      duration: 45,
      passingGrade: 70,
      questions: 15,
      status: 'active',
      createdAt: '2024-01-10'
    },
    {
      id: 3,
      title: 'Ujian Bahasa Inggris Midterm',
      description: 'Ujian tengah semester Bahasa Inggris',
      duration: 120,
      passingGrade: 80,
      questions: 40,
      status: 'completed',
      createdAt: '2024-01-05'
    }
  ])

  const getStatusColor = (status) => {
    switch(status) {
      case 'draft': return '#6b7280'
      case 'active': return '#10b981'
      case 'completed': return '#059669'
      default: return '#6b7280'
    }
  }

  const getStatusText = (status) => {
    switch(status) {
      case 'draft': return 'Draft'
      case 'active': return 'Aktif'
      case 'completed': return 'Selesai'
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
              <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>Manajemen Ujian</h1>
              <p style={{ color: '#6b7280', margin: '0.5rem 0 0' }}>Buat dan kelola sesi ujian</p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => setShowCreateForm(true)}
                style={{ backgroundColor: '#16a34a', color: 'white', padding: '0.75rem 1rem', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
              >
                Buat Ujian Baru
              </button>
              <button
                style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer' }}
              >
                Import Soal
              </button>
            </div>
          </div>
        </div>

        {/* Exams List */}
        <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1.5rem' }}>Daftar Ujian ({exams.length})</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {exams.map((exam) => (
              <div key={exam.id} style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <h3 style={{ fontWeight: '600', color: '#1f2937', margin: 0 }}>{exam.title}</h3>
                      <span style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: '500', backgroundColor: getStatusColor(exam.status), color: 'white', borderRadius: '9999px' }}>
                        {getStatusText(exam.status)}
                      </span>
                    </div>
                    <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{exam.description}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer' }}>
                      Edit
                    </button>
                    {exam.status === 'active' ? (
                      <button style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #dc2626', backgroundColor: 'white', color: '#dc2626', cursor: 'pointer' }}>
                        Stop
                      </button>
                    ) : (
                      <button style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer' }}>
                        Hapus
                      </button>
                    )}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem', color: '#6b7280' }}>
                  <span>Durasi: {exam.duration} menit</span>
                  <span>Soal: {exam.questions}</span>
                  <span>KKM: {exam.passingGrade}%</span>
                  <span>Dibuat: {exam.createdAt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Create Exam Modal */}
      {showCreateForm && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ backgroundColor: 'white', borderRadius: '12px', width: '90%', maxWidth: '600px', maxHeight: '90vh', overflow: 'auto' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', margin: 0 }}>Buat Ujian Baru</h2>
                <button
                  onClick={() => setShowCreateForm(false)}
                  style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer' }}
                >
                  ×
                </button>
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>Judul Ujian</label>
                  <input
                    type="text"
                    placeholder="Masukkan judul ujian"
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '0.875rem' }}
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>Deskripsi</label>
                  <textarea
                    placeholder="Deskripsi singkat tentang ujian"
                    style={{ width: '100%', minHeight: '80px', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '0.875rem' }}
                  />
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>Durasi (menit)</label>
                    <input
                      type="number"
                      placeholder="60"
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '0.875rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>Nilai KKM (%)</label>
                    <input
                      type="number"
                      placeholder="70"
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '0.875rem' }}
                    />
                  </div>
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>Pilih Soal</label>
                  <textarea
                    placeholder="Pilih soal dari bank soal yang akan dimasukkan ke ujian ini"
                    style={{ width: '100%', minHeight: '100px', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '0.875rem' }}
                  />
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
                  <button
                    onClick={() => setShowCreateForm(false)}
                    style={{ padding: '0.75rem 1.5rem', borderRadius: '6px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer' }}
                  >
                    Batal
                  </button>
                  <button
                    style={{ backgroundColor: '#16a34a', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
                  >
                    Buat Ujian
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
