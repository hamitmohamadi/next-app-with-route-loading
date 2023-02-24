import axios from "axios";
import {Typography} from "@mui/material";

import {IPosts} from "@/utils/posts-type";

export async function getServerSideProps() {
    const res = await axios('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.data
    return {
        props: {
            posts
        }
    }
}

type PostsProps = {
    posts: IPosts[]
}


const Posts = ({posts}: PostsProps) => {
    return (
        <>
            {
                posts?.map((post: IPosts) => <Typography variant={'subtitle1'}>{post.title}</Typography>)
            }
        </>
    )
}
export default Posts;