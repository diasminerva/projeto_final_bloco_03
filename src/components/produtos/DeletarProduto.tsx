import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type Produto from '../../models/Produto';
import { buscar, deletar } from '../../services/Service';
import { ToastAlerta } from '../../utils/ToastAlerta';

function DeletarProduto() {
    const [produto, setProduto] = useState<Produto>({} as Produto);
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto);
        } catch (error) {
            ToastAlerta('Erro ao buscar o produto.', 'erro');
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    async function deletarProduto() {
        try {
            await deletar(`/produtos/${id}`);
            ToastAlerta('Produto apagado com sucesso!', 'sucesso');
        } catch (error) {
            ToastAlerta('Erro ao apagar o produto.', 'erro');
        }

        retornar();
    }

    function retornar() {
        navigate("/produtos");
    }

    return (
        <div className='container w-11/12 md:w-1/3 mx-auto my-12 border border-rose-100 rounded-3xl overflow-hidden shadow-md bg-white'>
            <h1 className='text-3xl text-center py-4 font-bold text-[#1b382b] bg-rose-50 border-b border-rose-100'>
                Deletar Produto
            </h1>
            <p className='text-center font-medium p-4 text-slate-600'>
                Tem certeza de que deseja apagar o produto abaixo?
            </p>
            <div className='border border-slate-200 m-4 rounded-2xl overflow-hidden flex flex-col items-center p-4 bg-[#fcfbf7]'>
                <img src={produto.foto} alt={produto.nome} className='h-32 object-cover rounded-xl' />
                <h3 className='text-2xl font-bold text-[#1b382b] mt-3'>{produto.nome}</h3>
                <p className='text-slate-500 text-sm mt-1'>{produto.descricao}</p>
            </div>
            <div className="flex p-4 gap-3">
                <button 
                    className='text-slate-700 bg-slate-200 hover:bg-slate-300 w-full py-2.5 rounded-full font-semibold transition'
                    onClick={retornar}
                >
                    Não
                </button>
                <button 
                    className='w-full text-white bg-rose-600 hover:bg-rose-700 py-2.5 rounded-full font-semibold transition'
                    onClick={deletarProduto}
                >
                    Sim, apagar
                </button>
            </div>
        </div>
    );
}

export default DeletarProduto;
