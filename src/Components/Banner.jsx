const Banner = () => {
    return (
        <div className="relative container mx-auto px-4">
            <img 
                className="w-full h-auto max-sm:w-full max-sm:h-auto" 
                src="https://www.shutterstock.com/image-photo/chef-hands-cooking-meat-steak-600nw-2110894133.jpg" 
                alt="Cooking Steak" 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4">
                <h1 className="text-2xl md:text-4xl font-bold text-center max-sm:w-auto max-sm:text-2xl max-sm:mt-5">Discover an exceptional cooking <br /> class tailored for you!</h1>
                <p className="mt-2 text-base md:text-lg text-center">Master the art of cooking the perfect steak with our expert guidance.</p>
                <div className="mt-4 flex  items-center md:flex-row max-sm:flex gap-5">
                    <button className="mb-2 md:mb-0 md:mr-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded transition duration-300 max-sm:text-xl max-sm:mb-5">Get Recipe</button>
                    <button className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded transition duration-300 max-sm:text-xl max-sm:mb-5">Watch Video</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;

