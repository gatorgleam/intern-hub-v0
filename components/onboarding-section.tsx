import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChecklistItem } from "@/components/checklist-item"
import { ExternalLink } from "lucide-react"
import type { OnboardingStep } from "@/data/onboarding"
import { cn } from "@/lib/utils"

interface OnboardingSectionProps {
  step: OnboardingStep
  className?: string
}

export function OnboardingSection({ step, className }: OnboardingSectionProps) {
  return (
    <Card
      className={cn(
        "hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out",
        "hover:border-primary/20",
        className,
      )}
    >
      <CardHeader>
        <CardTitle className="text-lg text-balance">{step.title}</CardTitle>
        <p className="text-sm text-muted-foreground text-pretty">{step.summary}</p>
        {step.note && (
          <div className="bg-accent/50 border border-accent rounded-lg p-3 text-sm animate-in fade-in duration-300 delay-100">
            <strong>Note:</strong> {step.note}
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-3">
          {step.checklist.map((item, index) => (
            <div
              key={`${step.id}-${index}`}
              className="animate-in slide-in-from-left duration-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ChecklistItem id={`${step.id}-${index}`} className="text-sm">
                {item}
              </ChecklistItem>
            </div>
          ))}
        </div>

        {step.ctas && step.ctas.length > 0 && (
          <div className="pt-2 animate-in fade-in duration-300 delay-500">
            <div className="flex flex-wrap gap-2">
              {step.ctas.map((cta, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  asChild
                  className={cn(
                    "h-9 transition-all duration-200 ease-out",
                    "hover:scale-105 hover:shadow-md active:scale-95",
                    "animate-in slide-in-from-bottom duration-200",
                  )}
                  style={{ animationDelay: `${index * 100 + 500}ms` }}
                >
                  <a
                    href={cta.href}
                    target={cta.href.startsWith("/") ? "_self" : "_blank"}
                    rel={cta.href.startsWith("/") ? undefined : "noopener noreferrer"}
                    className="inline-flex items-center gap-1.5"
                  >
                    {cta.label}
                    {!cta.href.startsWith("/") && <ExternalLink className="w-3 h-3" />}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
