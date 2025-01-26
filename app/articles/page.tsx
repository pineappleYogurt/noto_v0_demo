import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// 仮のデータ構造
const articles = [
  { id: 1, title: "能登の伝統工芸品ビジネス", category: "know" },
  { id: 2, title: "能登で農業を始めるには", category: "start" },
  // ... 他の記事
]

export default function ArticlesPage({ searchParams }: { searchParams: { category?: string } }) {
  const filteredArticles = searchParams.category
    ? articles.filter((article) => article.category === searchParams.category)
    : articles

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">記事一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <Link href={`/articles/${article.id}`} key={article.id}>
            <Card>
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>カテゴリー: {article.category === "know" ? "能登のビジネスを知る" : "能登でビジネスを始める"}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

