
const blogs = [
    {
        id: 1,
        title:"Getting Started with Next.js",
        slug:"getting-started-with-nextjs",
        description:"A beginner's guide to setting up your first Next.js project.",
    },
    {
        id: 2,
        title:"Deploying a Next.js App on Vercel",
        slug:"deploying-a-nextjs-app-on-vercel",
        description:"Learn how to deploy your Next.js app on Vercel.",
    },
    {
        id: 3,
        title:"Adding Tailwind CSS to Next.js",
        slug:"adding-tailwind-css-to-nextjs",
        description:"A step-by-step guide to adding Tailwind CSS to your Next.js project.",
    },
    {
        id: 4,
        title:"SEO Best Practices for Next.js",
        slug:"seo-best-practices-for-nextjs",
        description:"Improve your Next.js app's SEO with these best practices.",
    },
];

export async function generateMetadata({ params }, parent) {
    const blog = blogs.find((data) => data.slug == params.slug);
    return {
      title: blog.title,
    };
  }


export default function BlogDetail({params}) {
    const blog = blogs.find((data) => data.slug == params.slug);
    return(
        <div className="container mx-auto text-center p-20"> 
        <h1 className="font-bold text-4xl p-2 text-center px-3 my-1">{blog.title}</h1>
        <h1 className="font-bold text-medium p-2 text-center px-3 my-1">{blog.description}</h1>
        </div>
    )
}