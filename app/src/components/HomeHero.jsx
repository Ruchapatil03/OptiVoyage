export default function Hero() {

    return(

        <section class="w-full h-full dark:bg-gray-900 justify-center flex flex-col">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Charting a course to a greener, safer future.</h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                Here at VIPIO, We revolutionize your shipping operations. Our innovative solution provides tailored route optimization, ensuring minimal fuel consumption, reduced emissions, and enhanced safety. From port to port, the optimal route is yours.
            </p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <button class="btn btn-accent inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 font-semibold rounded-lg">
                    Get started
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>
                <button href="#" class="btn btn-info py-3 px-5 sm:ms-4 text-sm font-medium text-white font-semibold rounded-lg">
                    Learn More
                </button>  
            </div>
        </div>
    </section>
    
        )
    
}