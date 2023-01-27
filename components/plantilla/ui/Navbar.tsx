import { useTheme, CssBaseline, Spacer, Text, Image } from '@nextui-org/react';
import NLink from 'next/link';


export const Navbar = () => {

  const tema = useTheme()


  return (
    <div style={{
      display : 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: '0x 20px',
     background : '#0A4281' ,

    }}>
      <NLink  href={'/'} passHref style={{display : 'flex' , alignItems : 'flex-start'}}>
        <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/54.svg' alt='logo' width={60} />
      <Text h1 >P</Text>
      <Text h2 >okebola</Text>
      </NLink>
      
      

      <Text size={20} css={{ fontWeight : '$bold' }} > <NLink href={'/favorites'}>Favoritos</NLink> </Text>
      
    </div>
  )
}
