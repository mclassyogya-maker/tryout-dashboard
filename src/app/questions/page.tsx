'use client'

import { useState } from 'react'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import Label from '@/components/ui/label'
import Textarea from '@/components/ui/textarea'
import Select from '@/components/ui/select'
import SelectItem from '@/components/ui/select-item'
import SelectContent from '@/components/ui/select-content'
import SelectValue from '@/components/ui/select-value'
import SelectTrigger from '@/components/ui/select-trigger'

export default function QuestionsPage() {
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

  const [showAddForm, setShowAddForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 1, name: 'Matematika', count: 45 },
    { id: 2, name: 'IPA', count: 32 },
    { id: 3, name: 'Bahasa Inggris', count: 28 }
  ]

  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || q.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>Bank Soal</h1>
              <p style={{ color: '#6b7280', margin: '0.5rem 0 0 0' }}>Kelola kumpulan soal untuk ujian</p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Button 
                onClick={() => setShowAddForm(true)}
                style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.5rem 1rem', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
              >
                <Plus style={{ width: '16px', height: '16px', marginRight: '0.5rem' }} />
                Tambah Soal
              </Button>
              <Button variant="outline" style={{ padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer' }}>
                <BookOpen style={{ width: '16px', height: '16px', marginRight: '0.5rem' }} />
                Import Excel
              </Button>
            </div>
          </div>

          {/* Search and Filter */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ flex: 1, position: 'relative' }}>
              <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: '#9ca3af' }} />
              <Input
                placeholder="Cari soal..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ paddingLeft: '2.5rem', width: '100%', padding: '0.75rem 1rem', border: '1px solid #d1d5db', borderRadius: '6px' }}
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger style={{ padding: '0.75rem 1rem', border: '1px solid #d1d5db', borderRadius: '6px', backgroundColor: 'white' }}>
                <SelectValue placeholder="Filter kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Kategori</SelectItem>
                {categories.map(cat => (
                  <SelectItem key={cat.id} value={cat.name}>
                    {cat.name} ({cat.count})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" style={{ padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer' }}>
              <Filter style={{ width: '16px', height: '16px', marginRight: '0.5rem' }} />
              Filter
            </Button>
          </div>
        </div>

        {/* Questions List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937' }}>
              Daftar Soal ({filteredQuestions.length})
            </h3>
            <Button variant="outline" style={{ padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer' }}>
              <Eye style={{ width: '16px', height: '16px', marginRight: '0.5rem' }} />
              Preview
            </Button>
          </div>

          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((question) => (
              <div key={question.id} style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', padding: '1.5rem', transition: 'all 0.2s' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <h4 style={{ fontWeight: '600', color: '#1f2937', margin: 0 }}>{question.content}</h4>
                      <Badge variant="outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: '500' }}>
                        {question.type}
                      </Badge>
                      <Badge variant="outline" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: '500' }}>
                        {question.category}
                      </Badge>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Button variant="outline" size="sm" style={{ padding: '0.375rem 0.75rem', borderRadius: '4px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer' }}>
                      <Eye style={{ width: '14px', height: '14px' }} />
                    </Button>
                    <Button variant="outline" size="sm" style={{ padding: '0.375rem 0.75rem', borderRadius: '4px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer' }}>
                      <Edit style={{ width: '14px', height: '14px' }} />
                    </Button>
                    <Button variant="outline" size="sm" style={{ padding: '0.375rem 0.75rem', borderRadius: '4px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#ef4444', cursor: 'pointer' }}>
                      <Trash2 style={{ width: '14px', height: '14px' }} />
                    </Button>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
                  <span>Dibuat: {question.createdAt}</span>
                  <span>Difficulty: {question.difficulty}</span>
                </div>
              </div>
            ))
          ) : (
            <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', padding: '3rem', textAlign: 'center' }}>
              <BookOpen style={{ width: '48px', height: '48px', color: '#9ca3af', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Belum ada soal</h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>Mulai dengan menambahkan soal pertama Anda</p>
              <Button onClick={() => setShowAddForm(true)} style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>
                <Plus style={{ width: '16px', height: '16px', marginRight: '0.5rem' }} />
                Tambah Soal
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Add Question Modal */}
      {showAddForm && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ backgroundColor: 'white', borderRadius: '8px', width: '90%', maxWidth: '600px', maxHeight: '90vh', overflow: 'auto' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>Tambah Soal Baru</h2>
                <Button onClick={() => setShowAddForm(false)} variant="outline" size="sm" style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer' }}>
                  ×
                </Button>
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <Label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>Kategori</Label>
                  <Select>
                    <SelectTrigger style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #d1d5db', borderRadius: '6px', backgroundColor: 'white' }}>
                      <SelectValue placeholder="Pilih kategori" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="matematika">Matematika</SelectItem>
                      <SelectItem value="ipa">IPA</SelectItem>
                      <SelectItem value="bahasa-inggris">Bahasa Inggris</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>Tipe Soal</Label>
                  <Select>
                    <SelectTrigger style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #d1d5db', borderRadius: '6px', backgroundColor: 'white' }}>
                      <SelectValue placeholder="Pilih tipe soal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Pilihan Ganda</SelectItem>
                      <SelectItem value="multiple">Multiple Choice</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>Pertanyaan</Label>
                  <Textarea 
                    placeholder="Tulis pertanyaan di sini..."
                    style={{ width: '100%', minHeight: '100px', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '0.875rem' }}
                  />
                </div>
                
                <div>
                  <Label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>Opsi Jawaban</Label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {['A', 'B', 'C', 'D'].map((option, index) => (
                      <Input key={index} placeholder={`Opsi ${option}`} style={{ padding: '0.75rem 1rem', border: '1px solid #d1d5db', borderRadius: '6px' }} />
                    ))}
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
                  <Button onClick={() => setShowAddForm(false)} variant="outline" style={{ padding: '0.75rem 1.5rem', borderRadius: '6px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', cursor: 'pointer' }}>
                    Batal
                  </Button>
                  <Button style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>
                    Simpan Soal
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
