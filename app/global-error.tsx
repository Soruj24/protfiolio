"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, RefreshCw, Home, Mail } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error caught:', error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <Card className="w-full max-w-md border-destructive/20">
            <CardContent className="p-8 space-y-6 text-center">
              {/* Error Icon */}
              <div className="flex justify-center">
                <div className="rounded-full bg-destructive/10 p-4">
                  <AlertCircle className="h-8 w-8 text-destructive" />
                </div>
              </div>

              {/* Error Message */}
              <div className="space-y-3">
                <h1 className="text-2xl font-bold text-foreground">
                  Something went wrong!
                </h1>
                <p className="text-muted-foreground">
                  We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists.
                </p>
              </div>

              {/* Error Details (Collapsible for production) */}
              <details className="text-left bg-muted/50 rounded-lg p-3">
                <summary className="cursor-pointer text-sm font-medium">
                  Error Details (for debugging)
                </summary>
                <pre className="mt-2 text-xs text-muted-foreground overflow-auto">
                  {error.message}
                </pre>
              </details>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-4">
                <Button onClick={reset} className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Try Again
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" asChild className="flex-1">
                    <Link href="/">
                      <Home className="h-4 w-4 mr-2" />
                      Home
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link href="mailto:your@email.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </body>
    </html>
  )
}