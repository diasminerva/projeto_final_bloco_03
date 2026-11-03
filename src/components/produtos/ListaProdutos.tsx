import { useEffect, useState } from 'react';
import type Produto from '../../models/Produto';
import { buscar } from '../../services/Service';
import CardProdutos from './CardProdutos';

function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    async function buscarProdutos() {
        try {
            await buscar('/produtos', setProdutos);
        } catch (error) {
            console.error("Erro ao buscar produtos", error);
        }
    }

    useEffect(() => {
        buscarProdutos();
    }, [produtos.length]);

    return (
        <div className="flex justify-center w-full my-8">
            <div className="container flex flex-col mx-4">
                <h1 className="text-4xl font-bold text-center my-6 text-emerald-950">Produtos do Empório</h1>
                {produtos.length === 0 && (
                    <div className="text-center text-lg text-emerald-800 font-semibold my-8 bg-emerald-100 p-6 rounded-xl border border-emerald-300 max-w-xl mx-auto shadow-sm">
                        🛒 Nenhum produto encontrado. Certifique-se de que o backend está a rodar ou cadastre um novo produto!
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {produtos.map((produto) => (
                        <CardProdutos key={produto.id} produto={produto} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListaProdutos;
