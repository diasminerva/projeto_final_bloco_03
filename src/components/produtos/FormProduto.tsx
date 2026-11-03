import React, { type ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type Categoria from '../../models/Categoria';
import type Produto from '../../models/Produto';
import { atualizar, buscar, cadastrar } from '../../services/Service';
import { ToastAlerta } from '../../utils/ToastAlerta';

function FormProduto() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: '', descricao: '' });
    const [produto, setProduto] = useState<Produto>({} as Produto);

    async function buscarProdutoPorId(id: string) {
        await buscar(`/produtos/${id}`, setProduto);
    }

    async function buscarCategorias() {
        await buscar('/categorias', setCategorias);
    }

    useEffect(() => {
        buscarCategorias();
        if (id !== undefined) {
            buscarProdutoPorId(id);
        }
    }, [id]);

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria,
        });
    }, [categoria]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria,
        });
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, produto, setProduto);
                ToastAlerta('Produto atualizado com sucesso!', 'sucesso');
            } catch (error) {
                ToastAlerta('Erro ao atualizar o Produto.', 'erro');
            }
        } else {
            try {
                await cadastrar(`/produtos`, produto, setProduto);
                ToastAlerta('Produto cadastrado com sucesso!', 'sucesso');
            } catch (error) {
                ToastAlerta('Erro ao cadastrar o Produto.', 'erro');
            }
        }

        retornar();
    }

    function retornar() {
        navigate('/produtos');
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto my-8">
            <h1 className="text-4xl text-center my-8 font-bold text-[#1b382b]">
                {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}
            </h1>

            <form className="w-11/12 md:w-1/2 flex flex-col gap-4 bg-white p-8 rounded-3xl shadow-sm border border-rose-100" onSubmit={gerarNovoProduto}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className='font-semibold text-gray-700'>Nome do Produto</label>
                    <input
                        type="text"
                        placeholder="Ex: Queijo Minas Artesanal"
                        name="nome"
                        className="border-2 border-slate-200 rounded-xl p-2.5 focus:border-[#1b382b] outline-none transition"
                        value={produto.nome || ''}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao" className='font-semibold text-gray-700'>Descrição do Produto</label>
                    <input
                        type="text"
                        placeholder="Ex: Queijo fresco de leite de vaca caipira"
                        name="descricao"
                        className="border-2 border-slate-200 rounded-xl p-2.5 focus:border-[#1b382b] outline-none transition"
                        value={produto.descricao || ''}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="preco" className='font-semibold text-gray-700'>Preço (R$)</label>
                    <input
                        type="number"
                        step="0.01"
                        placeholder="Ex: 35.50"
                        name="preco"
                        className="border-2 border-slate-200 rounded-xl p-2.5 focus:border-[#1b382b] outline-none transition"
                        value={produto.preco || ''}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="quantidade" className='font-semibold text-gray-700'>Quantidade em Estoque</label>
                    <input
                        type="number"
                        placeholder="Ex: 10"
                        name="quantidade"
                        className="border-2 border-slate-200 rounded-xl p-2.5 focus:border-[#1b382b] outline-none transition"
                        value={produto.quantidade || ''}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="foto" className='font-semibold text-gray-700'>Link da Foto (URL)</label>
                    <input
                        type="text"
                        placeholder="Ex: https://link-da-imagem.com/foto.jpg"
                        name="foto"
                        className="border-2 border-slate-200 rounded-xl p-2.5 focus:border-[#1b382b] outline-none transition"
                        value={produto.foto || ''}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="categoria" className='font-semibold text-gray-700'>Categoria do Produto</label>
                    <select
                        name="categoria"
                        id="categoria"
                        className='border-2 border-slate-200 rounded-xl p-2.5 focus:border-[#1b382b] outline-none bg-white transition'
                        onChange={(e) => buscar(`/categorias/${e.currentTarget.value}`, setCategoria)}
                    >
                        <option value="" selected disabled>Selecione uma Categoria</option>
                        {categorias.map((cat) => (
                            <option key={cat.id} value={cat.id}>{cat.nome}</option>
                        ))}
                    </select>
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

export default FormProduto;
