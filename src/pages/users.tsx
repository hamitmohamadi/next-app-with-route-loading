import axios from "axios";
import {Typography} from "@mui/material";

import {IUsers} from "@/utils/users-type";

export async function getServerSideProps() {
    const res = await axios('https://jsonplaceholder.typicode.com/users')
    const users = await res.data
    return {
        props: {
            users
        }
    }
}

type UsersProps = {
    users: IUsers[]
}


const Users = ({users}: UsersProps) => {
    return (
        <>
            {
                users?.map((user: IUsers) => <Typography variant={'subtitle1'}>{user.name}</Typography>)
            }
        </>
    )
}
export default Users;