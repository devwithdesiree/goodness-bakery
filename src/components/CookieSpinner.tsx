export default function CookieSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-4 gap-2">
      <svg
        className="h-10 w-10 animate-spin-slow drop-shadow-sm"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="40" fill="#D6A673" stroke="#B58963" strokeWidth="4" />
        <circle cx="35" cy="40" r="5" fill="#5C3A21" />
        <circle cx="60" cy="35" r="5" fill="#5C3A21" />
        <circle cx="70" cy="55" r="5" fill="#5C3A21" />
        <circle cx="45" cy="65" r="5" fill="#5C3A21" />
        <circle cx="30" cy="58" r="5" fill="#5C3A21" />
      </svg>

      <p className="text-goodness-chocolate text-sm font-medium">
        Baking your checkout…
      </p>
    </div>
  );
}
