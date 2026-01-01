export const NavLink = ({link, label})=>{
    return (
              <a
                href={link}
                className="text-md font-medium text-links hover:text-gray-600 py-2 px-3 flex items-center justify-center gap-8"
              >
                {label}
              </a>
    )
}