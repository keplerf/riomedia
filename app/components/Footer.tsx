export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] px-6 lg:px-12 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
        <span>
          rio<span className="text-accent">media</span>
        </span>
        <span>© {new Date().getFullYear()} Rio Media. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-zinc-400 transition-colors">Instagram</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">X</a>
        </div>
      </div>
    </footer>
  );
}
