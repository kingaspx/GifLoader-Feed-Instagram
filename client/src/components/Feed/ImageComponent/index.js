import React from 'react';
import { Image, Layout } from './style';

function ImageComponent({source, small_source}) {
    return (
        <Layout>
            <Image src={source} alt="post-image" />
        </Layout>
    );
}

export default ImageComponent;