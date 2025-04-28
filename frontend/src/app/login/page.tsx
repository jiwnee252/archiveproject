"use client";

// import Navbar from "@/components/navbar";

export default function LoginPage() {
  return (
    <>
      <main className="flex justify-center items-center min-h-screen bg-background text-foreground">
        <div className="w-full max-w-sm p-6 rounded-lg shadow-lg bg-white dark:bg-[#1a1a1f]">
          <h1 className="text-2xl font-bold mb-6 text-center">admin</h1>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="username"
              placeholder="아이디를 입력하세요."
              className="p-2 border rounded bg-transparent border-gray-300 dark:border-gray-600"
              autoComplete="username"
            />
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요."
              className="p-2 border rounded bg-transparent border-gray-300 dark:border-gray-600"
              autoComplete="current-password"
            />
            <button
              type="submit"
              className="bg-black text-white dark:bg-white dark:text-black p-2 rounded hover:opacity-80"
            >
              로그인
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
