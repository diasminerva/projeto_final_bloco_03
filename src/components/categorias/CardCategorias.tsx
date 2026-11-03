import { Link } from 'react-router-dom';
import type Categoria from '../../models/Categoria';

interface CardCategoriaProps {
    categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
    return (
        <div className='bg-white rounded-3xl overflow-hidden justify-between flex flex-col border border-rose-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
            <div className='p-6 flex flex-col gap-3'>
                <div className="flex justify-between items-center">
                    <span className="bg-emerald-50 text-[#1b382b] text-xs font-bold px-3 py-1 rounded-full border border-emerald-100">
                        Categoria #{categoria.id}
                    </span>
                    <span className="text-xl">🌿</span>
                </div>
                <h3 className='text-2xl font-bold uppercase tracking-tight text-[#1b382b] mt-1'>{categoria.nome}</h3>
                <p className='text-slate-500 text-sm leading-relaxed'>{categoria.descricao}</p>
            </div>
            <div className="flex p-4 gap-2 bg-[#fcfbf7] border-t border-slate-100">
                <Link to={`/editarcategoria/${categoria.id}`} className='w-full text-[#1b382b] bg-emerald-100 hover:bg-emerald-200 flex items-center justify-center py-2.5 rounded-full font-semibold text-sm transition-all duration-200'>
                    Editar
                </Link>
                <Link to={`/deletarcategoria/${categoria.id}`} className='w-full text-rose-700 bg-rose-100 hover:bg-rose-200 flex items-center justify-center py-2.5 rounded-full font-semibold text-sm transition-all duration-200'>
                    Deletar
                </Link>
            </div>
        </div>
    );
}

export default CardCategorias;
