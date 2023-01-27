


interface Props {
id: string, name: string
}

const handleLocal = (id: string, name: string): void => {


    let getlocal: Props[] = JSON.parse(localStorage.getItem('favorites') || '[]')


    const resultado = getlocal.find(ide => ide.id === id);

    if (resultado) {

        getlocal = getlocal.filter(fav => fav.id != id)

    } else {
        getlocal.push({ id: id , name: name  })
    }

    localStorage.setItem('favorites', JSON.stringify(getlocal))

}

interface p2 {
    id : number
    
}

const isFavorites = (id: number): boolean => {

    if (typeof window === 'undefined')
        return false


    const getlocal: p2[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    const resultado = getlocal.find(ide => ide.id === id);

    return (resultado)? true : false ;
    
}

const pokemon = () => {
    if (typeof window === 'undefined')
        return false

    return JSON.parse(localStorage.getItem('favorites') || '[]')
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    handleLocal,
    isFavorites,
    pokemon,
}