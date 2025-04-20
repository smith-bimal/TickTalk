import { EllipsisVertical, File, Image, Info, Link2, Paperclip, Search, Send, Users, ArrowDown, Settings } from "lucide-react"
import { useRef, useEffect, useState } from "react"
import { demoMessages } from "../helper/demoMessages.js";


const ChatPage = () => {
    const chatMessagesRef = useRef(null);
    const [showGoBottom, setShowGoBottom] = useState(false);

    // Show/hide go to bottom button
    useEffect(() => {
        const handleScroll = () => {
            if (!chatMessagesRef.current) return;
            const { scrollTop, scrollHeight, clientHeight } = chatMessagesRef.current;
            setShowGoBottom(scrollHeight - scrollTop - clientHeight > 100);
        };
        const ref = chatMessagesRef.current;
        if (ref) ref.addEventListener("scroll", handleScroll);
        return () => { if (ref) ref.removeEventListener("scroll", handleScroll); };
    }, []);

    // Always scroll to bottom on mount or when messages change
    useEffect(() => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, []);

    const scrollToBottom = () => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    };

    return (
        <div className="flex bg-[#F5F7FA] w-screen h-screen overflow-hidden">
            {/* Chat List */}
            <section className="flex flex-col w-[450px] border-r border-[#E5E7EB] bg-white">
                <div className="flex flex-col px-4 py-4 gap-4 border-b border-gray-200">
                    <div className="flex justify-center">
                        <img alt="logo text" className="h-8 object-contain" src="../logo-without-img.png" />
                    </div>
                    <div>
                        <input className="w-full rounded-md border border-gray-200 bg-[#F5F7FA] text-gray-500 text-sm placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#0a8ddf]" placeholder="Search" type="search" />
                    </div>
                </div>
                <div className="flex flex-col flex-1 overflow-y-auto chat-list px-0 pt-2 pb-2 space-y-1 text-sm text-gray-600">
                    <div className="flex items-center justify-between uppercase text-xs font-semibold tracking-widest text-gray-400 px-4 mb-1 select-none">
                        <span>ALL CHATS</span>
                        <span className="text-xs bg-gray-100 text-gray-500 rounded-full px-2 py-0.5">
                            39
                        </span>
                    </div>

                    {/* Chat Items */}
                    <div className="flex items-start gap-3 hover:bg-[#F3F6FA] rounded-lg px-4 py-3 transition-colors cursor-pointer">
                        <img alt="Foggy Nelson profile picture" className="w-10 h-10 rounded-full object-cover" src="https://storage.googleapis.com/a1aa/image/59b2c73e-700b-49ae-0cce-4ea408c1d035.jpg" />
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-semibold bg-[#FFF6D6] text-[#B88900] rounded-full px-2 py-[1px] select-none">
                                    Priority
                                </span>
                                <span className="text-xs text-gray-400 ml-auto select-none">
                                    11:41 am
                                </span>
                            </div>
                            <p className="font-semibold text-gray-800 leading-tight">
                                Foggy Nelson
                            </p>
                            <p className="truncate text-xs text-gray-400 leading-tight">
                                Foggy: Hey!, I got a cool name for our new firm. You are going to love this one…
                            </p>
                        </div>
                        <div className="flex flex-col items-end justify-between h-full">
                            <button aria-label="More options" className="text-gray-400 hover:text-gray-600 text-lg cursor-pointer">
                                <EllipsisVertical className="h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 bg-[#E8F0FE] rounded-lg px-4 py-3 transition-colors cursor-pointer">
                        <img alt="Project Domino profile picture" className="w-10 h-10 rounded-full object-cover" src="https://storage.googleapis.com/a1aa/image/18fc36be-35d7-4aa5-a6f2-b6aa61eac14c.jpg" />
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1 flex-wrap">
                                <span className="text-[10px] font-semibold bg-[#FFE2E2] text-[#D14343] rounded-full px-2 py-[1px] select-none">
                                    Work
                                </span>
                                <span className="text-[10px] font-semibold bg-[#FFE2E2] text-[#D14343] rounded-full px-2 py-[1px] select-none">
                                    Expired
                                </span>
                                <span className="text-xs text-gray-400 ml-auto select-none whitespace-nowrap">
                                    10:16 am
                                </span>
                            </div>
                            <p className="font-semibold text-gray-800 leading-tight">
                                Project Domino
                            </p>
                            <p className="truncate text-xs text-gray-400 leading-tight">
                                You: Hey all
                            </p>
                        </div>
                        <div className="flex flex-col items-end justify-between h-full">
                            <button aria-label="More options" className="text-gray-400 hover:text-gray-600 text-lg cursor-pointer">
                                <EllipsisVertical className="h-5" />
                            </button>
                            <div className="bg-[#3f6fef] text-white text-[11px] font-semibold rounded-full px-2 py-[1px] select-none mt-2">
                                3
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 hover:bg-[#F3F6FA] rounded-lg px-4 py-3 transition-colors cursor-pointer">
                        <img alt="Karen Page profile picture" className="w-10 h-10 rounded-full object-cover" src="https://storage.googleapis.com/a1aa/image/54e90027-6381-4045-cbd5-7b7a8b980107.jpg" />
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-semibold bg-[#E6E8FF] text-[#4F5BD5] rounded-full px-2 py-[1px] select-none">
                                    Personal
                                </span>
                                <span className="text-xs text-gray-400 ml-auto select-none">
                                    06:19 pm
                                </span>
                            </div>
                            <p className="font-semibold text-gray-800 leading-tight">
                                Karen Page
                            </p>
                            <p className="truncate text-xs text-gray-400 leading-tight">
                                Karen: Hey Matt! Did you watch the Aquaman movie. It's sooo goood..
                            </p>
                        </div>
                        <div className="flex flex-col items-end justify-between h-full">
                            <button aria-label="More options" className="text-gray-400 hover:text-gray-600 text-lg cursor-pointer">
                                <EllipsisVertical className="h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 hover:bg-[#F3F6FA] rounded-lg px-4 py-3 transition-colors cursor-pointer">
                        <img alt="Product Team profile picture" className="w-10 h-10 rounded-full object-cover" src="https://storage.googleapis.com/a1aa/image/f44709fc-f05f-4648-c0d7-3517dabcb81f.jpg" />
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-semibold bg-[#FFE2E2] text-[#D14343] rounded-full px-2 py-[1px] select-none">
                                    Work
                                </span>
                                <span className="text-[10px] font-semibold bg-[#D2F5E3] text-[#1B9A59] rounded-full px-2 py-[1px] select-none">
                                    Important
                                </span>
                                <span className="text-xs text-gray-400 ml-auto select-none">
                                    10:16 am
                                </span>
                            </div>
                            <p className="font-semibold text-gray-800 leading-tight">
                                Product Team
                            </p>
                            <p className="truncate text-xs text-gray-400 leading-tight">
                                You left
                            </p>
                        </div>
                        <div className="flex flex-col items-end justify-between h-full">
                            <button aria-label="More options" className="text-gray-400 hover:text-gray-600 text-lg cursor-pointer">
                                <EllipsisVertical className="h-5" />
                            </button>
                            <div className="bg-[#3f6fef] text-white text-[11px] font-semibold rounded-full px-2 py-[1px] select-none mt-2">
                                5
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Chat Area */}
            <main className="h-full flex flex-col flex-1 relative bg-white">
                <header className="flex items-center relative z-10 justify-between border-b shadow-sm border-gray-200 px-6 py-4 text-sm font-semibold text-gray-900 select-none">
                    <div className="flex items-center gap-3">
                        <div className="flex -gap-2">
                            <img alt="User avatar 1" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://storage.googleapis.com/a1aa/image/13a03874-4dba-4bfa-dda2-14bab9c46c99.jpg" />
                            <img alt="User avatar 2" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://storage.googleapis.com/a1aa/image/df7b1fc3-a162-4b54-a08d-e50161bf6d47.jpg" />
                            <img alt="User avatar 3" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://storage.googleapis.com/a1aa/image/382e48d6-df0b-4f5d-065e-d2e4e294aa4c.jpg" />
                        </div>
                        <button className="bg-gray-200 text-gray-600 text-xs font-semibold rounded px-3 py-1 select-none ml-2" type="button">
                            Invite
                        </button>
                    </div>
                    <h1 className="text-center flex-1 font-semibold text-gray-900 text-xl">
                        Project Domino
                    </h1>
                    <div className="flex items-center gap-4 text-gray-400 text-2xl">
                        <Search />
                        <Info />
                        <EllipsisVertical />
                    </div>
                </header>

                <div className='flex flex-1 overflow-hidden relative'>
                    <section className="flex-1 flex flex-col h-full relative">
                        <div ref={chatMessagesRef} className='flex-1 overflow-y-auto px-6 py-6 pb-28 space-y-8 chat-messages text-gray-700 text-sm relative'>
                            {/* Render demo messages as per the screenshot */}
                            {demoMessages.map((msg, idx) => {
                                if (msg.divider) {
                                    return (
                                        <div key={idx} className="flex items-center gap-2 my-2">
                                            <div className="flex-1 h-px bg-gray-200" />
                                            <span className="text-[11px] text-gray-400 font-semibold px-2 select-none">{msg.divider}</span>
                                            <div className="flex-1 h-px bg-gray-200" />
                                        </div>
                                    );
                                }
                                return (
                                    <article key={idx} className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2 text-xs text-gray-600 font-semibold select-none">
                                            <img src={msg.avatar} alt={msg.sender} className="w-7 h-7 rounded-full object-cover border border-gray-200" />
                                            <span>{msg.sender}</span>
                                            <span>•</span>
                                            <span>{msg.time}</span>
                                            {msg.edited && <span className="ml-1 text-gray-400 italic">Edited</span>}
                                            <button aria-label="Edit message" className="ml-2 text-gray-400 hover:text-gray-600 text-xs cursor-pointer">
                                                Edit
                                            </button>
                                            <i className="fas fa-check-double ml-1 text-gray-400"></i>
                                        </div>
                                        <div>
                                            <p className="mt-1 leading-relaxed whitespace-pre-line">
                                                {msg.text}
                                            </p>
                                            {msg.code && (
                                                <pre className="bg-[#f6f8fa] border border-gray-200 rounded-md p-3 mt-2 text-xs font-mono overflow-x-auto">
                                                    {msg.code.join('\n')}
                                                </pre>
                                            )}
                                            {msg.images && (
                                                <div className="flex gap-3 mt-3">
                                                    {msg.images.map((img, i) => (
                                                        <div key={i} className="w-[120px] h-[90px] rounded-md border border-gray-200 overflow-hidden relative text-xs text-gray-400 select-none">
                                                            {img.price && (
                                                                <div className="absolute top-2 left-2 bg-white rounded px-1.5 py-[2px] font-semibold text-[10px]">
                                                                    {img.price}
                                                                </div>
                                                            )}
                                                            <img alt={img.label} className="w-full h-full object-cover" src={img.url} />
                                                            <div className="absolute bottom-2 left-2 bg-white rounded px-1.5 py-[2px] font-semibold text-[10px] text-gray-400">
                                                                {img.label}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                            {msg.file && (
                                                <div className="flex items-center gap-2 mt-3 border border-gray-200 rounded-md px-3 py-2 bg-[#f9f9f9] w-fit">
                                                    <File className="w-5 h-5 text-[#3f6fef]" />
                                                    <div>
                                                        <div className="font-semibold text-xs text-gray-700">{msg.file.name}</div>
                                                        <div className="text-[10px] text-gray-400">{msg.file.size}</div>
                                                    </div>
                                                    <button className="ml-2 text-[#0a8ddf] text-xs font-semibold">Click to download</button>
                                                </div>
                                            )}
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                        {/* Go to bottom button */}
                        {showGoBottom && (
                            <button
                                className="fixed bottom-24 right-20 z-20 bg-white border border-gray-300 shadow-lg rounded-full p-2 hover:bg-gray-100 transition"
                                onClick={scrollToBottom}
                                aria-label="Go to bottom"
                            >
                                <ArrowDown className="w-5 h-5 text-[#3f6fef]" />
                            </button>
                        )}

                        {/* Message input */}
                        <div className="absolute bottom-0 left-0 right-0 bg-white">
                            <p className="text-xs text-gray-400 select-none m-2 bg-white">
                                Karen Page is typing...
                            </p>

                            <article className="flex items-center gap-3 border-t border-gray-200 px-6 py-4">
                                <img alt="You profile picture" className="w-8 h-8 rounded-full object-cover" src="https://storage.googleapis.com/a1aa/image/efb9ffcf-fcb2-40a6-99ae-5a5a73c4450f.jpg" />
                                <input className="flex-1 border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#0a8ddf]" placeholder="Write a reply" type="text" />
                                <button aria-label="Attach" className="text-gray-400 hover:text-gray-600 text-lg cursor-pointer" type="button">
                                    <Paperclip />
                                </button>
                                <button aria-label="Send message" className="text-[#0a8ddf] hover:text-[#084a8f] text-lg cursor-pointer" type="button">
                                    <Send />
                                </button>
                            </article>
                        </div>
                    </section>

                    {/* Right sidebar */}
                    <aside className="flex flex-col w-[56px] bg-[#F9F9F9] border-l border-gray-200 text-gray-400 text-xs font-semibold select-none gap-6 pt-8 items-center">
                        <div className="flex flex-col items-center gap-1 hover:text-[#1F2937] transition-all">
                            <Users />
                            <span>99</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 hover:text-[#1F2937] transition-all">
                            <Link2 />
                            <span>2</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 hover:text-[#1F2937] transition-all">
                            <Image />
                            <span>12</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 hover:text-[#1F2937] transition-all">
                            <File />
                            <span>2</span>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    )
}

export default ChatPage