<header class="w-screen px-4 md:px-8 sticky top-4 z-[100]">
    <div class="w-full h-16 mt-4 rounded-2xl md:rounded-3xl flex justify-center backdrop-blur-sm bg-white/15 shadow-md	">
        <nav class=" w-[90%] md:w-3/4 h-full flex flex-row justify-start md:justify-around items-center">
            <div class="nav-item font-bold hidden md:block">
                <a href="#">Home</a>
            </div>
            <div class="nav-item font-bold hidden md:block">
                <a href="#">Home</a>
            </div>
            <div class="nav-item logo h-1/3 md:h-2/4 w-fit grow md:grow-0">
                <img src="https://examen.lcl/Resources/assets/Logo.svg" class="h-full" alt="Logo" draggable="false">
            </div>
            <div class="nav-item font-bold hidden md:block">
                <a href="#">Home</a>
            </div>
            <div class="nav-item font-bold hidden md:block">
                <a href="#">Home</a>
            </div>

            <div class="hamburger block z-[100] md:hidden h-full w-fit text-3xl flex items-center justify-end">
                <i class="fa-solid fa-bars toggle-nav"></i>
            </div>
        </nav>
    </div>

    <div class="mobile-nav p-4 hidden w-screen absolute top-[-16px] left-0 z-[30] h-screen bg-[#f0f0f0] flex items-center justify-center flex-col gap-8 transition-opacity ease-in-out duration-400">
        <div class="close-navigation toggle-nav absolute top-8 right-8 bg-blue-600/15 hover:bg-blue-600/35 h-8 rounded-full aspect-square flex items-center justify-center transitions-all ease-in-out duration-200">
            <i class="fa-solid fa-close"></i>
        </div>
        <nav class="flex flex-col gap-4 text-2xl text-center">
            <a href="#" class="nav-item font-bold">Home</a>
            <a href="#" class="nav-item">Home Home</a>
            <a href="#" class="nav-item">Home</a>
            <a href="#" class="nav-item">Home Home</a>
        </nav>
    </div>
</header>