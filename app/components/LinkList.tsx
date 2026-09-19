import { TrashSimpleIcon, CopySimpleIcon, LinkIcon } from "@phosphor-icons/react";
import { useState } from "react";
import IconButton from "./IconButton";

type ShortenedLink = {
    id: string,
    shortCode: string,
    targetUrl: string,
    clicks: number
}
const MOCK_DATA = [
    {
        id: "1",
        targetUrl: "https://example.com",
        shortCode: "abc123",
        clicks: 0,
    },
    {
        id: "2",
        targetUrl: "https://example.co/q121212",
        shortCode: "123",
        clicks: 0,
    },
    {
        id: "3",
        targetUrl: "https://example.com",
        shortCode: "123",
        clicks: 0,
    },
]

function EmptyList() {
    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <LinkIcon className="text-gray-400" size={32} />
            <span className=" text-sm text-gray-400 uppercase"> ainda não existem links cadastrados</span>
        </div>
    )
}


function LinkRow(props: { link: ShortenedLink }) {
    const { link } = props;

    return (
        <>
            <div className="flex justify-between">
                <div className="flex flex-col truncate">
                    <p className="text-md font-semibold text-blue-base truncate">{link.shortCode}</p>
                    <p className="text-sm text-gray-500 truncate">{link.targetUrl}</p>
                </div>
                <div className="flex gap-1 items-center">
                    <span className="text-sm text-gray-500 m-2">{link.clicks} acessos</span>
                    <button>
                        <IconButton className="p-1 gap-8">
                            <CopySimpleIcon size={16} />
                        </IconButton>
                    </button>
                    <button>
                        <IconButton className="p-1 gap-8">
                            <TrashSimpleIcon size={16} />
                        </IconButton>
                    </button>
                </div>
            </div>
            <hr className="border-gray-200" />
        </>
    )
}
export default function LinkList() {
    const [linkList, setLinkList] = useState<ShortenedLink[]>(MOCK_DATA || []);

    return (
        <>
            {linkList.length === 0 && <EmptyList />}
            {linkList.length && (
                linkList.map(link => (
                    <LinkRow link={link}></LinkRow>
                ))
            )}
        </>
    )
}