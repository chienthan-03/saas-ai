import { Button } from "@/components/ui/button"
import Link from "next/link"

function LandingPage() {
  return (
    <div>
      <div>LandingPage (Unprotected)</div>
      <div>
        <Link href="/sign-up">
          <Button>Sign up</Button>
        </Link>

        <Link href="/sign-in">
          <Button>Sign in</Button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage