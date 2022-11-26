import clsxm from '@/lib/clsxm';
import React, { memo, useMemo } from 'react'
import HeaderNav from './HeaderNav';
import Icon from './Icon';
import { useWindowScroll } from 'react-use';
import UnstyledLink from '../links/UnstyledLink';
import { VscHome } from 'react-icons/vsc';


const Header = memo(() => {
    const docScroll = useWindowScroll();

    const isDocHover = useMemo(() => {
        if (docScroll) return !!docScroll.y;
    }, [docScroll])

    return (
        <header
            className={clsxm(
                'sticky top-0 z-50 bg-transparent w-screen',
                isDocHover &&
                'solid border-b border-black border-opacity-[0.12] bg-white bg-opacity-[98] backdrop-blur-[40px]',
                'dark:border-b  dark:border-black dark:bg-[#215c8c]'
            )}>
            <section className='layout'>
                <div className='flex mx-8 h-[60px] items-center justify-between leading-[60px]'>
                    <UnstyledLink href='/' className='hidden text-[22px] mb:inline'>
                        <VscHome />
                    </UnstyledLink>
                    <HeaderNav />
                    <Icon />
                </div>
            </section>
        </header>
    )
})

Header.displayName = 'Header'

export default Header