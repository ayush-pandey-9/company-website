import { notFound } from 'next/navigation'

// Mock blog data (you can replace this with actual API or database calls)
const blogPosts = [
  {
    slug: 'introducing-agentive-by-morningside-ai',
    title: 'Introducing Agentive By Morningside AI',
    content: 'This is the detailed content for Introducing Agentive...',
    date: 'October 16, 2024',
  },
  {
    slug: 'what-openai-devday-announcements-mean',
    title: "What OpenAI's Devday Announcements Mean For Your Business",
    content: 'This is the detailed content for OpenAI Devday Announcements...',
    date: 'January 4, 2024',
  },
  {
    slug: 'natural-language-to-sql-innovation',
    title: 'Our State-of-the-Art Natural Language to SQL Innovation',
    content: 'This is the detailed content for Natural Language to SQL...',
    date: 'April 18, 2024',
  },
]

// This function generates static paths for each blog post
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Blog Post Page Component
const BlogPostPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const resolvedParams = await params // Await params to handle asynchronous behavior
  const { slug } = resolvedParams

  // Find the blog post based on the slug
  const blogPost = blogPosts.find((post) => post.slug === slug)

  // If the blog post is not found, return a 404 page
  if (!blogPost) {
    notFound()
  }

  return (
    <div className="container mx-auto py-6 px-50">
      <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
      <p className="text-sm text-gray-600">{blogPost.date}</p>
      <div className="mt-4">
        <p>{blogPost.content}</p>
      </div>
    </div>
  )
}

export default BlogPostPage
