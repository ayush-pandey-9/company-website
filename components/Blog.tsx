'use client'
import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface BlogPost {
  title: string
  date: string
  image: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    title: 'Introducing Agentive By Morningside AI',
    date: '6th December, 2023',
    image: '/images/agentive-ai.png',
    slug: 'introducing-agentive-by-morningside-ai',
  },
  {
    title: "What OpenAI's Devday Announcements Mean For Your Business.",
    date: '13th November, 2023',
    image: '/images/openai-devday.png',
    slug: 'openai-devday-announcements-mean-for-business',
  },
  {
    title: 'Our State-of-the-Art Natural Language to SQL Innovation',
    date: '4th January, 2023',
    image: '/images/nl-to-sql.png',
    slug: 'state-of-the-art-natural-language-to-sql-innovation',
  },
]

const BlogComponent: React.FC = () => {
  const handlePostClick = (slug: string) => {
    // Manually update the browser history without reloading the page
    window.history.pushState({}, '', `/blog/${slug}`)

    // Optionally, you could also scroll to the top or load some content dynamically here
    console.log(`Navigated to /blog/${slug}`)
  }

  return (
    <div className="mx-auto py-50 px-6">
      <h2 className="text-4xl font-bold mb-6">BLOG</h2>
      <div className="flex flex-col">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            onClick={() => handlePostClick(post.slug)}
            className="cursor-pointer border hover:border-green transition-all rounded-lg p-4 flex justify-between items-center"
          >
            <div className="flex items-center">
              <Image
                src={post.image}
                alt={post.title}
                width={100}
                height={100}
                className="rounded-lg"
              />
              <div className="ml-4">
                <p className="text-sm text-gray-500">{post.date}</p>
                <h3 className="text-xl font-semibold">{post.title}</h3>
              </div>
            </div>
            <div className="text-xl">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition">
          See all
        </button>
      </div>
    </div>
  )
}

export default BlogComponent
