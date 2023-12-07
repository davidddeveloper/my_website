export default function Hero(props) {
    return (
        <>
        {/*<!-- Hero Section -->
        <!-- after:contents after:absolute after:inset-0 after:bottom-1 after:-z-0 after:bg-[url(./assets/images/img_1.png)] after:bg-[contain] after:bg-[center] after:opacity-30 after:-mt-20 
            before:contents before:absolute before:w-2/5 before:max-w-xs before:top-2/4 before:bottom-2/4 before:border-2 before:border-offWhite
        -->*/}
        <section
            className="hero-section relative flex justify-center items-center isolate  ">
            <h2 className="text-lg mb:text-xlg text-white flex flex-col items-center relative -mt-28 z-10 before:contents before:absolute before:w-3/4 before:border-2 before:border-offWhite before:top-6 tb:before:top-8 tb:text-xxlg">
                <span className="text-base text-offWhite tb:-mb-3 tb:text-md">I'm a</span>
                <span className="text-center">Software Developer</span>
                <span className="text-base text-offWhite tb:-mt-3 tb:text-md">Started as a hobby</span>
            </h2>
        </section>
        </>
    )
}