import { Link } from 'react-router-dom';
import type Produto from '../../models/Produto';

interface CardProdutoProps {
    produto: Produto;
}

function CardProdutos({ produto }: CardProdutoProps) {
    return (
        <div className='border-slate-200 border flex flex-col rounded-2xl overflow-hidden justify-between bg-white shadow-md hover:shadow-xl transition'>
            <div className='flex flex-col items-center p-4'>
                <img src={produto.foto} className='h-48 w-full object-cover rounded-xl' alt={produto.nome} />
                <div className='w-full mt-4 flex flex-col gap-1'>
                    <h4 className='text-xl font-bold uppercase text-emerald-950'>{produto.nome}</h4>
                    <p className='text-sm text-gray-600'>{produto.descricao}</p>
                    <p className='text-xs font-semibold text-emerald-700 uppercase mt-1'>
                        Categoria: {produto.categoria?.nome || 'Sem categoria'}
                    </p>
                    <h3 className='text-2xl font-extrabold text-emerald-800 mt-2'>
                        R$ {Number(produto.preco).toFixed(2)}
                    </h3>
                </div>
            </div>
            <div className="flex w-full">
                <Link to={`/editarproduto/${produto.id}`} className='w-full text-white bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center py-2 font-semibold transition'>
                    Editar
                </Link>
                <Link to={`/deletarproduto/${produto.id}`} className='text-white bg-red-600 hover:bg-red-700 w-full flex items-center justify-center py-2 font-semibold transition'>
                    Deletar
                </Link>
            </div>
        </div>
    );
}

export default CardProdutos;
