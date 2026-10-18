'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#07070c] px-6 text-center">
      <h2 className="text-2xl font-semibold text-white">Something went wrong</h2>
      <p className="max-w-md text-gray-400">
        We couldn&apos;t load this page. Please try again.
      </p>
      <button
        onClick={reset}
        className="rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070c]"
      >
        Try again
      </button>
    </div>
  )
}