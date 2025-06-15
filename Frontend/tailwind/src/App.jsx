import React from 'react'
import "./index.css"
const App = () => {
  return (
    <>
    <div className='text-1'>App</div>
<button className="p-4 pl-3 bg-indigo-500 hover:bg-indigo-80">
  Hello
</button>
<div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />
  <div>
    <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
    <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
  </div>
</div>

<input className="shadow-xs border-black/60"  />

<input className="shadow-sm" />
    </>
  )
}

export default App