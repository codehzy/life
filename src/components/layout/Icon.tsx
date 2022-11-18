import { useTheme } from 'next-themes'
import { AiFillGithub } from 'react-icons/ai';
import { MdOutlineArticle } from 'react-icons/md';
import { FaRegLightbulb } from 'react-icons/fa';
import ThemeButton from '@/components/buttons/ThemeButton';
import UnstyledLink from '../links/UnstyledLink';

const Icon = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div className='flex gap-[24px] text-[22px]'>
            <UnstyledLink href='/blog' className="hidden mb:inline">
                <MdOutlineArticle />
            </UnstyledLink>
            <UnstyledLink href='/projects' className='hidden mb:inline'>
                <FaRegLightbulb />
            </UnstyledLink>
            <a
                href="https://github.com/codehzy"
                rel='noreferrer'
                target='_blank'
            >
                <AiFillGithub />
            </a>
            <ThemeButton />
        </div>
    )
}


export default Icon