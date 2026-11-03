import { ShoppingCart, User, MagnifyingGlass } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='w-full bg-[#1b382b] text-white flex justify-center py-4 shadow-sm sticky top-0 z-50 border-b border-rose-200/20'>
            <div className="container flex flex-wrap justify-between items-center text-base px-6 gap-4">
                <Link to='/home' className='text-2xl font-extrabold tracking-tight text-white flex items-center gap-2 hover:opacity-90 transition mr-4'>
                    <span className="text-rose-300 text-3xl">🍃</span> Empório<span className="text-rose-300 ml-1">Natural</span>
                </Link>

                <div className='flex gap-6 items-center font-medium'>
                    <Link to='/produtos' className='hover:text-rose-300 transition-colors duration-200'>Produtos</Link>
                    <Link to='/categorias' className='hover:text-rose-300 transition-colors duration-200'>Categorias</Link>
                    <Link to='/cadastrarcategoria' className='bg-rose-400 text-[#1b382b] font-semibold px-4 py-2 rounded-full hover:bg-rose-300 transition-all duration-200 shadow-sm text-sm'>
                        + Nova Categoria
                    </Link>
                </div>

                <div className='flex gap-4 items-center'>
                    <div className="bg-white/10 p-2 rounded-full hover:bg-rose-400 hover:text-[#1b382b] transition duration-200 cursor-pointer">
                        <MagnifyingGlass size={18} />
                    </div>
                    <div className="bg-white/10 p-2 rounded-full hover:bg-rose-400 hover:text-[#1b382b] transition duration-200 cursor-pointer">
                        <User size={18} />
                    </div>
                    <div className="bg-[#2d5442] p-2 rounded-full text-rose-300 hover:bg-rose-400 hover:text-[#1b382b] transition duration-200 cursor-pointer relative">
                        <ShoppingCart size={18} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
