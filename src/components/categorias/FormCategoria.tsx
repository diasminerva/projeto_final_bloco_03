import React, { type ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type Categoria from '../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../services/Service';
import { ToastAlerta } from '../../utils/ToastAlerta';

function FormCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria);
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria);
                ToastAlerta('Categoria atualizada com sucesso!', 'sucesso');
            } catch (error) {
                ToastAlerta('Erro ao atualizar a Categoria.', 'erro');
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria);
                ToastAlerta('Categoria cadastrada com sucesso!', 'sucesso');
            } catch (error) {
                ToastAlerta('Erro ao cadastrar a Categoria.', 'erro');
            }
        }

        retornar();
    }

    function retornar() {
        navigate("/categorias");
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto my-8">
            <h1 className="text-4xl text-center my-8 font-bold text-[#1b382b]">
                {id !== undefined ? 'Editar Categoria' : 'Cadastrar Categoria'}
            </h1>

            <form className="w-11/12 md:w-1/2 flex flex-col gap-4 bg-white p-8 rounded-3xl shadow-sm border border-rose-100" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className='font-semibold text-gray-700'>Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder="Ex: Orgânicos & Naturais"
                        name="nome"
                        className="border-2 border-slate-200 rounded-xl p-2.5 focus:border-[#1b382b] outline-none transition"
                        value={categoria.nome || ''}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao" className='font-semibold text-gray-700'>Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Ex: Alimentos frescos e sem agrotóxicos"
                        name="descricao"
                        className="border-2 border-slate-200 rounded-xl p-2.5 focus:border-[#1b382b] outline-none transition"
                        value={categoria.descricao || ''}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded-full text-[#1b382b] bg-rose-300 hover:bg-rose-200 w-1/2 py-3 mx-auto block font-bold transition mt-4 shadow-md"
                    type="submit"
                >
                    {id !== undefined ? 'Atualizar' : 'Cadastrar'}
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;
