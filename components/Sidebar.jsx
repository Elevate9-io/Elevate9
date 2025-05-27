

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50">
                {['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'].map((id, index) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        className="w-14 h-14 flex items-center justify-center bg-white text-black text-sm font-bold rounded hover:bg-gray-300 transition"
                    >
                        {index + 1}
                    </a>
                ))}
                </div>
        </div>
    );
}
