import React from 'react'
import Link from 'next/link'

import { Anchor } from '../core/primitives/anchor'
import { Image } from '../core/primitives/image'
import { View } from '../core/primitives/layout'
import { Section } from '../core/primitives/section'
import { Text } from '../core/primitives/text'

const Story = () => (
  <View atomic={{ pt:4 }}>

    <Link href='/'>

      <Image src='/static/img/shandy-club.png' width='50px' height='50px' center atomic={{ c:'p' }} />

    </Link>

    <Section atomic={{ p:7 }} maxWidth='500px'>

      <Text atomic={{ ta:'j' }}>
        Shandy Club started with an unquenchable thirst for discovering new pubs. Animated debates helped shape our eclectic tastes but the hit-list quickly grew beyond scattered Evernotes; we needed a proper home.
      </Text>

      <Text atomic={{ ta:'j' }}>
        For us, pubs are as much about the people that drink in them and the stories they have to tell as they are about the bricks and mortar or drinks on offer. So you won't find every single pub in town here - only those with true character, history and intrigue.
      </Text>

      <Text atomic={{ ta:'j' }}>
        Above all else, Shandy Club is about taking it easy, pint in hand, surrounded by wood-panelling.
      </Text>

      <Text atomic={{ ta:'c' }}>
        Cheers! 🍻
      </Text>

      <Text atomic={{ ta:'c' }}>

        <Anchor href='https://www.instagram.com/shandy.club/' atomic={{ mr:1 }}>
          Take photos.
        </Anchor>

        <Anchor href='http://changes.shandy.club/'>
          Make changes.
        </Anchor>

      </Text>

    </Section>

  </View>
)

export default Story
