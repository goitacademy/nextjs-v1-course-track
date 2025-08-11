// import { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Page',
//   description: 'Some description',
// }
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <header>Layout</header>
      {children}
    </>
  )
}
