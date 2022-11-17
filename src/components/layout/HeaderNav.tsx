import { navAtom } from '@/store/index';
import { useRecoilValue } from "recoil";
import Link from "next/link";

const HeaderNav = () => {
    const navVal = useRecoilValue(navAtom);

    return (
        <div className='flex h-full w-auto flex-row items-center justify-center gap-[24px] mb:hidden'>
            {navVal.map(item => {
                return (
                    <div key={item.name}>
                        <Link href={item.link}>
                            <span className='text-black-600 hover:text-[#0066ff]  dark:text-[#ffffff]'>
                                {item.name}
                            </span>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default HeaderNav;