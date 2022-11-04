export const Header = ({title}) => {
    return (
        <>
            <header className="h-12 bg-neutral-50 border border-neutral-200 rounded-t-lg py-4 flex justify-center items-center my-4">
                <h2 className="text-neutral-500 font-semibold font-instagram text-2xl">{title}</h2>
            </header>
        </>
    )
}