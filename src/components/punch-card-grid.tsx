import { Card } from '@/components/ui/card'
import { useState } from 'react'

export function PunchCardGrid() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  const cards = [
    { id: 1, label: 'ВВОД_01', status: 'ГОТОВО' },
    { id: 2, label: 'ПРОЦЕСС_02', status: 'РАБОТА' },
    { id: 3, label: 'ВЫВОД_03', status: 'ГОТОВО' },
    { id: 4, label: 'ОТЛАДКА_04', status: 'ОШИБКА' },
    { id: 5, label: 'КОМПИЛЯЦИЯ_05', status: 'ГОТОВО' },
    { id: 6, label: 'ВЫПОЛНЕНИЕ_06', status: 'ОЖИДАНИЕ' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((card) => {
        const rotation = (card.id * 0.3 - 0.9)
        const wearLevel = (card.id * 17) % 100 / 100

        return (
          <Card
            key={card.id}
            className={`border-2 cursor-pointer transition-all relative vintage-card ${
              selectedCard === card.id
                ? 'border-primary bg-accent'
                : 'border-primary/30 bg-card'
            }`}
            onClick={() => setSelectedCard(card.id)}
            style={{
              transform: `rotate(${rotation}deg) ${selectedCard === card.id ? 'scale(1.05)' : 'scale(1)'}`,
              boxShadow: selectedCard === card.id
                ? '0 8px 16px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.1), inset 0 1px 2px rgba(0,0,0,0.05)'
                : '0 2px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08), inset 0 0.5px 1px rgba(0,0,0,0.03)',
              transition: 'all 0.3s ease',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none rounded-lg"
              style={{
                opacity: 0.12 + wearLevel * 0.12,
                backgroundImage: `
                  radial-gradient(circle at ${25 + wearLevel * 40}% ${20 + wearLevel * 30}%, rgba(139,119,101,0.25) 0%, transparent 30%),
                  radial-gradient(circle at ${75 - wearLevel * 20}% ${70 + wearLevel * 20}%, rgba(160,140,120,0.2) 0%, transparent 25%)
                `
              }}
            />

            {/* Top edge holes */}
            <div className="flex gap-1 p-2 border-b border-primary/20 relative z-10">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 punch-hole shadow-inner" />
              ))}
            </div>

            {/* Card content */}
            <div className="p-4 relative z-10">
              <div className="font-bold text-lg mb-2 tracking-wide">
                {card.label}
              </div>

              {/* Mini punch pattern */}
              <div className="grid grid-cols-8 gap-1 my-3">
                {[...Array(24)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 ${
                      (card.id * 7 + i) % 3 === 0
                        ? 'bg-primary/70'
                        : 'bg-muted/40'
                    } rounded-sm border border-primary/20`}
                    style={(card.id * 7 + i) % 3 === 0 ? {
                      boxShadow: 'inset 0 0.5px 1.5px rgba(0,0,0,0.3)'
                    } : {}}
                  />
                ))}
              </div>

              <div className="flex justify-between items-center text-xs font-mono mt-3">
                <span className="text-muted-foreground">ID: {String(card.id).padStart(4, '0')}</span>
                <span
                  className={`px-2 py-0.5 rounded font-bold ${
                    card.status === 'ГОТОВО'
                      ? 'bg-green-200 dark:bg-green-900 text-green-900 dark:text-green-200'
                      : card.status === 'ОШИБКА'
                      ? 'bg-red-200 dark:bg-red-900 text-red-900 dark:text-red-200'
                      : card.status === 'РАБОТА'
                      ? 'bg-yellow-200 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-200'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  {card.status}
                </span>
              </div>
            </div>

            {/* Bottom edge holes */}
            <div className="flex gap-1 p-2 border-t border-primary/20 justify-end relative z-10">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 punch-hole shadow-inner" />
              ))}
            </div>
          </Card>
        )
      })}
    </div>
  )
}
