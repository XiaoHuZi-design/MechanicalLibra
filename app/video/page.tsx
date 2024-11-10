// app/video/page.tsx
'use client'

import React from 'react'
import Link from 'next/link'

const VideoPage = () => {
  const biliBiliVideoUrl = 'https://www.bilibili.com/'; // 替换为你的B站视频URL
  const youTubeVideoUrl = 'https://www.youtube.com/'; // 替换为你的YouTube视频URL
  const tencentVideoUrl = 'https://v.qq.com/channel/choice'; // 替换为你的腾讯视频URL
  const youKuVideoUrl = 'https://www.youku.com/'; // 替换为你的优酷视频URL
  const aiQiYiVideoUrl = 'https://www.iqiyi.com/'; // 替换为你的爱奇艺视频URL
  const mangoTvVideoUrl = 'https://www.mgtv.com/'; // 替换为你的芒果TV视频URL

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">观看视频</h1>
        
        <div className="space-y-4">
          <button
            onClick={() => window.open(biliBiliVideoUrl, '_blank')}
            className="w-full bg-purple-500 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-600 transition duration-300"
          >
            跳转到 B 站视频
          </button>
          
          <button
            onClick={() => window.open(youTubeVideoUrl, '_blank')}
            className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition duration-300"
          >
            跳转到 YouTube 视频
          </button>
          
          <button
            onClick={() => window.open(tencentVideoUrl, '_blank')}
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
          >
            跳转到 腾讯视频
          </button>
          
          <button
            onClick={() => window.open(youKuVideoUrl, '_blank')}
            className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300"
          >
            跳转到 优酷视频
          </button>
          
          <button
            onClick={() => window.open(aiQiYiVideoUrl, '_blank')}
            className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300"
          >
            跳转到 爱奇艺视频
          </button>
          
          <button
            onClick={() => window.open(mangoTvVideoUrl, '_blank')}
            className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300"
          >
            跳转到 芒果TV视频
          </button>
        </div>
        
        <Link href="/">
          <button
            className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 mt-4"
          >
            返回首页
          </button>
        </Link>
      </div>
    </div>
  )
}

export default VideoPage;