import React, { useState } from 'react';
import { Image, Layout, Player } from './style';

function GifPlayer({ source, small_source }) {
    const [isClicked, setIsClicked] = useState(false)

    return (
        <Layout>
            {
                !isClicked ? (
                    <Player>
                        <span onClick={() => setIsClicked(true)}>
                            GIF
                        </span>
                        <img src={small_source} />
                    </Player>
                ) : (
                        <Image src={source} onClick={() => setIsClicked(false)} />
                    )
            }
        </Layout>
    );
}

export default GifPlayer;