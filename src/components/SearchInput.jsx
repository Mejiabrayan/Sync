export default function SearchInput({ onSearch }) {
    return (
        <div className="flex items-center justify-center">
        <input
            className="w-64 border rounded-md p-2"
            type="text"
            placeholder="Search..."
            onChange={(e) => onSearch(e.target.value)}
        />
        </div>
    );
    }