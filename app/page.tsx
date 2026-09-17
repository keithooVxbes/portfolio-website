import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { CertificationCard } from "@/components/certification-card"
import { BackgroundSystem } from "@/components/background-system"

export default function Portfolio() {
  return (
    <div className="min-h-screen text-white overflow-hidden bg-transparent">
      <BackgroundSystem />
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mt-4">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
                myoumiaw
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              I identify and fix security vulnerabilities before malicious actors exploit them. Specializing in penetration testing and ethical hacking.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#projects">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-cyan-500 to-emerald-400 border-0">
                  <span className="relative z-10 flex items-center">
                    View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="border-zinc-700 text-cyan-400 hover:text-cyan-300 hover:border-zinc-500"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/keithooVxbes" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/zayyanrif" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:zrifqyab@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container relative z-10">
          <SectionHeading title="About Me" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-emerald-400/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <Image
                  src="/pictures/mypict2.jpeg"
                  alt="Rifqy Zayyan Abdul Basith"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I'm a cybersecurity professional specializing in penetration testing and ethical hacking. I conduct comprehensive security assessments to help organizations identify and remediate vulnerabilities before attackers can exploit them.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  With expertise in network security, web application testing, and social engineering assessments, I combine technical skills with a hacker's mindset to find security flaws. I work with organizations of all sizes to strengthen their security posture and ensure compliance with industry standards.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  When I'm not conducting security assessments, you can find me researching new attack vectors, contributing to the security community, and staying current with emerging threats and defensive techniques.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Rifqy Zayyan Abdul Basith</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">zrifqyab@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Indonesia</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">Open to opportunities</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">Download Resume</Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="container relative z-10">
          <SectionHeading title="My Skills" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="Web App Pentesting" level={95} />
            <SkillBadge name="Next.js" level={80} />
            <SkillBadge name="Python" level={95} />
            <SkillBadge name="Burp Suite" level={92} />
            <SkillBadge name="Metasploit" level={85} />
            <SkillBadge name="Linux/Bash" level={90} />
            <SkillBadge name="Figma" level={80} />
            <SkillBadge name="Bug Hunting" level={90} />
            <SkillBadge name="Vulnerability Assessment" level={90} />
            <SkillBadge name="Nmap/Wireshark" level={95} />
            <SkillBadge name="Public Speaking" level={85} />
            <SkillBadge name="AI Security" level={75} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Local File Inclusion Vulnerability in a School Website"
              description="Comprehensive penetration test of a educational services web application. Identified several vulnerabilities including directory traversal."
              tags={["Burp Suite", "OWASP", "LFI"]}
              image="/ss1.png"
              demoUrl="#"
              repoUrl="#"
            />
            <ProjectCard
              title="How do I find my neighbor's WIFI password?"
              description="Full network penetration test. DISCLAIMER: I'm just trying to practice and I've got permission from my friend's house."
              tags={["Aircrack-ng", "Wireshark"]}
              image="/ss2.png"
              demoUrl="#"
              repoUrl="#"
            />
            <ProjectCard
              title="Redesign Mobile App for My College using Figma"
              description="Redesigned the Single Sign-On (SSO) system for a college website to enhance security and user experience. Implemented OAuth 2.0 and improved session management."
              tags={["UI/UX", "Figma"]}
              image="/ss3.png"
              demoUrl="https://www.figma.com/proto/2AbJOum7lAnEQKlcjaSDWe/Redesign-UI-SSO-UNESA?node-id=64-157&p=f&t=yDuF1s4zGj5m0dWC-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=64%3A157"
              repoUrl="#"
            />
            <ProjectCard
              title="Social Engineering Awareness Simulation"
              description="A controlled phishing simulation project focused on understanding human security risks and improving security awareness."
              tags={["Social Engineering", "Phishing", "OSINT"]}
              image="/ss4.png"
              demoUrl="#"
              repoUrl="#"
            />
            <ProjectCard
              title="Vulnerability Scanning & Assessment"
              description="Automated vulnerability scanning across multiple client environments using industry tools. Prioritized findings by risk level and provided remediation guidance."
              tags={["Nessus", "OpenVAS", "Qualys", "Risk Assessment"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="#"
              repoUrl="#"
            />
            <ProjectCard
              title="PT KPC Internship Website Portal"
              description="Internship recruitment portal for PT Kaltim Prima Coal applicant registration and HR selection management."
              tags={["Fullstack Application"]}
              image="/kpc-website.png"
              demoUrl="https://kpc-internship-portal.vercel.app/"
              repoUrl="#"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="container relative z-10">
          <SectionHeading title="My Experience" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 relative">
        <div className="container relative z-10">
          <SectionHeading title="Certifications" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <CertificationCard
              title="TryHackMe Web Application Pentesting"
              description="Security practice that identifies, tests and helps remediate vulnerabilities in web applications before attackers can exploit them."
              category="Penetration Testing"
              verifyUrl="https://tryhackme.com/certificate/THM-P2RTKN9XSP"
            />
            <CertificationCard
              title="Gemini Certified Student University"
              description="Evidence of basic competency in using Gemini AI to support academic activities, research, and productivity."
              category="AI"
              verifyUrl="https://edu.google.accredible.com/109475ef-a0ad-480f-a88b-17f354d97f90"
            />
            <CertificationCard
              title="Cisco Ethical Hacker"
              description="Training in offensive security to identify and remediate system vulnerabilities before they are exploited by malicious hackers"
              category="Network Security"
              verifyUrl="https://www.credly.com/badges/692aea3b-2434-4b44-ab4c-d714f67cda9a"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">zrifqyab@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/zayyanrif</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/keithooVxbes</div>
                  </div>
                </div>
              </div>


            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 bg-[#080b0d] border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">myou</span>
              <span className="text-white">miaw</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} myoumiaw. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/keithooVxbes" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/zayyanrif" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:zrifqyab@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
