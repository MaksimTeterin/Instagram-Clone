const Post = ({ post }) => {
return (
    <div className="mx-auto flex justify-center">
        <div>
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
            <img
                src={post.imageUrl}
                alt=""
                className="w-[468px] border-2 block mb-1"
            />
            <h2>{post.caption.slice(0,10)}</h2>
        </div>
    </div>
);
}
export default Post;