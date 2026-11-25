function App() {
  return (
    <div className="min-h-screen flex bg-[#f5f7fb]">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#111b35] text-white min-h-screen p-6">

        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-xl font-bold">
            P
          </div>
          <h1 className="text-xl font-bold">PulseWorks AI</h1>
        </div>

        <nav className="space-y-2">
          {[
            "Dashboard",
            "Projects",
            "Tasks",
            "Team",
            "Reports",
            "Settings",
          ].map((item, index) => (
            <div
              key={item}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition ${
                index === 0
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span>
                {["🏠", "📁", "☑️", "👥", "📊", "⚙️"][index]}
              </span>
              <span>{item}</span>
            </div>
          ))}
        </nav>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">

        {/* TOP BAR */}
        <header className="flex justify-between items-center mb-8">

          <input
            type="text"
            placeholder="Search projects, tasks..."
            className="w-80 bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
          />

          <div className="flex items-center gap-4">
            <button className="bg-white p-3 rounded-xl border">
              🔔
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                P
              </div>

              <div>
                <p className="font-semibold text-slate-800">Yoga Tharshini</p>
                <p className="text-xs text-slate-500">Administrator</p>
              </div>
            </div>
          </div>

        </header>

        {/* WELCOME */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Welcome back, Yoga Tharshini 👋
          </h1>

          <p className="text-slate-500 mt-2">
            Here's what's happening in your workspace today.
          </p>
        </section>

        {/* PLACEHOLDER */}
        <section className="bg-white rounded-2xl p-10 border border-slate-200">
          <h2 className="text-xl font-semibold text-slate-800">
            Dashboard
          </h2>

          <p className="text-slate-500 mt-2">
            Your dashboard layout is ready. We will add the statistics cards next.
          </p>
        </section>

      </main>
    </div>
  );
}

export default App;