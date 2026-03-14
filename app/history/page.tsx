
"use client"

import { useEffect, useState } from "react"

export default function History() {

  const [dates, setDates] = useState<string[]>([])

  useEffect(() => {

    const saved = localStorage.getItem("studyDates")

    if (saved) {

      const sorted = JSON.parse(saved).sort().reverse()

      setDates(sorted)
    }

  }, [])

  return (

    <div className="flex justify-center pt-16 bg-gray-50 min-h-screen">

      <div className="bg-white p-6 rounded-lg shadow-md w-[300px]">

        <h1 className="text-xl font-bold text-center text-gray-800 mb-4">
          Study History
        </h1>

        {dates.length === 0 ? (

          <p className="text-center text-gray-500">
            No study records yet
          </p>

        ) : (

          <ul className="space-y-2">

            {dates.map((d, i) => {

              const formatted = new Date(d).toLocaleDateString(
                "en-GB",
                { day: "numeric", month: "long", year: "numeric" }
              )

              return (
                <li
                  key={i}
                  className="border border-gray-200 bg-gray-50 p-2 text-center rounded text-gray-700"
                >
                  {formatted}
                </li>
              )

            })}

          </ul>

        )}

      </div>

    </div>
  )
}