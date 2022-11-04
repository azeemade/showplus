export const Search = ({search, handleChange}) => {
    return (
        <>
            <div className="relative">
                <input type="search" name="search" id="search" placeholder="Search ..." value={search} onChange={handleChange}
                    className="text-sm rounded-lg border-neutral-200 border w-full px-1 py-3 bg-neutral-50 placeholder-neutral-500" 
                />
            </div>
        </>
    )
}