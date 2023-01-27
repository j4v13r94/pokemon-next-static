import { NextPage } from 'next';
import { Plantilla } from "@/components/plantilla"
import { GetStaticProps } from 'next'
import { PokeList, Result } from '@/interfaces'; 
import { pokemon } from '@/api/';
import { Card_ } from '../components/Cards';
import { Grid } from '@nextui-org/react';


interface Props {
  pokemons : Result[]
}

const Home: NextPage<Props> = ({ pokemons } ) => {



  return (

    <Plantilla>

      <Grid.Container gap={2} justify={'center'}>

        {pokemons.map(({ id, name, img  }) => (
          

          <Card_ key={id}  id={id} img={img} name={name}  />
          


        ))}
      </Grid.Container>


    </Plantilla>

  )

}


export const getStaticProps: GetStaticProps = async (ctx) => {


  const { data } = await pokemon<PokeList>('/pokemon?limit=151')

  const pokemons: Result[] = data.results.map((data, i) => ({
    ...data,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`

  }))




  return {
    props: {
      pokemons
    }
  }
}

export default Home