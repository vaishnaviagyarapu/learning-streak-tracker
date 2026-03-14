
"use client"

import { useState } from "react"

export default function StudyButton() {

  const [message, setMessage] = useState("")

  const handleStudy = () => {

    const today = new Date().toISOString().split("T")[0]

    let dates: string[] = JSON.parse(localStorage.getItem("studyDates") || "[]")

    if (dates.includes(today)) {
      setMessage("You already marked today.")
      return
    }

    dates.push(today)

    localStorage.setItem("studyDates", JSON.stringify(dates))

    setMessage("Study recorded successfully.")

    window.location.reload()
  }

  return (
    <div>

      <button
        onClick={handleStudy}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
      >
        Mark Today as Studied
      </button>

      {message && (
        <p className="mt-2 text-gray-600 text-sm">
          {message}
        </p>
      )}

    </div>
  )
}