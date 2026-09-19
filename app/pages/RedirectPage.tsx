import type { Route } from "./+types/RedirectPage";

export default function RedirectPage({
    params,
}: Route.ComponentProps) {
    const urlId = params.urlId;
    const urlLink = '';
    // call to api

    return (
         <div className="mx-3">
            <div className="flex flex-col w-full justify-center items-center min-h-screen">
                <div className="flex  w-full flex-col max-w-[366px] lg:max-w-[580px] gap-6 rounded-lg px-5 py-12 lg:px-12 lg:py-16 bg-gray-100 text-center">
                    <img className="max-w-[200px] self-center" src={"/app/assets/Logo_Icon.svg"}></img>
                    <h1 className="text-xl font-bold text-gray-600">Redirecionando...</h1>
                    <div>
                        <p className="text-md text-gray-500">O link será aberto automaticamente em alguns instantes.</p>
                        <p className="text-md text-gray-500"> Não foi redirecionado? <a href={urlLink} className="text-blue-base underline">Acesse aqui</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}