import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import fifa from '../../assets/images/fifa.png'
import street from '../../assets/images/street.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror.',
    title: 'Resident Evil 4 - Remake',
    system: 'Windows',
    infos: ['-10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror.',
    title: 'Resident Evil 4 - Remake',
    system: 'Windows',
    infos: ['-10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2.',
    title: 'FIFA 23',
    system: 'PS5',
    infos: ['-15%', 'R$ 180,00'],
    image: fifa
  },
  {
    id: 4,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2.',
    title: 'FIFA 23',
    system: 'PS5',
    infos: ['-15%', 'R$ 180,00'],
    image: fifa
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['11/12'],
    image: diablo
  },
  {
    id: 6,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn.',
    title: 'Star Wars Jedi: Survivor',
    system: 'Windows',
    infos: ['12/12'],
    image: starWars
  },
  {
    id: 7,
    category: 'Luta',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    title: 'Street Fighter 6',
    system: 'Windows',
    infos: ['13/12'],
    image: street
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Viaje em uma aventura épica pela terra e pelos céus de Hyrule.',
    title: 'The Legend of Zelda: Tears of the Kingdom ',
    system: 'Nintendo Switch',
    infos: ['14/12'],
    image: zelda
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
