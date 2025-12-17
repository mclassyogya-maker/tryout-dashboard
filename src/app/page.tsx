export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            TryOut Dashboard
          </h1>
          <p className="text-gray-600 mb-6">
            Aplikasi Try Out untuk Guru dan Siswa
          </p>
          
          <div className="flex gap-4 mb-8">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Mode Guru
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Mode Siswa
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded border-l-4 border-l-blue-500">
              <h3 className="font-semibold">Total Siswa</h3>
              <p className="text-2xl font-bold">156</p>
            </div>
            <div className="bg-green-50 p-4 rounded border-l-4 border-l-green-500">
              <h3 className="font-semibold">Ujian Aktif</h3>
              <p className="text-2xl font-bold">3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
