export default function Features() {

    return(

        <section id="feature" className="bg-slate-100 py-20 px-[5%]">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
                Feature &amp; Specification
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-red-600 text-center hover:-translate-y-1 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                        VR38DETT Engine
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                        The 3.8 Liter twin-turbo V6 engine. Hand assembled by Takumi (The Master Craftsmen), produces more than 565 horsepower
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-red-600 text-center hover:-translate-y-1 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                        AWD ATTESA E-TS
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                        An intelligent all wheel drive system dynamically distributes power for maximum traction in every turn.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-red-600 text-center hover:-translate-y-1 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                        Aerodynamic Design
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                        Engineered to slice through the wind, maximizing downforce while keeping drag remarkably low.
                    </p>
                </div>
            </div>
        </section>

    );
}