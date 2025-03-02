'use client'
import React from 'react';
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs';
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri';
import { IoMdCalendar } from 'react-icons/io';
import { MdOutlineLocationOn } from 'react-icons/md';

const style = {
  wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
  tweetBoxLeft: `mr-4`,
  tweetBoxRight: `flex-1`,
  profileImage: `height-12 w-12 rounded-full`,
  inputField: `w-full h-full outline-none bg-transparent text-lg`,
  formLowerContainer: `flex`,
  iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
  icon: `mr-2`,
  submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
  inactiveSubmit: `bg-[#196195] text-[#95999e]`,
  activeSubmit: `bg-[#1d9bf0] text-white`,
}

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = React.useState('');

  const postTweet = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('Posting Tweet:', tweetMessage);
  }

  return (
    <div className={style.wrapper}>
      <div className={style.tweetBoxLeft}>
        <img
          src = "data:image/jpeg;base64,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"
          alt = "Profile Image"
          className={style.profileImage}
        />
      </div>
      <div className={style.tweetBoxRight}>
        <form>
          <textarea
            className={style.inputField}
            placeholder="What's happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)} 
          />
          <div className={style.formLowerContainer}>
            <div className={style.iconsContainer}>
              <BsCardImage className={style.icon} />
              <RiFileGifLine className={style.icon} />
              <RiBarChartHorizontalFill className={style.icon} />
              <BsEmojiSmile className={style.icon} />
              <IoMdCalendar className={style.icon} />
              <MdOutlineLocationOn className={style.icon} />
            </div>
            <button
              type="submit"
              disabled={!tweetMessage}
              onClick={(event) => postTweet(event)}
              className={`${style.submitGeneral} ${tweetMessage ? style.activeSubmit : style.inactiveSubmit}`} 
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TweetBox