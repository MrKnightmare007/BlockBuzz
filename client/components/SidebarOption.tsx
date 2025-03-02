'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const style = {
  wrapper: `w-min flex items-center rounded-[100px] p-4 cursor-pointer hover:bg-[#333c45] transition-all hover:duration-200 hover:ease-in-out`,
  iconContainer: `text-xl mr-4`,
  textGeneral: `font-medium`,
  textActive: `font-bold`,
}

interface SidebarOptionProps {
  Icon: React.ComponentType
  text: string
  isActive: boolean
  setSelected: (text: string) => void
  redirect?: string // Optional redirect prop
}

function SidebarOption({ Icon, text, isActive, setSelected, redirect }: SidebarOptionProps) {
  const router = useRouter()

  const handleClick = () => {
    setSelected(text)
    if (redirect) {
      router.push(redirect) // Navigate to the redirect URL if provided
    }
  }

  return (
    <div className={style.wrapper} onClick={handleClick}>
      <div className={style.iconContainer}>
        <Icon />
      </div>
      <div className={`${isActive ? style.textActive : style.textGeneral}`}>
        {text}
      </div>
    </div>
  )
}

export default SidebarOption