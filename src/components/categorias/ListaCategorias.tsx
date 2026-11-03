import { useEffect, useState } from 'react';
import type Categoria from '../../models/Categoria';
import { buscar } from '../../services/Service';
import CardCategorias from './CardCategorias';

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias);
        } catch (error) {
            console.error("Erro ao buscar categorias", error);
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

    return (
        <div className="flex justify-center w-full my-8">
            <div className="container flex flex-col mx-4">
                <h1 className="text-4xl font-bold text-center my-6 text-emerald-950">Categorias do Empório</h1>
                {categorias.length === 0 && (
                    <div className="text-center text-lg text-emerald-800 font-semibold my-8 bg-emerald-100 p-6 rounded-xl border border-emerald-300 max-w-xl mx-auto shadow-sm">
                        🌿 Nenhuma categoria cadastrada ainda. Ligue o backend do Bloco 02 ou cadastre uma nova categoria!
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categorias.map((categoria) => (
                        <CardCategorias key={categoria.id} categoria={categoria} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListaCategorias;
