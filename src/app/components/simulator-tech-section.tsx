import { Zap, Target, TrendingUp, Eye } from "lucide-react"
import Image from "next/image"

export function SimulatorTechSection() {
  const features = [
    {
      icon: Zap,
      title: "Ball Speed & Spin",
      description: "Precise measurement of ball velocity and spin rates",
    },
    {
      icon: Target,
      title: "Launch Angle",
      description: "Optimal launch conditions for maximum distance",
    },
    {
      icon: TrendingUp,
      title: "Carry Distance",
      description: "Accurate distance calculations for every shot",
    },
    {
      icon: Eye,
      title: "Club Path Analysis",
      description: "Detailed swing path and face angle data",
    },
  ]

  return (
    <section className="py-20 w-full bg-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">TrackMan Technology</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Experience the same professional-grade technology used by PGA Tour players and top instructors worldwide.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white rounded-lg p-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <p className="text-emerald-800 font-medium">
                💡 Pro Tip: Use TrackMan data to identify swing patterns and track your improvement over time
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-xl p-6 shadow-2xl">
              <Image
                src="/trackman-render.png"
                alt="TrackMan Interface Screenshot"
                width={600}
                height={400}
                className="rounded-lg w-full"
              />
              <div className="mt-4 text-center">
                <p className="text-black text-sm">Real-time data visualization and analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
