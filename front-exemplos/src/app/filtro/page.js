'use client'
import { useState } from 'react';
import styles from './filtro.module.css'

export default function Filtro() {

    const nums = [1,2,3,4,5,6,7,8,9,10];
    const pares = nums.filter((num) => (num%2===0));

    const nomes = ['Ana', 'Isabella', 'Leticia', 'Priscila', 'Thamylla']

    const [busca, setBusca] = useState('');
    const nomesBusca = nomes.filter((nome) => (nome.toLowerCase().includes(busca.toLowerCase())))

    console.log(nums)
    console.log(pares)

    return (
        <div className={styles.div}>
            <h1 className={styles.titulo}>Filtro</h1>
            <input className={styles.input}
                value={busca}
                type="text"
                onChange={(ev) => setBusca(ev.target.value)}
            />
            {
                nomesBusca.map((nome, i) => (
                    <li className={styles.li} key={i}>{nome}</li>
                ))
            }
        </div>
    )
}