import Link from "next/link";

type PostProps = {
    title: string,
    date: string,
    content: string,
    slug: string
}

// Displays a single blog on Blogs (home) page

const Post : React.FC<PostProps>= ({ title, date, content, slug }) => {
    return (
        <Link href={`/posts/${slug}`}>
            <div className="bg-white rounded overflow-hidden shadow-md p-4 md:p-0">
                <img src={`/images/food.jpg`}  alt="food 1" className="w-full sm:h-48 object-cover"/>
                <div className="m-4">
                        <span className="">{`${date} - 5 min Read`}</span>
                        <h1 className="font-bold mt-3">{title}</h1>
                        <p className="mt-3">{`${content.slice(0,200)}...`}</p>
                </div>
            </div>
        </Link>
    );
};

export default Post;