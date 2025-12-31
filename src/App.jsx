import Logo from "./assets/logo.svg"

const NAV_LINKS = [
  {
    name: "How It Works",
    link: "#"
  },
  {
    name: "Pricing",
    link: "#"
  },
  {
    name: "Use Case",
    link: "#"
  },
  {
    name: "FAQ",
    link: "#"
  }
]

function App() {

  return (
    <main className='min-h-screen min-w-screen bg-blue-100 flex flex-col items-center p-12'>
      <nav className="w-mdXl max-w-full min-w-80 min-h-20 bg-white rounded-nav flex pl-6 pr-5 pt-5 pb-5 justify-between">
        <img src={Logo} alt="coup logo" />
        <div className="flex gap-4 items-center flex-wrap max-md:hidden">
          {
            NAV_LINKS.map((links,index)=>{
              return <a href={links.link} key={index} className="text-md font-medium text-links hover:text-gray-600 py-2 px-3 flex items-center justify-center gap-8">{links.name}</a>
            })
          }
        </div>
        <button type="button" className="bg-btn hover:bg-btn-hover disabled:bg-btn-disabled flex items-center justify-center px-4.5 py-2.75 rounded-[44px] text-white font-medium text-md">Contact Sales</button>
      </nav>
    </main>
  )
}

export default App
