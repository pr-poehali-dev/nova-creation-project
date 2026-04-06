import { cn } from '@/lib/utils'

interface PaperTapeProps {
  length?: number
  rotation?: number
  className?: string
  channels?: 5 | 8
  data?: string // Optional text to encode in the tape
}

export function PaperTape({
  length = 20,
  rotation = 0,
  className,
  channels = 5,
  data
}: PaperTapeProps) {
  const generateStablePattern = (rowIndex: number): boolean[] => {
    if (data) {
      const charCode = data.charCodeAt(rowIndex % data.length) || 0
      return Array.from({ length: channels }, (_, i) => {
        return ((charCode >> i) & 1) === 1
      })
    }

    // Stable pattern based on row index
    return Array.from({ length: channels }, (_, i) => {
      return ((rowIndex + i) % 3) !== 0
    })
  }

  const dataRows = Array.from({ length }, (_, i) => generateStablePattern(i))

  const tapeWidth = channels === 5 ? 40 : 50
  const sprocketSize = 6 // Size of sprocket holes
  const holeSize = 4 // Size of data holes
  const rowHeight = 10 // Height of each row

  return (
    <div
      className={cn(
        "relative bg-[#F5E6D3] overflow-visible pointer-events-none",
        className
      )}
      style={{
        width: `${tapeWidth}px`,
        height: `${length * rowHeight}px`,
        transform: `rotate(${rotation}deg)`,
        boxShadow: '2px 2px 8px rgba(0,0,0,0.25), inset 0 0 40px rgba(101,67,33,0.05)',
        border: '1px solid rgba(101,67,33,0.2)',
      }}
    >
      <div
        className="absolute top-0 bottom-0 flex flex-col justify-start"
        style={{
          left: '6px',
          gap: `${rowHeight - sprocketSize}px`,
          paddingTop: `${(rowHeight - sprocketSize) / 2}px`,
        }}
      >
        {Array.from({ length }).map((_, i) => (
          <div
            key={`sprocket-${i}`}
            className="bg-black rounded-full flex-shrink-0"
            style={{
              width: `${sprocketSize}px`,
              height: `${sprocketSize}px`,
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5)',
            }}
          />
        ))}
      </div>

      <div
        className="absolute top-0 bottom-0 flex flex-col justify-start"
        style={{
          left: channels === 5 ? '16px' : '20px',
          gap: `${rowHeight - holeSize}px`,
          paddingTop: `${(rowHeight - holeSize) / 2}px`,
        }}
      >
        {dataRows.map((tracks, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="flex items-center flex-shrink-0"
            style={{
              gap: '2px',
              height: `${holeSize}px`,
            }}
          >
            {tracks.map((hasHole, trackIndex) => (
              <div
                key={`hole-${rowIndex}-${trackIndex}`}
                className={cn(
                  "rounded-full flex-shrink-0",
                  hasHole ? "bg-black" : "bg-transparent"
                )}
                style={{
                  width: `${holeSize}px`,
                  height: `${holeSize}px`,
                  boxShadow: hasHole ? 'inset 0 0.5px 1px rgba(0,0,0,0.6)' : 'none',
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <div
        className="absolute -top-px left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(to bottom, rgba(101,67,33,0.4) 0%, transparent 100%)',
          clipPath: 'polygon(0 0, 4% 70%, 9% 30%, 14% 80%, 19% 40%, 24% 90%, 29% 20%, 35% 75%, 40% 35%, 46% 85%, 51% 25%, 57% 70%, 62% 45%, 68% 90%, 73% 30%, 79% 80%, 84% 40%, 90% 85%, 95% 50%, 100% 70%, 100% 0)',
        }}
      />
      <div
        className="absolute -bottom-px left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(to top, rgba(101,67,33,0.4) 0%, transparent 100%)',
          clipPath: 'polygon(0 100%, 5% 40%, 11% 85%, 17% 35%, 23% 75%, 29% 45%, 35% 90%, 41% 30%, 47% 70%, 53% 50%, 59% 85%, 65% 40%, 71% 80%, 77% 35%, 83% 75%, 89% 45%, 95% 85%, 100% 55%, 100% 100%)',
        }}
      />

      <div
        className="absolute rounded-full bg-amber-900/10 blur-sm"
        style={{
          width: '18px',
          height: '18px',
          top: '15%',
          right: '20%',
        }}
      />
      <div
        className="absolute rounded-full bg-amber-800/10 blur-[3px]"
        style={{
          width: '22px',
          height: '22px',
          top: '60%',
          left: '25%',
        }}
      />

      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 opacity-15 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 1px,
            rgba(101,67,33,0.04) 1px,
            rgba(101,67,33,0.04) 2px
          )`,
        }}
      />
    </div>
  )
}
