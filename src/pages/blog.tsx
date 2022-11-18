import BlogCard from "@/components/content/blog/BlogCard";
import Layout from "@/components/layout/Layout"
import clsx from 'clsx';
import useLoaded from '../hooks/useLoaded';

const Blog = () => {
    const isLoaded = useLoaded()

    const getYear = 2022


    return (
        <Layout>
            <div className="min-h-[600px]">
                <main>
                    <section className={clsx(isLoaded && 'fade-in-start')}>
                        <div className="layout">
                            <ul className='mt-12 grid gap-4 mb:mx-0' data-fade='1'>
                                <span className='inline-block pb-2 text-[24px] text-[#aaa]'>
                                    {getYear}
                                </span>
                            </ul>
                            <BlogCard />
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    )
}

Blog.displayName = 'Blog'

export default Blog