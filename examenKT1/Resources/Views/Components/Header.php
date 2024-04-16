<header class="w-screen px-4 lg:px-8 sticky top-4 z-[100]">
    <div class="w-full h-16 mt-4 rounded-2xl lg:rounded-3xl flex justify-center backdrop-blur-sm bg-white/15 shadow-lg	">
        <nav class=" w-[90%] lg:w-3/4 h-full flex flex-row justify-start lg:justify-around items-center">
            <div class="nav-item font-bold hidden lg:flex w-32 justify-center">
                <a href="/" class="nav-link text-black/60 hover:text-black transition-all ease-in-out duration-200">Home</a>
            </div>
            <div class="nav-item font-bold hidden lg:flex w-32 justify-center">
                <a href="#" class="nav-link text-black/60 hover:text-black transition-all ease-in-out duration-200">About</a>
            </div>
            <a href="/" class="nav-item logo h-1/3 lg:h-2/4 w-auto mr-auto lg:mr-0 hover:cursor-pointer">
                <img src="https://examen.lcl/Resources/assets/Logo.svg" class="h-full w-fit" alt="Logo" draggable="false">
            </a>
            <div class="nav-item font-bold hidden lg:flex w-32 justify-center">
                <a href="#" class="nav-link text-black/60 hover:text-black transition-all ease-in-out duration-200">Projects</a>
            </div>
            <div class="nav-item font-bold hidden lg:flex w-32 justify-center">
                <a href="#" class="nav-link text-black/60 hover:text-black transition-all ease-in-out duration-200">Contact</a>
            </div>

            <div class="hamburger block z-[100] lg:hidden h-full w-fit text-3xl flex items-center justify-end">
                <i class="fa-solid fa-bars toggle-nav"></i>
            </div>
        </nav>
    </div>

    <div class="mobile-nav p-4 hidden w-screen absolute top-[-16px] left-0 z-[30] h-screen bg-[#f0f0f0] flex items-center justify-center flex-col gap-8 transition-opacity ease-in-out duration-400">
        <div class="close-navigation toggle-nav absolute top-8 right-8 bg-blue-600/15 hover:bg-blue-600/35 h-8 rounded-full aspect-square flex items-center justify-center transitions-all ease-in-out duration-200">
            <i class="fa-solid fa-close"></i>
        </div>
        <nav class="flex flex-col gap-4 text-2xl text-center">
            <a href="/" class="nav-link text-black/60">Home</a>
            <a href="#" class="nav-link text-black/60">About</a>
            <a href="#" class="nav-link text-black/60">Projects</a>
            <a href="#" class="nav-link text-black/60">Contact</a>
        </nav>
    </div>
</header>