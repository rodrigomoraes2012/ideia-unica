import {useState} from 'react';
import useSWR from 'swr'
import Person from '../components/Person'

const fetcher = (url) => fetch(url).then((res) => res.json())

function Index() {
    const { data, error } = useSWR('/api/people', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <ul>
        {data.map((p, i) => (
            <Person key={i} person={p} />
        ))}
        </ul>
    )
}

function Home()
{
    return (
        <div>
            <h1>Home</h1>
            <Contador/>
        </div>
    )
}

function Contador(){
    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador +1); 
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
    
}

export default Index;