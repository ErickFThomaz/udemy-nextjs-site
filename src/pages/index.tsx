import {InferGetStaticPropsType} from "next";
import Head from 'next/head'
import Header from '@/components/header'
import Navigation from '@components/navigation'
import {getPostList} from "@shared/utils";
import Link from "next/link";

type PostList = string[]

function Home({posts} : InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
            </Head>
            <main>
                <Navigation/>
                <Header/>
                <h2>Recent Posts</h2>
                {posts.length > 0 && (
                    <ul>
                        {posts.map((value) => (
                           <li key={value}><Link href={`posts/${value}`}>{value.replace(/-/g, ' ')}</Link></li>
                        ))}
                    </ul>
                )}
            </main>
        </>
    )
}

export const getStaticProps = async () => {
    const posts = getPostList()
    return {
        props: {
            posts
        }
    }
}

export default Home
