import { PaperTape } from '@/components/paper-tape'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

const products = [
  {
    category: 'ФУТБОЛКИ',
    code: 'T-SHIRT',
    items: [
      { name: 'ФУТБОЛКА_MT_CLASSIC', desc: 'Классическая белая футболка с принтом MT', price: '1 200 ₽', num: '0001', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop' },
      { name: 'ФУТБОЛКА_MT_BLACK', desc: 'Чёрная футболка с крупным принтом MT', price: '1 200 ₽', num: '0002', img: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop' },
      { name: 'ФУТБОЛКА_MT_OVERSIZED', desc: 'Оверсайз крой, принт MT на груди', price: '1 500 ₽', num: '0003', img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop' },
    ]
  },
  {
    category: 'ШОРТЫ',
    code: 'SHORTS',
    items: [
      { name: 'ШОРТЫ_MT_SUMMER', desc: 'Летние шорты с вышивкой MT на боку', price: '1 400 ₽', num: '0004', img: 'https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=400&h=400&fit=crop' },
      { name: 'ШОРТЫ_MT_SPORT', desc: 'Спортивные шорты с принтом MT', price: '1 300 ₽', num: '0005', img: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400&h=400&fit=crop' },
    ]
  },
  {
    category: 'ШТАНЫ',
    code: 'PANTS',
    items: [
      { name: 'ШТАНЫ_MT_JOGGER', desc: 'Джоггеры с логотипом MT на кармане', price: '2 200 ₽', num: '0006', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop' },
      { name: 'ШТАНЫ_MT_WIDE', desc: 'Широкие штаны с надписью MT на штанине', price: '2 500 ₽', num: '0007', img: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=400&h=400&fit=crop' },
    ]
  },
  {
    category: 'ХУДИ',
    code: 'HOODIE',
    items: [
      { name: 'ХУДИ_MT_CLASSIC', desc: 'Классическое худи с большим принтом MT', price: '3 200 ₽', num: '0008', img: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&h=400&fit=crop' },
      { name: 'ХУДИ_MT_ZIP', desc: 'Худи на молнии с вышивкой MT', price: '3 500 ₽', num: '0009', img: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=400&h=400&fit=crop' },
      { name: 'ХУДИ_MT_OVERSIZE', desc: 'Оверсайз худи, принт MT на спине', price: '3 800 ₽', num: '0010', img: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=400&h=400&fit=crop' },
    ]
  },
]

export default function Index() {
  const bgIcons = [
    { emoji: '👕', top: '5%',  left: '3%',  rot: -15, size: 32, op: 0.18 },
    { emoji: '👖', top: '12%', left: '88%', rot: 20,  size: 28, op: 0.15 },
    { emoji: '🧥', top: '22%', left: '7%',  rot: 10,  size: 36, op: 0.12 },
    { emoji: '🩳', top: '30%', left: '93%', rot: -8,  size: 30, op: 0.17 },
    { emoji: '👔', top: '42%', left: '1%',  rot: 18,  size: 34, op: 0.14 },
    { emoji: '🧤', top: '55%', left: '95%', rot: -20, size: 26, op: 0.13 },
    { emoji: '👗', top: '65%', left: '5%',  rot: -12, size: 38, op: 0.12 },
    { emoji: '🧣', top: '72%', left: '90%', rot: 14,  size: 28, op: 0.16 },
    { emoji: '🩴', top: '80%', left: '2%',  rot: 8,   size: 30, op: 0.14 },
    { emoji: '👟', top: '88%', left: '92%', rot: -18, size: 32, op: 0.15 },
    { emoji: '🎽', top: '18%', left: '50%', rot: 25,  size: 24, op: 0.10 },
    { emoji: '🧢', top: '50%', left: '48%', rot: -10, size: 26, op: 0.09 },
    { emoji: '👒', top: '35%', left: '75%', rot: 12,  size: 30, op: 0.11 },
    { emoji: '🥾', top: '75%', left: '55%', rot: -22, size: 28, op: 0.10 },
  ]

  return (
    <div className="min-h-screen bg-background punch-card-holes relative overflow-hidden">
      {/* Clothing background icons */}
      {bgIcons.map((ic, i) => (
        <div
          key={i}
          className="absolute pointer-events-none select-none"
          style={{
            top: ic.top,
            left: ic.left,
            transform: `rotate(${ic.rot}deg)`,
            fontSize: ic.size,
            opacity: ic.op,
            zIndex: 0,
          }}
        >
          {ic.emoji}
        </div>
      ))}

      <div className="absolute top-20 left-10 opacity-60 pointer-events-none">
        <PaperTape length={15} rotation={-12} />
      </div>
      <div className="absolute top-40 right-20 opacity-50 pointer-events-none">
        <PaperTape length={18} rotation={8} />
      </div>
      <div className="absolute bottom-40 left-1/4 opacity-55 pointer-events-none">
        <PaperTape length={20} rotation={-5} />
      </div>
      <div className="absolute bottom-60 right-1/3 opacity-45 pointer-events-none">
        <PaperTape length={12} rotation={15} />
      </div>

      {/* Header */}
      <header className="border-b-4 border-primary/30 card-edge-holes py-8 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-2 h-2 punch-hole" />
              ))}
            </div>
            <h1 className="text-4xl font-bold tracking-tight">
              MASTER_OF_THE_TABLE
            </h1>
          </div>
          <p className="text-muted-foreground font-mono text-sm">
            {'>'} ОДЕЖДА_С_ПРИНТОМ_MT // ОФИЦИАЛЬНЫЙ_МАГАЗИН_V1.0
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 relative z-10">

        {/* Hero Section */}
        <section className="mb-12">
          <Card className="border-2 border-primary/40 card-edge-holes p-8 bg-card/80 backdrop-blur-sm">
            <div className="flex gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 punch-hole" />
              ))}
            </div>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">
              {'>'} ДОБРО_ПОЖАЛОВАТЬ_В_MT
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Одежда с фирменным принтом MT — для тех, кто знает, что носит.
              Каждая вещь — отдельный манифест стиля.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-6 font-mono text-xs">
              <div className="border border-border p-3 bg-muted/50">
                <div className="font-bold mb-1">СТАТУС:</div>
                <div className="text-green-700 dark:text-green-400">РАБОТАЕМ</div>
              </div>
              <div className="border border-border p-3 bg-muted/50">
                <div className="font-bold mb-1">ПОЗИЦИЙ:</div>
                <div>10 ТОВАРОВ</div>
              </div>
              <div className="border border-border p-3 bg-muted/50">
                <div className="font-bold mb-1">БРЕНД:</div>
                <div>MT_OFFICIAL</div>
              </div>
            </div>
          </Card>
        </section>

        {/* Navigation Tabs */}
        <Tabs defaultValue="all" className="mb-16">
          <TabsList className="flex flex-wrap gap-1 h-auto bg-muted/60 border-2 border-primary/30 p-1 mb-6">
            <TabsTrigger value="all" className="font-mono text-xs">ВСЕ_ТОВАРЫ</TabsTrigger>
            <TabsTrigger value="tshirts" className="font-mono text-xs">ФУТБОЛКИ</TabsTrigger>
            <TabsTrigger value="shorts" className="font-mono text-xs">ШОРТЫ</TabsTrigger>
            <TabsTrigger value="pants" className="font-mono text-xs">ШТАНЫ</TabsTrigger>
            <TabsTrigger value="hoodies" className="font-mono text-xs">ХУДИ</TabsTrigger>
            <TabsTrigger value="bio" className="font-mono text-xs">БИОГРАФИЯ</TabsTrigger>
            <TabsTrigger value="about" className="font-mono text-xs">О_НАС</TabsTrigger>
          </TabsList>

          {/* ALL */}
          <TabsContent value="all">
            <div className="space-y-8">
              {products.map((cat) => (
                <div key={cat.code}>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 punch-hole" />
                      ))}
                    </div>
                    {cat.category}
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {cat.items.map((item) => (
                      <ProductCard key={item.num} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* TSHIRTS */}
          <TabsContent value="tshirts">
            <ProductGrid items={products[0].items} />
          </TabsContent>

          {/* SHORTS */}
          <TabsContent value="shorts">
            <ProductGrid items={products[1].items} />
          </TabsContent>

          {/* PANTS */}
          <TabsContent value="pants">
            <ProductGrid items={products[2].items} />
          </TabsContent>

          {/* HOODIES */}
          <TabsContent value="hoodies">
            <ProductGrid items={products[3].items} />
          </TabsContent>

          {/* BIO */}
          <TabsContent value="bio">
            <Card className="border-2 border-primary/40 card-edge-holes p-8 bg-card/80 backdrop-blur-sm vintage-card">
              <div className="flex gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 punch-hole" />
                ))}
              </div>
              <h2 className="text-2xl font-bold mb-6 tracking-wide">
                {'>'} БИОГРАФИЯ
              </h2>
              <div className="font-mono text-sm bg-background/50 p-6 border border-border space-y-3">
                <div className="flex gap-2">
                  <span className="text-muted-foreground">ФИО:</span>
                  <span className="font-bold">Веселков Алексей Сергеевич</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-muted-foreground">ДАТА_РОЖДЕНИЯ:</span>
                  <span>24.02.2009</span>
                </div>
                <div className="mt-4 pt-4 border-t border-border text-muted-foreground text-xs">
                  {'>'} ЗАПИСЬ_В_АРХИВЕ_MT_001
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* ABOUT */}
          <TabsContent value="about">
            <Card className="border-2 border-primary/40 card-edge-holes p-8 bg-card/80 backdrop-blur-sm vintage-card">
              <div className="flex gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 punch-hole" />
                ))}
              </div>
              <h2 className="text-2xl font-bold mb-6 tracking-wide">
                {'>'} О_НАС
              </h2>
              <div className="font-mono text-sm bg-background/50 p-6 border border-border space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Send" size={16} />
                  <span className="text-muted-foreground">ТЕЛЕГРАММ:</span>
                  <a
                    href="https://t.me/AeKSEy0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:underline"
                  >
                    @AeKSEy0
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Users" size={16} />
                  <span className="text-muted-foreground">ВК:</span>
                  <a
                    href="https://vk.com/id475497457"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:underline"
                  >
                    vk.com/id475497457
                  </a>
                </div>
                <div className="mt-4 pt-4 border-t border-border text-muted-foreground text-xs">
                  {'>'} СВЯЗЬ_С_КОМАНДОЙ_MT
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <footer className="border-t-4 border-primary/30 card-edge-holes pt-8 mt-8 text-center relative z-10">
          <div className="flex justify-center gap-2 mb-3">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="w-2 h-2 punch-hole" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground font-mono">
            MASTER_OF_THE_TABLE (c) 2026
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            {'>'} MT_OFFICIAL_END_OF_DECK
          </p>
        </footer>
      </main>
    </div>
  )
}

function ProductGrid({ items }: { items: (typeof products[0]['items'][0])[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ProductCard key={item.num} item={item} />
      ))}
    </div>
  )
}

function ProductCard({ item }: { item: { name: string; desc: string; price: string; num: string; img: string } }) {
  return (
    <Card className="border-2 border-primary/40 overflow-hidden bg-card vintage-card">
      {/* Top holes */}
      <div className="flex items-center border-b-2 border-primary/30 bg-muted/50 p-2">
        <div className="flex gap-1.5 mr-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 punch-hole shadow-inner" />
          ))}
        </div>
        <span className="text-xs font-mono text-muted-foreground ml-auto">#{item.num}</span>
      </div>

      {/* Product photo */}
      <div className="relative border-b border-primary/20 overflow-hidden" style={{ height: '220px' }}>
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover"
          style={{ filter: 'sepia(15%) contrast(1.05)' }}
        />
        <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-black px-2 py-0.5 font-mono">
          MT
        </div>
      </div>

      <div className="p-4">
        <div className="font-mono text-xs font-bold mb-1 tracking-wide truncate">{item.name}</div>
        <div className="text-xs text-muted-foreground mb-3 leading-relaxed">{item.desc}</div>
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="font-mono text-sm font-bold border-primary/40">
            {item.price}
          </Badge>
          <button className="text-xs font-mono bg-primary text-primary-foreground px-3 py-1 hover:bg-primary/80 transition-colors">
            ЗАКАЗАТЬ
          </button>
        </div>
      </div>

      {/* Bottom holes */}
      <div className="flex gap-1.5 p-2 border-t-2 border-primary/30 bg-muted/50 justify-center">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 punch-hole shadow-inner" />
        ))}
      </div>
    </Card>
  )
}