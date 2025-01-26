import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"
import { articleData } from "./articleData"

export default function ArticlePage() {
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
                src={articleData.mainImage || "/placeholder.svg"}
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
                } else if (section.type === "image") {
                  return (
                    <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={section.content}
                        alt="プロジェクトのサブ画像"
                        fill
                        className="object-cover"
                      />
                    </div>
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
