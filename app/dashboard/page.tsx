
"use client"

import { useEffect, useState } from "react"
import StudyButton from "@/components/StudyButton"

export default function Dashboard() {

  const [dates, setDates] = useState<string[]>([])
  const [streak, setStreak] = useState(0)

  useEffect(() => {

    const savedDates: string[] = JSON.parse(localStorage.getItem("studyDates") || "[]")

    setDates(savedDates)

    calculateStreak(savedDates)

  }, [])

  function calculateStreak(studyDates: string[]) {

    if (studyDates.length === 0) {
      setStreak(0)
      return
    }

    const sorted = [...studyDates].sort().reverse()

    let count = 1

    for (let i = 0; i < sorted.length - 1; i++) {

      const current = new Date(sorted[i])
      const previous = new Date(sorted[i + 1])

      const diff =
        (current.getTime() - previous.getTime()) /
        (1000 * 60 * 60 * 24)

      if (diff === 1) {
        count++
      } else {
        break
      }

    }

    setStreak(count)
  }

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-50">

      <div className="bg-white shadow-md rounded-xl p-8 w-[360px] text-center">

        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Learning Streak Tracker
        </h1>

        <div className="space-y-4 mb-6">

          <div className="border border-gray-200 p-4 rounded-lg bg-gray-50">
            <p className="text-gray-600">Current Streak</p>
            <p className="text-blue-500 text-xl font-bold">
              {streak} Days
            </p>
          </div>

          <div className="border border-gray-200 p-4 rounded-lg bg-gray-50">
            <p className="text-gray-600">Total Study Days</p>
            <p className="text-green-500 text-xl font-bold">
              {dates.length}
            </p>
          </div>

          <div className="border border-gray-200 p-4 rounded-lg bg-gray-50">
            <p className="text-gray-600">Last Studied</p>
            <p className="text-purple-500 text-lg">
              {dates.length > 0 ? dates[dates.length - 1] : "None"}
            </p>
          </div>

        </div>

        <StudyButton />

        <a
          href="/history"
          className="block mt-4 text-blue-500 underline"
        >
          View Study History
        </a>

      </div>

    </div>
  )
}