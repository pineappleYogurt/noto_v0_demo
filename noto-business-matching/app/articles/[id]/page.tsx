import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"

// 記事データの型定義
interface ArticleData {
  id: string
  title: string
  targetAmount: number
  currentAmount: number
  supporterCount: number
  content: {
    type: "text" | "image" | "heading"
    content: string
  }[]
}

// サンプルデータ
const articleData: ArticleData = {
  id: "1",
  title: '"RETURN to NOTO" を応援してください',
  targetAmount: 1000000,
  currentAmount: 617000,
  supporterCount: 285,
  content: [
    {
      type: "text",
      content:
        "私たち「能登まちづくり」は、能登の地域活性化を目指して活動しています。今回のプロジェクトでは、地域の伝統工芸品の魅力を発信し、新たな販路を開拓することを目指しています。",
    },
    {
      type: "image",
      content:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-congrant-project-notonokuni-14708-2025-01-26-22_57_13-xm84vnOQRvlvDpgXX39obyC7Wynqww.png",
    },
    {
      type: "heading",
      content: "このプロジェクト、私たちはこんな想いで取り組んでいます",
    },
    {
      type: "text",
      content:
        "能登の伝統工芸品には、長い歴史と職人たちの想いが込められています。しかし、後継者不足や販路の縮小により、その存続が危ぶまれています。私たちは、この豊かな文化を次世代に継承していくため、新しい形での発信と展開を考えています。",
    },
  ],
}

export default function ArticlePage() {
  const progress = (articleData.currentAmount / articleData.targetAmount) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* メインコンテンツ */}
          <div className="lg:col-span-8">
            <h1 className="text-3xl font-bold mb-6">{articleData.title}</h1>

            {/* メイン画像 */}
            <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
              <Image
                src={articleData.content[1].content || "/placeholder.svg"}
                alt="プロジェクトのメイン画像"
                fill
                className="object-cover"
              />
            </div>

            {/* ソーシャルシェアボタン */}
            <div className="flex gap-2 mb-8">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                シェアする
              </Button>
            </div>

            {/* 記事本文 */}
            <div className="prose max-w-none">
              {articleData.content.map((section, index) => {
                if (section.type === "heading") {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                      {section.content}
                    </h2>
                  )
                } else if (section.type === "text") {
                  return (
                    <p key={index} className="mb-4 leading-relaxed">
                      {section.content}
                    </p>
                  )
                }
                return null
              })}
            </div>
          </div>

          {/* サイドバー */}
          <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-4">
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-2xl font-bold">¥{articleData.currentAmount.toLocaleString()}</span>
                  <span className="text-gray-600">目標 ¥{articleData.targetAmount.toLocaleString()}</span>
                </div>
                <Progress value={progress} className="h-2" />
                <div className="mt-2 text-sm text-gray-600">{articleData.supporterCount}人の支援者</div>
              </div>

              <Button className="w-full mb-4">この事業者に連絡を取る</Button>

              <div className="text-sm text-gray-600">
                <h3 className="font-bold mb-2">お問い合わせについて</h3>
                <p>事業についての詳細な情報や、協業のご相談など、お気軽にお問い合わせください。</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

