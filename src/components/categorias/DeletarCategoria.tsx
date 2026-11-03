import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type Categoria from '../../models/Categoria';
import { buscar, deletar } from '../../services/Service';
import { ToastAlerta } from '../../utils/ToastAlerta';

function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error) {
            ToastAlerta('Erro ao buscar a categoria.', 'erro');
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`);
            ToastAlerta('Categoria apagada com sucesso!', 'sucesso');
        } catch (error) {
            ToastAlerta('Erro ao apagar a categoria.', 'erro');
        }

        retornar();
    }

    function retornar() {
        navigate("/categorias");
    }

    return (
        <div className='container w-11/12 md:w-1/3 mx-auto my-12 border border-rose-100 rounded-3xl overflow-hidden shadow-md bg-white'>
            <h1 className='text-3xl text-center py-4 font-bold text-[#1b382b] bg-rose-50 border-b border-rose-100'>
                Deletar Categoria
            </h1>
            <p className='text-center font-medium p-4 text-slate-600'>
                Tem certeza de que deseja apagar a categoria abaixo?
            </p>
            <div className='border border-slate-200 m-4 rounded-2xl overflow-hidden p-4 bg-[#fcfbf7]'>
                <span className="text-xs font-bold text-rose-800 bg-rose-100 px-3 py-1 rounded-full">
                    Categoria #{categoria.id}
                </span>
                <p className='text-2xl font-bold text-[#1b382b] mt-2'>{categoria.nome}</p>
                <p className='text-slate-500 text-sm mt-1'>{categoria.descricao}</p>
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
                    onClick={deletarCategoria}
                >
                    Sim, apagar
                </button>
            </div>
        </div>
    );
}

export default DeletarCategoria;
