import Header from './Header';
import Footer from './Footer';
import Plum from './Plum';


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <div className='layout'>
                <div className='mx-8 mb:mx-4'>
                    {children}
                    <Footer />
                </div>
            </div>
            <Plum />
        </>
    )
}

export default Layout