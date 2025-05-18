import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="w-full border-b bg-white dark:bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-xl font-bold">
              Oddy
            </a>
            <div className="flex items-center space-x-6">
              <nav className="flex items-center space-x-6">
                <a href="#about" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
                  About
                </a>
                <a href="#projects" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
                  Projects
                </a>
                <a href="#contact" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
                  Contact
                </a>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section id="hero" className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-6 h-32 w-32 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            {/* Placeholder for profile image */}
          </div>
          <h1 className="mb-2 text-4xl font-bold">Oddy</h1>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Web Developer | Web Designer | Virtual Assistant | DBM | Java
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="rounded-full bg-gray-200 dark:bg-gray-700 px-3 py-1 text-sm">React</span>
            <span className="rounded-full bg-gray-200 dark:bg-gray-700 px-3 py-1 text-sm">Next.js</span>
            <span className="rounded-full bg-gray-200 dark:bg-gray-700 px-3 py-1 text-sm">WordPress</span>
            <span className="rounded-full bg-gray-200 dark:bg-gray-700 px-3 py-1 text-sm">Java</span>
            <span className="rounded-full bg-gray-200 dark:bg-gray-700 px-3 py-1 text-sm">UI/UX</span>
          </div>
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded bg-blue-600 dark:bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 dark:hover:bg-blue-600"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded border border-gray-300 dark:border-gray-600 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Contact Me
            </a>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">About Me</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Passionate about creating seamless digital experiences, I'm a web developer and virtual assistant with a
              keen eye for design and functionality. I've designed logos and flyers, built various websites and web
              layouts, and earned a certification in virtual assistance.
            </p>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Whether it's web development, design, or administrative support, I love helping businesses and individuals
              bring their ideas to life. Let's connect and create something amazing together!
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              🌱 I'm currently working on "The Gift Of God Foundation" Using WordPress
            </p>
          </div>
        </section>

        <section id="projects" className="py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">Projects</h2>
            <p className="mb-8 text-gray-600 dark:text-gray-400">Check out some of my recent work</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
              <h3 className="mb-2 text-xl font-bold">Briefly</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                A sleek and efficient web app that leverages advanced AI models to generate concise and accurate text
                summaries.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-200 dark:bg-gray-700 px-3 py-1 text-xs">JavaScript</span>
                <span className="rounded-full bg-gray-200 dark:bg-gray-700 px-3 py-1 text-xs">AI</span>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
              <h3 className="mb-2 text-xl font-bold">Portfolio</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Personal portfolio website showcasing my skills, projects, and professional experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-200 dark:bg-gray-700 px-3 py-1 text-xs">Next.js</span>
                <span className="rounded-full bg-gray-200 dark:bg-gray-700 px-3 py-1 text-xs">React</span>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
              <h3 className="mb-2 text-xl font-bold">Learnito</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                A UI prototype for an educational subscription platform offering unlimited access to over 18 million
                creative assets.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-200 dark:bg-gray-700 px-3 py-1 text-xs">UI/UX</span>
                <span className="rounded-full bg-gray-200 dark:bg-gray-700 px-3 py-1 text-xs">Education</span>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
              <h3 className="mb-2 text-xl font-bold">Code-for-change</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Open source project focused on creating technological solutions for social impact.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-200 dark:bg-gray-700 px-3 py-1 text-xs">TypeScript</span>
                <span className="rounded-full bg-gray-200 dark:bg-gray-700 px-3 py-1 text-xs">Open Source</span>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
              <h3 className="mb-2 text-xl font-bold">The Gift Of God Foundation</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                WordPress website for a non-profit organization (currently in development).
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-200 dark:bg-gray-700 px-3 py-1 text-xs">WordPress</span>
                <span className="rounded-full bg-gray-200 dark:bg-gray-700 px-3 py-1 text-xs">Non-Profit</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">Contact Me</h2>
            <p className="mb-8 text-gray-600 dark:text-gray-400">Interested in working together? Let's connect!</p>
            <div className="mb-8">
              <p className="mb-2">
                📧 How to reach me:{" "}
                <a href="mailto:ezurikeodinaka@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  ezurikeodinaka@gmail.com
                </a>
              </p>
              <p className="mb-2">
                🔗 Portfolio:{" "}
                <a
                  href="https://v0-portfolio-beryl-pi.vercel.app"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  v0-portfolio-beryl-pi.vercel.app
                </a>
              </p>
              <p>📍 Lagos, Nigeria</p>
            </div>

            <form className="mx-auto max-w-md">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 dark:bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 dark:hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Oddy. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="https://github.com/Odinaka-123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://x.com/EzurikeOdinaka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/odinakachukwu-ezurike-569a21352/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
