'use client'

import { useState } from 'react'

export default function QuestionsPage() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [questions, setQuestions] = useState([
    {
      id: 1,
      content: 'Berapakah hasil dari 15 + 27?',
      type: 'Pilihan Ganda',
      category: 'Matematika',
      difficulty: 'Sedang',
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      content: 'Manakah yang termasuk bilangan prima?',
      type: 'Multiple Choice',
      category: 'Matematika',
      difficulty: 'Mudah',
      createdAt: '2024-01-14'
    }
  ])

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '2rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>Bank Soal</h1>
              <p style={{ color: '#6b7280', margin: '0.5rem 0 0' }}>Kelola kumpulan soal untuk ujian</p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => setShowAddForm(true)}
                style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.75rem 1rem', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
              >
                Tambah Soal
              </button>
              <button
                style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer' }}
              >
                Import Excel
              </button>
            </div>
          </div>
        </div>

        {/* Questions List */}
        <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937' }}>Daftar Soal ({questions.length})</h2>
            <button style={{ padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer' }}>
              Preview
            </button>
          </div>

          {questions.map((question) => (
            <div key={question.id} style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontWeight: '600', color: '#1f2937', margin: 0 }}>{question.content}</h3>
                    <span style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: '500', backgroundColor: '#dbeafe', color: '#1e40af', borderRadius: '9999px' }}>
                      {question.type}
                    </span>
                    <span style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: '500', backgroundColor: '#dcfce7', color: '#16a34a', borderRadius: '9999px' }}>
                      {question.category}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
                    <span>Dibuat: {question.createdAt}</span>
                    <span>Difficulty: {question.difficulty}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer' }}>
                    Edit
                  </button>
                  <button style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer' }}>
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Question Modal */}
      {showAddForm && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ backgroundColor: 'white', borderRadius: '12px', width: '90%', maxWidth: '600px', maxHeight: '90vh', overflow: 'auto' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', margin: 0 }}>Tambah Soal Baru</h2>
                <button
                  onClick={() => setShowAddForm(false)}
                  style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer' }}
                >
                  ×
                </button>
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>Pertanyaan</label>
                  <textarea
                    placeholder="Tulis pertanyaan di sini..."
                    style={{ width: '100%', minHeight: '100px', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '0.875rem' }}
                  />
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>Kategori</label>
                    <select style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '0.875rem' }}>
                      <option value="">Pilih kategori</option>
                      <option value="matematika">Matematika</option>
                      <option value="ipa">IPA</option>
                      <option value="bahasa-inggris">Bahasa Inggris</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>Tipe Soal</label>
                    <select style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '0.875rem' }}>
                      <option value="single">Pilihan Ganda</option>
                      <option value="multiple">Multiple Choice</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>Opsi Jawaban</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {['A', 'B', 'C', 'D'].map((option, index) => (
                      <input key={index} placeholder={`Opsi ${option}`} style={{ padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '0.875rem' }} />
                    ))}
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
                  <button
                    onClick={() => setShowAddForm(false)}
                    style={{ padding: '0.75rem 1.5rem', borderRadius: '6px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer' }}
                  >
                    Batal
                  </button>
                  <button
                    style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
                  >
                    Simpan Soal
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
