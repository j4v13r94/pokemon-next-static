import { useState, useEffect } from 'react';

import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { Button, Card, Grid, Text, Image, Container } from '@nextui-org/react';

import confetti from 'canvas-confetti'

import { Pokemon } from '@/interfaces';
import { pokemon as pokemonApi } from '@/api/';
import { Plantilla } from '@/components/plantilla';
import {LocalGet as local} from '../../utils';
import { Result } from '../../interfaces/pokelista';



interface Props {
    pokemon: Pokemon
    
}


const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    const [isFavorite, setisFavorite] = useState<boolean>(true)


     useEffect( () => {

        
        setisFavorite( !local.isFavorites( pokemon.id) )

        
     }
      , [pokemon.id])
    
    


    

    const handleClick = () => {
        local.handleLocal( `${pokemon.id}` , pokemon.name)
        setisFavorite(!isFavorite)

        if(!isFavorite) return;

        confetti({
            zIndex:9999,
            particleCount: 100,
            spread: 120,
            angle: -150,
            origin: { y: 0.15 , x : 0.9 }
          });
        
    }


    return (
        <Plantilla title={`Yo te eligo ${pokemon.name} `} >

            

                <Grid.Container gap={2} justify={'center'} css={{ mt: 50 }}>
                    <Grid xs={12} sm={4}>
                        <Card isHoverable isPressable css={{ p: 15 }} >

                            <Card.Image width={250} src={pokemon.sprites.other?.dream_world.front_default || 'no-img.png'} alt={pokemon.name}  />
                        </Card>

                    </Grid>
                    <Grid xs={12} sm={8}>
                        <Card>
                            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Text h1> {`${pokemon.name}`} </Text>
                                <Button color={'gradient'} ghost={isFavorite} onPress={handleClick} autoFocus={false} > {isFavorite ? 'Agregar a' : 'Remover de'} favoritos </Button>
                            </Card.Header>
                            <Card.Body>
                                <Text size={30}>Sprites</Text>
                                <Container display='flex' direction='row' gap={0} >

                                    <Image src={pokemon.sprites.back_default} alt={pokemon.name} />

                                    <Image src={pokemon.sprites.front_default} alt={pokemon.name}   />

                                    <Image src={pokemon.sprites.front_shiny} alt={pokemon.name}  />

                                    <Image src={pokemon.sprites.back_shiny} alt={pokemon.name}  />
                                </Container>

                            </Card.Body>

                        </Card>
                    </Grid>

                </Grid.Container>
            


        </Plantilla>
    )
}



export const getStaticProps: GetStaticProps = async ({ params }) => {


    const { id } = params as { id: string };

    const { data } = await pokemonApi.get<Pokemon>(`/pokemon/${id}`)


    
    return {
        props: {
            pokemon: {id : data.id ,name : data.name ,sprites : data.sprites },
        }
    }
}



export const getStaticPaths: GetStaticPaths = async (ctx) => {

    let pathsname = []
    try {
        const names = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const res = await names.json()
       pathsname = res.results.map(  (x : Result)  => ( { params: { id: x.name } }))
        
       
       
       
       
        
    } catch (error) {
        console.log('no se puedo ejecurar la consulta ',error);
        
    }

   // const paths = [...Array(151)].map((x, i) => ({ params: { id: `${i + 1}` } }))


    return {
        paths : pathsname ,
        fallback: false
    }
}

export default PokemonPage