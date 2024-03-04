import blogs from '../blogData'
import Post from './Post';

type Blog = {
    title: string,
    date: string,
    content: string,
    slug: string
}

//display all posts

const Posts = () => {
    return (
        <div className="mt-4 md:mt-14 grid md:grid-cols-3 gap-12">
            {
                blogs.map((blog: Blog) => {
                return (
                    <Post {...blog}  />                   
                   );                
                })
             }
        </div>        
    )
}

export default Posts;