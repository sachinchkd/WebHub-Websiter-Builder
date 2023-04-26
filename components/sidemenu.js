
import Link from 'next/link'; 

const SideMenu = () => (
    <>
        <div class="  flex  bg-gray-100">
  <div class="flex flex-col w-56 fixed bg-white r-3xl overflow-hidden">
    <div class="inline-flex items-center justify-left px-10 h-12 shadow-md">
      <h1 class="text-sm text-gray-500">Main Links</h1>
    </div>
    <ul class="flex flex-col py-4">
      <li>
        <Link href='/' class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-home"></i></span>
          <span class="text-sm font-medium">Home</span>
        </Link>
      </li>
      <li>
        <Link href='/products' class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-music"></i></span>
          <span class="text-sm font-medium">Products</span>
        </Link>
      </li>
      <li>
        <Link href="/categories" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-drink"></i></span>
          <span class="text-sm font-medium">Categories</span>
        </Link>
      </li>
      <li>
        <Link href="/store" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-shopping-bag"></i></span>
          <span class="text-sm font-medium">Store Users</span>
        </Link>
      </li>
      <li>
        <Link href="/orders" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-chat"></i></span>
          <span class="text-sm font-medium">Orders</span>
        </Link>
      </li>
    </ul>
  </div>
</div>


    </>
)

export default SideMenu
