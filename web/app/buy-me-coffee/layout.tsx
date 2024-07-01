import { generateMetadata } from '@/utils/generateMetadata';

export const metadata = generateMetadata({
  title: 'Support "CartoonGAN" creator, Buy me a coffee!',
  description:
    'decentralized platform that empowers AI model creators to monetize their work and allows supporters to directly fund the development of cutting-edge AI technologies.',
  images: 'themes.png',
  pathname: 'buy-me-coffee',
});

export default async function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
