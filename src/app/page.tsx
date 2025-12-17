export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', padding: '2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
            TryOut Dashboard
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
            Aplikasi Try Out untuk Guru dan Siswa
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <a href="/questions" style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: '#dbeafe', border: '2px solid #3b82f6', borderRadius: '8px', padding: '1.5rem', textAlign: 'center', transition: 'all 0.2s' }}>
                <div style={{ backgroundColor: '#3b82f6', color: 'white', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>1</span>
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Bank Soal</h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Kelola kumpulan soal untuk ujian</p>
              </div>
            </a>
            
            <a href="/exams" style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: '#dcfce7', border: '2px solid #10b981', borderRadius: '8px', padding: '1.5rem', textAlign: 'center', transition: 'all 0.2s' }}>
                <div style={{ backgroundColor: '#10b981', color: 'white', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>2</span>
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Manajemen Ujian</h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Buat dan kelola sesi ujian</p>
              </div>
            </a>
            
            <a href="/results" style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '8px', padding: '1.5rem', textAlign: 'center', transition: 'all 0.2s' }}>
                <div style={{ backgroundColor: '#f59e0b', color: 'white', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>3</span>
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Hasil Ujian</h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Lihat hasil dan analisis</p>
              </div>
            </a>
            
            <a href="/student" style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: '#ede9fe', border: '2px solid #8b5cf6', borderRadius: '8px', padding: '1.5rem', textAlign: 'center', transition: 'all 0.2s' }}>
                <div style={{ backgroundColor: '#8b5cf6', color: 'white', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>4</span>
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Portal Siswa</h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Akses ujian dan lihat hasil</p>
              </div>
            </a>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <a href="/questions" style={{ textDecoration: 'none' }}>
              <button style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                Mulai dengan Bank Soal
              </button>
            </a>
            <a href="/student" style={{ textDecoration: 'none' }}>
              <button style={{ backgroundColor: '#10b981', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                Portal Siswa
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
