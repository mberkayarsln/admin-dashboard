import { authenticate } from "../lib/actions"

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form action={authenticate} className="bg-[var(--bgSoft)] p-[50px] rounded-[10px] flex flex-col justify-center gap-[30px] size-[500px]">
        <h1 className="text-center text-3xl font-bold">Admin Dashboard</h1>
        <input type="text" placeholder="email" name="email" className="p-6 rounded-[5px] bg-[var(--bg)] text-[var(--text)] border-2 border-solid border-[var(--inputBorder)] outline-none" required />
        <input type="password" placeholder="password" name="password" className="p-6 rounded-[5px] bg-[var(--bg)] text-[var(--text)] border-2 border-solid border-[var(--inputBorder)] outline-none" required />
        <button type="submit" className="bg-teal-500 p-6 text-[var(--text)] border-none cursor-pointer rounded-[5px]">Login</button>
      </form>
    </div>
  )
}

export default LoginPage