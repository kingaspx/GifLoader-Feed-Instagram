import React, { useEffect, useState } from 'react';
import { Container, PostContainer, Post } from './style';
import api from 'axios'
import GifPlayer from '../../components/Feed/GifPlayer';
import ImageComponent from '../../components/Feed/ImageComponent';

function Feed() {
    const [feedList, setFeedList] = useState([])

    useEffect(() => {
        async function getFeedData() {
            const { data } = await api.get('http://192.168.15.46:21598/api/list')
            setFeedList(data)
        }

        getFeedData()


        return () => {
            setFeedList([])
        }
    }, [])

    return (
        <Container>

            <PostContainer>
                <ul>
                    {
                        feedList.map((post, position) => {
                            return (
                                <li>
                                    <Post>
                                        <div id="user-info">
                                            <img id="profile-img" src={post.small_source} alt={post.username} />
                                            <div>
                                                <p>
                                                    {post.username}
                                                </p>
                                            </div>
                                        </div>

                                        {
                                            post.source.includes('gif') ? (
                                                <GifPlayer small_source={post.small_source} source={post.source} />
                                            ) : (
                                                    <ImageComponent small_source={post.small_source} source={post.source} />
                                                )
                                        }
                                    </Post>
                                </li>
                            )
                        })
                    }
                </ul>
            </PostContainer>
        </Container>
    );
}

export default Feed;