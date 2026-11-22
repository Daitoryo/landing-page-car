// Footer Section

export default function Footer() {

    return (

        <footer className="bg-neutral-900 text-neutral-300 py-12 px-[5%] flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex-1 min-w-[250px]">
                <div className="text-2xl font-extrabold text-red-600 mb-2">GT-R</div>
            </div>

            <div className="flex-1 min-w-[250px] text-left md:text-center">
                <p className="text-sm leading-relaxed text-neutral-400">The Nissan GT-R. Copyright 2026</p>
            </div>

            <div className="flex-1 min-w-[250px] md:text-right">
                <h4 className="text-white font-semibold text-base mb-3">Contact Information</h4>
                <ul className="space-y-1 text-sm text-neutral-400">
                    <li>Email: info@nissangtr.com</li>
                    <li>Address: Nishi Ward, Yokohama, Kanagawa, Japan</li>
                </ul>
            </div>
        </footer>

    );
}