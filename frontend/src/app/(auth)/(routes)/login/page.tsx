"use client";

import axios from "axios";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { RiLoader3Fill } from "react-icons/ri";

export default function Login() {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const [error, setError] = useState<object | null>(null),
    [isLoading, setLoading] = useState<boolean>(false)

  const router = useRouter()

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)

    setTimeout(() => {
      axios.post<{ error: object, token: string }>("https://core.kemaru.me/auth/login", {
        email,
        password
      })
        .then(({ data: { error, token } }) => {
          if(error) {
            setError(error)
            setLoading(false)
            return
          }
  
          localStorage.setItem("token", token)
          router.push("/")
        })
        .catch(() => {
          alert("Sunucuya bağlanılamıyo!")
          setLoading(false)
        })
    }, 1000)

  }

  return (
    <>
      <a href="#" className="flex items-center mb-8">
        <img
          src="/favicon.ico"
          className="size-14"
        />
        <span className="dark:text-white font-bold text-5xl ml-3">Chat</span>
      </a>
      <div 
        className="
          flex flex-col 
          w-full max-w-sm
          sm:max-w-lg
          px-7 py-10
          dark:text-white border-2 dark:border-gray-800 dark:bg-gray-900
          relative
          rounded-lg
        "
      >
        {
          isLoading ? (
            <>
              <div 
                className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
                style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
                <RiLoader3Fill color="white" className="animate-spin text-6xl" />
              </div>
            </>
          ) : null
        }

        <h1 className="text-3xl font-bold mb-8">Hesabına giriş yap</h1>

        <form className="flex flex-col" onSubmit={onLogin}>
          <label className="flex flex-col mb-2">
            <span className="text-md mb-1 font-bold">E-posta</span>
            <input
              type="email"
              placeholder="isim@email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none border dark:border-gray-600 rounded px-3.5 py-2 dark:bg-gray-700 focus:dark:border-gray-400"
            />
          </label>
          <label className="flex flex-col mb-6">
            <span className="text-md mb-1 font-bold">Şifre</span>
            <input
              type="password"
              placeholder="Şifre"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none border dark:border-gray-600 rounded px-3.5 py-2 dark:bg-gray-700 focus:dark:border-gray-400"
            />
          </label>

          <button type="submit" disabled={isLoading} className={
            classNames("bg-primary-700 py-3 font-bold rounded ring-0 border-1 border-primary-700 hover:border-primary-500", {
              "bg-gray-600 border-gray-300": isLoading
            })
          }>
            <span>Giriş yap</span>
          </button>
        </form>
        <div className="flex justify-between mt-4">
          <span>
            Eğer hesabın yok ise {" "}
            <Link href="/register" className="text-primary-500">kayıt ol</Link>
          </span>

          <span>
            <Link href="#" className="text-primary-500">Şifremi unuttum</Link>
          </span>
        </div>
      </div>
    </>
  )
}