import Card from "./Card"

const Results = ({ results }) => {
    return (
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 max-w-full sm:max-w-6xl mx-auto py-4 gap-2">
            {results.map((result) => (
                <Card key={result.id} result={result} />
            ))
            }
        </div>
    )
}

export default Results