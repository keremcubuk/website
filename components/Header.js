import { Avatar, Box, Button, useColorMode, Container, Stack, useColorModeValue, Switch } from "@chakra-ui/react"
import Link from 'next/link'

const menuItems = [
  { name: 'Anasayfa', url: '/' },
  { name: 'Blog', url: '/blog' },
  { name: 'Fotoğraflar', url: '/photos' },
]

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#1A202C");
  const isDark = colorMode === 'dark'

  return (
    <Box padding="5" bg={bg}>
      <Container>
        <Stack direction="row" spacing={4} align="center">
          <Avatar size="sm" name="Kerem Çubuk" src="/keremcubuk.png" />


          {menuItems.map(menuItem => (
              <Link href={menuItem.url} key={menuItem.url}>
                <Button colorScheme="teal" variant="ghost">
                  {menuItem.name}
                </Button>
            </Link>
          ))}

          <Switch onChange={toggleColorMode} colorScheme="teal" isChecked={isDark} />
        </Stack>
      </Container>
    </Box>
  )
}

export default Header;