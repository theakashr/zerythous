"use server"

import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { checkRateLimit } from "@/lib/security"

export async function login(formData: FormData) {
  const email = (formData.get("email") as string)?.toLowerCase().trim()
  const password = formData.get("password") as string

  if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
    return { error: "Email and password are required." }
  }

  const rateLimit = checkRateLimit(`login:${email}`, 5, 60_000)
  if (!rateLimit.success) {
    return { error: "Too many login attempts. Please wait a minute before trying again." }
  }

  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error: "Invalid email or password." }
  }

  redirect("/admin/dashboard")
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect("/admin/login")
}
