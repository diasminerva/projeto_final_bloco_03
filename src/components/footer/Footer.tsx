import { GithubLogo, LinkedinLogo, InstagramLogo } from '@phosphor-icons/react';

function Footer() {
    let data = new Date().getFullYear();

    return (
        <div className="flex justify-center bg-[#1b382b] text-white border-t border-rose-200/20">
            <div className="container flex flex-col items-center py-8 gap-3">
                <p className='text-xl font-bold tracking-tight text-rose-300'>Empório Natural & Gourmet</p>
                <p className='text-sm text-emerald-100/80 font-normal'>Desenvolvido por Minerva Almeida Dias © {data}</p>
                <div className='flex gap-4 mt-2'>
                    <a href="https://github.com/diasminerva" target="_blank" rel="noopener noreferrer" className='bg-white/10 p-2.5 rounded-full hover:bg-rose-300 hover:text-[#1b382b] transition-all duration-200'>
                        <GithubLogo size={22} weight='bold' />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='bg-white/10 p-2.5 rounded-full hover:bg-rose-300 hover:text-[#1b382b] transition-all duration-200'>
                        <LinkedinLogo size={22} weight='bold' />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='bg-white/10 p-2.5 rounded-full hover:bg-rose-300 hover:text-[#1b382b] transition-all duration-200'>
                        <InstagramLogo size={22} weight='bold' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
