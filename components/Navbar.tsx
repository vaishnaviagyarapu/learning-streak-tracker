export default function Navbar() {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">

      <h1 className="font-bold text-lg">
        Learning Tracker
      </h1>

      <div className="space-x-4">

        <a href="/dashboard" className="hover:underline">
          Dashboard
        </a>

        <a href="/history" className="hover:underline">
          History
        </a>

      </div>

    </div>
  )
}