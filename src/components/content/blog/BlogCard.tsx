import { BlogFrontmatter, InjectedMeta } from '@/types/frontmatters';
import clsx from 'clsx';
import { format } from 'date-fns';
import { HiOutlineClock } from 'react-icons/hi';


type BlogCardProps = {
    post: BlogFrontmatter & InjectedMeta;
    checkTagged?: (tag: string) => boolean
} & React.ComponentPropsWithRef<'li'>

const BlogCard = () => {
    return (
        <li
            className={clsx(
                'w-full rounded-md border border-gray-300 bg-white dark:border-gray-600 dark:bg-dark',
                'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
                'transition duration-100',
                'motion-reduce:hover:scale-100',
                'animate-shadow',
                "list-none"
            )}
        >
            <div className='flex items-end p-4 mb:flex-col'>
                <div className='w-full'>
                    <h4 className='text-gray-800 dark:text-gray-100'>我是标题</h4>
                    <p className='mt-4 mb-2 text-sm text-gray-600 dark:text-gray-300'>
                        <span className='font-bold text-gray-800 dark:text-gray-100'>
                            {format(
                                new Date(),
                                'MMMM dd, yyyy'
                            )}
                        </span>
                    </p>
                    <p className='text-sm text-gray-700 dark:text-gray-300'>
                        我是文章描述
                    </p>
                    <div className='mt-2 flex items-center justify-start gap-2 text-sm font-medium text-gray-600 dark:text-gray-300'>
                        <div className='flex items-center gap-1'>
                            <HiOutlineClock className='inline-block text-base' />
                            大约10分钟
                        </div>
                    </div>
                </div>

                <div className='w-full text-right'>
                    编程
                </div>
            </div>
        </li >
    )
}

BlogCard.displayName = 'BlogCard'

export default BlogCard