import * as React from "react"
import clsx from 'clsx';


const PreloadContext = React.createContext<boolean>(false)


const PreloadProvider = ({ children }: { children: React.ReactNode }) => {
    const [preloaded, setPreloaded] = React.useState<boolean>(false)

    React.useEffect(() => {
        setTimeout(() => {
            setPreloaded(true)
        }, 200)
    }, [])


    return (
        <PreloadContext.Provider value={preloaded}>
            <div className={clsx(
                'fixed inset-0 flex items-center justify-center bg-white transition-opacity dark:bg-black',
                preloaded && 'pointer-events-none opacity-0'
            )}>
                {children}
            </div>
        </PreloadContext.Provider>
    )
}

PreloadProvider.displayName = 'PreloadProvider'

export default PreloadProvider
export const usePreloadState = () => React.useContext(PreloadContext)