import { useEffect, useState } from 'react';
import { Box } from "@chakra-ui/react";
import axios from 'axios';
import Link from 'next/link'

function convertToSlug(text) {
  return text
      .toLowerCase()
      .replace(/[^\w ]+/g,'')
      .replace(/ +/g,'-');
}

function Blog() {
  const mediumAPI = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@keremcubuk"

  const [data, setData] = useState();

  useEffect(() => {
    axios.get(mediumAPI).then((data) => {
      console.log(data)
      setData(data.data)
    }).catch((err) => {
      console.error(err)
    })
  }, []);

  return (

    <>
      {data?.items?.map(item => (
        <Box bg="tomato" w="100%" mb="5" p={4} key={item.guid}>
          <Link
            href={{
              pathname: '/blog/[slug]',
              query: { slug: convertToSlug(item.title) },
            }}>
            {item.title}
          </Link>
        </Box>
      ))}

    </>
  )
}

export default Blog;