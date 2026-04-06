import { PunchCard } from '@/components/punch-card'
import { PunchCardGrid } from '@/components/punch-card-grid'
import { PaperTape } from '@/components/paper-tape'
import { Card } from '@/components/ui/card'

export default function Index() {
  return (
    <div className="min-h-screen bg-background punch-card-holes relative overflow-hidden">
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

      {/* Header with punch card edge holes */}
      <header className="border-b-4 border-primary/30 card-edge-holes py-8 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-2 h-2 punch-hole" />
              ))}
            </div>
            <h1 className="text-4xl font-bold tracking-tight">
              RETRO_COMPUTE
            </h1>
          </div>
          <p className="text-muted-foreground font-mono text-sm">
            {'>'} ВИРТУАЛЬНЫЙ_МУЗЕЙ_ПЕРФОКАРТ_V2.0
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 relative z-10">
        {/* Welcome Section */}
        <section className="mb-16">
          <Card className="border-2 border-primary/40 card-edge-holes p-8 bg-card/80 backdrop-blur-sm">
            <div className="flex gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 punch-hole" />
              ))}
            </div>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">
              {'>'} ДОБРО_ПОЖАЛОВАТЬ_В_МУЗЕЙ
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Погружение в золотую эпоху вычислительной техники.
              Каждая карта — строка кода, фрагмент данных или команда,
              ожидающая выполнения. Где каждый бит имеет вес.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-6 font-mono text-xs">
              <div className="border border-border p-3 bg-muted/50">
                <div className="font-bold mb-1">СТАТУС:</div>
                <div className="text-green-700 dark:text-green-400">АКТИВНО</div>
              </div>
              <div className="border border-border p-3 bg-muted/50">
                <div className="font-bold mb-1">КАРТ_В_АРХИВЕ:</div>
                <div>12 847</div>
              </div>
              <div className="border border-border p-3 bg-muted/50">
                <div className="font-bold mb-1">ЭПОХА:</div>
                <div>1950-1985</div>
              </div>
            </div>
          </Card>
        </section>

        {/* Punch Card Grid Display */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-2 h-2 punch-hole" />
              ))}
            </div>
            КАРТЫ_ДАННЫХ
          </h2>
          <PunchCardGrid />
        </section>

        {/* Individual Punch Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-2 h-2 punch-hole" />
              ))}
            </div>
            КОЛОДА_ПРОГРАММ
          </h2>
          <div className="space-y-6">
            <PunchCard
              title="ПРИВЕТ_МИР.КАРТА"
              content="10 ПЕЧАТЬ 'ПРИВЕТ, МИР!'"
              cardNumber="0001"
            />
            <PunchCard
              title="ОБРАБОТКА_ДАННЫХ.КАРТА"
              content="20 ДЛЯ I = 1 ДО 100: ЧИТАТЬ ДАННЫЕ(I): ДАЛЕЕ I"
              cardNumber="0002"
            />
            <PunchCard
              title="ВЫВОД_РЕЗУЛЬТАТОВ.КАРТА"
              content="30 ПЕЧАТЬ 'ВЫЧИСЛЕНИЕ ЗАВЕРШЕНО': КОНЕЦ"
              cardNumber="0003"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-4 border-primary/30 card-edge-holes pt-8 mt-16 text-center relative z-10">
          <div className="flex justify-center gap-2 mb-3">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="w-2 h-2 punch-hole" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground font-mono">
            RETRO_COMPUTE_МУЗЕЙ (c) 2024-2025
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            {'>'} КОНЕЦ_КОЛОДЫ
          </p>
        </footer>
      </main>
    </div>
  )
}
