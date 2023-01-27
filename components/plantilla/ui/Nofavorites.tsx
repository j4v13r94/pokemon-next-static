import { Container , Text , Image } from '@nextui-org/react'

export const Nofavorites = () => {
  return (
    <Container display="grid" justify="center" alignContent="center" css={{ height: '80vh' }}>
                <Text h1>
                    No hay favoritos
                </Text>
                <Image css={{ opacity: 0.2 }} alt="No se encontro favoritos" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg" width={250} height={250} />
            </Container>
  )
}
