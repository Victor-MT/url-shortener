export default function NotFoundPage() {
    return (
        <div className="mx-3">
            <div className="flex flex-col w-full justify-center items-center min-h-screen">
                <div className="flex  w-full flex-col max-w-[366px] lg:max-w-[580px] gap-6 rounded-lg px-5 py-12 lg:px-12 lg:py-16 bg-gray-100 text-center">
                    <img className="max-w-[200px] self-center" src={"app/assets/404.svg"}></img>
                    <h1 className="text-xl font-bold text-gray-600">Link não encontrado</h1>
                    <p className="text-md text-gray-500">O link que você está tentando acessar não existe, foi removido ou é uma URL inválida. Saiba mais em <a href="https://brev.ly/" className="text-blue-base underline">brev.ly</a>.</p>
                </div>
            </div>
        </div>
    )
}
