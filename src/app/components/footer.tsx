import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-white py-12 px-4">
      <div className="mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Charlotte Golf Club</h3>
            <p className="mb-4 leading-relaxed">
              Premium TrackMan golf simulator membership offering year-round access to professional-grade golf
              technology.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <a
                  href=""
                  className=" hover:underline transition-colors"
                >
                  Coming Soon
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <a href="" className="hover:underline transition-colors">
                  Coming Soon
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>Charlotte, NC (Location TBA)</span>
              </div>
            </div>
          </div>

          {/* <div>
            <h4 className="text-lg font-semibold mb-4 text-emerald-400">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">
                Membership Agreement
              </a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
          </div> */}
        </div>

        <div className="border-t border-white mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} Charlotte Golf Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
