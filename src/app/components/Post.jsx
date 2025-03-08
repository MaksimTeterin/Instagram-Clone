import { FaRegHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { SlPaperPlane } from "react-icons/sl";
import { FaRegBookmark } from "react-icons/fa";


const Post = ({ post }) => {
return (
    <div className="mx-auto flex justify-center">
        <div>
            <div className="flex justify-between">
                <div className="flex">
                   <img
                    src={post.author.avatarUrl}
                    alt=""
                    className="w-[42px] flex rounded-full border-2 block mb-1"
                />
                <div className="flex justify-between">
                    <p className="text-sm font-[600] content-center mb-[4px] ml-[10px]">{post.author.username}</p>
                </div> 
                </div>
                <div>
                    ...
                </div>
            </div>
            <img
                src={post.imageUrl}
                alt=""
                className="w-[468px] border-2 block mb-1"
            />
            <div className="flex justify-between mt-4">
                <div className="flex justify-between gap-4">
                <FaRegHeart size="24px"/>
                <FiMessageCircle size="24px"/>
                <SlPaperPlane size="24px"/>
                </div>
                <div>
                <FaRegBookmark size="24px"/>
                </div>
            </div>
            <p className="text-sm font-[600] content-center mt-4">{} likes</p>
            <h2>{post.caption.slice(0,10)}</h2>
        </div>
    </div>
);
}
export default Post;