import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <Image src="/noto-senmaida.jpg" alt="能登の千枚田" layout="fill" objectFit="cover" quality={100} />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-bold mb-8">All about 能登復興</h1>
        <h2 className="text-4xl mb-8">〜 能登復興メディア 〜</h2>
        <div className="space-x-4">
          <Button asChild variant="outline" className="bg-blue-400">
            <Link href="/articles?category=start">能登でビジネスを始める</Link>
          </Button>
          <Button asChild variant="outline" className="bg-green-500">
            <Link href="/articles?category=know">能登のビジネスを知る</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
