import Head from 'next/head'
import { Avatar, Box, Button, useColorMode, Container, Stack, useColorModeValue, Switch } from "@chakra-ui/react"
import Link from 'next/link'

export default function Home() {


  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Container>
          <Box>Merhaba, ben Kerem</Box>
        </Container>
      </main>

    </div>
  )
}
