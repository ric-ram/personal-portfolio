import { Text, useColorModeValue } from '@chakra-ui/react'

import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  .blink {
    animation: blinker 1.5s linear infinite;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`

const Logo = () => {
  const cursorImg = `/images/cursor${useColorModeValue(
    '',
    '-dark'
  )}.png`

  return (
    <Link href='/'>
      <a>
        <LogoBox>
          <Image
            src={cursorImg}
            width={20}
            height={20}
            alt='logo'
            className='blink'
          />
          <Text
            color={useColorModeValue('black', 'greyishBlue')}
            fontFamily='"Montserrat"'
            fontWeight='bold'
            ml={3}
          >
            Ricardo Ramos
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
