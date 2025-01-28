"use client";
import Link from "next/link";

export default function Register() {
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
          dark:text-white border dark:border-gray-800 dark:bg-gray-900
          rounded-lg
        "
      >
        <h1 className="text-3xl font-bold mb-8">Bir hesap oluştur</h1>
        <form className="flex flex-col" action="#">
          <label className="flex flex-col mb-2">
            <span className="text-md mb-1 font-bold">Kullanıcı adı</span>
            <input
              type="text"
              placeholder="örn: kerem_s2ci"
              className="outline-none border dark:border-gray-600 rounded px-3.5 py-2 dark:bg-gray-700 focus:dark:border-gray-400"
            />
          </label>
          <label className="flex flex-col mb-2">
            <span className="text-md mb-1 font-bold">E-posta</span>
            <input
              type="text"
              placeholder="isim@email"
              className="outline-none border dark:border-gray-600 rounded px-3.5 py-2 dark:bg-gray-700 focus:dark:border-gray-400"
            />
          </label>
          <label className="flex flex-col mb-6">
            <span className="text-md mb-1 font-bold">Şifre</span>
            <input
              type="text"
              className="outline-none border dark:border-gray-600 rounded px-3.5 py-2 dark:bg-gray-700 focus:dark:border-gray-400"
            />
          </label>

          <button className="bg-primary-700 py-3 font-bold rounded ring-0 border-2 border-primary-700 hover:border-primary-500">
            <span>Kayıt ol</span>
          </button>
        </form>
        <div className="flex justify-between mt-4">
          <span>
            Eğer hesabın var ise {" "}
            <Link href="/login" className="text-primary-500">giriş yap</Link>
          </span>
        </div>
      </div>
    </>
  )
}