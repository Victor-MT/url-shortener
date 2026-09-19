import { DownloadSimpleIcon } from "@phosphor-icons/react";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import InputButton from "../components/InputButton";
import LinkList from "../components/LinkList";

function CreateNewLinkWindow() {
    return (
        <div className="flex flex-col w-full max-w-[380px] gap-6 rounded-lg p-8 bg-white">

            <p className="text-lg font-bold text-gray-600">Novo link</p>

            <InputButton title="Link Original" placeholder="https://example.com" />

            <InputButton title="Link Encurtado" placeholder="https://example.com" />

            <Button> Salvar link </Button>
        </div>
    )
}

function ListLinkWindow() {
    return (
        <div className="flex flex-col w-full max-w-[580px] gap-6 rounded-lg p-8 bg-white">
            <div className="flex flex-row justify-between items-center">
                <p className="text-lg font-bold text-gray-600">Meus links</p>
                <IconButton className="px-4 py-2 gap-2">
                    <DownloadSimpleIcon size={16} />
                    <span>Baixar CSV</span>
                </IconButton>
            </div>
            <hr className="border-gray-200" />
            <LinkList />
        </div>
    )
}

export default function HomePage() {
    // call to api
    return (
        <div className="flex flex-col justify-center items-center min-h-screen mx-2">
            <div className="flex w-full justify-center lg:flex-row items-start">
                <div className="lg:w-[980px]">
                    <img className="my-8 self-start" src={'app/assets/Logo.svg'}></img>
                </div>
            </div>
            <div className="flex flex-col w-full justify-center lg:flex-row items-start gap-4">
                <CreateNewLinkWindow />
                <ListLinkWindow />
            </div>
        </div>
    )
}