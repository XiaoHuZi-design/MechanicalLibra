// pages/about.js
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">关于我</h1>
        <p className="text-center text-gray-600">
          这里是一些关于我的信息。我是一个热爱技术、音乐和艺术的开发者。
        </p>
        <div className="bg-yellow-100 rounded-2xl p-4">
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">提示</h2>
          <p className="text-center text-gray-700">
            更多功能正在开发中，请耐心等待！
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;