export default function Home() {
  return (
    <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ color: '#1e40af', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          TryOut Dashboard
        </h1>
        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
          Aplikasi Try Out untuk Guru dan Siswa
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <button style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>
            Mode Guru
          </button>
          <button style={{ backgroundColor: '#10b981', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>
            Mode Siswa
          </button>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div style={{ backgroundColor: '#dbeafe', borderLeft: '4px solid #3b82f6', padding: '1.5rem', borderRadius: '6px' }}>
            <h3 style={{ color: '#1e3a8a', fontWeight: '600', marginBottom: '0.5rem' }}>Total Siswa</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e3a8a' }}>156</p>
            <p style={{ color: '#059669', fontSize: '0.875rem' }}>+12% dari bulan lalu</p>
          </div>
          
          <div style={{ backgroundColor: '#d1fae5', borderLeft: '4px solid #10b981', padding: '1.5rem', borderRadius: '6px' }}>
            <h3 style={{ color: '#065f46', fontWeight: '600', marginBottom: '0.5rem' }}>Ujian Aktif</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#065f46' }}>3</p>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>2 sedang berjalan</p>
          </div>
        </div>
      </div>
    </div>
  )
}
