import { UserPlus, Calendar, Play } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Join our exclusive membership and get access to premium TrackMan simulators",
    },
    {
      icon: Calendar,
      title: "Book Time",
      description: "Reserve your preferred time slots through our easy-to-use booking system",
    },
    {
      icon: Play,
      title: "Play Golf",
      description: "Enjoy unlimited access to world-class golf simulation technology",
    },
  ]

  return (
    <section className="py-20 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">How It Works</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Getting started with Charlotte Golf Club is simple and straightforward
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-emerald-200 transition-colors duration-300">
                  <step.icon className="w-10 h-10 text-emerald-700" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
