import { format } from 'timeago.js';
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { FaRegComment, FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShare } from 'react-icons/fi'
import React, { use } from 'react'

const style = {
  wrapper: `flex p-3 border-b border-[#38444d]`,
  profileImage: `rounded-full h-[40px] w-[40px] object-cover`,
  postMain: `flex-1 px-4`,
  headerDetails: `flex items-center`,
  name: `font-bold mr-1`,
  verified: `text-[0.8rem]`,
  handleAndTimeAgo: `text-[#8899a6] ml-1`,
  tweet: `my-2`,
  image: `rounded-3xl`,
  footer: `flex justify-between mr-28 mt-4 text-[#8899a6]`,
  footerIcon: `rounded-full text-lg p-2`,
}

interface PostProps {
  displayName: string;
  username: string;
  avatar: string;
  text: string;
  isProfileImageNFT: boolean;
  timestamps: string;
}

function Post({ displayName, username, avatar, text, isProfileImageNFT, timestamps }: PostProps) {
  return (
    <div className={style.wrapper}>
      <div>
        <img
          src={avatar}
          alt={username}
          className={isProfileImageNFT ? `${style.profileImage} smallHex` : style.profileImage}
        />
      </div>
      <div className={style.postMain}>
        <div>
          <span className={style.headerDetails}>
            <span className={style.name}>{displayName}</span>
            {isProfileImageNFT && (
              <span className={style.verified}>
                <BsFillPatchCheckFill />
              </span>
            )}
            <span className={style.handleAndTimeAgo}>
              @{username} • {format(new Date(timestamps).getTime())}
            </span>
          </span>
          <div className={style.tweet}>{text}</div>
          <div className={style.footer}>
          <div
            className={`${style.footerIcon} hover:text-[#1d9bf0] hover:bg-[#1e364a] cursor-pointer`}
          >
            <FaRegComment />
          </div>
          <div
            className={`${style.footerIcon} hover:text-[#03ba7c] hover:bg-[#1b393b] cursor-pointer`}
          >
            <FaRetweet />
          </div>
          <div
            className={`${style.footerIcon} hover:text-[#f91c80] hover:bg-[#39243c] cursor-pointer`}
          >
            <AiOutlineHeart />
          </div>
          <div
            className={`${style.footerIcon} hover:text-[#1d9bf0] hover:bg-[#1e364a] cursor-pointer`}
          >
            <FiShare />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Post