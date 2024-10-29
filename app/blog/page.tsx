'use client'

interface BlogPost {
  title: string
  slug: string
  date: string
  description: string
  number: string
}

const BlogPostCard: React.FC<BlogPost> = ({
  title,
  slug,
  date,
  description,
  number,
}) => {
  const handleClick = () => {
    const blogUrl = `/blog/${slug}`
    // Navigate using window.location.href without reloading the entire app
    window.location.href = blogUrl
  }

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer hover:shadow-lg hover:border-2 hover:border-green transition-all transform hover:-translate-y-2 rounded-lg border px-6 py-4 duration-500"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold">{date}</span>
        <span className="px-4 border font-medium border-black w-min rounded-30">{`#${number}`}</span>
      </div>
      <p className="text-2xl font-semibold mt-2">{title}</p>
      <p className="mt-2">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-green-500 font-semibold">Read</span>
        <span className="text-green-500">&rarr;</span>
      </div>
    </div>
  )
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: 'Introducing Agentive By Morningside AI',
      slug: 'introducing-agentive-by-morningside-ai',
      date: 'October 16, 2024',
      description:
        'Explore Agentive: Streamlining the Creation, Management, and Deployment of Advanced AI Agents',
      number: '1',
    },
    {
      title: "What OpenAI's Devday Announcements Mean For Your Business.",
      slug: 'what-openai-devday-announcements-mean',
      date: 'January 4, 2024',
      description:
        "A discussion with Morningside's CEO, Liam Ottley, and CTO, Spencer Porte, on the implications of OpenAI's recent announcements.",
      number: '2',
    },
    {
      title: 'Our State-of-the-Art Natural Language to SQL Innovation',
      slug: 'natural-language-to-sql-innovation',
      date: 'April 18, 2024',
      description:
        'Get an inside look into how Morningside AI is surpassing SOTA performance for Natural Language to SQL.',
      number: '3',
    },
  ]

  return (
    <div className="container mx-auto px-6 py-50">
      <h1 className="text-3xl font-bold mb-6">BLOGS</h1>
      <p className="text-lg mb-4">
        Explore the most recent advancements in AI development, as shared by our
        industry leading engineers.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogPostCard
            key={post.slug}
            title={post.title}
            slug={post.slug}
            date={post.date}
            description={post.description}
            number={post.number}
          />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors">
          Show More
        </button>
      </div>
    </div>
  )
}

export default Blog
