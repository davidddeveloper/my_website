import { useParams, useLocation } from 'react-router-dom'


export default function Blog() {
    const { title, content } = useParams();

    return (
        <div className="bg-darkBlue">
            {
                title ? (
                <div>
                    <h2>{decodeURIComponent(title)}</h2>
                    <p>{decodeURIComponent(content)}</p>
                </div>
                ) : (
                <p>No blogs was found</p>
                )
            }
        </div>
    );
}