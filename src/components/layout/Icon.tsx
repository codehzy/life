import { useTheme } from 'next-themes'
import { AiFillGithub } from 'react-icons/ai';
import ThemeButton from '@/components/buttons/ThemeButton';

const Icon = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div className='flex gap-[24px] text-[22px]'>
            {/* <button onClick={() => setTheme('light')}>Light Mode</button>
            {'     '}
            <button onClick={() => setTheme('dark')}>Dark Mode</button> */}

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