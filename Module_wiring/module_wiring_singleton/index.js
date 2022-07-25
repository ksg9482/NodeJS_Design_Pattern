import { Blog } from "./blog";

async function main () {
    const blog = new Blog()
    await blog.initiolize()
    const posts = await blog.getAllPosts()
    if(posts.length === 0) {
        console.log(
            "No post available. Run `node import-posts.js`" 
            + "to load some sample posts"
        )
    }
    for (const post of posts) {
        console.log(post.title)
        console.log('-'.repeat(post.title.length))
        console.log(`Published on ${new Date(post.created_at).toISOString()}`)
        console.log(post.content)
    }
}

main().catch(console.error)

// blog.getAllposts()를 사용하여 모든 게시물을 가진 배열을 조회한 후, 배열을 루프 돌면서 각 게시물을 출력한다.
// 싱글톤 패턴을 활용하여 db 인스턴스를 전달함으로써 매우 간단한 커맨드 라인 블로그 관리 시스템을 구현 하였다.
// 이것이 많은 경우 어플리케이션의 상태저장 종속성(stateful dependencies)을 관리하는 방법이다.

// 하지만 싱글톤을 사용하는 것이 적절하게 구조화된 해결책을 구현하는데 장애물이 될 수 있다.