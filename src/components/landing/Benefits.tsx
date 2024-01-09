export function Benefits(): JSX.Element {
    return (
        <div className='py-16 flex flex-col items-center lg:py-20 px-2'>
            <div className='max-w-xl mb-10 md:mx-auto sm:text-center md:mb-12'>
                <div>
                    <p className='text-lg font-bold text-muted-foreground/60'>Benefits</p>
                </div>
                <h2 className='max-w-lg mb-6 font-sans text-3xl font-extrabold text-primary leading-none tracking-tight sm:text-4xl md:mx-auto'>
                    <span className='relative inline-block'>
                        <svg
                            viewBox='0 0 52 24'
                            fill='currentColor'
                            className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
                        >
                            <defs>
                                <pattern
                                    id='07690130-d013-42bc-83f4-90de7ac68f76'
                                    x='0'
                                    y='0'
                                    width='.135'
                                    height='.30'
                                >
                                    <circle cx='1' cy='1' r='.7' />
                                </pattern>
                            </defs>
                            <rect
                                fill='url(#07690130-d013-42bc-83f4-90de7ac68f76)'
                                width='52'
                                height='24'
                            />
                        </svg>
                        <span className='relative'>The</span>
                    </span>{' '}
                    Not just a crowd funding dapp
                </h2>
                <p className='text-base text-gray-700 md:text-lg'>
                    Discover the unique advantages of Bild3r, a Web3-based real estate development trust.
                </p>
            </div>
            <div className='grid mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:gap-x-5'>
                <div className='space-y-6 sm:px-2'>
                    {/* Enhanced Transparency */}
                    <div className='flex flex-col sm:flex-row show'>
                        <div className='mb-4 mr-4'>
                            <div className='flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50'>
                                {/* Icon for Enhanced Transparency */}
                            </div>
                        </div>
                        <div>
                            <h6 className='mb-3 text-primary text-xl font-bold leading-5'>
                                Enhanced Transparency
                            </h6>
                            <p className='text-sm text-gray-900'>
                                Blockchain technology ensures clear, real-time tracking of fund usage and project progress.
                            </p>
                        </div>
                    </div>

                    {/* Automated Processes */}
                    <div className='flex flex-col sm:flex-row show'>
                        <div className='mb-4 mr-4'>
                            <div className='flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50'>
                                {/* Icon for Automated Processes */}
                            </div>
                        </div>
                        <div>
                            <h6 className='mb-3 text-primary text-xl font-bold leading-5'>
                                Automated Processes
                            </h6>
                            <p className='text-sm text-gray-900'>
                                Leverages smart contracts for efficient and accurate milestone-based fund distribution.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='space-y-6 sm:px-2'>
                    {/* Increased Security */}
                    <div className='flex flex-col sm:flex-row show'>
                        <div className='mb-4 mr-4'>
                            <div className='flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50'>
                                {/* Icon for Increased Security */}
                            </div>
                        </div>
                        <div>
                            <h6 className='mb-3 text-primary text-xl font-bold leading-5'>
                                Increased Security
                            </h6>
                            <p className='text-sm text-gray-900'>
                                Blockchain infrastructure provides robust protection against fraud and unauthorized alterations.
                            </p>
                        </div>
                    </div>

                    {/* Democratized Investment Access */}
                    <div className='flex flex-col sm:flex-row show'>
                        <div className='mb-4 mr-4'>
                            <div className='flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50'>
                                {/* Icon for Democratized Investment Access */}
                            </div>
                        </div>
                        <div>
                            <h6 className='mb-3 text-primary text-xl font-bold leading-5'>
                                Democratized Investment Access
                            </h6>
                            <p className='text-sm text-gray-900'>
                                Lowers entry barriers, allowing a broader audience to participate in real estate development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
