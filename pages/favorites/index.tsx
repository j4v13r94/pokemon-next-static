import { Plantilla } from "@/components/plantilla"
import { Nofavorites } from "@/components/plantilla/ui/"
import { LocalGet } from "@/utils"
import { useState, useEffect } from 'react';
import { Card, Grid , Text } from '@nextui-org/react';
import { useRouter } from "next/router";

interface Props {
    name : string
    id : string
}

const Favorites = () => {

    const [favoritos, setfavoritos] = useState<Props[]>([])

    useEffect(() => {

        setfavoritos(LocalGet.pokemon())
    }, [])


const router = useRouter()

const handleClick = (name : string) => {

    router.push(`/pokemon/${name}`)
}

    return (
        <Plantilla title="Mis pokemon favoritos">

            {favoritos.length === 0 && (
                <Nofavorites />
            )}

            {favoritos.length > 0 && (
                <Grid.Container gap={2} direction='row' justify="flex-start">
                    {favoritos.map((  {id  , name}  ) => (
                    
                    <Grid xs={6} sm={3} md={2} key={id}>
                        <Card css={{ p:10 }} isHoverable isPressable onClick={()=> handleClick(name)} >
                            <Card.Image width="100%" height={140} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} />
                            <Card.Footer css={{display : 'flex' , justifyContent: 'center' , mt: '15px'}} >
                                <Text size={20}>  {name} </Text>
                            </Card.Footer>
                        </Card>
                        
                    </Grid>
                    ))}
                    

                </Grid.Container>


            )}



        </Plantilla>
    )
}

export default Favorites