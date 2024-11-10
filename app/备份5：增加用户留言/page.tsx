// app/page.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Heart, Star, Music } from 'lucide-react'
import { FaInstagram, FaTwitter, FaGithub, FaTiktok } from 'react-icons/fa'
import Link from 'next/link'

const MechanicalLibra = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex p-4">
      {/* 左侧侧边栏 */}
      <aside className="w-64 bg-white rounded-3xl shadow-xl p-4 space-y-6 fixed top-4 left-4">
        <h2 className="text-2xl font-bold text-center text-gray-800">设置栏</h2>
        <div className="space-y-2">
          <button className="w-full bg-purple-500 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-600 transition duration-300">
            设置1
          </button>
          <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
            设置2
          </button>
          <button className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300">
            设置3
          </button>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800">目录</h2>
        <nav className="space-y-2">
          <Link href="#section1" className="block text-gray-700 hover:text-gray-900 transition duration-300">
            第一部分
          </Link>
          <Link href="#section2" className="block text-gray-700 hover:text-gray-900 transition duration-300">
            第二部分
          </Link>
          <Link href="#section3" className="block text-gray-700 hover:text-gray-900 transition duration-300">
            第三部分
          </Link>
        </nav>
        <div className="bg-white rounded-3xl shadow-xl p-4 space-y-4">
          <h2 className="text-xl font-bold text-center text-gray-800">公众号名片</h2>
          <div className="flex items-center justify-center space-x-2">
            <img src="/gzhqrcode.jpg" alt="公众号二维码" className="w-24 h-24 rounded-lg" />
            <div>
              <p className="text-gray-700">关注我们的公众号</p>
              <p className="text-gray-700">获取更多资讯</p>
            </div>
          </div>
        </div>
      </aside>

      {/* 主要内容区域 */}
      <main className="ml-80 flex-1 flex items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full space-y-6"
        >
          <div className="flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="bg-blue-500 rounded-full p-3"
            >
              <Cpu size={48} className="text-white" />
            </motion.div>
          </div>
          
          <h1 className="text-3xl font-bold text-center text-gray-800">机械仔libra</h1>
          
          <p className="text-center text-gray-600">
            嗨！我是一个可爱的机械仔。我喜欢音乐、星星和所有美好的事物！
          </p>
          
          <div className="flex justify-center space-x-4">
            <motion.div whileHover={{ scale: 1.2 }} className="text-red-500">
              <Heart />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="text-yellow-500">
              <Star />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="text-green-500">
              <Music />
            </motion.div>
          </div>
          
          <div className="bg-pink-100 rounded-2xl p-4">
            <h2 className="text-xl font-semibold text-pink-800 mb-2">我的爱好</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>弹吉他</li>
              <li>看星星</li>
              <li>编程</li>
              <li>画画</li>
            </ul>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-purple-500 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-600 transition duration-300"
          >
            跟我打个招呼吧！
          </motion.button>

          {/* 社交媒体链接 */}
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="text-purple-500 hover:text-purple-600 transition duration-300" />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className="text-purple-500 hover:text-purple-600 transition duration-300" />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="text-purple-500 hover:text-purple-600 transition duration-300" />
            </a>
            <a href="https://www.douyin.com/user/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={24} className="text-purple-500 hover:text-purple-600 transition duration-300" />
            </a>
          </div>

          {/* 新增的跳转按钮 */}
          <Link href="/video" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 mt-4"
            >
              去观看视频
            </motion.button>
          </Link>

          {/* 最新文章 */}
          <div className="bg-white rounded-3xl shadow-xl p-4 space-y-4 mt-4">
            <h2 className="text-xl font-bold text-center text-gray-800">最新文章</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><Link href="/article1" className="text-blue-500 hover:text-blue-700">文章1标题</Link></li>
              <li><Link href="/article2" className="text-blue-500 hover:text-blue-700">文章2标题</Link></li>
              <li><Link href="/article3" className="text-blue-500 hover:text-blue-700">文章3标题</Link></li>
            </ul>
          </div>

          {/* 用户互动区 */}
          <div className="bg-white rounded-3xl shadow-xl p-4 space-y-4 mt-4">
            <h2 className="text-xl font-bold text-center text-gray-800">用户互动区</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">姓名：</label>
                <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">留言：</label>
                <textarea id="message" name="message" rows="4" className="w-full p-2 border border-gray-300 rounded"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
                提交
              </button>
            </form>
          </div>
        </motion.div>

        {/* 音频播放器 */}
        <div className="fixed bottom-4 right-4">
          <audio controls>
            <source src="/music.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </main>
    </div>
  )
}

export default MechanicalLibra;