import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="bg-[#f7f4ed] min-h-[82vh] flex items-center justify-center py-12">
            <div className='container grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6'>
                <div className="flex flex-col gap-6 items-start">
                    <span className="bg-rose-100 text-rose-800 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-rose-200">
                        ✨ Produtos Selecionados & Orgânicos
                    </span>
                    <h2 className='text-5xl md:text-6xl font-extrabold leading-tight text-[#1b382b] tracking-tight'>
                        Saúde e sabor em <br />
                        <span className="text-rose-400 underline decoration-rose-300 decoration-wavy underline-offset-8">cada escolha.</span>
                    </h2>
                    <p className='text-lg text-slate-600 font-normal leading-relaxed max-w-lg'>
                        Alimentos artesanais, funcionais e naturais selecionados com carinho para alimentar a sua melhor versão.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-2">
                        <Link to="/produtos" className='rounded-full bg-[#1b382b] text-white py-3 px-8 font-semibold hover:bg-[#2d5442] transition-all duration-300 shadow-lg shadow-[#1b382b]/20 hover:-translate-y-0.5'>
                            Explorar Produtos
                        </Link>
                        <Link to="/cadastrarproduto" className='rounded-full bg-rose-300 text-[#1b382b] py-3 px-8 font-bold hover:bg-rose-200 transition-all duration-300 shadow-md shadow-rose-300/30 hover:-translate-y-0.5'>
                            + Cadastrar Produto
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center relative">
                    <div className="absolute -inset-4 bg-rose-200/50 rounded-[2.5rem] blur-xl transform rotate-2"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop" 
                        alt="Empório Natural" 
                        className='relative rounded-[2rem] shadow-2xl w-full max-w-md object-cover h-[420px] border-4 border-white'
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
