import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='w-[100vw] h-[100vh] bg-zinc-600'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
