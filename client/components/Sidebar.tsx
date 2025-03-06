'use client'
import React, { use } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { TwitterContext } from '@/context/TwitterContext'
import { FiMoreHorizontal } from 'react-icons/fi'
import { VscTwitter } from 'react-icons/vsc'
import SidebarOption from './SidebarOption'
import { useState } from 'react'
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaRegListAlt, FaHashtag} from 'react-icons/fa'
import { CgMoreO } from 'react-icons/cg'
import { BsBookmarkFill, BsBookmark, BsPersonFill, BsPerson } from 'react-icons/bs'

const style = {
  wrappper: `flex-[0.7] px-8 flex flex-col`,
  twitterIconcontainer: `text-3xl m-4`,
  tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20x] cursor-pointer`,
  navContainer: `flex-1`,
  profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-3xl p-3`,
  profileLeft: `flex items-center justify-center mr-4`,
  profileImage: `height-12 w-12 rounded-full`,
  profileRight: `flex-1 flex`,
  details: `flex-1`,
  name: `text-lg`,
  handle: `text-[#8899a6]`,
  moreContainer: `flex items-center mr-2`
}

function Sidebar({initialSelectedIcon = 'Home'}) {
  const [selected, setSelected] = useState(initialSelectedIcon)
  const {currentAccount, currentUser, tweets} = useContext(TwitterContext)
  const router = useRouter()
  return (
    <div className={style.wrappper}>
      <div className={style.twitterIconcontainer}>
        <VscTwitter />
      </div>
      <div className={style.navContainer}>
        <SidebarOption  
          Icon = {selected === 'Home' ? RiHome7Fill : RiHome7Line}
          text = 'Home'
          isActive = {Boolean(selected === 'Home')}
          setSelected = {setSelected}
          redirect = {'/'}
        />
        <SidebarOption  
          Icon = {selected === 'Explore' ? FaHashtag : BiHash}
          text = 'Explore'
          isActive = {Boolean(selected === 'Explore')}
          setSelected = {setSelected}
          redirect = {'/'}
        />
        <SidebarOption  
          Icon = {selected === 'Notifications' ? HiMail : HiOutlineMail}
          text = 'Notifications'
          isActive = {Boolean(selected === 'Notifications')}
          setSelected = {setSelected}
          redirect = {'/'}
        />
        <SidebarOption  
          Icon = {selected === 'Messages' ? RiHome7Fill : RiHome7Line}
          text = 'Messages'
          isActive = {Boolean(selected === 'Messages')}
          setSelected = {setSelected}
          redirect = {'/'}
        />
        <SidebarOption  
          Icon = {selected === 'Bookmarks' ? BsBookmarkFill : BsBookmark}
          text = 'Bookmarks'
          isActive = {Boolean(selected === 'Bookmarks')}
          setSelected = {setSelected}
          redirect = {'/'}
        />
        <SidebarOption  
          Icon = {selected === 'Lists' ? RiFileList2Fill : FaRegListAlt}
          text = 'Lists'
          isActive = {Boolean(selected === 'Lists')}
          setSelected = {setSelected}
          redirect = {'/'}
        />
        <SidebarOption  
          Icon = {selected === 'Profile' ? BsPersonFill : BsPerson}
          text = 'Profile'
          isActive = {Boolean(selected === 'Profile')}
          setSelected = {setSelected}
          redirect = {'/profile'}
        />
        <SidebarOption Icon={CgMoreO} text='More' isActive={false} setSelected={setSelected} />
        <div onClick={() => {router.push(`/?mint=${currentAccount}`)}}
         className={style.tweetButton}>Mint</div>
      </div>
      <div className={style.profileButton}>
        <div className={style.profileLeft}>
        <img
            src={currentUser.profileImage}
            alt='profile'
            className={
              currentUser.isProfileImageNft
                ? `${style.profileImage} smallHex`
                : style.profileImage
            }
          />
        </div>
        <div className={style.profileRight}>
          <div className={style.details}>
            <div className={style.name}>{currentUser.name}</div>
            <div className={style.handle}>{`${currentAccount.slice(0, 6)}...${currentAccount.slice(-4)}`}</div>
          </div>
          <div className={style.moreContainer}>
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar