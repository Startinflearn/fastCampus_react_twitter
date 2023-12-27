import React from 'react';
import PostForm from "component/posts/PostForm";
import PostBox from 'component/posts/PostBox';

export interface PostProps {
    id: string;
    email: string;
    content: string;
    createdAt: string;
    uid: string;
    profileUrl?: string;
    likes?: string[];
    likeCount?: number;
    comments?: any;
}


const HomePage = () => {

    return (
        <div className="home">
            <div className="home__title">Home</div>
            <div className="home__tabs">
                <div className="home__tab home__tab--active">For you</div>
                <div className="home__tab">Following</div>
            </div>
            {/* Post Form*/}
            <PostForm/>
            {/*  Tweet Posts  */}
            <PostBox/>
        </div>
    );
};

export default HomePage;