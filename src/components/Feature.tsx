export function Features() {
    const features = [
      { title: "Seamless Integration", description: "Effortlessly connect AI with blockchain APIs.", icon: "🔗" },
      { title: "Smart Contracts", description: "Automate transactions with secure smart contracts.", icon: "🛡️" },
      { title: "DeFi & Payments", description: "Enable decentralized finance and smooth payments.", icon: "💰" },
    ];
  
    return (
      <section className="relative w-full bg-[#0A0A0A] py-20 text-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
            Key Features
          </h2>
          <p className="text-white/60 mt-4">Unlock powerful capabilities with Base MCP.</p>
  
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white/[0.05] rounded-lg text-center shadow-lg hover:scale-105 transition-transform">
                <span className="text-4xl">{feature.icon}</span>
                <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                <p className="text-white/60 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  