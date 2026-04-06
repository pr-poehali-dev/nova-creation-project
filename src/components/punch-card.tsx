import { Card } from '@/components/ui/card'

interface PunchCardProps {
  title: string
  content: string
  cardNumber: string
}

export function PunchCard({ title, content, cardNumber }: PunchCardProps) {
  // Generate realistic punch hole pattern based on content
  const generateHoles = (text: string) => {
    return text.split('').map((char, i) => {
      const code = char.charCodeAt(0)
      // Simulate punch card encoding (12 rows per column)
      const holes = []
      for (let row = 0; row < 12; row++) {
        holes.push(((code + i) * 7 + row) % 3 === 0)
      }
      return holes
    })
  }

  const holePattern = generateHoles(content)

  const randomRotation = (Math.random() - 0.5) * 1.5 // -0.75 to 0.75 degrees
  const randomWear = Math.random()

  return (
    <Card
      className="border-2 border-primary/40 overflow-hidden bg-card relative vintage-card"
      style={{
        transform: `rotate(${randomRotation}deg)`,
        boxShadow: `
          0 2px 4px rgba(0,0,0,0.1),
          0 4px 8px rgba(0,0,0,0.08),
          0 1px 2px rgba(0,0,0,0.05) inset,
          ${randomWear > 0.5 ? '2px 2px 6px rgba(0,0,0,0.15)' : '0 0 0 rgba(0,0,0,0)'}
        `,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none vintage-overlay"
        style={{
          opacity: 0.15 + randomWear * 0.15,
          backgroundImage: `
            radial-gradient(circle at ${20 + randomWear * 30}% ${15 + randomWear * 20}%, rgba(139,119,101,0.3) 0%, transparent 25%),
            radial-gradient(circle at ${70 + randomWear * 25}% ${80 + randomWear * 15}%, rgba(139,119,101,0.2) 0%, transparent 20%),
            radial-gradient(circle at ${40 + randomWear * 35}% ${50 + randomWear * 30}%, rgba(160,140,120,0.15) 0%, transparent 30%)
          `
        }}
      />

      {/* Card header with sprocket holes */}
      <div className="flex items-center border-b-2 border-primary/30 bg-muted/50 p-2 relative">
        <div className="flex gap-1.5 mr-3">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 punch-hole shadow-inner" />
          ))}
        </div>
        <div className="text-xs font-bold tracking-wider flex-1">{title}</div>
        <div className="text-xs font-mono bg-primary/20 px-2 py-0.5 rounded">
          #{cardNumber}
        </div>
      </div>

      {/* Main punch card area */}
      <div className="p-4 relative">
        {/* Content text */}
        <div className="font-mono text-sm mb-4 bg-background/50 p-3 border border-border shadow-sm">
          {content}
        </div>

        {/* Punch hole visualization */}
        <div className="grid gap-0.5 overflow-x-auto pb-2">
          <div className="grid grid-flow-col auto-cols-max gap-1">
            {holePattern.map((column, colIndex) => (
              <div key={colIndex} className="grid grid-rows-12 gap-0.5">
                {column.map((hasPunch, rowIndex) => (
                  <div
                    key={rowIndex}
                    className={`w-2 h-2 border border-primary/20 ${
                      hasPunch ? 'bg-primary/80 shadow-inner' : 'bg-muted/30'
                    } rounded-sm`}
                    style={hasPunch ? {
                      boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.3), 0 0.5px 1px rgba(0,0,0,0.1)'
                    } : {}}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Card footer with identification */}
        <div className="mt-3 pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-mono">СТОЛБ: 80 | РЯД: 12</span>
          <span>{'>'} РЕТРО_ФОРМАТ</span>
        </div>
      </div>

      {/* Bottom sprocket holes */}
      <div className="flex gap-1.5 p-2 border-t-2 border-primary/30 bg-muted/50 justify-center">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 punch-hole shadow-inner" />
        ))}
      </div>
    </Card>
  )
}
