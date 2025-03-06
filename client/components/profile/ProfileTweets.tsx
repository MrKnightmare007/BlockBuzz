'use client'
import { useEffect, useContext, useState } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

interface Tweet {
  timestamp: string
  tweet: string
}

interface Tweets extends Array<Tweet> {}

interface Author {
  name: string
  profileImage: string
  walletAddress: string
  isProfileImageNFT: Boolean | undefined
}

const ProfileTweets = () => {
  const { currentUser } = useContext(TwitterContext)
  const [tweets, setTweets] = useState<Tweets>([
    {
      timestamp: '',
      tweet: '',
    },
  ])
  const [author, setAuthor] = useState<Author>({
    name: '',
    profileImage: '',
    walletAddress: '',
    isProfileImageNFT: undefined,
  })

  useEffect(() => {
    if (!currentUser) return

    setTweets(currentUser.tweets)
    setAuthor({
      name: currentUser.name,
      profileImage: currentUser.profileImage,
      walletAddress: currentUser.walletAddress,
      isProfileImageNFT: currentUser.isProfileImageNFT,
    })
  }, [currentUser])

  return (
    <div className={style.wrapper}>
      {tweets?.map((tweet: Tweet, index: number) => (
        <Post
          key={index}
          displayName={
            author.name === 'Unnamed'
              ? `${author.walletAddress.slice(
                  0,
                  4,
                )}...${author.walletAddress.slice(41)}`
              : author.name
          }
          username={`${author.walletAddress.slice(
            0,
            4,
          )}...${author.walletAddress.slice(41)}`}
          text={tweet.tweet}
          avatar={author.profileImage}
          timestamps={tweet.timestamp}
          isProfileImageNFT={Boolean(author.isProfileImageNFT) || false}
        />
      ))}
    </div>
  )
}

export default ProfileTweets