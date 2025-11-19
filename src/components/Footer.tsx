export default function Footer() {
  return (
    <footer className="border-t border-goodness-sugar bg-white/80">
      <div className="max-w-5xl mx-auto px-4 py-6 text-xs text-center text-goodness-chocolate/70">
        <p>© {new Date().getFullYear()} Goodness Cookie. Baked with love.</p>
        <p className="mt-1">
          Small batch, big flavor. Faith-filled treats for cozy moments.
        </p>
      </div>
    </footer>
  );
}
