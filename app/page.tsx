"use client"

import { Mail, Phone, MapPin, Moon, Sun, Download } from "lucide-react"
import { useState, useRef } from "react"

export default function ResumePage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const resumeRef = useRef<HTMLDivElement>(null)

  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return

    try {
      const html2pdf = (await import("html2pdf.js")).default
      const element = resumeRef.current
      const opt = {
        margin: 10,
        filename: "Wania_Akram_Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: "portrait", unit: "mm", format: "a4" },
      }
      html2pdf().set(opt).from(element).save()
    } catch (error) {
      console.error("Error generating PDF:", error)
    }
  }

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-slate-950 text-white" : "bg-background text-foreground"}`}
    >
      <header
        className={`${isDarkMode ? "bg-slate-900" : "bg-gradient-to-r from-slate-900 to-slate-800"} text-white py-12 px-6 md:px-12`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-5xl font-bold mb-2">Wania Akram</h1>
              <p className="text-xl text-slate-300">Undergraduate | Web Developer</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={handleDownloadPDF}
                className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition flex items-center gap-2"
                aria-label="Download resume as PDF"
              >
                <Download size={20} />
                <span className="hidden sm:inline">PDF</span>
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="mailto:waniaakram777@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition">
              <Mail size={18} />
              waniaakram777@gmail.com
            </a>
            <a href="tel:03322200290" className="flex items-center gap-2 hover:text-blue-400 transition">
              <Phone size={18} />
              +92 332 2200290
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              Karachi, Pakistan
            </div>
          </div>
        </div>
      </header>

      <div ref={resumeRef} className={`${isDarkMode ? "bg-slate-950" : "bg-background"}`}>
        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
          {/* Career Objective */}
          <section className="mb-12">
            <h2
              className={`text-2xl font-bold mb-4 pb-2 border-b-2 border-blue-500 ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              Career Objective
            </h2>
            <p className={`text-lg leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
              To secure an employment opportunity with a progressive organization, where I can utilize my professional
              skills and intellectual capabilities on the growth of the organization.
            </p>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2
              className={`text-2xl font-bold mb-4 pb-2 border-b-2 border-blue-500 ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              Education
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                  Intermediate
                </h3>
                <p className={isDarkMode ? "text-slate-400" : "text-slate-600"}>
                  Khatoon-e-Pakistan Girls College, Karachi
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                  Matriculation
                </h3>
                <p className={isDarkMode ? "text-slate-400" : "text-slate-600"}>The City School, Karachi</p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-12">
            <h2
              className={`text-2xl font-bold mb-4 pb-2 border-b-2 border-blue-500 ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              Certifications
            </h2>
            <div className={`${isDarkMode ? "bg-slate-800" : "bg-blue-50"} p-6 rounded-lg`}>
              <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                Artificial Intelligence, Web 3.0 and Metaverse
              </h3>
              <p className={isDarkMode ? "text-slate-400" : "text-slate-600"}>
                Governor Sindh Initiative of IT (GIAIC) (Ongoing)
              </p>
              <h3 className={`text-lg font-semibold mb-2 mt-4 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                Certified Agentic and Robotic AI Engineering
              </h3>
              <p className={isDarkMode ? "text-slate-400" : "text-slate-600"}>
                President Initiative of AI (PIAIC) (Ongoing)
              </p>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-12">
            <h2
              className={`text-2xl font-bold mb-4 pb-2 border-b-2 border-blue-500 ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className={`font-semibold mb-3 ${isDarkMode ? "text-blue-300" : "text-blue-600"}`}>
                  Frontend Development
                </h3>
                <ul className={`space-y-2 ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Proficient in HTML, CSS, JavaScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Experience with TypeScript
                  </li>
                </ul>
              </div>
              <div>
                <h3 className={`font-semibold mb-3 ${isDarkMode ? "text-blue-300" : "text-blue-600"}`}>
                  Backend Development
                </h3>
                <ul className={`space-y-2 ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Experience with Node.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Modern Python
                  </li>
                </ul>
              </div>
              <div>
                <h3 className={`font-semibold mb-3 ${isDarkMode ? "text-blue-300" : "text-blue-600"}`}>
                  AI & Prompt Engineering
                </h3>
                <ul className={`space-y-2 ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    OpenAI SDK Agents
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Prompt Engineering
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Context Engineering
                  </li>
                </ul>
              </div>
              <div>
                <h3 className={`font-semibold mb-3 ${isDarkMode ? "text-blue-300" : "text-blue-600"}`}>
                  Core Competencies
                </h3>
                <ul className={`space-y-2 ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Strong problem-solving and analytical skills
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Excellent communication and teamwork abilities
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-12">
            <h2
              className={`text-2xl font-bold mb-4 pb-2 border-b-2 border-blue-500 ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              Work Experience
            </h2>
            <div className={`${isDarkMode ? "bg-slate-800" : "bg-slate-50"} p-8 rounded-lg text-center`}>
              <p className={`text-lg ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                Seeking an opportunity as a fresh candidate to start my professional career.
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer
            className={`border-t ${isDarkMode ? "border-slate-700 text-slate-400" : "border-slate-200 text-slate-600"} pt-8 mt-12 text-center`}
          >
            <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          </footer>
        </div>
      </div>
    </main>
  )
}
