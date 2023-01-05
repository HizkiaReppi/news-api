const Navbar = () => {
  return (
    <nav className="h-20 w-full flex justify-between items-center px-[8%] shadow-lg">
      <h1 className="text-2xl font-bold cursor-pointer">News</h1>
      <ul className="flex">
        <li className="text-xl font-semibold cursor-pointer">New News</li>
      </ul>
    </nav>
  )
}

export default Navbar