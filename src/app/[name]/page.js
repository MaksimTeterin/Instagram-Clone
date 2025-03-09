export default function Page({ params }) {

    const name = params.name;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}