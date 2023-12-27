import React from 'react';
import {Link} from "react-router-dom";
import {FaRegComment, FaUserCircle} from "react-icons/fa";
import {AiFillHeart} from "react-icons/ai";
import {PostProps} from "pages/home";
const posts: PostProps[] = [
    {
        id: "1",
        email: 'test@test.com',
        content: '내용입니다.',
        createdAt: "2023-08-30",
        uid: "123123"
    },
    {
        id: "2",
        email: 'test1@test1.com',
        content: '12내용입니다.',
        createdAt: "2023-08-30",
        uid: "123456"
    },
    {
        id: "3",
        email: 'test1@test1.com',
        content: '12내3용입니다.',
        createdAt: "2023-08-30",
        uid: "12344456"
    },
    {
        id: "4",
        email: 'test4@test1.com',
        content: '12$4내용입니다.',
        createdAt: "2023-08-30",
        uid: "12345655"
    },
    {
        id: "5",
        email: 'test1@test1.com',
        content: '1212내용입니다.',
        createdAt: "2023-08-30",
        uid: "1236"
    }
]
const PostBox = () => {
    const handleDelete = () => {

    }

    return (
        <div className="post">
            {posts?.map((post) => (
                <div className="post__box" key={post.id}>
                    <Link to={`/posts/${post?.id}`}>
                        <div className="post__box-profile">
                            <div className="post__flex">
                                {post?.profileUrl ? (<img src={post?.profileUrl} alt="profile"
                                                          className="post__box-profile-img"
                                    />) :
                                    (<FaUserCircle className='post__box-profile-icon'/>)}
                                <div className="post__email">{post?.email}</div>
                                <div className="post__createdAt">{post?.createdAt}</div>
                            </div>
                            <div className="post__box-content">{post?.content}</div>
                        </div>
                    </Link>
                    <div className="post__box-footer">
                        {/*   post uid === user.uid 일때 */}
                        <>
                            <button type="button" className="post__delete" onClick={handleDelete}>
                                Delete
                            </button>
                            <button type="button" className="post__edit">
                                <Link to={`/post/edit/${post?.id}`}>Edit</Link>
                            </button>
                        </>
                        <button type="button" className="post__likes">
                            <AiFillHeart/>
                            {post?.likeCount || 0}
                        </button>
                        <button type="button" className="post__comments">
                            <FaRegComment/>
                            {post?.comments?.length || 0}
                        </button>
                    </div>
                </div>

            ))}
        </div>
    );
};

export default PostBox;