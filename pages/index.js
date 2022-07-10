import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>是吳小毛</title>
      </Head>
      <h1 className="text-red-700">真的可以即時修改</h1>
    </div>
  )
}
