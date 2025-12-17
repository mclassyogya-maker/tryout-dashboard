export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', padding: '3rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
            TryOut Dashboard
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '3rem' }}>
            Aplikasi Try Out untuk Guru dan Siswa
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <a href="/questions" style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: '#dbeafe', border: '2px solid #3b82f6', borderRadius: '12px', padding: '2rem', textAlign: 'center', transition: 'all 0.3s', cursor: 'pointer' }}>
                <div style={{ backgroundColor: '#3b82f6', color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>1</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Bank Soal</h3>
                <p style={{ color: '#6b7280', fontSize: '1rem' }}>Kelola kumpulan soal untuk ujian</p>
              </div>
            </a>
            
            <a href="/exams" style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: '#dcfce7', border: '2px solid #16a34a', borderRadius: '12px', padding: '2rem', textAlign: 'center', transition: 'all 0.3s', cursor: 'pointer' }}>
                <div style={{ backgroundColor: '#16a34a', color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>2</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Manajemen Ujian</h3>
                <p style={{ color: '#6b7280', fontSize: '1rem' }}>Buat dan kelola sesi ujian</p>
              </div>
            </a>
            
            <a href="/student" style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: '#fef3c7', border: '2px solid #f59e0b', borderRadius: '12px', padding: '2rem', textAlign: 'center', transition: 'all 0.3s', cursor: 'pointer' }}>
                <div style={{ backgroundColor: '#f59e0b', color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>3</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Portal Siswa</h3>
                <p style={{ color: '#6b7280', fontSize: '1rem' }}>Akses ujian dan lihat hasil</p>
              </div>
            </a>
            
            <a href="/results" style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: '#ede9fe', border: '2px solid #8b5cf6', borderRadius: '12px', padding: '2rem', textAlign: 'center', transition: 'all 0.3s', cursor: 'pointer' }}>
                <div style={{ backgroundColor: '#8b5cf6', color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>4</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Hasil Ujian</h3>
                <p style={{ color: '#6b7280', fontSize: '1rem' }}>Lihat analisis dan statistik</p>
              </div>
            </a>
          </div>
          
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <p style={{ color: '#6b7280', fontSize: '1rem', marginBottom: '1rem' }}>Pilih menu di atas untuk memulai</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="/questions" style={{ textDecoration: 'none' }}>
                <button style={{ backgroundColor: '#3b82f6', color: 'white', padding: '1rem 2rem', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                  Mulai dengan Bank Soal
                </button>
              </a>
              <a href="/student" style={{ textDecoration: 'none' }}>
                <button style={{ backgroundColor: '#10b981', color: 'white', padding: '1rem 2rem', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                  Masuk sebagai Siswa
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
