const Footer = () => {
    return (
        <div className="my-16 text-right text-[#b3b3b3]">
            <section className="flex flex-col items-end">
                <div>
                    <a
                        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                        rel="noreferrer"
                        target="_blank">CC BY-NC-SA 4.0</a>{' '}
                    {new Date().getFullYear()}
                    <a
                        href='https://github.com/codehzy'
                        target='_blank'
                        className='pl-1'
                        rel='noreferrer'
                    >
                        © ZI YANG HE
                    </a>
                </div>
                苏ICP备20030191号
            </section>
        </div>
    )
}

Footer.displayName = 'Footer';

export default Footer