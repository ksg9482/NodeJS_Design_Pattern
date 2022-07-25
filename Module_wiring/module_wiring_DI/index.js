import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { Blog } from "./blog"
import { createDb } from "./db"

const __dirname = dirname(fileURLToPath(import.meta.url))

async function main () {
    const db = createDb(join(__dirname, 'data.sqlite'))
    // 팩토리 함수 createDb() 사용하여 데이터베이스 종속성을 생성한다.
    const blog = new Blog(db)
    // Blog 클래스를 인스턴스화 할 때, 명시적으로 데이터베이스 인스턴스를 주입한다.
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

